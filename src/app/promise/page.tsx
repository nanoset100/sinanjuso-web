import Link from 'next/link';

const PROMISES = [
  {
    id: 1, title: '해양관광 활성화', emoji: '🚢',
    stage: '계획수립', pct: 15,
    latest: '해양관광위원회 구성 검토 중',
    related: '소형 선박 도서 투어 패키지, 1004섬 스탬프 투어',
  },
  {
    id: 2, title: '신재생에너지 주민 혜택', emoji: '⚡',
    stage: '추진중', pct: 40,
    latest: '주민이익공유 조례 초안 작성 중',
    related: '에너지 수익 군민 배당 구조',
  },
  {
    id: 3, title: '농어민 소득 지원', emoji: '🌾',
    stage: '계획수립', pct: 20,
    latest: '천일염 최저가격 조례 검토 중',
    related: '디지털 직거래 플랫폼, 대파 저온저장 개선',
  },
  {
    id: 4, title: '교육·청년 유입', emoji: '🎓',
    stage: '검토중', pct: 10,
    latest: '워케이션 마을 시범 지구 선정 검토',
    related: '0원 하우스 프로젝트',
  },
  {
    id: 5, title: '의료·복지 강화', emoji: '❤️',
    stage: '추진중', pct: 35,
    latest: '1,004원 효도 택시 협약 추진 중',
    related: '찾아가는 의료팀, 도서 응급 후송 네트워크',
  },
  {
    id: 6, title: '교통·인프라 개선', emoji: '🛣️',
    stage: '검토중', pct: 10,
    latest: '자라-장산 연도교 착공 준비',
    related: '위그선 시범 항로',
  },
  {
    id: 7, title: '지역경제 활성화', emoji: '🏘️',
    stage: '계획수립', pct: 15,
    latest: 'RE100 국가산업단지 조성 기획 중',
    related: '압해읍 스마트 신도시',
  },
  {
    id: 8, title: '행정 혁신·소통', emoji: '🏛️',
    stage: '추진중', pct: 30,
    latest: '신안 정책마당 구축 중',
    related: 'AI 예산 대시보드 기획',
  },
];

const STAGE_COLOR: Record<string, string> = {
  '검토중': 'bg-gray-100 text-gray-600',
  '계획수립': 'bg-blue-100 text-blue-700',
  '추진중': 'bg-orange-100 text-orange-700',
  '완료': 'bg-green-100 text-green-700',
};

export default function PromisePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">

        {/* 헤더 */}
        <div className="mb-8">
          <div className="text-sm text-gray-400 font-medium mb-1">
            <Link href="/" className="hover:text-[#1B3A6B]">홈</Link> / 공약 이행 현황
          </div>
          <h1 className="text-3xl font-black text-[#1B3A6B] mb-2">📊 공약 이행 현황</h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            김태성 군수의 8대 핵심공약 추진 현황을 투명하게 공개합니다.<br />
            <span className="text-xs text-gray-400">마지막 업데이트: 2026년 7월 2일</span>
          </p>
        </div>

        {/* 안내 박스 */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6 text-sm text-blue-800">
          <strong>5대 공약 vs 8대 핵심공약</strong><br />
          8대 핵심공약은 공식 선거 공약인 5대 공약의 세부 실천 계획입니다.
          이 페이지는 8대 핵심공약 기준으로 이행 상황을 추적합니다.
        </div>

        {/* 공약 카드 목록 */}
        <div className="space-y-4">
          {PROMISES.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{p.emoji}</span>
                  <h2 className="font-black text-gray-800">{p.title}</h2>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full shrink-0 ${STAGE_COLOR[p.stage]}`}>
                  {p.stage}
                </span>
              </div>

              {/* 진행바 */}
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-1 bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-[#1B3A6B] h-2 rounded-full transition-all"
                    style={{ width: `${p.pct}%` }}
                  />
                </div>
                <span className="text-xs font-bold text-gray-400 w-8 text-right">{p.pct}%</span>
              </div>

              <div className="text-xs text-gray-600 space-y-1">
                <div><span className="font-bold text-gray-500">최근 동향:</span> {p.latest}</div>
                <div><span className="font-bold text-gray-500">관련 제안:</span> {p.related}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400 mb-3">이 공약에 대한 의견이 있으신가요?</p>
          <Link
            href="/participate"
            className="inline-block rounded-full bg-[#E8941A] px-6 py-3 text-sm font-black text-white hover:bg-[#d17a0f] transition-colors"
          >
            💡 아이디어 제안하기
          </Link>
        </div>
      </div>
    </div>
  );
}
