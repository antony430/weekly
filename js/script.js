const NEWSLETTER_API_PATH = "/api/newsletter/issues";
const NEWSLETTER_API_URL = NEWSLETTER_API_PATH;
const SUBSCRIBE_API_PATH = "/api/newsletter/subscribers";
const SUBSCRIBE_API_URL = SUBSCRIBE_API_PATH;
const AUDIENCE_SUMMARY_API_PATH = "/api/newsletter/audience/summary";
const AUDIENCE_SUMMARY_API_URL = AUDIENCE_SUMMARY_API_PATH;
const AUDIENCE_SUMMARY_RANGE_PRESET = "recent_7d";
const RECAPTCHA_SITE_KEY = "6LcCMyItAAAAAAAkbnVH39kn-qzZf_2pUMKupNDm";
const RECAPTCHA_ACTION = "subscribe";
const SUBSCRIBE_CONTEXT_ENABLED = false;
const SUBSCRIBE_API_TIMEOUT_MS = 5000;
const CONSENT_NOTICE_URL =
  "https://sites.google.com/newming.co.kr/weekly/241105-%ED%98%84%EC%9E%AC?authuser=2";
const NEWSLETTER_LIST_LIMIT = 1;
const NEWSLETTER_CARD_LIMIT = 6;
const RSS_ITEM_LIMIT = 5;
const LINE_BREAK_DELIMITER = "||";
const AUTO_RELOAD_FILES = [
  "index.html",
  "404.html",
  "css/styles.css",
  "css/header.css",
  "css/footer.css",
  "css/404.css",
  "js/script.js",
];

