# 뉴밍 뉴스레터 발행본 조회 API

## Base URL
`http://54.116.114.103:8092`

## 인증
현재 인증 없음.  
추후 `X-Api-Key` 방식으로 전환 가능.

## 1. 뉴스레터 목록 조회

`GET /api/newsletter/issues`

### Query
- `limit`: 한 번에 가져올 개수, 기본 20, 최대 100
- `offset`: 시작 위치, 기본 0
- `from`: 시작일, `YYYY-MM-DD`
- `to`: 종료일, `YYYY-MM-DD`

### Example
```bash
GET http://54.116.114.103:8092/api/newsletter/issues?limit=20&offset=0
```

### Response
```json
{
  "ok": true,
  "items": [
    {
      "id": 1,
      "campaignKey": "newming_weekly_20260605",
      "issueDate": "2026-06-05",
      "subject": "뉴스레터 제목",
      "excerpt": "요약 문장",
      "coverImageUrl": "대표 이미지 URL",
      "sentAt": "2026-06-05T...",
      "sentCount": 12000,
      "failedCount": 3
    }
  ],
  "paging": {
    "limit": 20,
    "offset": 0,
    "total": 100,
    "hasMore": true
  }
}
```

## 2. 뉴스레터 상세 조회

`GET /api/newsletter/issues/{id 또는 campaignKey}`

### Example
```bash
GET http://54.116.114.103:8092/api/newsletter/issues/newming_weekly_20260605
```

### Response
```json
{
  "ok": true,
  "item": {
    "id": 1,
    "campaignKey": "newming_weekly_20260605",
    "issueDate": "2026-06-05",
    "subject": "뉴스레터 제목",
    "excerpt": "요약 문장",
    "coverImageUrl": "대표 이미지 URL",
    "html": "<!doctype html>...",
    "text": "텍스트 본문",
    "sentAt": "2026-06-05T..."
  }
}
```

## 게시판 구현 기준
- 목록 화면: `/api/newsletter/issues` 사용
- 상세 화면: `/api/newsletter/issues/{campaignKey}` 사용
- 상세 본문은 `item.html`을 렌더링
- 페이지네이션은 `paging.hasMore`, `limit`, `offset` 기준으로 처리
- CORS 허용됨
