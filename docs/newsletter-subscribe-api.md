# 뉴밍 뉴스레터 구독 신청 API

## Endpoint
`POST https://54-116-114-103.sslip.io/api/newsletter/subscribers`

## 인증
- `X-Api-Key` 필요
- 현재 서버 설정 키:
  - `rXfgknoEwL0DS4i_mmFMBHoA8aqxr1hxZVGj6fiHgfA`

## Request
```bash
curl -X POST 'https://54-116-114-103.sslip.io/api/newsletter/subscribers' \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: rXfgknoEwL0DS4i_mmFMBHoA8aqxr1hxZVGj6fiHgfA' \
  -d '{"email":"user@example.com","nickname":"닉네임","source":"homepage"}'
```

### Body
```json
{
  "email": "user@example.com",
  "nickname": "닉네임",
  "source": "homepage"
}
```

## 구현 주의사항
- 이 `X-Api-Key`를 브라우저 프론트 코드에 직접 넣지 않는다.
- 홈페이지 서버 또는 API 라우트가 대신 호출한다.
- 프런트는 이메일, 닉네임, source만 전달하고 서버가 외부 API를 프록시한다.