const content = {
  ko: {
    brand: "뉴밍 위클리",
    subscribeShort: "무료 구독",
    subscribeCta: "구독하기",
    emailLabel: "이메일 주소",
    deliveryEyebrow: "Newming Weekly",
    deliveryDate: "매주 화요일 아침",
    deliveryStatus: "무료 구독",
    deliveryTitle: "한 주의 핵심 뉴스,||메일 한 통으로.",
    deliveryCopy: "뉴밍 위클리는 흩어진 주요 이슈를 AI가 묶고, ||읽기 좋은 순서로 정리해 메일함으로 보내드립니다.",
    heroEyebrow: "AI 뉴스 브리핑 뉴스레터",
    heroTitle: "뉴밍 위클리",
    heroCopy: "흩어진 주요 이슈를 AI가 묶고, 꼭 필요한 맥락만 골라 매주 이메일로 전해드립니다.",
    privacyNote: "구독 해지는 언제든 가능합니다. 뉴스레터 발송 외 목적으로 사용하지 않습니다.",
    previewMeta: "2026.06.05 · 뉴밍 위클리",
    previewTitle: "선관위원장 사퇴·코스피 급락",
    previewCopy: "선거 관리 문제와 주식시장 급락, 일터 안전, AI 반도체, 청년 빚 문제를 정리했습니다.",
    previewSummaryLabel: "이번 호 요약",
    previewSummaryTitle: "선거 관리 문제·반도체 급락·일터 사고·청년 빚",
    previewSummaryCopy:
      "투표용지가 모자랐던 일로 선관위원장이 물러났습니다. 주식시장은 미국 반도체주 하락에 흔들렸고, 안전과 돈 문제도 함께 이어졌습니다.",
    previewMainLabel: "메인 뉴스",
    previewMainTitle: "투표용지 부족에 선관위원장 사퇴",
    previewMainCopy:
      "서울 일부 투표소에서 투표용지가 모자라 투표가 늦어졌습니다. 결국 선관위원장과 사무총장이 물러났고, 외부 조사단 구성으로 이어졌습니다.",
    phoneKicker: "Inbox preview",
    phoneTitle: "5분 안에 읽는 한 주의 주요 뉴스",
    previewMoreTitle: "더 읽을 뉴스 4개",
    previewMoreOne: "브로드컴 실망감에 코스피 급락",
    previewMoreTwo: "한화 폭발 현장, 위험 물질 사용 확인",
    previewMoreThree: "젠슨 황, 페이커 만난 뒤 대기업 총수 회동",
    previewMoreFour: "청년 빚 문제, 법원 신청 급증",
    statOne: "주요 이슈 5개",
    statOneDesc: "한 주의 흐름을 압축",
    statTwo: "AI 클러스터링",
    statTwoDesc: "여러 기사를 하나의 맥락으로",
    statThree: "무료 구독",
    statThreeDesc: "메일함에서 바로 확인",
    latestEyebrow: "뉴스레터 리스트",
    latestTitle: "최근 도착한 브리핑",
    loadingNewsletters: "뉴스레터 불러오는 중...",
    sortLatest: "최신순",
    viewMore: "전체보기",
    loadMore: "더보기",
    loadingMore: "불러오는 중",
    mobileSubscribeCta: "무료 구독 신청",
    railSubscribeEyebrow: "무료 뉴스레터",
    railSubscribeTitle: "뉴밍 위클리를 받아보세요",
    heroLayerLeftLabel: "클러스터링 뉴스",
    heroLayerLeftTitle: "8개 주요 언론사 기사",
    heroLayerLeftCopy: "같은 흐름을 묶어 읽기 쉽게 정리합니다.",
    heroLayerRightLabel: "뉴스레터 구독자 수",
    heroLayerRightTitle: "13,950명",
    heroLayerRightCopy: "최근 7일 기준",
    freeContent: "추천 무료 콘텐츠",
    newmingNews: "뉴스",
    newsletterCardTitle: "지난 뉴스레터",
    newsletterCardEmpty: "추가 발행본이 등록되면 이곳에 표시됩니다.",
    rssSports: "스포츠",
    rssEntertainment: "연예",
    rssMore: "더보기",
    shareCta: "공유하기",
    valueEyebrow: "왜 뉴밍 위클리인가요",
    valueTitle: "복잡한 뉴스 흐름을||읽기 쉬운 맥락으로",
    valueCopy: "흩어진 기사와 이슈를 뉴스레터 안에서 바로 읽히는 카드형 흐름으로 정리합니다.",
    valueOneTitle: "쉽고 정확한 맥락",
    valueOneCopy: "길고 복잡한 이슈를 이해하기 쉬운 문장과 구조로 정리합니다.",
    valueTwoTitle: "핵심만 모아서",
    valueTwoCopy: "여러 매체에 흩어진 흐름을 한눈에 볼 수 있도록 묶어 보여줍니다.",
    valueThreeTitle: "놓치기 전에 빠르게",
    valueThreeCopy: "한 주의 중요한 변화를 메일함에서 바로 확인할 수 있습니다.",
    valueFourTitle: "메일함에서 바로 읽기",
    valueFourCopy: "별도 앱 설정 없이 한 주간의 주요 이슈만 정리한 내용을 받아봅니다.",
    guideTitle: "한 주의 뉴스를 메일 안에서 바로 읽히는 순서로 정리합니다.",
    formatEyebrow: "Fixed Briefing Format",
    formatTitle: "누구에게나 같은 포맷으로 발송됩니다",
    formatCopy: "개인 설정 없이, 매주 같은 기준과 구조로 정리한 뉴스 브리핑을 받아볼 수 있습니다.",
    formatFrequency: "매주 1회",
    formatLeadTitle: "5분 안에 읽는 한 주의 주요 뉴스",
    formatLeadCopy: "TLDR식 빠른 읽기, Axios식 구조화, Semafor식 관점 분리를 뉴밍 위클리의 고정 포맷으로 정리합니다.",
    formatOneTitle: "핵심 이슈",
    formatOneCopy: "이번 주에 먼저 알아야 할 큰 흐름을 한 문단으로 시작합니다.",
    formatTwoTitle: "맥락 정리",
    formatTwoCopy: "왜 지금 중요한지, 배경과 연결된 흐름을 짧게 붙입니다.",
    formatThreeTitle: "한 줄 결론",
    formatThreeCopy: "읽고 나면 남는 판단 포인트를 짧게 정리합니다.",
    insightEyebrow: "Newming Intelligence",
    insightTitle: "AI가 묶고, 사람이 읽기 좋게 정리한 뉴스",
    insightCopy: "뉴밍의 뉴스 기술을 바탕으로 이슈 클러스터링, 고정 편집 기준, 요약 흐름을 뉴스레터 경험으로 확장합니다.",
    insightOneTitle: "이슈 묶음",
    insightOneCopy: "같은 사건을 다룬 여러 기사를 하나로 묶어 중복 없이 보여줍니다.",
    insightTwoTitle: "고정 편집 기준",
    insightTwoCopy: "개인화 설정 없이도 읽을 가치가 높은 공통 이슈를 선별합니다.",
    insightThreeTitle: "AI 요약",
    insightThreeCopy: "긴 기사 흐름을 짧고 명확한 문장으로 압축합니다.",
    sampleEyebrow: "Sample Newsletter",
    sampleTitle: "메일 안에서는 이런 순서로 읽힙니다.",
    sampleCopy: "핵심 이슈, 맥락, 연결 기사, 더 읽을 뉴스가 하나의 흐름으로 이어지도록 구성합니다.",
    briefingMoreTitle: "더 읽을 뉴스",
    briefingMoreCopy: "함께 보면 좋은 후속 이슈를 짧게 이어 붙여 한 주의 감을 잡게 합니다.",
    sampleCta: "이런 뉴스레터 받아보기",
    sampleTag: "이번 주 브리핑",
    sampleCardTitle: "정치, 경제, 사회 이슈가 만나는 지점",
    samplePointOne: "오늘의 주요 이슈 5개",
    samplePointOneCopy: "한 주간 가장 많이 이어진 이슈를 먼저 스캔합니다.",
    samplePointTwo: "왜 중요한가",
    samplePointTwoCopy: "단순 요약을 넘어 배경과 이해 포인트를 붙입니다.",
    samplePointThree: "한 줄 결론",
    samplePointThreeCopy: "뉴스를 읽고 남겨야 할 판단 포인트를 정리합니다.",
    stepsEyebrow: "How it works",
    stepsTitle: "간단하게 구독하고 바로 받아보세요",
    stepOneTitle: "이메일 입력",
    stepOneCopy: "받아볼 이메일 주소만 남기면 됩니다.",
    stepTwoTitle: "주요 뉴스 선별",
    stepTwoCopy: "뉴밍이 중요한 이슈 흐름을 골라 정리합니다.",
    stepThreeTitle: "메일함 수신",
    stepThreeCopy: "읽기 좋은 뉴스레터로 한 주를 시작합니다.",
    bottomEyebrow: "무료 구독",
    bottomTitle: "다음 브리핑도 메일함으로 받아보세요.",
    bottomHeadlineOne: "복잡한 뉴스는 덜어내고,",
    bottomHeadlineTwo: "한 주의 핵심만 남깁니다. 읽기 쉬운",
    bottomHeadlineThree: "브리핑으로 메일함에 보내드려요.",
    bottomEmailPrompt: "이메일을 입력해 주세요.",
    consentPrivacy: "이메일 주소 수집 및 이용",
    consentPrivacySuffix: "에 동의합니다. (필수)",
    consentMarketing: "뉴스레터 수신 및 광고성 정보 수신",
    consentMarketingSuffix: "에 동의합니다. (필수)",
    consentCombined: "개인정보 수집 및 광고성 정보 수신 동의",
    consentRequiredSuffix: "(필수)",
    consentLabel: "필수 동의 항목을 확인해주세요.",
    bottomSubmit: "뉴밍 위클리 구독하기",
    footerBrand: "Newming Weekly",
    footerCopy: "주식회사 그립랩스가 제공하는 뉴스 브리핑 뉴스레터입니다.",
    footerCompanyName: "주식회사 그립랩스",
    footerNewming: "뉴밍",
    footerGrip: "그립랩스",
    footerPrivacy: "개인정보처리방침",
    footerCompanyLine1: "사업자등록번호 : 348-86-01356 | 대표 : 김석환 · 인터넷뉴스서비스사업 등록번호 : 서울 자60122",
    footerCompanyLine2:
      "통신판매업 신고번호 : 2022-서울영등포-0291 사업자정보확인 서울특별시 영등포구 국회대로70길 23, 7층(여의도동, 용산빌딩) 이메일 : hello@griplabs.io",
    footerCompanyLine2Prefix: "통신판매업 신고번호 : 2022-서울영등포-0291",
    footerBizCheck: "사업자정보확인",
    footerCompanyLine2Suffix: "서울특별시 영등포구 국회대로70길 23, 7층(여의도동, 용산빌딩) 이메일 : hello@griplabs.io",
    footerYouth: "청소년 보호정책(책임자 : 윤여진)",
    footerTerms: "이용약관",
    footerPrivacyLink: "개인정보 처리 방침",
    footerIP: "저작권 안내",
    footerCopyright: "© 2026 Grip Labs Inc.",
    copyrightTitle: "뉴밍 위클리 저작권 안내",
    copyrightCopy1: "뉴밍 위클리에 포함된 기사와 이미지의 저작권은 각 권리자에게 있으며, 무단전재와 재배포를 금합니다.",
    copyrightCopy2:
      "본사의 허락 없이 기사 전문을 인터넷에 게시하는 행위는 무단전재에 해당하며, 상업적·비상업적 이용을 불문하고 권리자의 허락이 필요합니다.",
    copyrightCopy3:
      "기사 일부와 함께 뉴밍 위클리 웹 링크 또는 뉴밍 웹사이트로 연결되는 링크를 함께 공유하는 방식은 허용될 수 있습니다.",
    copyrightCopy4: "위 내용은 저작권법에 따라 보호되며, 침해 시 관련 법령에 따른 책임이 발생할 수 있습니다.",
    modalEyebrow: "뉴밍 위클리 무료 구독",
    modalTitle: "최신 뉴스레터를 이메일로 받아보세요",
    consentLabel: "필수 동의 항목을 확인해주세요.",
    success: "구독 신청이 접수되었습니다.",
    submitting: "처리 중...",
    invalidEmail: "올바른 이메일 주소를 입력해주세요.",
    subscribeError: "구독 신청자가 많아, 잠시 후 다시 신청해주세요.",
    recaptchaError: "보안 확인을 완료하지 못했습니다. 잠시 후 다시 시도해주세요.",
    recaptchaNoticePrefix: "이 사이트는 reCAPTCHA로 보호되며 Google",
    recaptchaPrivacy: "개인정보처리방침",
    recaptchaNoticeMiddle: "및",
    recaptchaTerms: "서비스 약관",
    recaptchaNoticeSuffix: "이 적용됩니다.",
    copied: "링크가 복사되었습니다.",
    copyFailed: "복사에 실패했습니다. 주소창의 링크를 복사해주세요.",
    totalCount: "총 {count}건",
    rssFallback: "뉴밍에서 오늘의 주요 뉴스를 확인하세요.",
  },
  en: {
    brand: "Newming Weekly",
    subscribeShort: "Subscribe",
    subscribeCta: "Subscribe",
    emailLabel: "Email address",
    deliveryEyebrow: "Newming Weekly",
    deliveryDate: "Every Tuesday morning",
    deliveryStatus: "Free",
    deliveryTitle: "The week's key news,||in one email.",
    deliveryCopy: "Newming Weekly uses AI to group scattered stories ||and deliver them in a clear reading order.",
    heroEyebrow: "AI news briefing newsletter",
    heroTitle: "Newming Weekly",
    heroCopy: "A weekly email briefing that groups scattered news into clear context and highlights what matters.",
    privacyNote: "Unsubscribe anytime. Your email is used only for newsletter delivery.",
    previewMeta: "Jun 05, 2026 · Newming Weekly",
    previewTitle: "Election chief resigns · KOSPI drops",
    previewCopy: "Election management, market losses, workplace safety, AI chips, and youth debt in one issue.",
    previewSummaryLabel: "Issue summary",
    previewSummaryTitle: "Election fallout · chip slump · workplace accident · youth debt",
    previewSummaryCopy:
      "A ballot shortage led to the election chief's resignation. Korean markets were shaken by US chip weakness, while safety and debt concerns continued.",
    previewMainLabel: "Main story",
    previewMainTitle: "Election chief resigns after ballot shortage",
    previewMainCopy:
      "Voting was delayed at some Seoul polling stations after ballots ran short. The election chief and secretary general resigned, and an outside investigation followed.",
    phoneKicker: "Inbox preview",
    phoneTitle: "The week's major news in about 5 minutes",
    previewMoreTitle: "4 more stories",
    previewMoreOne: "Broadcom disappointment pulls KOSPI lower",
    previewMoreTwo: "Hazardous materials confirmed at Hanwha blast site",
    previewMoreThree: "Jensen Huang meets Korean business chiefs after Faker event",
    previewMoreFour: "Youth debt filings rise in court",
    statOne: "5 key issues",
    statOneDesc: "The week, condensed",
    statTwo: "AI clustering",
    statTwoDesc: "Multiple stories, one context",
    statThree: "Free subscription",
    statThreeDesc: "Delivered to your inbox",
    latestEyebrow: "Newsletter archive",
    latestTitle: "Recently delivered briefings",
    loadingNewsletters: "Loading newsletters...",
    sortLatest: "Latest",
    viewMore: "View all",
    loadMore: "More",
    loadingMore: "Loading",
    mobileSubscribeCta: "Subscribe for free",
    railSubscribeEyebrow: "Free newsletter",
    railSubscribeTitle: "Get Newming Weekly",
    heroLayerLeftLabel: "Clustering news",
    heroLayerLeftTitle: "8 stories from major outlets",
    heroLayerLeftCopy: "Grouped by the same flow for easier reading.",
    heroLayerRightLabel: "Newsletter subscribers",
    heroLayerRightTitle: "13,950",
    heroLayerRightCopy: "Recent 7 days",
    freeContent: "Recommended free content",
    newmingNews: "News",
    newsletterCardTitle: "Previous newsletters",
    newsletterCardEmpty: "Additional issues will appear here when they are published.",
    rssSports: "Sports",
    rssEntertainment: "Entertainment",
    rssMore: "More",
    shareCta: "Share",
    valueEyebrow: "Why Newming Weekly",
    valueTitle: "Clear context||for complex news cycles",
    valueCopy: "Scattered articles and issues are organized into a card-like flow that reads naturally inside the newsletter.",
    valueOneTitle: "Easy, accurate context",
    valueOneCopy: "Long and complex issues are edited into readable structure.",
    valueTwoTitle: "Only what matters",
    valueTwoCopy: "Scattered stories are grouped so the bigger picture is easier to scan.",
    valueThreeTitle: "Timely delivery",
    valueThreeCopy: "Important weekly shifts arrive directly in your inbox.",
    valueFourTitle: "Read from your inbox",
    valueFourCopy: "No extra app setup. Receive the same familiar email experience every week.",
    guideTitle: "The week is organized in the order it should be read inside the email.",
    formatEyebrow: "Fixed Briefing Format",
    formatTitle: "One fixed format for every subscriber",
    formatCopy: "No personalization settings. Newming Weekly uses the same criteria and structure every week.",
    formatFrequency: "Once a week",
    formatLeadTitle: "The week's major news in about 5 minutes",
    formatLeadCopy: "Fast scanning, structured context, and separated viewpoints are adapted into Newming Weekly's fixed format.",
    formatOneTitle: "Key issues",
    formatOneCopy: "Start with the biggest flow readers need to know this week.",
    formatTwoTitle: "Context",
    formatTwoCopy: "Add why it matters now, with the background and connected shifts.",
    formatThreeTitle: "One-line takeaway",
    formatThreeCopy: "A short judgment point closes each briefing.",
    insightEyebrow: "Newming Intelligence",
    insightTitle: "AI groups the news. Editors make it readable.",
    insightCopy: "Newming Weekly extends issue clustering, fixed editorial criteria, and summarization into a focused email experience.",
    insightOneTitle: "Issue grouping",
    insightOneCopy: "Related articles about the same event are grouped without repetition.",
    insightTwoTitle: "Fixed editorial criteria",
    insightTwoCopy: "Common high-value issues are selected without per-user customization.",
    insightThreeTitle: "AI summaries",
    insightThreeCopy: "Long news cycles are compressed into short, clear takeaways.",
    sampleEyebrow: "Sample Newsletter",
    sampleTitle: "Inside the email, the order stays simple.",
    sampleCopy: "Key issue, context, connected articles, and extra reads are arranged as one continuous flow.",
    briefingMoreTitle: "More to read",
    briefingMoreCopy: "Follow-up issues are added briefly so readers can understand the week at a glance.",
    sampleCta: "Get this newsletter",
    sampleTag: "Weekly briefing",
    sampleCardTitle: "Where politics, economy, and society meet",
    samplePointOne: "Five key issues of the day",
    samplePointOneCopy: "Scan the stories that shaped the week first.",
    samplePointTwo: "Why it matters",
    samplePointTwoCopy: "Go beyond summary with the background and context.",
    samplePointThree: "One-line takeaway",
    samplePointThreeCopy: "Close with the judgment point worth remembering.",
    stepsEyebrow: "How it works",
    stepsTitle: "Subscribe once and read comfortably",
    stepOneTitle: "Enter email",
    stepOneCopy: "Leave the email address where you want to receive it.",
    stepTwoTitle: "News selection",
    stepTwoCopy: "Newming selects and organizes major news flows.",
    stepThreeTitle: "Inbox delivery",
    stepThreeCopy: "Start the week with a readable briefing.",
    bottomEyebrow: "Free subscription",
    bottomTitle: "Get the next briefing in your inbox.",
    bottomHeadlineOne: "Skip the noise.",
    bottomHeadlineTwo: "Keep the week's essentials.",
    bottomHeadlineThree: "Get a clear briefing in your inbox.",
    bottomEmailPrompt: "Enter your email.",
    consentPrivacy: "Collection and use of my email address",
    consentPrivacySuffix: " (Required)",
    consentMarketing: "Newsletter and promotional emails",
    consentMarketingSuffix: " (Required)",
    consentCombined: "Consent to personal information collection and promotional emails",
    consentRequiredSuffix: "(Required)",
    consentLabel: "Please confirm the required consent item.",
    bottomSubmit: "Subscribe to Newming Weekly",
    footerBrand: "Newming Weekly",
    footerCopy: "A news briefing newsletter provided by Grip Labs Inc.",
    footerCompanyName: "Grip Labs Inc.",
    footerNewming: "Newming",
    footerGrip: "Griplabs",
    footerPrivacy: "Privacy Policy",
    footerCompanyLine1:
      "Business registration number: 348-86-01356 · CEO: Kim Seok-hwan · Internet news service registration number: Seoul Ja-60122",
    footerCompanyLine2:
      "Mail-order business registration: 2022-Seoul-Yeongdeungpo-0291 · Business info verification · 7F, 23 Gukhoe-daero 70-gil, Yeongdeungpo-gu, Seoul, Korea · hello@griplabs.io",
    footerCompanyLine2Prefix: "Mail-order business registration number: 2022-Seoul-Yeongdeungpo-0291",
    footerBizCheck: "Business info verification",
    footerCompanyLine2Suffix: "7F, 23 Gukhoe-daero 70-gil, Yeongdeungpo-gu, Seoul, Korea · hello@griplabs.io",
    footerYouth: "Youth Protection Policy (Officer: Yoon Yeo-jin)",
    footerTerms: "Terms of Service",
    footerPrivacyLink: "Privacy Policy",
    footerIP: "Copyright notice",
    footerPrinciple: "Article selection policy",
    footerCopyright: "© 2026 Grip Labs Inc.",
    copyrightTitle: "Newming Weekly copyright notice",
    copyrightCopy1:
      "The copyright for articles and images included in Newming Weekly belongs to the respective rights holders. Unauthorized reproduction and redistribution are prohibited.",
    copyrightCopy2:
      "Publishing the full text of an article on the internet without our permission is considered unauthorized reproduction, and permission from the rights holder is required regardless of commercial or non-commercial use.",
    copyrightCopy3:
      "Sharing a portion of an article together with a Newming Weekly web link or a link that leads to the Newming website may be permitted.",
    copyrightCopy4:
      "The above is protected under copyright law, and infringement may result in liability under applicable laws.",
    modalEyebrow: "Subscribe to Newming Weekly",
    modalTitle: "Get the latest issues by email",
    consentLabel: "Please confirm the required consent item.",
    success: "Your subscription request has been received.",
    submitting: "Processing...",
    invalidEmail: "Please enter a valid email address.",
    subscribeError: "Subscription requests are busy right now. Please try again shortly.",
    recaptchaError: "We could not complete the security check. Please try again shortly.",
    recaptchaNoticePrefix: "This site is protected by reCAPTCHA and the Google",
    recaptchaPrivacy: "Privacy Policy",
    recaptchaNoticeMiddle: "and",
    recaptchaTerms: "Terms of Service",
    recaptchaNoticeSuffix: "apply.",
    copied: "Link copied.",
    copyFailed: "Copy failed. Please copy the address from the browser.",
    totalCount: "{count} issues",
    rssFallback: "Read today's major news on Newming.",
  },
};

