import Link from 'next/link';

// ── 5대 공약 정책 제안 데이터 ────────────────────────
const POLICY_AREAS = [
  {
    id: 'rural',
    icon: '🌾',
    title: '농어촌 르네상스',
    subtitle: '흘린 땀방울만큼 제값 받는 농어업',
    color: 'border-l-green-500',
    tagColor: 'bg-green-100 text-green-700',
    proposals: [
      {
        title: '농수산물 가공공장 유치',
        desc: '임자면 대파·비금면 양파는 전국 주요 산지이나 가공시설이 없어 포전매매가 관행입니다. 군 차원의 부지 제공 + 초기 설비 보조로 가공업체를 유치하면 농가 수익과 가격 안정이 동시에 가능합니다.',
        tag: '군민 제안 반영',
      },
      {
        title: '천일염 고부가가치화',
        desc: '신안 천일염은 국내 생산량 70% 이상이지만 원가 경쟁에 머물러 있습니다. 미네랄 함량·생산지 인증제 도입과 웰니스 체험 상품 연계로 프리미엄 시장을 개척합니다.',
        tag: '브랜드 전략 필요',
      },
      {
        title: '직거래 유통망 구축',
        desc: '수협·농협 외에 온라인 직거래 플랫폼(스마트스토어·쿠팡 로컬)과 수도권 직판장을 연계하여 중간 유통 마진을 줄이고 농어민 실소득을 높입니다.',
        tag: '단기 추진 가능',
      },
    ],
  },
  {
    id: 'transport',
    icon: '🚢',
    title: '육상·해상 교통혁신',
    subtitle: '물리적 거리를 극복하는 교통 인프라',
    color: 'border-l-blue-500',
    tagColor: 'bg-blue-100 text-blue-700',
    proposals: [
      {
        title: '여객선 결항 보상 현실화',
        desc: '기상 악화로 인한 결항 시 도서 주민의 생활·의료 접근이 차단됩니다. 결항 보상금 기준 현실화, 드론 물류 긴급배송 시범사업, 의료 원격진료 연계를 패키지로 추진합니다.',
        tag: '시급',
      },
      {
        title: '도서 간 소형 여객선 확충',
        desc: '주요 항로 외 소규모 섬은 접근성이 극히 낮습니다. 10~20인 소형 여객선 노선을 신설하고 운임 보조를 통해 이동권을 보장합니다.',
        tag: '예산 수반',
      },
      {
        title: '군내 대중교통 연계 개선',
        desc: '천사대교 개통 이후 육상 교통 수요가 증가했으나 버스 노선이 따라가지 못하고 있습니다. 압해~목포 광역 연계 노선 확충과 수요응답형 버스(DRT) 도입을 검토합니다.',
        tag: '중기 과제',
      },
    ],
  },
  {
    id: 'welfare',
    icon: '❤️',
    title: '의료·복지 (해피 100)',
    subtitle: '100세까지 행복한 신안',
    color: 'border-l-red-400',
    tagColor: 'bg-red-100 text-red-700',
    proposals: [
      {
        title: '도서지역 의료 접근성 강화',
        desc: '흑산도·가거도 등 원거리 도서는 응급 의료가 사실상 불가능합니다. 응급헬기 계류 기지 추가 지정, 공중보건의 충원, 원격 진료 인프라 확충이 필요합니다.',
        tag: '응급 대응',
      },
      {
        title: '노인 돌봄·이동 지원 확대',
        desc: '신안군 고령화율은 40%를 넘습니다. 섬 단위 돌봄 거점 마련, 의료기관 이송 지원비 현실화, 재가 방문 서비스 확대로 복지 사각지대를 줄입니다.',
        tag: '고령화 대응',
      },
      {
        title: '청년·육아 정착 지원',
        desc: '인구 유출을 막으려면 육아 환경이 먼저입니다. 공공 보육시설 확충, 전입 청년 주거 지원, 섬 학교 소규모 특성화 교육 프로그램 운영으로 정주 여건을 개선합니다.',
        tag: '인구 유지',
      },
    ],
  },
  {
    id: 'tourism',
    icon: '🏝️',
    title: '체류형 관광 육성',
    subtitle: '주민 수익형 고품격 관광',
    color: 'border-l-orange-400',
    tagColor: 'bg-orange-100 text-orange-700',
    proposals: [
      {
        title: '소형 선박 섬 호핑 투어',
        desc: '크루즈 위주의 광역 관광 대신, 10~30인 소형 선박으로 섬 간 이동하는 "신안 섬 호핑 투어"를 정례화합니다. 압해→자은→암태→비금→도초 코스를 1박 2일 패키지로 상품화해 체류 시간을 늘립니다.',
        tag: '단기 추진 가능',
      },
      {
        title: '염전·갯벌 웰니스 체험',
        desc: '"신안 솔트 웰니스" 브랜드로 염전 체험·소금 스파·갯벌 생태 해설을 묶어 고부가 체험 상품으로 전환합니다. MZ 세대 타깃 SNS 콘텐츠와 연계해 자발적 홍보 효과를 높입니다.',
        tag: '브랜드 개발',
      },
      {
        title: '1004섬 스탬프 투어 앱',
        desc: '방문한 섬마다 디지털 스탬프를 적립하고 특산물·숙박 할인 혜택을 제공하는 앱 기반 관광 플랫폼입니다. 전남관광재단과 협력해 초기 투자를 최소화할 수 있습니다.',
        tag: '전남관광재단 협력',
      },
    ],
  },
  {
    id: 'energy',
    icon: '⚡',
    title: '신재생에너지 활성화',
    subtitle: '햇빛과 바람을 주민 소득으로',
    color: 'border-l-yellow-400',
    tagColor: 'bg-yellow-100 text-yellow-700',
    proposals: [
      {
        title: '주민이익공유 비율 확대',
        desc: '신안군의 태양광·풍력 발전 규모는 전국 최대이나 주민 수익 환원이 미흡합니다. 발전 수익 공유 비율을 현행 2%에서 5% 이상으로 상향하고, 전기요금 할인·생활 지원금 형태로 직접 환원합니다.',
        tag: '조례 개정 필요',
      },
      {
        title: '에너지 자립 마을 모델 구축',
        desc: '섬 단위로 태양광·ESS(에너지저장장치)를 설치해 자체 전력을 공급하고, 잉여 전력 판매 수익을 마을 기금으로 조성합니다. 결항 시 비상 전력 확보 효과도 있습니다.',
        tag: '시범사업 가능',
      },
      {
        title: '에너지 산업 청년 일자리 연계',
        desc: '신재생에너지 설비 유지보수·모니터링 인력을 지역 청년으로 우선 채용하는 협약 체계를 발전사업자와 구축합니다. 기술교육 프로그램과 연계해 정주 청년을 육성합니다.',
        tag: '청년 정착',
      },
    ],
  },
];

