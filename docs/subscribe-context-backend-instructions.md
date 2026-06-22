# 구독 신청 컨텍스트 수집 백엔드 작업 지시서

## 목적

뉴밍 위클리 구독 신청 시 사용자가 모바일에서 신청했는지, PC에서 신청했는지, 어느 구독 UI에서 전환됐는지 분석할 수 있도록 `POST /api/newsletter/subscribers`에 optional 컨텍스트 필드를 추가한다.

프론트는 이미 필드 계산 로직을 준비했지만, 현재 `SUBSCRIBE_CONTEXT_ENABLED = false` 상태라 새 필드를 전송하지 않는다. 백엔드가 배포되면 프론트 플래그를 `true`로 바꿔 재배포할 예정이다.

## 대상 API

`POST /api/newsletter/subscribers`

현재 프론트 기본 payload:

```json
{
  "email": "user@example.com",
  "language": "ko",
  "recaptchaAction": "subscribe",
  "recaptchaToken": "...",
  "consent": true,
  "source": "homepage"
}
```

백엔드 준비 후 추가될 optional payload:

```json
{
  "deviceType": "mobile",
  "formPlacement": "hero",
  "viewportWidth": 390
}
```

## 추가 요청 필드

모든 필드는 optional로 처리한다. 누락되어도 기존 구독 신청이 정상 처리되어야 한다.

| 필드 | 타입 | 허용값/범위 | 설명 |
| --- | --- | --- | --- |
| `deviceType` | string | `mobile`, `tablet`, `desktop`, `unknown` | 프론트 viewport 기준 디바이스 분류 |
| `formPlacement` | string | `hero`, `rail`, `bottom`, `modal`, `mobile_fab`, `unknown` | 구독 전환이 발생한 UI 위치 |
| `viewportWidth` | number/integer | `0` 이상, 권장 상한 `10000` | 제출 시점 브라우저 viewport width |

서버에서 `User-Agent`, IP, referer 등 request header 기반 값도 필요하면 별도 서버 수집 필드로 저장한다. 단, 이메일과 결합되는 개인정보 성격이 있으므로 로그에는 원문 email과 함께 과도하게 남기지 않는다.

## 백엔드 구현 요구사항

1. Request DTO/schema에 위 3개 필드를 optional로 추가한다.
2. unknown field 때문에 기존 요청이 실패하지 않도록 한다.
3. 필드 검증 실패가 구독 신청 실패로 이어지지 않게 한다. 분석 필드는 가능한 한 normalize하거나 `unknown`/`null`로 저장한다.
4. 기존 필수값인 email, consent, recaptcha 관련 검증 로직은 유지한다.
5. 기존 `source` 필드는 계속 받는다. 새 필드로 대체하지 않는다.
6. 신규/기존 subscriber upsert 시 컨텍스트를 저장한다.
7. 재구독/중복 구독 처리 시 최신 컨텍스트를 남길지, 이벤트 로그로 누적할지 정책을 명확히 한다.

## 저장 설계 권장안

전환 분석 목적이면 subscriber row에 마지막 값만 저장하는 것보다 이벤트 테이블 또는 subscription event log에 남기는 편이 좋다.

권장:

```text
newsletter_subscription_events
- id
- subscriber_id
- email_hash 또는 내부 subscriber id
- source
- device_type
- form_placement
- viewport_width
- user_agent
- referer
- created_at
```

subscriber 테이블에 마지막 구독 컨텍스트만 저장해야 한다면:

```text
subscribers
- device_type
- form_placement
- viewport_width
- subscribed_user_agent
- subscribed_referer
- updated_at
```

개인정보/로그 정책상 원문 email은 필요한 테이블에만 저장하고, 분석용 테이블에는 가능하면 내부 id 또는 hash를 사용한다.

## 정규화 규칙

`deviceType`:

```text
mobile | tablet | desktop | unknown
```

허용값 외 값은 `unknown` 또는 `null`.

`formPlacement`:

```text
hero | rail | bottom | modal | mobile_fab | unknown
```

허용값 외 값은 `unknown` 또는 `null`.

`viewportWidth`:

```text
Number.isFinite(value) && value >= 0 && value <= 10000
```

범위를 벗어나면 `null`.

## 응답 형식

기존 성공/실패 응답 형식을 유지한다. 프론트는 새 응답 필드를 필요로 하지 않는다.

예:

```json
{
  "ok": true
}
```

## 테스트 시나리오

1. 기존 payload만 보낸다.
   - 기대: 기존처럼 구독 성공
   - 새 필드: null 또는 기본값

2. 새 optional 필드를 포함해 보낸다.
   - 기대: 구독 성공
   - 저장값: `deviceType`, `formPlacement`, `viewportWidth` 저장

3. 잘못된 optional 값을 보낸다.
   - 예: `deviceType: "watch"`, `viewportWidth: -1`
   - 기대: 구독 자체는 실패하지 않음
   - 저장값: `unknown` 또는 null

4. 중복 email로 다시 신청한다.
   - 기대: 기존 중복 처리 정책 유지
   - 컨텍스트 저장/이벤트 누적 정책대로 반영

5. recaptcha 실패/consent 누락/email invalid.
   - 기대: 기존 실패 처리 유지

## 프론트 연동 완료 조건

백엔드 배포 후 프론트에서 아래 플래그를 켜면 새 필드가 전송된다.

파일: `js/script.js`

```js
const SUBSCRIBE_CONTEXT_ENABLED = true;
```

프론트가 보낼 수 있는 예시:

```json
{
  "email": "user@example.com",
  "language": "ko",
  "recaptchaAction": "subscribe",
  "recaptchaToken": "...",
  "consent": true,
  "source": "homepage",
  "deviceType": "mobile",
  "formPlacement": "mobile_fab",
  "viewportWidth": 390
}
```

## 주의사항

- 이 값은 마케팅/전환 분석용이다. 보안 판단이나 강한 기기 식별에 사용하지 않는다.
- `deviceType`은 user agent가 아니라 viewport width 기준이므로 데스크톱 브라우저를 좁게 쓰면 `mobile`로 잡힐 수 있다.
- `mobile_fab`는 모바일 하단 고정 버튼으로 모달을 연 경우를 의미한다.
- hero/rail 폼은 실제 API 제출 전 모달 동의 절차를 거치므로, 프론트가 원래 진입 위치를 `pendingSubscriptionPlacement`로 보존한다.