const policyDocuments = {
  terms: {
    href: "https://sites.google.com/newming.co.kr/weekly-terms",
    ko: {
      kicker: "뉴밍 위클리",
      title: "뉴밍 위클리 이용약관",
      updated: "시행일: 2026년 6월 17일",
      linkTitle: "전체 약관 보기",
      sections: [
        {
          title: "제 1조 (목적)",
          copy: "주식회사 그립랩스가 제공하는 뉴밍 위클리 뉴스레터 서비스의 이용 조건, 회사와 구독자의 권리·의무 및 서비스 이용 절차를 정합니다.",
        },
        {
          title: "제 2조 (서비스의 제공)",
          copy: "뉴밍 위클리는 주요 뉴스와 이슈를 선별·요약·편집해 이메일 뉴스레터로 발송합니다. 발행 주기, 구성, 이미지, 링크 및 제공 방식은 운영 상황에 따라 변경될 수 있습니다.",
        },
        {
          title: "제 5조 (광고성 정보 및 광고의 게재)",
          copy: "서비스 운영과 발행 지속성을 위해 뉴스레터 본문, 제목, 이미지, 버튼, 배너, 영상, 링크 등에 광고성 정보나 제휴 콘텐츠가 포함될 수 있습니다.",
        },
        {
          title: "제 6조 (수신거절 및 구독 해지)",
          copy: "이용자는 뉴스레터 하단의 수신거절 링크 또는 회사가 안내하는 방법을 통해 언제든지 구독을 해지할 수 있습니다.",
        },
      ],
    },
    en: {
      kicker: "Newming Weekly",
      title: "Newming Weekly Terms of Service",
      updated: "Effective date: June 17, 2026",
      linkTitle: "View full terms",
      sections: [
        {
          title: "Article 1 (Purpose)",
          copy: "These terms define the basic conditions, rights, obligations, and procedures for using the Newming Weekly newsletter service provided by Grip Labs Inc.",
        },
        {
          title: "Article 2 (Service)",
          copy: "Newming Weekly selects, summarizes, and edits major news and issues into an email newsletter. The publishing schedule, format, images, links, and delivery method may change depending on service operations.",
        },
        {
          title: "Article 5 (Advertising Information)",
          copy: "To support service operations and publishing, newsletters may include promotional information or sponsored content such as text, images, buttons, banners, videos, and links.",
        },
        {
          title: "Article 6 (Unsubscribe)",
          copy: "Subscribers may unsubscribe at any time through the unsubscribe link in the newsletter or other methods provided by the company.",
        },
      ],
    },
  },
  privacy: {
    href: "https://sites.google.com/newming.co.kr/privacy-policy",
    ko: {
      kicker: "뉴밍 위클리",
      title: "뉴밍 위클리 개인정보처리방침",
      updated: "시행일: 2026년 6월 17일",
      linkTitle: "전체 개인정보처리방침 보기",
      sections: [
        {
          title: "제 2조 (수집하는 개인정보 항목 및 수집 방법)",
          copy: "뉴밍 위클리는 뉴스레터 구독을 위해 이메일 주소를 필수 항목으로 수집합니다. 이름, 전화번호, 주소, 생년월일 등은 필수로 수집하지 않습니다.",
        },
        {
          title: "제 3조 (개인정보의 수집 및 이용 목적)",
          copy: "수집한 이메일 주소는 뉴스레터 발송, 구독 상태 관리, 수신거절 처리, 서비스 운영 안내 및 부정 이용 방지를 위해 사용됩니다.",
        },
        {
          title: "제 4조 (개인정보의 보유 및 이용 기간)",
          copy: "구독이 유지되는 동안 이메일 주소를 보유하며, 수신거절 또는 구독 해지 시 발송 대상에서 제외합니다.",
        },
        {
          title: "제 8조 (이용자의 권리와 행사 방법)",
          copy: "이용자는 언제든지 개인정보 열람, 정정, 삭제, 처리정지 또는 동의 철회를 요청할 수 있습니다.",
        },
      ],
    },
    en: {
      kicker: "Newming Weekly",
      title: "Newming Weekly Privacy Policy",
      updated: "Effective date: June 17, 2026",
      linkTitle: "View full privacy policy",
      sections: [
        {
          title: "Article 2 (Personal Information Collected)",
          copy: "Newming Weekly collects an email address as the required item for newsletter subscription. Name, phone number, address, and birth date are not required.",
        },
        {
          title: "Article 3 (Purpose of Use)",
          copy: "The collected email address is used to send newsletters, manage subscription status, process unsubscribe requests, provide service notices, and prevent abuse.",
        },
        {
          title: "Article 4 (Retention Period)",
          copy: "The email address is retained while the subscription remains active and is excluded from the mailing list after unsubscribe or cancellation.",
        },
        {
          title: "Article 8 (User Rights)",
          copy: "Users may request access, correction, deletion, suspension of processing, or withdrawal of consent at any time.",
        },
      ],
    },
  },
};

const consentNoticeDocument = {
  href: CONSENT_NOTICE_URL,
  ko: {
    kicker: "뉴밍 위클리 구독 동의",
    title: "개인정보 수집 및 광고성 정보 수신 동의",
    copy:
      "뉴스레터 발송을 위한 최소한의 개인정보를 수집하고, 뉴스 콘텐츠와 광고·마케팅 정보를 이메일로 함께 발송할 수 있습니다.",
    sourceTitle: "전체 동의 안내 보기",
    sourceUrlLabel: "sites.google.com/newming.co.kr/weekly",
    items: [
      {
        label: "광고성 정보 매체",
        value: "이메일",
      },
      {
        label: "관련 법령",
        value: "개인정보 보호법 제22조 제4항, 제39조의3, 정보통신망법 제50조 등",
      },
      {
        label: "처리 목적",
        value: "뉴밍 위클리 서비스 및 제휴사의 상품·서비스에 대한 광고, 홍보, 프로모션 제공",
      },
      {
        label: "처리 항목",
        value: "이메일 주소",
      },
      {
        label: "이용 및 보유기간",
        value: "동의 철회 또는 구독 취소 시까지",
      },
      {
        label: "제3자 제공 안내",
        value:
          "광고성 정보 수신 동의는 뉴스레터 발행 시 뉴스 콘텐츠와 광고·마케팅 정보를 이메일로 수신하는 것에 대한 동의입니다. 제휴사에 개인정보를 제공하는 경우에는 별도의 동의를 받습니다.",
      },
      {
        label: "동의 거부 안내",
        value:
          "뉴밍 위클리에서는 광고성 정보 수신 동의가 필수 사항이며, 동의하지 않을 경우 서비스 이용이 제한될 수 있습니다. 뉴스레터 하단의 구독 취소를 통해 언제든지 수신 거부 또는 철회할 수 있습니다.",
      },
    ],
  },
  en: {
    kicker: "Newming Weekly subscription consent",
    title: "Consent to personal information collection and promotional emails",
    copy:
      "Newming Weekly collects the minimum personal information needed to send the newsletter and may send news content together with advertising or marketing information by email.",
    sourceTitle: "View full consent notice",
    sourceUrlLabel: "sites.google.com/newming.co.kr/weekly",
    items: [
      {
        label: "Promotional channel",
        value: "Email",
      },
      {
        label: "Applicable laws",
        value:
          "Personal Information Protection Act Articles 22(4) and 39-3, Act on Promotion of Information and Communications Network Utilization and Information Protection Article 50, and related laws",
      },
      {
        label: "Purpose of processing",
        value:
          "Advertising, promotion, and marketing offers for Newming Weekly and partner products or services",
      },
      {
        label: "Processed item",
        value: "Email address",
      },
      {
        label: "Retention and use period",
        value: "Until consent is withdrawn or the subscription is canceled",
      },
      {
        label: "Third-party provision notice",
        value:
          "This consent covers receiving newsletter content together with advertising or marketing information by email. If personal information is provided to a partner, separate consent will be requested.",
      },
      {
        label: "Refusal notice",
        value:
          "Consent to promotional emails is required for Newming Weekly. If you do not agree, use of the service may be restricted. You may unsubscribe or withdraw consent at any time through the unsubscribe link at the bottom of the newsletter.",
      },
    ],
  },
};

const LEGACY_NEWSLETTER_DATA_URL = "assets/legacy-newsletters.json";
const DAILY_NEWSLETTER_CACHE_KEY = "newming-weekly-daily-latest";
const RSS_CACHE_KEY_PREFIX = "newming-weekly-rss";
const NEWSLETTER_LOADING_MIN_MS = 700;
const NEWSLETTER_API_TIMEOUT_MS = 3000;
const ISSUE_MODAL_OPEN_DURATION_MS = 460;
const ISSUE_MODAL_CLOSE_DURATION_MS = 190;

let legacyNewsletters = [];
let dailyNewsletter = null;
let newsletters = [];
let newsletterFeatured = null;
let recaptchaLoaderPromise = null;
let pendingSubscriptionEmail = "";
let pendingSubscriptionPlacement = "";
let issueModalCloseTimer = null;
let issueModalToastTimer = null;

