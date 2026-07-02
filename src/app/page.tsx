import Link from 'next/link';
import Image from 'next/image';

// 현황 카드 데이터 (추후 DB 연결)
const STATS = [
  { label: '누적 제안', value: '0', unit: '건', icon: '💡', color: 'bg-blue-50 text-blue-700' },
  { label: '군수가 읽은 제안', value: '0', unit: '건', icon: '👁️', color: 'bg-orange-50 text-orange-700' },
  { label: '정책 반영', value: '0', unit: '건', icon: '✅', color: 'bg-green-50 text-green-700' },
  { label: '이번 달 신규', value: '0', unit: '건', icon: '🆕', color: 'bg-purple-50 text-purple-700' },
];

// 공약 이행 현황 (정적 초기값)
const PROMISE_STATUS = [
  { title: '해양관광 활성화', stage: '계획수립', pct: 15 },
  { title: '신재생에너지 주민 혜택', stage: '추진중', pct: 40 },
  { title: '농어민 소득 지원', stage: '계획수립', pct: 20 },
  { title: '교육·청년 유입', stage: '검토중', pct: 10 },
  { title: '의료·복지 강화', stage: '추진중', pct: 35 },
];

const STAGE_COLOR: Record<string, string> = {
  '검토중': 'bg-gray-100 text-gray-600',
  '계획수립': 'bg-blue-100 text-blue-700',
  '추진중': 'bg-orange-100 text-orange-700',
  '완료': 'bg-green-100 text-green-700',
};

