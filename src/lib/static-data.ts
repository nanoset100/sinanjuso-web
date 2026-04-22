// Flutter 앱 소스코드에서 추출한 하드코딩 데이터
export const CANDIDATE_PROFILE = {
  name: '김태성',
  title: '신안군수 예비후보',
  district: '전라남도 신안군',
  badge: '신안군수 예비후보',
  slogan: '소득 늘리고, 일자리 만들고,\n약속지키는 군수',
  career: [
    { year: '2024', title: '신안군수 예비후보 등록' },
    { year: '2022', title: '前 신안군 지역발전위원회 위원장' },
    { year: '2020', title: '신안 관광진흥협의회 공동대표' },
    { year: '2018', title: '전라남도 도서지역 발전 자문위원' },
    { year: '2015', title: '신안 어촌계 자문위원', subtitle: '도서 지역 어업인 권익 보호' },
    { year: '2010', title: '지역 관광 위원회 부위원장' },
  ],
  snsLinks: [
    { label: 'Facebook', emoji: '📘', bgColor: '#E3F2FD', url: 'https://www.facebook.com' },
    { label: 'Instagram', emoji: '📸', bgColor: '#FCE4EC', url: 'https://www.instagram.com' },
    { label: 'YouTube', emoji: '▶️', bgColor: '#FFEBEE', url: 'https://www.youtube.com' },
    { label: '카카오톡', emoji: '💬', bgColor: '#FFF9C4', url: 'https://pf.kakao.com/_placeholder' },
  ]
};

