import Link from 'next/link';

const NEWS_LIST = [
  {
    title: '전남광주통합특별시, 7월 1일 임시 홈페이지 개통',
    source: '오마이뉴스',
    date: '2026-06-29',
    sinanNote: '신안군청·군민이 참고해야 할 행정정보 채널 개설. 주소: jeonnam-gwangju.go.kr',
    url: 'https://www.ohmynews.com/NWS_Web/View/at_pg.aspx?CNTN_CD=A0003247185',
    tag: '행정',
  },
];

const SINAN_CHANGES = [
  {
    area: '조례·규칙 정비',
    icon: '📋',
    desc: '특별법 시행(7.1)으로부터 6개월 내(~12.31) 기존 조례·규칙을 특별시 법체계에 맞게 정비해야 합니다.',
    status: '⏰ 진행 중',
    statusColor: 'text-orange-600',
  },
  {
    area: '예산 편성 구조',
    icon: '💰',
    desc: '광역 단위(전남광주특별시)와 기초 단위(신안군) 예산 구조 일부 변경. 세부 내용 확인 중.',
    status: '🔍 확인 중',
    statusColor: 'text-blue-600',
  },
  {
    area: '해양·수산·도서 특별 지원',
    icon: '🚢',
    desc: '통합특별시 특별법에 따라 도서 지역 특별 지원 근거가 생겼습니다. 신안군 활용 방안 검토 필요.',
    status: '🔍 확인 중',
    statusColor: 'text-blue-600',
  },
  {
    area: '광역 의회 대표성',
    icon: '🏛️',
    desc: '전남광주통합특별시의회(91명) 중 신안 지역구 의원이 배정됩니다. 신안 관련 광역 안건 모니터링 필요.',
    status: '🆕 새로운 사항',
    statusColor: 'text-purple-600',
  },
];

export default function SpecialCityPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">

        <div className="mb-8">
          <div className="text-sm text-gray-400 font-medium mb-1">
            <Link href="/" className="hover:text-[#1B3A6B]">홈</Link> / 전남광주특별시 소식
          </div>
          <h1 className="text-3xl font-black text-[#1B3A6B] mb-2">🏛️ 전남광주특별시 소식</h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            2026년 7월 1일 출범한 전남광주통합특별시 동향 중<br />
            <strong>신안군에 영향을 미치는 사항</strong>을 추려서 전달합니다.
          </p>
        </div>

        {/* 특별시 소개 카드 */}
        <div className="bg-gradient-to-r from-[#1B3A6B] to-[#2d5aa0] rounded-2xl p-6 text-white mb-8">
          <div className="text-xs font-bold text-[#E8941A] mb-2">🆕 2026년 7월 1일 공식 출범</div>
          <h2 className="text-xl font-black mb-3">전남광주통합특별시란?</h2>
          <div className="space-y-1.5 text-sm text-blue-100 mb-4">
            <div>• 전라남도 + 광주광역시 통합 → <strong className="text-white">전남광주통합특별시</strong></div>
            <div>• 근거: 전남광주 통합특별시 특별법 (법률 제21446호)</div>
            <div>• 시행령: 대통령령 제36423호</div>
            <div>• 신안군: 통합특별시 산하 기초지자체 지위 유지</div>
          </div>
          <a
            href="https://jeonnam-gwangju.go.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm font-bold transition-colors"
          >
            🌐 공식 홈페이지 방문 →
          </a>
        </div>

        {/* 신안군에 달라지는 것 */}
        <section className="mb-8">
          <h2 className="text-xl font-black text-[#1B3A6B] mb-4">신안군에 달라지는 것</h2>
          <div className="space-y-3">
            {SINAN_CHANGES.map((item) => (
              <div key={item.area} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                <div className="flex items-start gap-3">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                      <h3 className="font-black text-gray-800">{item.area}</h3>
                      <span className={`text-xs font-bold ${item.statusColor}`}>{item.status}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 조례 트래커 연결 */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⏰</span>
            <div>
              <h3 className="font-black text-orange-800 mb-1">조례 정비 마감: 2026년 12월 31일</h3>
              <p className="text-sm text-orange-700 mb-3">
                신안군은 6개월 내 기존 조례를 정비해야 합니다.
                정책마당에서 조례 개정 방향을 제안할 수 있습니다.
              </p>
              <Link
                href="/proposals#ordinance"
                className="inline-block text-sm font-bold text-orange-800 underline hover:text-orange-600"
              >
                조례 제안 트래커 보기 →
              </Link>
            </div>
          </div>
        </div>

        {/* 뉴스 큐레이션 */}
        <section>
          <h2 className="text-xl font-black text-[#1B3A6B] mb-2">신안 관련 뉴스</h2>
          <p className="text-xs text-gray-400 mb-4">신안에 영향을 주는 전남광주특별시 관련 뉴스를 선별해 소개합니다. 주 1~2회 업데이트.</p>
          <div className="space-y-3">
            {NEWS_LIST.map((news) => (
              <a
                key={news.title}
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-[#1B3A6B]/30 hover:shadow-md transition-all group"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{news.tag}</span>
                  </div>
                  <div className="text-sm font-bold text-gray-800 group-hover:text-[#1B3A6B] mb-1 leading-snug">{news.title}</div>
                  <div className="text-xs text-[#E8941A] font-medium">[신안 관련] {news.sinanNote}</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs font-bold text-gray-400">{news.source}</div>
                  <div className="text-xs text-gray-300 mt-0.5">{news.date}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-4 text-center text-sm text-gray-400 border-2 border-dashed border-gray-200 rounded-xl py-6">
            관련 뉴스를 수집 중입니다. 계속 업데이트됩니다.
          </div>
        </section>

      </div>
    </div>
  );
}