// 특별시 소식 초기 데이터
const SPECIAL_CITY_NEWS = [
  {
    title: '전남광주통합특별시, 7월 1일 임시 홈페이지 개통',
    source: '오마이뉴스',
    date: '2026-06-29',
    note: '신안 관련 행정정보 접근 채널 개설 — jeonnam-gwangju.go.kr',
    url: 'https://www.ohmynews.com/NWS_Web/View/at_pg.aspx?CNTN_CD=A0003247185',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* ━━━ HERO ━━━ */}
      <section className="relative w-full bg-[#1B3A6B] py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E8941A]/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/3" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* 군수 사진 + 이름 */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 rounded-full border-4 border-white/30 shadow-xl overflow-hidden mb-4">
              <Image src="/candidate_face.png" alt="김태성 신안군수" width={96} height={96} className="object-cover object-top w-full h-full" />
            </div>
            <p className="text-[#E8941A] font-bold text-sm bg-white/10 px-3 py-1 rounded-full">
              신안군수 김태성
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-4">
            신안 정책마당
          </h1>
          <p className="text-lg sm:text-xl text-blue-200 font-medium mb-10">
            군민이 제안하고, 군수가 직접 읽고, 신안이 바뀝니다
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/participate"
              className="rounded-full bg-[#E8941A] px-8 py-3.5 text-base font-black text-white shadow-lg hover:bg-[#d17a0f] hover:shadow-xl transition-all"
            >
              💡 아이디어 제안하기
            </Link>
            <Link
              href="/proposals"
              className="rounded-full bg-white/10 border border-white/30 px-8 py-3.5 text-base font-bold text-white hover:bg-white/20 transition-all"
            >
              📋 정책 제안 보기
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━ 현황 카드 ━━━ */}
      <section className="max-w-5xl mx-auto px-4 -mt-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {STATS.map((stat) => (
            <div key={stat.label} className={`rounded-2xl p-4 shadow-sm border border-white/80 bg-white`}>
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-2xl font-black text-gray-800">{stat.value}<span className="text-sm font-medium text-gray-500 ml-1">{stat.unit}</span></div>
              <div className="text-xs text-gray-500 font-medium mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">

        {/* ━━━ 공약 이행 현황 (미리보기) ━━━ */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-black text-[#1B3A6B]">📊 공약 이행 현황</h2>
            <Link href="/promise" className="text-sm font-bold text-[#1B3A6B] hover:text-[#E8941A] transition-colors">
              전체 보기 →
            </Link>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-50">
            {PROMISE_STATUS.map((p) => (
              <div key={p.title} className="flex items-center gap-4 px-5 py-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-sm font-bold text-gray-800 truncate">{p.title}</span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 ${STAGE_COLOR[p.stage]}`}>{p.stage}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div
                      className="bg-[#1B3A6B] h-1.5 rounded-full transition-all"
                      style={{ width: `${p.pct}%` }}
                    />
                  </div>
                </div>
                <span className="text-xs font-bold text-gray-400 w-8 text-right shrink-0">{p.pct}%</span>
              </div>
            ))}
          </div>
        </section>

        {/* ━━━ 2단 그리드: 군민 참여 + 정책 제안 ━━━ */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* 군민 참여 마당 */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-black text-[#1B3A6B] mb-2">🗣️ 군민 참여 마당</h2>
            <p className="text-sm text-gray-600 mb-5 leading-relaxed">
              생활 속 아이디어를 3단계로 간단하게 제안하세요.<br />
              군수님이 직접 읽습니다.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 mb-4 text-center text-gray-400 text-sm">
              아직 제안이 없습니다.<br />첫 번째 제안자가 되어보세요!
            </div>
            <Link
              href="/participate"
              className="block w-full text-center rounded-xl bg-[#E8941A] py-3 text-sm font-black text-white hover:bg-[#d17a0f] transition-colors"
            >
              💡 지금 제안하기
            </Link>
          </section>

          {/* 정책 제안 */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-black text-[#1B3A6B] mb-2">📄 정책 제안</h2>
            <p className="text-sm text-gray-600 mb-5 leading-relaxed">
              전문가·연구자의 정책 제안과<br />
              조례 개정 트래커를 확인하세요.
            </p>
            <div className="space-y-2 mb-4">
              <Link href="/proposals#ordinance" className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
                <span className="text-lg">📋</span>
                <div>
                  <div className="text-sm font-bold text-[#1B3A6B]">조례 제안 트래커</div>
                  <div className="text-xs text-gray-500">특별시 출범 후 6개월 내 정비 대상</div>
                </div>
              </Link>
              <Link href="/proposals#marine" className="flex items-center gap-3 p-3 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors">
                <span className="text-lg">🚢</span>
                <div>
                  <div className="text-sm font-bold text-[#E8941A]">해양관광 정책 제안</div>
                  <div className="text-xs text-gray-500">신안군 맞춤 해양관광 방향</div>
                </div>
              </Link>
            </div>
            <Link
              href="/proposals"
              className="block w-full text-center rounded-xl border-2 border-[#1B3A6B] py-3 text-sm font-black text-[#1B3A6B] hover:bg-[#1B3A6B] hover:text-white transition-colors"
            >
              전체 정책 제안 보기
            </Link>
          </section>
        </div>

        {/* ━━━ 전남광주특별시 소식 ━━━ */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-black text-[#1B3A6B]">🏛️ 전남광주특별시 소식</h2>
            <Link href="/special-city" className="text-sm font-bold text-[#1B3A6B] hover:text-[#E8941A] transition-colors">
              전체 보기 →
            </Link>
          </div>
          <div className="bg-gradient-to-r from-[#1B3A6B] to-[#2d5aa0] rounded-2xl p-5 mb-4 text-white">
            <div className="flex items-start gap-3">
              <span className="text-3xl shrink-0">🆕</span>
              <div>
                <div className="text-xs font-bold text-blue-200 mb-1">2026년 7월 1일 출범</div>
                <div className="font-black text-lg leading-snug mb-2">전남광주통합특별시 공식 출범</div>
                <div className="text-sm text-blue-100 leading-relaxed">
                  신안군은 통합특별시 산하 기초지자체로 편입됩니다.<br />
                  6개월 내 조례 정비 의무가 발생했습니다.
                </div>
                <a
                  href="https://jeonnam-gwangju.go.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-xs font-bold text-[#E8941A] hover:underline"
                >
                  jeonnam-gwangju.go.kr →
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            {SPECIAL_CITY_NEWS.map((news) => (
              <a
                key={news.title}
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-[#1B3A6B]/30 hover:shadow-md transition-all group"
              >
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-gray-800 group-hover:text-[#1B3A6B] mb-1 leading-snug">{news.title}</div>
                  <div className="text-xs text-gray-500">{news.note}</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-xs font-bold text-gray-400">{news.source}</div>
                  <div className="text-xs text-gray-300">{news.date}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ━━━ 군수 메시지 ━━━ */}
        <section className="bg-[#1B3A6B] rounded-2xl p-6 text-white">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full border-2 border-white/30 overflow-hidden shrink-0">
              <Image src="/candidate_face.png" alt="김태성 군수" width={56} height={56} className="object-cover object-top w-full h-full" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-bold text-[#E8941A] mb-1">군수 메시지</div>
              <p className="text-sm text-blue-100 leading-relaxed mb-3">
                군민 여러분의 생각과 제안을 직접 읽겠습니다.<br />
                신안 정책마당에 아이디어를 남겨주세요.
              </p>
              <Link
                href="/message"
                className="text-xs font-bold text-white/70 hover:text-white hover:underline transition-colors"
              >
                메시지 전체 보기 →
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