const rssSources = {
  sports: {
    url: "https://rss.newming.io/스포츠/rss.xml",
    pageUrl: "https://newming.io/스포츠",
    items: [
      {
        title: {
          ko: "인도 뉴델리 공항서 강풍으로 장비 충돌, 항공기 3대 손상",
          en: "Strong winds damage three aircraft at New Delhi airport",
        },
        desc: {
          ko: "강한 비바람으로 지상 장비가 항공기와 충돌했습니다.",
          en: "Ground equipment collided with aircraft during severe winds.",
        },
        image: "https://cdn.newming.io/news/sc/2026061001000652000040191.webp",
        link: "https://newming.io/news-block/d58033dfead051e385cddf25db997086",
      },
      {
        title: {
          ko: "베다트 무리키, 페네르바체 1500만유로 이적 거의 확정",
          en: "Vedat Muriqi nears Fenerbahce transfer",
        },
        desc: {
          ko: "마요르카 공격수의 튀르키예 복귀가 가까워졌습니다.",
          en: "The Mallorca striker is close to returning to Turkey.",
        },
        image: "https://cdn.newming.io/news/sc/2026061001000647300040002.webp",
        link: "https://newming.io/news-block/d42f561b36cb5ba697097fd94ffa7039",
      },
      {
        title: {
          ko: "골프 레슨, 뇌과학 기반 신경가소성 훈련으로 전환",
          en: "Golf coaching shifts toward neuroplasticity training",
        },
        desc: {
          ko: "감각 학습과 압박 상황 훈련이 골프 코칭의 키워드로 떠올랐습니다.",
          en: "Sensory learning and pressure training are becoming key coaching ideas.",
        },
        image: "https://cdn.newming.io/news/mk/news-p.v1.20260610.1b6ddc93a3314241997050bd6a2545f2_P1.webp",
        link: "https://newming.io/news-block/ee0a166a50875b169cde0587a8dd3519",
      },
      {
        title: {
          ko: "일본, 2026 북중미월드컵 ESPN 파워랭킹 15위 진입",
          en: "Japan enters ESPN's 2026 World Cup power ranking",
        },
        desc: {
          ko: "일본이 아시아 국가 중 유일하게 상위 15위에 올랐습니다.",
          en: "Japan is the only Asian team listed in the top 15.",
        },
        image: "https://cdn.newming.io/news/mk/news-p.v1.20260610.8030b7f6e83343bc8219ed52a87cea87_P1.webp",
        link: "https://newming.io/news-block/2479ac9c6ecf5c24bf25f7bca87e6cbe",
      },
      {
        title: {
          ko: "아쿠냐 주니어, 시카고전서 햄스트링 통증으로 이탈",
          en: "Ronald Acuna Jr. exits with hamstring discomfort",
        },
        desc: {
          ko: "시카고전 주루 중 통증을 호소해 부상 우려가 커졌습니다.",
          en: "The star outfielder left after feeling pain while running the bases.",
        },
        image: "https://cdn.newming.io/news/sc/2026061001000648800040074.webp",
        link: "https://newming.io/news-block/47e34b9cb73e5bb7bbe0e3d638ef3b25",
      },
    ],
  },
  entertainment: {
    url: "https://rss.newming.io/연예/rss.xml",
    pageUrl: "https://newming.io/연예",
    items: [
      {
        title: {
          ko: "스필버그 신작 '디스클로저 데이' 개봉, 외계인 존재 영화화",
          en: "Spielberg's Disclosure Day opens with alien secrecy story",
        },
        desc: {
          ko: "외계인 기밀 폭로와 로즈웰 논쟁을 소재로 다뤘습니다.",
          en: "The film draws on alien secrecy and Roswell debates.",
        },
        image: "https://cdn.newming.io/news/hn/20260610502918.webp",
        link: "https://newming.io/news-block/50557ba8ffef546bab728496c90a76e5",
      },
      {
        title: {
          ko: "영화 '군체', 박스오피스 1위 유지하며 500만 관객 임박",
          en: "Film 'Colony' nears 5 million viewers",
        },
        desc: {
          ko: "박스오피스 1위를 지키며 500만 관객을 앞두고 있습니다.",
          en: "The film stays atop the box office and approaches 5 million viewers.",
        },
        image: "https://cdn.newming.io/news/mk/news-p.v1.20260610.c54f9dac4a474843af9b69255b2300f0_P1.webp",
        link: "https://newming.io/news-block/f6f1964b47f251a18ffcb4c379998f11",
      },
      {
        title: {
          ko: "배우 최정윤, SNS 사칭 계정 주의 당부",
          en: "Actor Choi Jung-yoon warns of impersonation accounts",
        },
        desc: {
          ko: "주식 투자를 유도하는 사칭 계정에 주의를 요청했습니다.",
          en: "She warned fans about fake accounts pushing investment scams.",
        },
        image: "https://cdn.newming.io/news/hi/f935616c-2619-4489-ae26-9731825b1682.webp",
        link: "https://newming.io/news-block/ab520f121b71511f8bf9e36a75b1a06f",
      },
      {
        title: {
          ko: "김신영, '유 퀴즈 온 더 블럭' 출연해 요요 공개",
          en: "Kim Shin-young discusses weight rebound on You Quiz",
        },
        desc: {
          ko: "13년간 유지한 감량 이후 요요 경험을 털어놓습니다.",
          en: "She shares her rebound after maintaining weight loss for years.",
        },
        image: "https://cdn.newming.io/news/mk/news-p.v1.20260610.d9509dd65caf464281bf094e86ea9209_P1.webp",
        link: "https://newming.io/news-block/3a3937c83d26554999aa3ea2f7d9a631",
      },
      {
        title: {
          ko: "코르티스·보이넥스트도어, 10대 음원차트 1·2위 석권",
          en: "CORTIS and BOYNEXTDOOR top teen music chart",
        },
        desc: {
          ko: "남자 아이돌 그룹이 10대 음원차트 상위권을 주도했습니다.",
          en: "Boy groups led the teen music chart rankings.",
        },
        image: "https://cdn.newming.io/news/mk/news-p.v1.20260610.3003f2cc3e0a44d7a2b89d696681b3f1_P1.webp",
        link: "https://newming.io/news-block/041b3a8145cd5b7392a29ada5c4ecd56",
      },
    ],
  },
};

let currentLanguage = "ko";
let currentRssCategory = "sports";
let newsletterTotal = 0;
let newsletterArchives = [];
let newsletterArchiveOffset = NEWSLETTER_LIST_LIMIT;
let newsletterArchiveHasMore = false;
let newsletterArchiveLoading = false;
let newslettersLoading = true;
let newsletterLoadStarted = false;
let audienceSubscriberCount = null;

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

async function fetchWithTimeout(url, options = {}, timeoutMs = 0) {
  if (!timeoutMs || typeof AbortController === "undefined") {
    return fetch(url, options);
  }

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      ...options,
      signal: controller.signal,
    });
  } finally {
    window.clearTimeout(timeoutId);
  }
}

function syncModalOpenState() {
  const hasOpenModal = [
    "[data-modal]",
    "[data-copyright-modal]",
    "[data-policy-modal]",
    "[data-consent-modal]",
    "[data-issue-modal]",
  ].some((selector) => {
    const modal = $(selector);
    return modal && !modal.hidden;
  });

  document.body.classList.toggle("modal-open", hasOpenModal);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function stripNewsletterFooter(html) {
  if (!html) return html;

  const webLinkIndex = html.indexOf("웹에서 보기");
  if (webLinkIndex !== -1) {
    const webRowStart = html.lastIndexOf("<tr>", webLinkIndex);
    const webRowEnd = html.indexOf("</tr>", webLinkIndex);
    if (webRowStart !== -1 && webRowEnd !== -1) {
      html = `${html.slice(0, webRowStart)}${html.slice(webRowEnd + 5)}`;
    }
  }

  const footerStartMarkers = [
    "뉴밍 위클리 주변에 소개하기 📣",
    "이전 뉴스레터 📃",
    "한 주간의 주요 뉴스를 통해 세상의 흐름을 한눈에 파악해 보세요",
    "서울특별시 영등포구 국회대로72길 4, 3층 (여의도동, 아이비피아빌딩)",
    "사업자등록번호 : 348-86-01356",
    "Copyright ©",
  ];

  let footerStart = -1;
  for (const marker of footerStartMarkers) {
    const index = html.lastIndexOf(marker);
    if (index !== -1 && (footerStart === -1 || index < footerStart)) footerStart = index;
  }

  if (footerStart === -1) {
    return html;
  }

  const rowStart = html.lastIndexOf("<tr>", footerStart);
  const cutIndex = rowStart !== -1 ? rowStart : footerStart;
  return html.slice(0, cutIndex);
}

function injectIssueViewportStyles(html) {
  const viewportStyles = `
<style>
  @media (max-width: 840px) {
    body {
      font-size: 15px !important;
      line-height: 1.55 !important;
    }
    h1 { font-size: 24px !important; line-height: 1.18 !important; }
    h2 { font-size: 22px !important; line-height: 1.22 !important; }
    h3 { font-size: 20px !important; line-height: 1.24 !important; }
    h4 { font-size: 18px !important; line-height: 1.28 !important; }
    h5 { font-size: 16px !important; line-height: 1.28 !important; }
    h6 { font-size: 14px !important; line-height: 1.28 !important; }
  }
</style>`;
  if (!html) return html;
  if (html.includes("</head>")) return html.replace("</head>", `${viewportStyles}</head>`);
  if (html.includes("<body")) return html.replace("<body", `${viewportStyles}<body`);
  return `${viewportStyles}${html}`;
}

function translate(key, params = {}) {
  const value = content[currentLanguage][key] || content.ko[key] || "";
  return Object.entries(params).reduce(
    (result, [paramKey, paramValue]) => result.replace(`{${paramKey}}`, paramValue),
    value,
  );
}

function setTextWithLineBreaks(node, text) {
  const parts = String(text).split(LINE_BREAK_DELIMITER);
  node.replaceChildren();
  parts.forEach((part, index) => {
    if (index > 0) node.append(document.createElement("br"));
    node.append(document.createTextNode(part));
  });
}

function renderTitleLines(title, lineClassName) {
  const key = title.dataset.i18n;
  const text = key ? translate(key) : title.textContent;
  const parts = String(text).split(LINE_BREAK_DELIMITER);
  const fragment = document.createDocumentFragment();

  parts.forEach((part) => {
    const line = document.createElement("span");
    line.className = lineClassName;
    line.textContent = part;
    fragment.append(line);
  });

  title.replaceChildren(fragment);
}

function renderHeroTitle() {
  const title = $("[data-hero-title]");
  if (!title) return;
  renderTitleLines(title, "hero-title-line");
}

function renderAnimatedTitles() {
  $$("[data-animated-title]").forEach((title) => {
    renderTitleLines(title, "animated-title-line");
  });
}

function revealStaggerItems(root) {
  if (!root) return;

  const items = $$("[data-stagger-item]", root).filter((item) => !item.dataset.staggerApplied);
  if (!items.length) return;

  const isVisible = root.classList?.contains("is-visible") || root.closest?.("[data-reveal].is-visible");
  if (!isVisible) return;

  items.forEach((item) => {
    item.dataset.staggerApplied = "true";
  });

  requestAnimationFrame(() => {
    items.forEach((item) => item.classList.add("is-visible"));
    animateCountUps(root);
  });
}

function formatCountUpValue(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return String(value || "");
  return new Intl.NumberFormat(currentLanguage === "ko" ? "ko-KR" : "en-US").format(number);
}

function updateCountUpDisplay(node, value) {
  const suffix = currentLanguage === "ko" ? (node.dataset.countSuffixKo || "") : (node.dataset.countSuffixEn || "");
  node.textContent = `${formatCountUpValue(value)}${suffix}`;
}

function animateCountUp(node) {
  if (!node || node.dataset.countAnimated === "true") return;
  const target = Number(node.dataset.countUp);
  if (!Number.isFinite(target)) return;

  node.dataset.countAnimated = "true";
  const duration = 900;
  const start = performance.now();
  const from = 0;

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(from + (target - from) * eased);
    updateCountUpDisplay(node, current);
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
}

function animateCountUps(root = document) {
  const nodes = $$("[data-count-up]", root);
  if (!nodes.length) return;

  window.setTimeout(() => {
    nodes.forEach(animateCountUp);
  }, 650);
}

function getAudienceSubscriberCount(summary) {
  const count = Number(summary?.counts?.mergedOriginalCount);
  return Number.isFinite(count) && count > 0 ? count : null;
}

function renderAudienceSubscriberCount(options = {}) {
  const node = $("[data-subscriber-count]");
  if (!node || audienceSubscriberCount === null) return;

  node.dataset.countUp = String(audienceSubscriberCount);
  node.dataset.countAnimated = "";

  if (options.animate) {
    animateCountUp(node);
    return;
  }

  updateCountUpDisplay(node, audienceSubscriberCount);
}

async function fetchAudienceSummary() {
  const urls = [AUDIENCE_SUMMARY_API_URL].filter(Boolean);

  for (const url of urls) {
    try {
      const params = new URLSearchParams({ rangePreset: AUDIENCE_SUMMARY_RANGE_PRESET });
      const response = await fetch(`${url}?${params}`, { cache: "no-store" });
      if (!response.ok) continue;

      const data = await response.json();
      if (data?.ok === false) continue;

      const nextCount = getAudienceSubscriberCount(data);
      if (nextCount === null) continue;

      audienceSubscriberCount = nextCount;
      renderAudienceSubscriberCount({ animate: true });
      return;
    } catch (error) {
      console.info("Audience summary request failed.", error);
    }
  }
}

function formatIssueDate(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value).replaceAll("-", ".");

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}년 ${month}월 ${day}일 발행`;
}

function getIssueDateParts(value) {
  if (!value) return null;

  const normalized = String(value).trim();
  const explicitDate = normalized.match(/(\d{4})[.\-/년]\s*(\d{1,2})[.\-/월]\s*(\d{1,2})/);
  const hasTimeContext = /[Tt]\d{2}:\d{2}|Z$|[+-]\d{2}:?\d{2}$/.test(normalized);
  if (explicitDate && !hasTimeContext) {
    return {
      month: Number(explicitDate[2]),
      day: Number(explicitDate[3]),
    };
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;

  const parts = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    month: "numeric",
    day: "numeric",
  }).formatToParts(date);
  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));

  return {
    month: Number(map.month),
    day: Number(map.day),
  };
}

function getIssuePublishedToastMessage(issue) {
  const parts = [
    issue?.issueDate,
    issue?.sentAt,
    issue?.date,
    issue?.publishedAt,
    issue?.createdAt,
  ]
    .map(getIssueDateParts)
    .find(Boolean);

  if (!parts) return "";
  if (currentLanguage === "en") {
    const date = new Date(Date.UTC(2000, parts.month - 1, parts.day));
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    }).format(date);
    return `📨 This is the Newming Weekly issue published on ${formattedDate}.`;
  }

  return `📨 ${parts.month}월 ${parts.day}일 발행된 뉴밍 위클리입니다.`;
}

function getNewsletterDetailUrl(item) {
  const key = item.campaignKey || item.id;
  if (!key) return "#";
  return `/issues/${encodeURIComponent(key)}/`;
}

function getNewsletterListUrl(limit, offset) {
  const url = new URL(NEWSLETTER_API_URL, window.location.origin);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("offset", String(offset));
  return url.toString();
}

async function fetchNewsletterIssues(limit, offset) {
  const urls = [getNewsletterListUrl(limit, offset)];

  let lastError;
  for (const url of urls) {
    try {
      const response = await fetchWithTimeout(url, { cache: "no-store" }, NEWSLETTER_API_TIMEOUT_MS);
      if (!response.ok) throw new Error("Newsletter API request failed");

      const data = await response.json();
      if (!data?.ok || !Array.isArray(data.items)) throw new Error("Newsletter API response is invalid");
      return data;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("Newsletter API request failed");
}

async function fetchLegacyNewsletterIssues() {
  const response = await fetch(LEGACY_NEWSLETTER_DATA_URL, { cache: "no-store" });
  if (!response.ok) throw new Error("Legacy newsletter data request failed");

  const data = await response.json();
  if (!Array.isArray(data)) throw new Error("Legacy newsletter data is invalid");
  return data;
}

function getKstDateKey(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const map = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${map.year}-${map.month}-${map.day}`;
}

