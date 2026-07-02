import Link from 'next/link';
import Image from 'next/image';
import ProposalStats from '@/components/ProposalStats';
import RecentProposals from '@/components/RecentProposals';

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
      <section className="relative w-full bg-[#1B3A6B] py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E8941A]/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/3" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 rounded-full border-4 border-white/30 shadow-xl overflow-hidden mb-3">
              <Image src="/candidate_face.png" alt="김태성 신안군수" width={80} height={80} className="object-cover object-top w-full h-full" />
            </div>
            <p className="text-[#E8941A] font-bold text-sm bg-white/10 px-3 py-1 rounded-full">
              신안군수 김태성
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-3">
            신안 정책마당
          </h1>
          <p className="text-lg text-blue-200 font-medium mb-8">
            군민이 제안하고, 군민이 함께하면, 신안이 바뀝니다
          </p>

          <Link
            href="/participate"
            className="inline-block rounded-full bg-[#E8941A] px-10 py-4 text-lg font-black text-white shadow-lg hover:bg-[#d17a0f] hover:shadow-xl transition-all"
          >
            💡 아이디어 제안하기
          </Link>
          <p className="text-blue-300 text-xs mt-3">익명 가능 · 3단계 · 1분 완료</p>
        </div>
      </section>

      {/* ━━━ 실시간 카운트 ━━━ */}
      <section className="max-w-5xl mx-auto px-4 -mt-5 relative z-10">
        <ProposalStats />
      </section>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">

        {/* ━━━ 최근 제안 (실시간) ━━━ */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-black text-[#1B3A6B]">🗣️ 최근 군민 제안</h2>
            <Link href="/participate" className="text-sm font-bold text-[#1B3A6B] hover:text-[#E8941A] transition-colors">
              전체 보기 →
            </Link>
          </div>
          <RecentProposals />
        </section>

        {/* ━━━ 2단 그리드 ━━━ */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* 제안 안내 */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-black text-[#1B3A6B] mb-3">✍️ 이렇게 제안하세요</h2>
            <div className="space-y-3 mb-5">
              {[
                { step: '1', text: '주제 선택 — 도로·환경·농업·복지 등 7개 분야' },
                { step: '2', text: '제목과 내용 작성 — 불편함과 개선 방향' },
                { step: '3', text: '제출 — 익명 가능, 공개 게시판에 바로 게재' },
              ].map((s) => (
                <div key={s.step} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1B3A6B] text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    {s.step}
                  </div>
                  <p className="text-sm text-gray-600">{s.text}</p>
                </div>
              ))}
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
            <h2 className="text-lg font-black text-[#1B3A6B] mb-2">📄 5대 공약 정책 제안</h2>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              농어촌 르네상스, 교통혁신, 의료·복지,<br />
              체류형 관광, 신재생에너지 분야 정책안
            </p>
            <div className="space-y-2 mb-4">
              {[
                { icon: '🌾', label: '농어촌 르네상스', href: '/proposals#rural' },
                { icon: '🚢', label: '육상·해상 교통혁신', href: '/proposals#transport' },
                { icon: '⚡', label: '신재생에너지 활성화', href: '/proposals#energy' },
              ].map((item) => (
                <Link key={item.href} href={item.href}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                  <span>{item.icon}</span>
                  <span className="text-sm font-bold text-gray-700">{item.label}</span>
                  <span className="ml-auto text-gray-300 text-xs">→</span>
                </Link>
              ))}
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
          <div className="bg-gradient-to-r from-[#1B3A6B] to-[#2d5aa0] rounded-2xl p-5 mb-3 text-white">
            <div className="flex items-start gap-3">
              <span className="text-3xl shrink-0">🆕</span>
              <div>
                <div className="text-xs font-bold text-blue-200 mb-1">2026년 7월 1일 출범</div>
                <div className="font-black text-lg leading-snug mb-1">전남광주통합특별시 공식 출범</div>
                <div className="text-sm text-blue-100">
                  신안군은 특별시 산하 기초지자체로 편입, 6개월 내 조례 정비 의무 발생
                </div>
                <a href="https://jeonnam-gwangju.go.kr" target="_blank" rel="noopener noreferrer"
                   className="inline-block mt-2 text-xs font-bold text-[#E8941A] hover:underline">
                  jeonnam-gwangju.go.kr →
                </a>
              </div>
            </div>
          </div>
          {SPECIAL_CITY_NEWS.map((news) => (
            <a key={news.title} href={news.url} target="_blank" rel="noopener noreferrer"
               className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-[#1B3A6B]/30 hover:shadow-md transition-all group">
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-gray-800 group-hover:text-[#1B3A6B] mb-1">{news.title}</div>
                <div className="text-xs text-gray-500">{news.note}</div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-xs font-bold text-gray-400">{news.source}</div>
                <div className="text-xs text-gray-300">{news.date}</div>
              </div>
            </a>
          ))}
        </section>

        {/* ━━━ 군수 메시지 ━━━ */}
        <section className="bg-[#1B3A6B] rounded-2xl p-6 text-white">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full border-2 border-white/30 overflow-hidden shrink-0">
              <Image src="/candidate_face.png" alt="김태성 군수" width={48} height={48} className="object-cover object-top w-full h-full" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-bold text-[#E8941A] mb-1">군수 메시지</div>
              <p className="text-sm text-blue-100 leading-relaxed mb-3">
                군민 여러분의 생각과 제안을 직접 읽겠습니다.<br />
                신안 정책마당에 아이디어를 남겨주세요.
              </p>
              <Link href="/message" className="text-xs font-bold text-white/70 hover:text-white hover:underline transition-colors">
                메시지 전체 보기 →
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