export const POLICIES = [
  {
    id: 'tourism',
    emoji: '🏝',
    title: '관광 비전',
    subtitle: '섬 전체가 하나의 작품이 됩니다',
    cardColor: '#EBF4FF',
    iconBgColor: '#E3F2FD',
    background: '신안군은 1,025개의 섬으로 이루어진 대한민국 최대 도서 지역입니다. 각 섬의 고유한 자연·문화 자원을 체계적으로 관광 콘텐츠화하여 지역 경제를 활성화하고, 주민의 삶 자체가 살아있는 관광 자원이 되는 선순환 구조를 만들겠습니다.',
    goals: '섬별 특화 콘텐츠 개발로 관광객 30% 증가, 주민 관광업 참여 소득 확대, 신안 통합 관광 패스로 방문객 체류 기간 연장.',
    roadmap: [
      { step: 1, title: '섬별 특화 콘텐츠 개발', subtitle: '자연·문화·생활 기반 차별화' },
      { step: 2, title: '생활이 관광이 되는 구조', subtitle: '주민 삶 → 관광 자원 확장' },
      { step: 3, title: '신안 전체 관광 네트워크', subtitle: '섬 접근성·통합 관광 경험 제공' },
    ]
  },
  {
    id: 'economy',
    emoji: '💰',
    title: '경제 정책',
    subtitle: '군민의 지갑이 두꺼워지는 신안',
    cardColor: '#FFFCE8',
    iconBgColor: '#FFF9C4',
    background: '신안 어민과 농민이 생산한 농수산물이 제 값을 받을 수 있도록 유통구조를 근본적으로 개선합니다. 관광·에너지 사업의 수익이 군민에게 직접 돌아오는 주민 참여 수익 공유 구조를 만들겠습니다.',
    goals: '농수산물 직거래 비율 40% 확대, 관광·에너지 사업 주민 수익 배분제 도입, 군민 평균 소득 연 200만 원 이상 실질 증가.',
    roadmap: [
      { step: 1, title: '농수산물 직거래 플랫폼 구축', subtitle: '중간 유통 단계 축소' },
      { step: 2, title: '관광 수익 주민 환원', subtitle: '관광 사업 이익의 30% 지역 기금화' },
      { step: 3, title: '에너지 사업 주민 참여', subtitle: '태양광·풍력 수익 공유 조합 설립' },
    ]
  },
  {
    id: 'public_service',
    emoji: '🏛',
    title: '공직자 3대 공약',
    subtitle: '공정하고 존중받는 행정',
    cardColor: '#F0EEFF',
    iconBgColor: '#E8EAF6',
    background: '공무원이 측근 개입 없이 소신 있게 일할 수 있는 환경을 만듭니다. 직원 복지를 우선 강화하고, 폭언·인격 모독이 없는 조직 문화를 정착시키겠습니다.',
    goals: '공직자 업무 만족도 70% 이상, 부당 지시·인격 모독 사례 Zero, 성과 중심 공정 인사로 유능한 인재 육성.',
    roadmap: [
      { step: 1, title: '공무원 권한 회복', subtitle: '측근 개입 차단, 정책 중심 민원 처리' },
      { step: 2, title: '공직자 존중 문화 정착', subtitle: '직원 복지 강화, 폭언 금지 제도화' },
      { step: 3, title: '공정 인사 원칙 수립', subtitle: '다면평가 도입, 성과 중심 인사' },
    ]
  },
  {
    id: 'open_government',
    emoji: '🤝',
    title: '열린 군정',
    subtitle: '군민이 주인인 신안',
    cardColor: '#EDFBF0',
    iconBgColor: '#E8F5E9',
    background: '정책 계획부터 평가까지 모든 단계에 군민이 직접 참여하는 진정한 민주행정을 실현합니다. 아이디어 공모와 온라인 의견 수렴으로 현장의 목소리를 정책에 반영하겠습니다.',
    goals: '군민 정책 제안 반영률 50% 이상, 분기별 공개 행정 보고회 개최, 온라인 소통 창구 24시간 운영.',
    roadmap: [
      { step: 1, title: '계획 단계 군민 참여', subtitle: '아이디어 공모·온라인 의견 수렴' },
      { step: 2, title: '실행·평가 참여 확대', subtitle: '중간 점검 공개 보고회 운영' },
      { step: 3, title: '열린 정보 공개', subtitle: '행정 정보 전면 공개, 소통 창구 상시화' },
    ]
  },
  {
    id: 'zero_complaint',
    emoji: '📞',
    title: '주민불편 ZERO',
    subtitle: '불편은 줄이고, 응답은 빠르게',
    cardColor: '#FFF5EA',
    iconBgColor: '#FFF3E0',
    background: '연중무휴 24시간 민원 응답 시스템을 구축해 어떤 불편도 신속하게 해결합니다. 어르신 병원 동행, 전기·수도 수리 지원 등 생활 밀착형 서비스를 제공하겠습니다.',
    goals: '민원 접수 후 24시간 내 초기 답변 100%, 긴급 민원 2시간 내 현장 출동, 통합 민원 플랫폼 구축으로 원스톱 처리.',
    roadmap: [
      { step: 1, title: '24시간 통합 민원 접수', subtitle: '전화·문자·카카오·앱 원스톱' },
      { step: 2, title: '생활 밀착형 지원 서비스', subtitle: '어르신 병원 예약·이동 지원' },
      { step: 3, title: '즉각적인 현장 대응', subtitle: '읍·면 단위 전담 인력 배치' },
    ]
  },
  {
    id: 'welfare',
    emoji: '❤️',
    title: '해피100 복지',
    subtitle: '모든 군민이 편안한 신안',
    cardColor: '#FFF0F5',
    iconBgColor: '#FCE4EC',
    background: '주거·의료·교육·돌봄이 통합된 복지 시스템으로 모든 세대가 신안에서 행복하게 살 수 있는 환경을 만듭니다. 배리어프리 생활환경 확대로 고령자와 장애인의 이동권을 보장하겠습니다.',
    goals: '돌봄 서비스 이용 노인 1,000명 추가, 농촌형 주거단지 조성 500세대, 방과 후 돌봄 시설 모든 읍·면 설치.',
    roadmap: [
      { step: 1, title: '주거·돌봄 통합 서비스', subtitle: '농촌형 주거단지·실버타운 운영' },
      { step: 2, title: '의료·이동권 보장', subtitle: '교통약자 동행 서비스·의료 동행' },
      { step: 3, title: '교육·안전 환경 구축', subtitle: '배리어프리 환경·방과 후 돌봄' },
    ]
  }
];