function readDailyNewsletterCache() {
  try {
    const raw = localStorage.getItem(DAILY_NEWSLETTER_CACHE_KEY);
    if (!raw) return null;

    const data = JSON.parse(raw);
    if (!data || typeof data !== "object") return null;
    return data;
  } catch {
    return null;
  }
}

function writeDailyNewsletterCache(dateKey, item) {
  try {
    localStorage.setItem(DAILY_NEWSLETTER_CACHE_KEY, JSON.stringify({ dateKey, item }));
  } catch {
    // Ignore storage errors.
  }
}

async function fetchDailyNewsletterIssue() {
  const dateKey = getKstDateKey();
  const cached = readDailyNewsletterCache();
  if (cached?.dateKey === dateKey && cached.item) return cached.item;

  if (!NEWSLETTER_API_URL) return null;

  try {
    const data = await fetchNewsletterIssues(1, 0);
    const item = data.items?.[0] ? normalizeNewsletterIssue(data.items[0]) : null;
    if (item) writeDailyNewsletterCache(dateKey, item);
    return item;
  } catch (error) {
    console.warn("Daily newsletter fetch failed.", error);
    return cached?.item || null;
  }
}

function normalizeNewsletterIssue(issue) {
  const title = issue.subject || (currentLanguage === "ko" ? "뉴밍 위클리" : "Newming Weekly");
  const summary = issue.excerpt || "";

  return {
    id: issue.id,
    campaignKey: issue.campaignKey,
    title: {
      ko: title,
      en: title,
    },
    summary: {
      ko: summary,
      en: summary,
    },
    date: formatIssueDate(issue.issueDate || issue.sentAt),
    category: { ko: "뉴밍 위클리", en: "Newming Weekly" },
    readTime: { ko: "5분 읽기", en: "5 min read" },
    bundle: { ko: "발행본", en: "Issue" },
    href: getNewsletterDetailUrl(issue),
    detailKey: issue.campaignKey || issue.id,
    image: issue.coverImageUrl || "assets/newming-weekly-icon.png",
    sentAt: issue.sentAt,
  };
}

function normalizeLegacyNewsletterIssue(issue) {
  const fallbackTitle = issue.title?.ko || issue.title?.en || (currentLanguage === "ko" ? "뉴밍 위클리" : "Newming Weekly");
  const fallbackSummary = issue.summary?.ko || issue.summary?.en || "";

  return {
    ...issue,
    title: {
      ko: issue.title?.ko || fallbackTitle,
      en: issue.title?.en || fallbackTitle,
    },
    summary: {
      ko: issue.summary?.ko || fallbackSummary,
      en: issue.summary?.en || fallbackSummary,
    },
    date: formatIssueDate(issue.issueDate || issue.sentAt || issue.date),
  };
}

function setNewsletterCollections(dailyIssue, legacyIssues) {
  dailyNewsletter = dailyIssue || null;
  legacyNewsletters = Array.isArray(legacyIssues) ? legacyIssues.map(normalizeLegacyNewsletterIssue) : [];
  newsletterFeatured = dailyNewsletter;
  newsletters = dailyNewsletter ? [dailyNewsletter, ...legacyNewsletters] : [...legacyNewsletters];
  newsletters = newsletters
    .slice()
    .sort((left, right) => new Date(right.sentAt || right.issueDate || 0) - new Date(left.sentAt || left.issueDate || 0));
  if (dailyNewsletter) {
    newsletters = [dailyNewsletter, ...newsletters.filter((item) => item !== dailyNewsletter)];
  }
  newsletterTotal = newsletters.length;
  newsletterArchives = newsletters.slice(NEWSLETTER_LIST_LIMIT, NEWSLETTER_LIST_LIMIT + NEWSLETTER_CARD_LIMIT);
  newsletterArchiveOffset = NEWSLETTER_LIST_LIMIT + newsletterArchives.length;
  newsletterArchiveHasMore = false;
}

function getLegacyNewsletterItems(limit = NEWSLETTER_CARD_LIMIT) {
  return legacyNewsletters.slice(0, limit);
}

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "ko" ? "ko" : "en";
  $$("[data-count-up]").forEach((node) => {
    node.dataset.countAnimated = "";
  });
  $$("[data-i18n]").forEach((node) => {
    setTextWithLineBreaks(node, translate(node.dataset.i18n));
  });
  $$("[data-i18n-aria-label]").forEach((node) => {
    node.setAttribute("aria-label", translate(node.dataset.i18nAriaLabel));
  });
  $$("[data-i18n-title]").forEach((node) => {
    node.setAttribute("title", translate(node.dataset.i18nTitle));
  });
  renderAudienceSubscriberCount();
  $$("[data-lang-option]").forEach((button) => {
    const isActive = button.dataset.langOption === language;
    button.setAttribute("aria-pressed", String(isActive));
  });
  renderHeroTitle();
  renderAnimatedTitles();
  renderNewsletters();
  renderNewsletterCards();
  renderNewsletterMoreButton();
  setActiveRssTab();
  tryLoadRss(currentRssCategory);
  revealStaggerItems($("[data-newsletter-list]"));
  revealStaggerItems($("[data-newsletter-card-list]"));
  animateCountUps();
}

function renderHeroPreview() {
  const first = newsletters[0];
  if (!first) return;

  const title = first.title?.[currentLanguage] || first.title?.ko || "";
  const summary = first.summary?.[currentLanguage] || first.summary?.ko || "";
  const date = first.date || "";
  const image = first.image || "assets/newming-weekly-icon.png";

  const meta = $("[data-preview-meta]");
  const previewTitle = $("[data-preview-title]");
  const previewCopy = $("[data-preview-copy]");
  const summaryTitle = $("[data-preview-summary-title]");
  const summaryCopy = $("[data-preview-summary-copy]");
  const mainImage = $("[data-preview-image]");
  const mainTitle = $("[data-preview-main-title]");
  const mainCopy = $("[data-preview-main-copy]");
  const phoneMeta = $("[data-phone-meta]");
  const phoneTitle = $("[data-phone-title]");
  const phoneCopy = $("[data-phone-copy]");
  const phoneImage = $("[data-phone-image]");

  if (meta) meta.textContent = `${date} · ${translate("brand")}`;
  if (previewTitle) previewTitle.textContent = title;
  if (previewCopy) previewCopy.textContent = summary;
  if (summaryTitle) summaryTitle.textContent = title;
  if (summaryCopy) summaryCopy.textContent = summary;
  if (mainImage) mainImage.src = image;
  if (mainTitle) mainTitle.textContent = title;
  if (mainCopy) mainCopy.textContent = summary;
  if (phoneMeta) phoneMeta.textContent = `${date} · ${translate("brand")}`;
  if (phoneTitle) phoneTitle.textContent = title;
  if (phoneCopy) phoneCopy.textContent = summary;
  if (phoneImage) phoneImage.src = image;
}

function renderNewsletterLoadingPlaceholders(type) {
  if (type === "list") {
    return `
      <article class="newsletter-item newsletter-item-placeholder" aria-hidden="true">
        <span class="newsletter-list-placeholder-image"></span>
        <span class="newsletter-list-placeholder-body">
          <span class="newsletter-card-placeholder-line is-title"></span>
          <span class="newsletter-card-placeholder-line"></span>
          <span class="newsletter-card-placeholder-line is-short"></span>
        </span>
      </article>
      <article class="newsletter-item newsletter-item-placeholder" aria-hidden="true">
        <span class="newsletter-list-placeholder-image"></span>
        <span class="newsletter-list-placeholder-body">
          <span class="newsletter-card-placeholder-line is-title"></span>
          <span class="newsletter-card-placeholder-line"></span>
          <span class="newsletter-card-placeholder-line is-short"></span>
        </span>
      </article>
      <article class="newsletter-item newsletter-item-placeholder" aria-hidden="true">
        <span class="newsletter-list-placeholder-image"></span>
        <span class="newsletter-list-placeholder-body">
          <span class="newsletter-card-placeholder-line is-title"></span>
          <span class="newsletter-card-placeholder-line"></span>
          <span class="newsletter-card-placeholder-line is-short"></span>
        </span>
      </article>
    `;
  }

  return Array.from({ length: NEWSLETTER_CARD_LIMIT }, () => `
    <article class="newsletter-card newsletter-card-placeholder" aria-hidden="true">
      <span class="newsletter-card-placeholder-image"></span>
      <span class="newsletter-card-body">
        <span class="newsletter-card-placeholder-line is-title"></span>
        <span class="newsletter-card-placeholder-line is-date"></span>
        <span class="newsletter-card-placeholder-line"></span>
        <span class="newsletter-card-placeholder-line"></span>
        <span class="newsletter-card-placeholder-line is-short"></span>
      </span>
    </article>
  `).join("");
}

