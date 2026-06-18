# 뉴밍 위클리 구독 완료 이메일 템플릿 계획서 및 보고

## 1. 목적

구독 신청 완료 시 백엔드가 구독자 데이터를 치환해 자동 발송할 수 있는 단일 HTML 이메일 템플릿을 제작한다. 이 메일은 신규 구독자가 신청 결과를 즉시 확인하는 관계성 알림 메일이며, 뉴스레터 본문 발송 메일과 달리 프로모션 콘텐츠를 넣지 않는다.

## 2. 리서치 요약

- 레이아웃: 글로벌 이메일 디자인 가이드는 이메일 본문 폭을 600-800px 범위로 권장한다. Figma 시안은 680px 컨테이너와 40px 내부 여백으로 구성되어 있어 이 범위에 맞는다. 단일 컬럼은 짧고 집중된 확인 메일에 적합하다.
- 코드 방식: 이메일 클라이언트 호환성을 위해 테이블 기반 레이아웃, 인라인 CSS, 제한적인 미디어 쿼리를 사용한다. JavaScript, form, iframe, background image는 사용하지 않는다.
- 접근성: 핵심 정보는 이미지가 아니라 실제 텍스트로 제공한다. 본문은 좌측 정렬, 짧은 문단, 충분한 행간, 설명형 링크 텍스트를 사용한다. 현재 템플릿은 외부 이미지가 없어 alt 누락 리스크를 제거했다.
- 수신거부와 주소: 뉴스레터 구독 기반 발송이므로 수신거부 링크, 회사명, 연락처, 물리 주소를 하단에 둔다. 백엔드에서는 HTML 외에도 `List-Unsubscribe` 헤더를 함께 설정하는 것이 좋다.
- 한국 광고성 정보 기준: KISA 2026년 제7차 안내서 기준으로 광고 수신 동의는 모호한 표현을 피해야 하고, 수신 거부 절차도 복잡하게 만들면 안 된다. 이 메일은 신청 완료 확인 메일로 작성했으며, 광고/혜택성 문구는 배제했다.

## 3. Figma 분석 반영

- 대상 노드: `뉴밍 위클리 구독완료 이메일 템플릿`
- 주요 토큰: `#f9fafb`, `#ffffff`, `#333d4b`, `#f2f4f6`, `#8b95a1`, `#b0b8c1`
- 구조: 배경 영역, 680px 흰색 본문 카드, 40px 내부 여백, 28px 타이틀, 16px 본문, 14px 안내, 12-13px 회사 정보
- 접근성 보정: Figma의 `#b0b8c1` 소형 텍스트는 실제 이메일에서 대비가 낮아, 푸터와 보조 정보는 `#697382` 중심으로 조정했다.
- 문구: Figma의 환영/감사/수신함 안내/발신 전용/회사 정보 흐름을 유지하되, 오탈자와 문장 흐름을 다듬었다.

## 4. 산출물

- HTML 템플릿: `email-templates/subscription-complete.html`
- 구성: 외부 CSS/JS 없는 단일 HTML 파일
- 레이아웃: 이메일 클라이언트 호환을 위한 presentation table 기반
- 반응형: 720px 이하에서 전체 폭, 22px 좌우 여백, 제목/본문 크기 보정
- 이미지: 없음

## 5. 백엔드 치환 필드

| 필드 | 필수 | 설명 | 예시 |
| --- | --- | --- | --- |
| `{{subscriber_email}}` | 필수 | 구독 신청을 완료한 이메일 | `user@example.com` |
| `{{subscription_date_kst}}` | 필수 | KST 기준 신청 완료 일시 | `2026년 6월 18일 14:30(KST)` |
| `{{sender_email}}` | 필수 | 주소록 추가 안내에 사용할 발신 주소 | `hello@griplabs.io` |
| `{{unsubscribe_url}}` | 필수 | 원클릭 수신거부 URL | `https://...` |

백엔드 템플릿 엔진이 `{{...}}` 문법을 쓰지 않는다면 발송 직전 해당 엔진의 머지 태그 문법으로 일괄 변환한다.

## 6. 발송 시스템 권장 사항

- Subject: `뉴밍 위클리 구독이 완료되었습니다`
- Preheader: `다음 발행일부터 핵심 뉴스를 메일함으로 보내드릴게요.`
- From: `뉴밍 위클리 <{{sender_email}}>`
- Reply-To: 발신 전용이라면 무응답 주소를 쓰되, 문의 대응 주소는 본문 하단 `hello@griplabs.io`로 유지한다.
- Header: 가능하면 `List-Unsubscribe`와 `List-Unsubscribe-Post: List-Unsubscribe=One-Click`를 설정한다.
- Compliance: 수신거부 URL은 로그인 없이 동작해야 하며, 수신거부 처리 결과가 즉시 또는 지연 없이 저장되어야 한다.
- Deliverability: SPF, DKIM, DMARC, bounce 처리, 발송 도메인 평판 모니터링을 별도로 점검한다.

## 7. QA 체크리스트

- HTML 파일 하나만으로 렌더링되는가
- 외부 CSS, JavaScript, form, iframe이 없는가
- 680px 데스크톱 폭과 모바일 360px 폭에서 본문이 깨지지 않는가
- 모든 필수 머지 필드가 백엔드 데이터로 치환되는가
- `{{unsubscribe_url}}`이 실제 수신거부 페이지로 연결되는가
- 제목, 프리헤더, 본문 첫 문단이 모두 구독 완료 확인 목적과 일치하는가
- 회사명, 주소, 문의 이메일, 수신거부 안내가 하단에 존재하는가
- Gmail, Apple Mail, Outlook 계열에서 테스트 발송을 확인했는가

## 8. 참고 자료

- [Mailchimp Email Design Reference: Layout and Purpose](https://templates.mailchimp.com/design/layout-and-purpose/)
- [WooCommerce Developer Docs: Email HTML Best Practices](https://developer.woocommerce.com/docs/features/email/email-html-best-practices/)
- [Harvard Digital Accessibility Services: Creating Accessible Emails](https://accessibility.huit.harvard.edu/creating-accessible-emails)
- [FTC: CAN-SPAM Act Compliance Guide for Business](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business)
- [KISA: 불법스팸 방지를 위한 정보통신망법 안내서 제7차 개정본](https://www.kisa.or.kr/401/form?postSeq=3608)