export const NEWS_ITEMS = [
  {
    id: 'real_4',
    title: '조국혁신당, 신안군수 후보 선출 경선 실시되나…김태성·정광호 후보, 입당 선언',
    source: '프레시안',
    publishedAt: '3월 30일',
    thumbnailEmoji: '🗳',
    url: 'https://www.pressian.com/pages/articles/2026033013343735020',
    category: '보도자료',
    summary: '조국혁신당 신안군수 후보 경선에 김태성·정광호 후보가 입당을 선언했다.',
  },
  {
    id: 'real_2',
    title: '김태성 신안군수 예비후보, 민주당 탈당 선언',
    source: '아시아경제',
    publishedAt: '3월 19일',
    thumbnailEmoji: '📢',
    url: 'https://www.asiae.co.kr/article/2026031911523780271',
    category: '보도자료',
    summary: '김태성 예비후보가 전남도의회에서 민주당 탈당을 선언하며 "공정과 원칙이 무너졌다"고 비판했다.',
  },
  {
    id: 'real_1',
    title: '김태성, 신안군수 출마 선언 "청렴·공정의 군민 주인 시대 열겠다"',
    source: '뉴스1',
    publishedAt: '1월 22일',
    thumbnailEmoji: '🏛',
    url: 'https://www.news1.kr/local/gwangju-jeonnam/6047866',
    category: '보도자료',
    summary: '주민소득·주민참여·지속가능을 군정의 3대 핵심 기준으로 제시하며 공식 출마 선언을 했다.',
  },
  {
    id: 'real_3',
    title: '김태성 신안군수 예비후보, 민주당 심사 재심 요청',
    source: '무등일보',
    publishedAt: '12월 23일',
    thumbnailEmoji: '⚖️',
    url: 'https://m.mdilbo.com/detail/0kIA7d/751464',
    category: '보도자료',
    summary: '당 윤리심판원에 재심을 청구하며 "사실과 원칙에 입각한 공정한 판단을 요청한다"고 밝혔다.',
  },
];

export const CAMP_CONTACT = {
  contacts: [
    { label: '전화', value: '061-XXX-XXXX', url: 'tel:06112345678', iconBgColor: '#E3F2FD' },
    { label: '이메일', value: 'kimts@sinanjuso.com', url: 'mailto:kimts@sinanjuso.com', iconBgColor: '#E8F5E9' },
    { label: '카카오톡 채널', value: '@김태성신안군수', url: 'https://pf.kakao.com/_placeholder', iconBgColor: '#FFF9C4' },
  ],
  address: '전라남도 신안군 안좌면 김태성 선거캠프',
  addressFull: '전라남도 신안군 안좌면 읍내리 — 캠프 사무소',
  lat: 34.8353,
  lng: 126.1833
};

export const NOTIFICATIONS = [
  {
    id: 'n_001',
    title: '📣 4월 18일 압해도 유세 일정 안내',
    body: '오후 2시 압해읍 광장에서 유세 행사가 열립니다.',
    topic: '유세 일정 알림',
    date: '4월 15일'
  },
  {
    id: 'n_002',
    title: '📋 농어업 공약 발표',
    body: '친환경 수산물 직거래 지원 확대 등 3개 공약이 추가되었습니다.',
    topic: '정책 발표 알림',
    date: '4월 14일'
  },
  {
    id: 'n_003',
    title: '📰 무안일보 인터뷰 기사',
    body: '"섬 주민이 행복한 신안" — 김태성 후보 정책 인터뷰 게재',
    topic: '뉴스 알림',
    date: '4월 13일'
  },
  {
    id: 'n_004',
    title: '🗳️ D-48 선거일이 48일 남았습니다',
    body: '6월 3일 꼭 투표해 주세요!',
    topic: '선거일 알림',
    date: '4월 16일'
  }
];

export const ELECTION_INFO = {
  title: '제8회 전국동시지방선거',
  dateString: '2026년 6월 3일 (수)',
  dDay: 42,
  slogan: '투표는 민주주의의 가장 중요한 참여입니다 🗳️',
  type: '신안군수 선거',
  district: '전라남도 신안군'
};