function renderNewsletters() {
  const list = $("[data-newsletter-list]");
  const count = $("[data-newsletter-count]");
  if (!list) return;

  if (newslettersLoading) {
    if (count) count.textContent = translate("loadingNewsletters");
    list.innerHTML = `
      <div class="newsletter-loading-copy" aria-live="polite">${translate("loadingNewsletters")}</div>
      <div class="newsletter-list-skeleton">
        ${renderNewsletterLoadingPlaceholders("list")}
      </div>
    `;
    return;
  }

  if (count) count.textContent = translate("totalCount", { count: newsletterTotal });
  list.innerHTML = newsletters
    .slice(0, NEWSLETTER_LIST_LIMIT)
    .map((item) => {
      const category = item.category?.[currentLanguage] || (currentLanguage === "ko" ? "브리핑" : "Briefing");
      const readTime = item.readTime?.[currentLanguage] || (currentLanguage === "ko" ? "5분 읽기" : "5 min read");
      const bundle = item.bundle?.[currentLanguage] || (currentLanguage === "ko" ? "핵심 요약" : "Key brief");
      const title = item.title?.[currentLanguage] || item.title?.ko || "";
      const summary = item.summary?.[currentLanguage] || item.summary?.ko || "";

      return `
        <a class="newsletter-item" href="${escapeHtml(item.href)}" data-issue-key="${escapeHtml(item.detailKey || "")}" data-stagger-item target="_blank" rel="noreferrer">
          <span class="newsletter-thumb">
            <img src="${escapeHtml(item.image)}" alt="" />
          </span>
          <div>
            <div class="newsletter-meta">
              <span>${escapeHtml(category)}</span>
              <span>${escapeHtml(readTime)}</span>
              <span>${escapeHtml(bundle)}</span>
            </div>
            <h3>${escapeHtml(title)}</h3>
            ${summary ? `<p>${escapeHtml(summary)}</p>` : ""}
            <time>${escapeHtml(item.date)}</time>
          </div>
        </a>
      `;
    })
    .join("");
  revealStaggerItems(list);

  const featured = $("[data-featured-letter]");
  const first = newsletters[0];
  if (featured && first) {
    featured.innerHTML = `
      <img src="${escapeHtml(first.image)}" alt="" />
      <span>
        <strong>${escapeHtml(first.title?.[currentLanguage] || first.title?.ko || "")}</strong>
        <em>${escapeHtml(first.readTime?.[currentLanguage] || "")}</em>
      </span>
    `;
    featured.href = first.href;
  }

  renderNewsletterCards();
  renderHeroPreview();
}

function renderNewsletterCards() {
  const list = $("[data-newsletter-card-list]");
  if (!list) return;

  if (newslettersLoading || !newsletterArchives.length) {
    list.innerHTML = renderNewsletterLoadingPlaceholders("cards");
    return;
  }

  list.innerHTML = newsletterArchives
    .map(
      (item) => `
        <a class="newsletter-card" href="${escapeHtml(item.href || "#")}" data-issue-key="${escapeHtml(item.detailKey || "")}" data-stagger-item target="_blank" rel="noreferrer">
          <span class="newsletter-card-thumb">
            <img src="${escapeHtml(item.image || "assets/newming-weekly-icon.png")}" alt="" loading="lazy" />
          </span>
          <span class="newsletter-card-body">
            <h3>${escapeHtml(item.title?.[currentLanguage] || item.title?.ko || translate("brand"))}</h3>
            ${item.date ? `<time>${escapeHtml(item.date)}</time>` : ""}
            ${item.summary?.[currentLanguage] || item.summary?.ko ? `<p>${escapeHtml(item.summary?.[currentLanguage] || item.summary?.ko)}</p>` : ""}
          </span>
        </a>
      `,
    )
    .join("");
  revealStaggerItems(list);
}

function renderNewsletterMoreButton() {
  const button = $("[data-newsletter-more]");
  if (!button) return;

  button.hidden = newsletterArchives.length < NEWSLETTER_CARD_LIMIT;
  button.disabled = newsletterArchiveLoading;
  button.textContent = newsletterArchiveLoading ? translate("loadingMore") : translate("viewMore");
}

function renderNewsletterLoadingState() {
  newslettersLoading = true;
  renderNewsletters();
  renderNewsletterCards();
  renderNewsletterMoreButton();
  revealStaggerItems($("[data-newsletter-list]"));
  revealStaggerItems($("[data-newsletter-card-list]"));
}

async function waitForNewsletterLoadingMinimum(startedAt) {
  const remaining = NEWSLETTER_LOADING_MIN_MS - (Date.now() - startedAt);
  if (remaining > 0) await wait(remaining);
}

async function loadNewsletters() {
  const loadingStartedAt = Date.now();

  if (!NEWSLETTER_API_URL) {
    renderNewsletterLoadingState();
    try {
      const legacyItems = await fetchLegacyNewsletterIssues();
      setNewsletterCollections(null, legacyItems);
    } catch (error) {
      console.warn("Using empty newsletter fallback.", error);
      setNewsletterCollections(null, []);
    } finally {
      await waitForNewsletterLoadingMinimum(loadingStartedAt);
      newslettersLoading = false;
      renderNewsletters();
      renderNewsletterMoreButton();
      revealStaggerItems($("[data-newsletter-list]"));
      revealStaggerItems($("[data-newsletter-card-list]"));
    }
    return;
  }

  renderNewsletterLoadingState();

  try {
    const [apiResult, legacyResult] = await Promise.allSettled([
      fetchNewsletterIssues(NEWSLETTER_LIST_LIMIT + NEWSLETTER_CARD_LIMIT, 0),
      fetchLegacyNewsletterIssues(),
    ]);

    const apiItems =
      apiResult.status === "fulfilled" && Array.isArray(apiResult.value.items)
        ? apiResult.value.items.map(normalizeNewsletterIssue)
        : [];
    const legacyItems =
      legacyResult.status === "fulfilled" && Array.isArray(legacyResult.value)
        ? legacyResult.value
        : [];

    if (apiItems.length) {
      const apiFeatured = apiItems[0] || null;
      const apiArchives = apiItems.slice(1, NEWSLETTER_CARD_LIMIT + 1);
      const fallbackArchives = legacyItems.length ? legacyItems : legacyNewsletters;
      const archiveItems = apiArchives.length
        ? [...apiArchives, ...fallbackArchives.slice(0, Math.max(0, NEWSLETTER_CARD_LIMIT - apiArchives.length))]
        : fallbackArchives.slice(0, NEWSLETTER_CARD_LIMIT);
      setNewsletterCollections(apiFeatured, archiveItems);
      return;
    }

    setNewsletterCollections(null, legacyItems.length ? legacyItems : legacyNewsletters);
  } catch (error) {
    console.warn("Using local newsletter fallback.", error);
    try {
      const legacyItems = await fetchLegacyNewsletterIssues();
      setNewsletterCollections(null, legacyItems);
    } catch (legacyError) {
      console.warn("Using empty newsletter fallback.", legacyError);
      setNewsletterCollections(null, []);
    }
  } finally {
    await waitForNewsletterLoadingMinimum(loadingStartedAt);
    newslettersLoading = false;
    renderNewsletters();
    renderNewsletterMoreButton();
    revealStaggerItems($("[data-newsletter-list]"));
    revealStaggerItems($("[data-newsletter-card-list]"));
  }
}

function startNewsletterLoad() {
  if (newsletterLoadStarted) return;
  newsletterLoadStarted = true;
  loadNewsletters();
}

function scheduleNewsletterLoad() {
  renderNewsletterLoadingState();

  const section = $("#letters");
  if (!section || !("IntersectionObserver" in window)) {
    startNewsletterLoad();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      startNewsletterLoad();
    },
    { rootMargin: "0px 0px -18% 0px", threshold: 0.12 },
  );

  observer.observe(section);
}

async function loadMoreNewsletterArchives() {
  return;
}

function getRssSource(category = currentRssCategory) {
  return rssSources[category] || rssSources.sports;
}

function getRssCacheKey(category = currentRssCategory) {
  return `${RSS_CACHE_KEY_PREFIX}:${category}`;
}

function readRssCache(category = currentRssCategory) {
  try {
    const raw = localStorage.getItem(getRssCacheKey(category));
    if (!raw) return null;

    const data = JSON.parse(raw);
    if (!data || typeof data !== "object") return null;
    if (!Array.isArray(data.items) || typeof data.savedAt !== "number") return null;
    return data;
  } catch {
    return null;
  }
}

function writeRssCache(category, items) {
  try {
    localStorage.setItem(
      getRssCacheKey(category),
      JSON.stringify({
        savedAt: Date.now(),
        items,
      }),
    );
  } catch {
    // Ignore storage errors.
  }
}

function setActiveRssTab() {
  $$("[data-rss-tab]").forEach((button) => {
    const isActive = button.dataset.rssTab === currentRssCategory;
    button.setAttribute("aria-selected", String(isActive));
  });
}

function renderRssMoreLink(source) {
  if (!source?.pageUrl) return "";

  return `
    <a class="rss-more-link" href="${escapeHtml(source.pageUrl)}" target="_blank" rel="noreferrer" hidden>
      ${translate("rssMore")}
    </a>
  `;
}

function renderRssFallback(category = currentRssCategory) {
  const list = $("[data-rss-list]");
  if (!list) return;

  const source = getRssSource(category);
  const itemsHtml = source.items
    .slice(0, RSS_ITEM_LIMIT)
    .map(
      (item) => `
        <a class="rss-item" href="${escapeHtml(item.link || source.url)}" data-stagger-item target="_blank" rel="noreferrer">
          <img class="rss-thumb" src="${escapeHtml(item.image)}" alt="" loading="lazy" />
          <span>
            <strong>${escapeHtml(item.title[currentLanguage])}</strong>
            <span>${escapeHtml(item.desc[currentLanguage])}</span>
          </span>
        </a>
      `,
    )
    .join("");

  list.innerHTML = itemsHtml + renderRssMoreLink(source);
  revealStaggerItems(list);
}

function renderCachedRss(category = currentRssCategory, items = []) {
  const list = $("[data-rss-list]");
  if (!list) return;

  const source = getRssSource(category);
  const itemsHtml = items
    .slice(0, RSS_ITEM_LIMIT)
    .map((item) => `
      <a class="rss-item" href="${escapeHtml(item.link || source.url)}" data-stagger-item target="_blank" rel="noreferrer">
        <img class="rss-thumb" src="${escapeHtml(item.image || "assets/newming-weekly-icon.png")}" alt="" loading="lazy" />
        <span>
          <strong>${escapeHtml(item.title || translate("rssFallback"))}</strong>
          <span>${escapeHtml(item.description || "")}</span>
        </span>
      </a>
    `)
    .join("");

  list.innerHTML = itemsHtml + renderRssMoreLink(source);
  revealStaggerItems(list);
}