// ──────────────────────────────────────────────────
export default function ProposalsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">

        <div className="mb-8">
          <div className="text-sm text-gray-400 font-medium mb-1">
            <Link href="/" className="hover:text-[#1B3A6B]">홈</Link> / 정책 제안
          </div>
          <h1 className="text-3xl font-black text-[#1B3A6B] mb-2">📄 정책 제안</h1>
          <p className="text-gray-600 text-sm">김태성 군수 5대 공약을 중심으로 구체적인 정책안을 모읍니다.</p>
        </div>

        {/* 5대 공약 네비 */}
        <div className="flex flex-wrap gap-2 mb-8">
          {POLICY_AREAS.map((area) => (
            <a
              key={area.id}
              href={`#${area.id}`}
              className="text-xs font-bold px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:border-[#1B3A6B] hover:text-[#1B3A6B] transition-colors"
            >
              {area.icon} {area.title}
            </a>
          ))}
        </div>

        {/* 5대 공약 섹션 */}
        <div className="space-y-5 mb-8">
          {POLICY_AREAS.map((area) => (
            <div
              key={area.id}
              id={area.id}
              className={`bg-white rounded-2xl shadow-sm border border-gray-100 border-l-4 ${area.color} p-6`}
            >
              <div className="flex items-start gap-3 mb-5">
                <span className="text-2xl">{area.icon}</span>
                <div>
                  <h2 className="font-black text-lg text-[#1B3A6B]">{area.title}</h2>
                  <p className="text-sm text-gray-500">{area.subtitle}</p>
                </div>
              </div>

              <div className="space-y-3">
                {area.proposals.map((p) => (
                  <div key={p.title} className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="font-black text-sm text-gray-800">{p.title}</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ml-auto shrink-0 ${area.tagColor}`}>
                        {p.tag}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#1B3A6B] rounded-2xl p-6 text-white text-center">
          <h3 className="font-black text-lg mb-2">전문가·연구자 제안 접수</h3>
          <p className="text-sm text-blue-200 mb-4">
            5대 공약 관련 구체적인 정책 제안서를 보내주시면 이 페이지에 게시합니다.
          </p>
          <a
            href="mailto:nanoset@korea.com?subject=신안 정책마당 - 정책 제안서 제출"
            className="inline-block rounded-full bg-[#E8941A] px-6 py-2.5 text-sm font-black text-white hover:bg-[#d17a0f] transition-colors"
          >
            📧 제안서 보내기
          </a>
        </div>

      </div>
    </div>
  );
}