async function tryLoadRss(category = currentRssCategory) {
  currentRssCategory = category;
  setActiveRssTab();
  renderRssFallback(category);

  const source = getRssSource(category);
  if (!source.url) return;

  try {
    const response = await fetch(`${source.url}?t=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) throw new Error("RSS request failed");
    const text = await response.text();
    const doc = new DOMParser().parseFromString(text, "text/xml");
    const items = Array.from(doc.querySelectorAll("item"))
      .sort((first, second) => {
        const firstDate = Date.parse(first.querySelector("pubDate")?.textContent || "");
        const secondDate = Date.parse(second.querySelector("pubDate")?.textContent || "");
        return (Number.isNaN(secondDate) ? 0 : secondDate) - (Number.isNaN(firstDate) ? 0 : firstDate);
      })
      .slice(0, RSS_ITEM_LIMIT);
    if (!items.length) return;
    if (currentRssCategory !== category) return;

    const normalizedItems = items.map((item) => ({
      title: item.querySelector("title")?.textContent || translate("rssFallback"),
      link: item.querySelector("link")?.textContent || source.url,
      description: (item.querySelector("description")?.textContent || "").replace(/<[^>]*>/g, "").slice(0, 48),
      image: item.querySelector("enclosure")?.getAttribute("url") || "assets/newming-weekly-icon.png",
    }));
    writeRssCache(category, normalizedItems);
    renderCachedRss(category, normalizedItems);
  } catch (error) {
    console.info("Using local RSS fallback.", error);
    const cached = readRssCache(category);
    if (cached?.items?.length) {
      renderCachedRss(category, cached.items);
    }
  }
}

function bindRssAutoRefresh() {
  tryLoadRss(currentRssCategory);
}

function setFormMessage(form, message, isError = false) {
  const messageNode = form.parentElement?.querySelector("[data-form-message]");
  if (!messageNode) return;
  messageNode.textContent = message;
  messageNode.classList.toggle("is-error", isError);
}

function setSubmitLoading(form, isLoading) {
  const button = form.querySelector('button[type="submit"]');
  if (!button) return;

  if (isLoading) {
    if (!button.dataset.idleText) {
      button.dataset.idleText = button.textContent.trim();
    }
    form.dataset.submitting = "true";
    button.disabled = true;
    button.classList.add("is-loading");
    button.setAttribute("aria-busy", "true");
    button.textContent = translate("submitting");
    return;
  }

  delete form.dataset.submitting;
  button.disabled = false;
  button.classList.remove("is-loading");
  button.removeAttribute("aria-busy");
  button.textContent = button.dataset.i18n ? translate(button.dataset.i18n) : button.dataset.idleText || button.textContent;
}

let toastTimer;

function showToast(message, isError = false, variant = isError ? "error" : "success") {
  const toast = $("[data-toast]");
  if (!toast) return;

  clearTimeout(toastTimer);
  toast.classList.remove("is-visible", "is-error", "is-success", "is-notice");
  toast.textContent = message;
  toast.hidden = false;
  toast.classList.add(`is-${variant}`);
  requestAnimationFrame(() => toast.classList.add("is-visible"));

  toastTimer = setTimeout(() => {
    toast.classList.remove("is-visible");
    setTimeout(() => {
      toast.hidden = true;
      toast.classList.remove("is-error");
      toast.classList.remove("is-success");
      toast.classList.remove("is-notice");
    }, 180);
  }, 2600);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getDeviceType() {
  const width = window.innerWidth || document.documentElement.clientWidth || 0;
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}

function getSubscribeFormPlacement(form) {
  if (!form) return "unknown";
  if (form.classList.contains("hero-form")) return "hero";
  if (form.classList.contains("bottom-signup-form")) return "bottom";
  if (form.closest(".right-rail__subscribe")) return "rail";
  if (form.closest(".modal-panel")) return pendingSubscriptionPlacement || "modal";
  return "unknown";
}

function getSubscribeContext(form) {
  return {
    deviceType: getDeviceType(),
    formPlacement: getSubscribeFormPlacement(form),
    viewportWidth: window.innerWidth || document.documentElement.clientWidth || 0,
  };
}

function appendSubscribeContext(payload, context = {}) {
  if (!SUBSCRIBE_CONTEXT_ENABLED) return payload;

  return {
    ...payload,
    deviceType: context.deviceType || getDeviceType(),
    formPlacement: context.formPlacement || "unknown",
    viewportWidth: context.viewportWidth || window.innerWidth || document.documentElement.clientWidth || 0,
  };
}

async function subscribe(email, recaptchaToken = "", consent = false, context = {}) {
  const urls = [SUBSCRIBE_API_URL].filter(Boolean);
  if (!urls.length) {
    return { ok: true };
  }

  const payload = appendSubscribeContext(
    {
      email,
      language: currentLanguage,
      recaptchaAction: RECAPTCHA_ACTION,
      recaptchaToken,
      consent,
      source: "homepage",
    },
    context,
  );

  for (const url of urls) {
    try {
      const response = await fetchWithTimeout(
        url,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
        SUBSCRIBE_API_TIMEOUT_MS,
      );

      if (response.ok) return { ok: true };
    } catch (error) {
      // Try the next proxy URL.
    }
  }

  return { ok: false };
}

function loadRecaptcha() {
  if (!recaptchaLoaderPromise) {
    recaptchaLoaderPromise = new Promise((resolve, reject) => {
      const waitForExecute = () => {
        const startedAt = Date.now();
        const check = () => {
          if (window.grecaptcha?.ready && window.grecaptcha.execute) {
            window.grecaptcha.ready(() => resolve(window.grecaptcha));
            return;
          }

          if (Date.now() - startedAt > 10000) {
            reject(new Error("reCAPTCHA is unavailable"));
            return;
          }

          window.setTimeout(check, 100);
        };

        check();
      };

      if (window.grecaptcha?.execute) {
        waitForExecute();
        return;
      }

      const existing = document.querySelector('script[data-recaptcha-loader="true"]');
      if (existing) {
        existing.addEventListener("load", waitForExecute);
        existing.addEventListener("error", reject);
        waitForExecute();
        return;
      }

      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(RECAPTCHA_SITE_KEY)}`;
      script.async = true;
      script.defer = true;
      script.dataset.recaptchaLoader = "true";
      script.onload = waitForExecute;
      script.onerror = () => reject(new Error("reCAPTCHA failed to load"));
      document.head.appendChild(script);
    });
  }

  return recaptchaLoaderPromise;
}

async function getRecaptchaToken() {
  const grecaptcha = await loadRecaptcha();

  if (!grecaptcha?.ready || !grecaptcha.execute) {
    throw new Error("reCAPTCHA is unavailable");
  }

  await new Promise((resolve) => grecaptcha.ready(resolve));
  return grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: RECAPTCHA_ACTION });
}

function bindForms() {
  $$("[data-subscribe-form]").forEach((form) => {
    if (form.closest(".modal-panel")) {
      return;
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const email = String(formData.get("email") || "").trim();

      if (form.classList.contains("bottom-signup-form")) {
        const consent = formData.get("consent") === "on";

        if (form.dataset.submitting === "true") {
          return;
        }

        if (!isValidEmail(email)) {
          setFormMessage(form, translate("invalidEmail"), true);
          return;
        }

        if (!consent) {
          setFormMessage(form, translate("consentLabel"), true);
          return;
        }

        setSubmitLoading(form, true);

        let recaptchaToken = "";
        try {
          recaptchaToken = await getRecaptchaToken();
        } catch (error) {
          setFormMessage(form, translate("recaptchaError"), true);
          setSubmitLoading(form, false);
          return;
        }

        const result = await subscribe(email, recaptchaToken, true, getSubscribeContext(form));
        setSubmitLoading(form, false);

        if (result.ok) {
          setFormMessage(form, "");
          showToast(translate("success"));
          fetchAudienceSummary();
          form.reset();
          return;
        }

        setFormMessage(form, translate("subscribeError"), true);
        return;
      }

      if (!isValidEmail(email)) {
        setFormMessage(form, translate("invalidEmail"), true);
        return;
      }

      pendingSubscriptionEmail = email;
      pendingSubscriptionPlacement = getSubscribeFormPlacement(form);
      openModal();
    });
  });
}

function openModal() {
  const modal = $("[data-modal]");
  if (!modal) return;
  modal.hidden = false;
  syncModalOpenState();
  const emailField = $("#modal-email");
  if (emailField) {
    emailField.value = pendingSubscriptionEmail || emailField.value;
  }
  setTimeout(() => $("#modal-consent")?.focus(), 0);
}

function closeModal() {
  const modal = $("[data-modal]");
  if (!modal) return;
  modal.hidden = true;
  syncModalOpenState();
}

function bindModal() {
  $$("[data-open-modal]").forEach((button) => {
    button.addEventListener("click", () => {
      pendingSubscriptionEmail = "";
      pendingSubscriptionPlacement = button.closest(".mobile-subscribe-fab") ? "mobile_fab" : "modal";
      openModal();
    });
  });

  $$("[data-close-modal]").forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeModal();
  });

  const modalForm = document.querySelector(".modal-panel [data-subscribe-form]");
  if (modalForm) {
    modalForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (modalForm.dataset.submitting === "true") {
        return;
      }

      const emailInput = modalForm.querySelector("#modal-email");
      const email = String(emailInput?.value || pendingSubscriptionEmail || "").trim();
      const consent = Boolean(modalForm.querySelector("#modal-consent")?.checked);

      if (!isValidEmail(email)) {
        setFormMessage(modalForm, translate("invalidEmail"), true);
        return;
      }

      if (!consent) {
        setFormMessage(modalForm, translate("consentLabel"), true);
        return;
      }

      setSubmitLoading(modalForm, true);

      let recaptchaToken = "";
      try {
        recaptchaToken = await getRecaptchaToken();
      } catch (error) {
        setFormMessage(modalForm, translate("recaptchaError"), true);
        setSubmitLoading(modalForm, false);
        return;
      }

      const result = await subscribe(email, recaptchaToken, consent, getSubscribeContext(modalForm));
      setSubmitLoading(modalForm, false);

      if (result.ok) {
        setFormMessage(modalForm, "");
        showToast(translate("success"));
        fetchAudienceSummary();
        pendingSubscriptionEmail = "";
        pendingSubscriptionPlacement = "";
        modalForm.reset();
        closeModal();
        return;
      }

      setFormMessage(modalForm, translate("subscribeError"), true);
    });
  }
}

function openCopyrightModal() {
  const modal = $("[data-copyright-modal]");
  if (!modal) return;
  modal.hidden = false;
  syncModalOpenState();
}

function closeCopyrightModal() {
  const modal = $("[data-copyright-modal]");
  if (!modal) return;
  modal.hidden = true;
  syncModalOpenState();
}

function bindCopyrightModal() {
  $$("[data-open-copyright]").forEach((button) => {
    button.addEventListener("click", openCopyrightModal);
  });

  $$("[data-close-copyright]").forEach((button) => {
    button.addEventListener("click", closeCopyrightModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeCopyrightModal();
  });
}

function renderPolicyModal(type) {
  const modalData = policyDocuments[type];
  if (!modalData) return false;

  const text = modalData[currentLanguage] || modalData.ko;
  const kicker = $("[data-policy-kicker]");
  const title = $("[data-policy-title]");
  const updated = $("[data-policy-updated]");
  const summary = $("[data-policy-summary]");
  const link = $("[data-policy-link]");
  const linkTitle = $("[data-policy-link-title]");
  const linkUrl = $("[data-policy-link-url]");

  if (kicker) kicker.textContent = text.kicker;
  if (title) title.textContent = text.title;
  if (updated) updated.textContent = text.updated;
  if (summary) {
    summary.innerHTML = text.sections
      .map(
        (section) => `
          <section class="policy-modal-section">
            <h3>${escapeHtml(section.title)}</h3>
            <p>${escapeHtml(section.copy)}</p>
          </section>
        `,
      )
      .join("");
  }
  if (link) link.href = modalData.href;
  if (linkTitle) linkTitle.textContent = text.linkTitle;
  if (linkUrl) linkUrl.textContent = modalData.href;

  return true;
}

function openPolicyModal(type) {
  const modal = $("[data-policy-modal]");
  if (!modal || !renderPolicyModal(type)) return;
  modal.hidden = false;
  syncModalOpenState();
}

function closePolicyModal() {
  const modal = $("[data-policy-modal]");
  if (!modal) return;
  modal.hidden = true;
  syncModalOpenState();
}

function bindPolicyModal() {
  $$("[data-open-policy]").forEach((button) => {
    button.addEventListener("click", () => openPolicyModal(button.dataset.openPolicy));
  });

  $$("[data-close-policy]").forEach((button) => {
    button.addEventListener("click", closePolicyModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closePolicyModal();
  });
}

function renderConsentModal() {
  const text = consentNoticeDocument[currentLanguage] || consentNoticeDocument.ko;
  const kicker = $("[data-consent-kicker]");
  const title = $("[data-consent-title]");
  const copy = $("[data-consent-copy]");
  const summary = $("[data-consent-summary]");
  const source = $("[data-consent-source]");
  const sourceTitle = $("[data-consent-source-title]");
  const sourceUrl = $("[data-consent-source-url]");

  if (kicker) kicker.textContent = text.kicker;
  if (title) title.textContent = text.title;
  if (copy) copy.textContent = text.copy;
  if (summary) {
    summary.innerHTML = text.items
      .map(
        (item) => `
          <section class="consent-modal-item">
            <h3>${escapeHtml(item.label)}</h3>
            <p>${escapeHtml(item.value)}</p>
          </section>
        `,
      )
      .join("");
  }
  if (source) source.href = consentNoticeDocument.href;
  if (sourceTitle) sourceTitle.textContent = text.sourceTitle;
  if (sourceUrl) sourceUrl.textContent = text.sourceUrlLabel;
}

function openConsentModal() {
  const modal = $("[data-consent-modal]");
  if (!modal) return;
  renderConsentModal();
  modal.hidden = false;
  syncModalOpenState();
}

function closeConsentModal() {
  const modal = $("[data-consent-modal]");
  if (!modal) return;
  modal.hidden = true;
  syncModalOpenState();
}

function bindConsentModal() {
  $$("[data-open-consent]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openConsentModal();
    });
  });

  $$("[data-close-consent]").forEach((button) => {
    button.addEventListener("click", closeConsentModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeConsentModal();
  });
}

function getIssueModalCloseDelay() {
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return 0;
  return ISSUE_MODAL_CLOSE_DURATION_MS;
}

function getIssueModalOpenDelay() {
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return 0;
  return ISSUE_MODAL_OPEN_DURATION_MS;
}

function scheduleIssueModalToast(modal, message, openedAt) {
  if (!message) return false;

  window.clearTimeout(issueModalToastTimer);
  const elapsed = Date.now() - openedAt;
  const delay = Math.max(getIssueModalOpenDelay() - elapsed, 0);
  issueModalToastTimer = window.setTimeout(() => {
    if (!modal || modal.hidden || modal.dataset.closing === "true") return;
    showToast(message, false, "notice");
  }, delay);
  return true;
}

function finishIssueModalLoading(modal, loading, toastMessage = "") {
  if (loading) loading.hidden = true;
  requestAnimationFrame(() => {
    if (!modal || modal.hidden || modal.dataset.closing === "true") return;
    modal.dataset.loading = "false";
    if (toastMessage) scheduleIssueModalToast(modal, toastMessage, Date.now());
  });
}

function closeIssueModal() {
  const modal = $("[data-issue-modal]");
  const frame = $("[data-issue-frame]");
  if (!modal || modal.hidden || modal.dataset.closing === "true") return;

  window.clearTimeout(issueModalCloseTimer);
  window.clearTimeout(issueModalToastTimer);
  modal.dataset.closing = "true";
  modal.dataset.loading = "true";

  issueModalCloseTimer = window.setTimeout(() => {
    modal.hidden = true;
    delete modal.dataset.closing;
    delete modal.dataset.loading;
    syncModalOpenState();
    if (frame) {
      frame.removeAttribute("srcdoc");
    }
  }, getIssueModalCloseDelay());
}

async function openIssueModal(issueKey, fallbackUrl) {
  const modal = $("[data-issue-modal]");
  const frame = $("[data-issue-frame]");
  const loading = $("[data-issue-loading]");
  if (!modal || !frame || !issueKey) {
    if (fallbackUrl) window.open(fallbackUrl, "_blank", "noreferrer");
    return;
  }

  window.clearTimeout(issueModalCloseTimer);
  window.clearTimeout(issueModalToastTimer);
  delete modal.dataset.closing;
  modal.dataset.loading = "true";
  modal.hidden = false;
  syncModalOpenState();
  if (loading) loading.hidden = false;
  frame.removeAttribute("srcdoc");

  const localIssue = newsletters.find((item) => String(item.detailKey || item.campaignKey || item.id) === String(issueKey));
  let issueToastMessage = getIssuePublishedToastMessage(localIssue);
  if (localIssue?.detailHtml) {
    const cleanedHtml = injectIssueViewportStyles(stripNewsletterFooter(localIssue.detailHtml));
    frame.srcdoc = cleanedHtml || `<pre style="white-space:pre-wrap;font:16px/1.6 sans-serif;padding:24px;">${escapeHtml(localIssue.summary?.ko || localIssue.summary?.en || localIssue.title?.ko || "")}</pre>`;
    finishIssueModalLoading(modal, loading, issueToastMessage);
    return;
  }

  try {
    const urls = [
      `${NEWSLETTER_API_PATH}/${encodeURIComponent(issueKey)}`,
    ];
    let data = null;
    for (const url of urls) {
      try {
        const response = await fetch(url, { cache: "no-store" });
        if (!response.ok) throw new Error("Newsletter detail request failed");
        data = await response.json();
        if (!data?.ok || (!data?.item?.html && !data?.item?.text)) throw new Error("Newsletter detail response is invalid");
        break;
      } catch (error) {
        data = null;
      }
    }
    const html = data?.item?.html;
    const text = data?.item?.text;
    if (!data || (!html && !text)) throw new Error("Newsletter detail response is invalid");

    if (!issueToastMessage) issueToastMessage = getIssuePublishedToastMessage(data.item);
    const cleanedHtml = injectIssueViewportStyles(stripNewsletterFooter(html));
    frame.srcdoc = cleanedHtml || `<pre style="white-space:pre-wrap;font:16px/1.6 sans-serif;padding:24px;">${escapeHtml(text)}</pre>`;
  } catch (error) {
    console.warn("Newsletter detail fallback.", error);
    closeIssueModal();
    if (fallbackUrl) window.open(fallbackUrl, "_blank", "noreferrer");
  } finally {
    finishIssueModalLoading(modal, loading, issueToastMessage);
  }
}

function bindNewsletterDetails() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-issue-key]");
    if (!link) return;

    const issueKey = link.dataset.issueKey;
    if (!issueKey) return;
    event.preventDefault();
    openIssueModal(issueKey, link.href);
  });

  $$("[data-close-issue]").forEach((button) => {
    button.addEventListener("click", closeIssueModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeIssueModal();
  });
}

function bindNewsletterPagination() {
  const button = $("[data-newsletter-more]");
  if (!button) return;
  button.addEventListener("click", loadMoreNewsletterArchives);
}

function bindLanguageToggle() {
  $$("[data-lang-option]").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.langOption);
    });
  });
}

function bindRssTabs() {
  $$("[data-rss-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      tryLoadRss(button.dataset.rssTab);
    });
  });
}

function bindShare() {
  $("[data-share-link]")?.addEventListener("click", async () => {
    const url = `${window.location.origin}${window.location.pathname}`;
    const shareData = {
      title: document.title,
      text: document.querySelector('meta[name="description"]')?.content || translate("brand"),
      url,
    };

    try {
      if (navigator.share && (!navigator.canShare || navigator.canShare(shareData))) {
        await navigator.share(shareData);
        return;
      }

      await navigator.clipboard.writeText(url);
      showToast(translate("copied"));
    } catch (error) {
      if (error?.name === "AbortError") return;

      try {
        await navigator.clipboard.writeText(url);
        showToast(translate("copied"));
        return;
      } catch {
        // Fall through to the user-facing failure message.
      }

      showToast(translate("copyFailed"), true);
    }
  });
}

function bindParallax() {
  const layers = $$("[data-parallax]");
  if (!layers.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const heroSection = $(".visual-hero");
  const isMobile = window.matchMedia("(max-width: 760px)");
  let heroActive = !heroSection;
  let ticking = false;

  function update() {
    if (!heroActive) {
      ticking = false;
      return;
    }
    const viewportCenter = window.innerHeight / 2;
    const mobileScale = isMobile.matches ? 0.72 : 1;
    layers.forEach((layer) => {
      const speed = Number(layer.dataset.parallaxSpeed || 0);
      const rect = layer.getBoundingClientRect();
      const offset = (viewportCenter - rect.top - rect.height / 2) * speed * mobileScale;
      layer.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
    });
    ticking = false;
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  if (heroSection && "IntersectionObserver" in window) {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroActive = Boolean(entry?.isIntersecting);
        requestUpdate();
      },
      {
        rootMargin: "-10% 0px -25% 0px",
        threshold: 0.08,
      },
    );
    heroObserver.observe(heroSection);
  } else {
    heroActive = true;
  }

  update();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  isMobile.addEventListener("change", requestUpdate, { passive: true });
}

function bindMobileSubscribeFab() {
  const fab = $(".mobile-subscribe-fab");
  if (!fab) return;

  const hero = $(".delivery-hero");
  const bottomButton = $(".bottom-cta .bottom-submit");
  const mobileOnly = window.matchMedia("(max-width: 760px)");

  let heroVisible = false;
  let bottomVisible = false;

  function updateFab() {
    const hidden = !mobileOnly.matches || heroVisible || bottomVisible;
    fab.classList.toggle("is-hidden", hidden);
    fab.setAttribute("aria-hidden", hidden ? "true" : "false");
  }

  if (!mobileOnly.matches) {
    updateFab();
    return;
  }

  if (!("IntersectionObserver" in window)) {
    updateFab();
    return;
  }

  const heroObserver = hero
    ? new IntersectionObserver(
        ([entry]) => {
          heroVisible = Boolean(entry?.isIntersecting);
          updateFab();
        },
        { threshold: 0.08, rootMargin: "0px 0px -20% 0px" },
      )
    : null;

  const bottomObserver = bottomButton
    ? new IntersectionObserver(
        ([entry]) => {
          bottomVisible = Boolean(entry?.isIntersecting);
          updateFab();
        },
        { threshold: 0.18, rootMargin: "0px 0px -10% 0px" },
      )
    : null;

  if (heroObserver && hero) heroObserver.observe(hero);
  if (bottomObserver && bottomButton) bottomObserver.observe(bottomButton);

  mobileOnly.addEventListener("change", updateFab, { passive: true });
  updateFab();
}

function bindScrollMotion() {
  const revealTargets = $$("[data-reveal]");
  const parallaxSections = $$("[data-parallax-section]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (revealTargets.length) {
    if (!("IntersectionObserver" in window) || reducedMotion) {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
      revealTargets.forEach((target) => revealStaggerItems(target));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            revealStaggerItems(entry.target);
            observer.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.18 },
      );

      revealTargets.forEach((target) => observer.observe(target));
    }
  }

  if (!parallaxSections.length || reducedMotion) return;

  let ticking = false;

  function update() {
    const viewportCenter = window.innerHeight / 2;
    parallaxSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const rawOffset = (viewportCenter - rect.top - rect.height / 2) * 0.018;
      const offset = Math.max(-28, Math.min(28, rawOffset));
      section.style.setProperty("--section-y", `${offset.toFixed(2)}px`);
    });
    ticking = false;
  }

  function requestUpdate() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }

  update();
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
}

function bindLocalAutoReload() {
  const isLocalHost = ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);
  if (!isLocalHost) return;

  const signatures = new Map();

  async function getSignature(file) {
    const response = await fetch(`${file}?reload=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) return "";
    const text = await response.text();
    let hash = 0;
    for (let index = 0; index < text.length; index += 1) {
      hash = (hash * 31 + text.charCodeAt(index)) >>> 0;
    }
    return `${text.length}:${hash}`;
  }

  async function checkFiles() {
    try {
      const nextSignatures = await Promise.all(
        AUTO_RELOAD_FILES.map(async (file) => [file, await getSignature(file)]),
      );

      const hasChange = nextSignatures.some(([file, signature]) => {
        const previous = signatures.get(file);
        signatures.set(file, signature);
        return previous && previous !== signature;
      });

      if (hasChange) window.location.reload();
    } catch (error) {
      console.info("Auto reload check skipped.", error);
    }
  }

  checkFiles();
  setInterval(checkFiles, 1200);
}

bindForms();
bindModal();
bindPolicyModal();
bindConsentModal();
bindCopyrightModal();
bindNewsletterDetails();
bindNewsletterPagination();
bindLanguageToggle();
bindRssTabs();
bindRssAutoRefresh();
bindShare();
bindParallax();
bindMobileSubscribeFab();
bindScrollMotion();
bindLocalAutoReload();
applyLanguage("ko");
scheduleNewsletterLoad();
fetchAudienceSummary();
