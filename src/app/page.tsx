import { CANDIDATE_PROFILE, ELECTION_INFO, POLICIES, KEY_POLICIES_8, OFFICIAL_PLEDGE, CAMP_CONTACT } from '@/lib/static-data';
import ContactForm from '@/components/ContactForm';
import PolicyGrid from '@/components/PolicyGrid';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden pb-24">

      {/* ━━━ 1. HERO — 후보 사진 + 캐치플레이즈 ━━━ */}
      <section className="relative w-full bg-[#1B3A6B] pt-20 pb-32 sm:pt-32 sm:pb-48 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        {/* 배경 효과 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E8941A]/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/3" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* 조국혁신당 뱃지 */}
          <div className="mb-6 flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2">
            <span className="w-2 h-2 rounded-full bg-[#E8941A] inline-block" />
            <span className="text-white/90 font-bold text-sm tracking-wide">조국혁신당 신안군수 예비후보</span>
          </div>

          {/* 후보 사진 */}
          <div className="w-52 h-52 sm:w-68 sm:h-68 mb-10 rounded-full bg-gradient-to-tr from-blue-50 to-white/90 border-8 border-white/10 shadow-2xl overflow-hidden shadow-[#1B3A6B]/50 flex items-center justify-center relative" style={{ width: '14rem', height: '14rem' }}>
            <Image src="/candidate_face.png" alt="김태성 후보" fill className="object-cover object-top hover:scale-105 transition-transform duration-700" />
          </div>

          {/* 캐치플레이즈 */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[1.15] tracking-tight break-keep whitespace-pre-line">
            {CANDIDATE_PROFILE.catchphrase}
          </h1>

          {/* 공식 슬로건 */}
          <p className="mt-6 text-lg sm:text-2xl font-bold text-blue-200 whitespace-pre-line">
            {CANDIDATE_PROFILE.slogan}
          </p>

          {/* 연합 메시지 */}
          <p className="mt-6 max-w-2xl text-white/70 text-sm sm:text-base font-medium leading-relaxed">
            {CANDIDATE_PROFILE.allianceMessage}
          </p>
        </div>
      </section>

      {/* ━━━ 2. 비전 카드 — 중앙으로 올라오는 강조 ━━━ */}
      <section className="relative -mt-20 z-20 px-4 mx-auto max-w-4xl sm:max-w-5xl">
        <div className="bg-white rounded-[2rem] shadow-2xl shadow-[#1B3A6B]/10 p-8 sm:p-14 text-center border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#1B3A6B] to-[#E8941A]" />
          <p className="text-[#1B3A6B] font-black text-xl sm:text-2xl mb-3">군정 비전</p>
          <h2 className="text-2xl sm:text-4xl font-black text-[#1B3A6B] leading-snug mb-6 break-keep">
            {CANDIDATE_PROFILE.vision}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {CANDIDATE_PROFILE.coreValues.map((v) => (
              <span key={v} className="bg-[#1B3A6B]/10 text-[#1B3A6B] font-black px-5 py-2 rounded-full text-base">
                ✦ {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ 3. 8대 핵심 공약 — 생활밀착형 ━━━ */}
      <section className="py-24 sm:py-32 px-4 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#E8941A] text-white font-black px-6 py-2 rounded-full mb-6 text-sm tracking-wider">
            바로 체감하는 변화
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#1B3A6B]">8대 핵심 공약</h2>
          <div className="w-16 h-1.5 bg-[#E8941A] mx-auto mt-6 rounded-full" />
          <p className="mt-6 text-lg font-bold text-gray-500 break-keep">
            군민의 삶에 바로 닿는 실천 공약입니다
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KEY_POLICIES_8.map((p) => (
            <Link
              key={p.id}
              href={}
              className="group rounded-2xl p-6 border-2 border-transparent hover:border-[#E8941A] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block cursor-pointer"
              style={{ backgroundColor: p.badgeColor }}
            >
              <div className="text-4xl mb-3">{p.emoji}</div>
              <span
                className="text-xs font-black tracking-wider px-2 py-0.5 rounded-full mb-3 inline-block"
                style={{ backgroundColor: p.badgeTextColor + '20', color: p.badgeTextColor }}
              >
                공약 {p.number}
              </span>
              <h3 className="text-lg font-black text-[#1B3A6B] mb-2 break-keep">{p.title}</h3>
              <p className="text-sm font-bold text-[#E8941A] mb-3">{p.hook}</p>
              <p className="text-xs text-gray-600 leading-relaxed">{p.description}</p>
              <span className="mt-3 inline-block text-xs font-bold" style={{ color: p.badgeTextColor }}>자세히 보기 →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ━━━ 4. 5대 공약 그리드 ━━━ */}
      <section className="py-16 sm:py-24 px-4 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="inline-block bg-[#1B3A6B]/10 text-[#1B3A6B] font-black px-6 py-2 rounded-full mb-6 text-sm tracking-wider">
            공식 공약
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#1B3A6B]">5대 공약</h2>
          <div className="w-16 h-1.5 bg-[#E8941A] mx-auto mt-6 rounded-full" />
          <p className="mt-6 text-lg font-bold text-gray-500">탭하면 상세 추진 계획을 확인할 수 있습니다</p>
        </div>
        <PolicyGrid policies={POLICIES} />
      </section>

      {/* ━━━ 5. 지역별 공약 입구 ━━━ */}
      <section className="py-16 bg-gray-100 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1B3A6B] mb-4">우리 동네 공약 보기</h2>
          <p className="text-gray-600 font-bold mb-10 text-lg break-keep">
            지도읍, 압해읍, 증도면 등 14개 읍·면별 맞춤 공약을 확인하세요
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {['지도읍', '압해읍', '증도면', '임자면', '자은면', '비금면', '도초면', '흑산면', '하의면', '신의면', '장산면', '안좌면', '팔금면', '암태면'].map((name) => (
              <Link
                key={name}
                href={`/regions#${name}`}
                className="bg-white border-2 border-[#1B3A6B]/20 hover:border-[#E8941A] hover:bg-[#E8941A]/5 text-[#1B3A6B] font-bold px-4 py-2 rounded-full text-sm transition-all"
              >
                {name}
              </Link>
            ))}
          </div>
          <Link
            href="/regions"
            className="inline-flex items-center gap-2 bg-[#1B3A6B] text-white font-black px-10 py-4 rounded-full text-lg hover:bg-[#152d54] transition-all hover:-translate-y-1 shadow-lg"
          >
            전체 지역 공약 보기 →
          </Link>
        </div>
      </section>

      {/* ━━━ 6. 공직자 3대 약속 ━━━ */}
      <section className="py-24 sm:py-32 px-4 mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-[#1B3A6B] mb-4">공직자 중심 군정 운영</h2>
          <div className="w-16 h-1.5 bg-[#E8941A] mx-auto mb-6 rounded-full" />
          <p className="text-gray-500 font-bold text-lg break-keep">
            공무원이 소신 있게 일할 수 있는 신안을 만들겠습니다
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {OFFICIAL_PLEDGE.map((pledge) => (
            <div key={pledge.id} className="rounded-2xl p-8 border-2 border-transparent hover:border-[#E8941A]/30 transition-all" style={{ backgroundColor: pledge.color }}>
              <div className="text-4xl mb-4">{pledge.emoji}</div>
              <h3 className="text-xl font-black text-[#1B3A6B] mb-5">{pledge.title}</h3>
              <ul className="space-y-3">
                {pledge.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700 font-medium text-sm">
                    <span className="text-[#E8941A] font-black mt-0.5">✦</span>
                    <span className="break-keep">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ━━━ 7. 유튜브 섹션 ━━━ */}
      <section className="py-16 bg-gray-900 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-3xl">▶️</span>
            <h2 className="text-3xl font-black text-white">김태성 TV</h2>
          </div>
          <p className="text-gray-400 font-bold mb-8 text-lg break-keep">
            5월 집중 숏폼 콘텐츠 — 신안의 변화를 영상으로 확인하세요
          </p>
          <a
            href="https://www.youtube.com/@김태성TV"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-black px-10 py-4 rounded-full text-lg transition-all hover:-translate-y-1 shadow-lg"
          >
            <span className="text-2xl">▶️</span>
            유튜브 채널 구독하기
          </a>
        </div>
      </section>

      {/* ━━━ 8. D-Day + 주민 건의 폼 ━━━ */}
      <section className="py-24 sm:py-32 bg-[#1B3A6B] px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="text-center mb-16 px-4 w-full">
            <div className="inline-block bg-[#E8941A] text-white font-black px-6 py-2 rounded-full mb-8 text-sm tracking-wider">
              {ELECTION_INFO.title}
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-8">
              D-{ELECTION_INFO.dDay}
              <span className="text-blue-200 text-3xl sm:text-4xl mt-4 block leading-snug break-keep">
                신안의 미래를 결정할 시간입니다
              </span>
            </h2>
          </div>

          <div className="w-full max-w-2xl">
            <div className="text-center mb-6">
              <p className="text-white font-black text-xl mb-2">📬 응원 메시지 & 건의사항</p>
              <p className="text-blue-200 text-sm">여러분의 목소리가 정책이 됩니다</p>
            </div>
            <div className="bg-white p-2 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl">
              <ContactForm />
            </div>
          </div>

          {/* 캠프 연락처 */}
          <div className="mt-12 w-full max-w-2xl">
            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 text-center border border-white/20">
              <p className="text-white font-black text-lg mb-6">📍 캠프 사무소</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
                <a href="tel:0612054059" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold px-6 py-3 rounded-2xl transition-all">
                  📞 061-205-4059
                </a>
                <a href="mailto:ts9838@hanmail.net" className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-bold px-6 py-3 rounded-2xl transition-all">
                  ✉️ ts9838@hanmail.net
                </a>
              </div>
              <p className="text-blue-200 text-sm mt-4 font-medium">전남 신안군 압해읍 압해로 797-1</p>
            </div>
          </div>

        </div>
      </section>

      {/* ━━━ 앱 다운로드 + Floating CTA ━━━ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 sm:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#1B3A6B] to-[#E8941A]" />
            <span className="inline-block bg-[#E3F2FD] text-[#1B3A6B] font-black px-4 py-1.5 rounded-full text-sm mb-6">캠프 공식 앱</span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1B3A6B] mb-4 break-keep">
              김태성과 신안 앱 설치하기
            </h2>
            <p className="text-gray-500 font-medium mb-8 break-keep">
              가장 빠른 선거 소식과 맞춤형 정책을 앱으로 받아보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* App Store - 실제 올라간 상태 */}
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 flex items-center justify-center gap-2 bg-[#1B3A6B] hover:bg-[#152d54] transition-colors rounded-2xl px-10 font-bold text-white sm:text-lg"
              >
                🍎 App Store 다운로드
              </a>
              {/* Google Play - 심사중 */}
              <div className="h-16 flex items-center justify-center bg-gray-50 border-2 border-gray-100 rounded-2xl px-10 font-bold text-gray-400 sm:text-lg cursor-not-allowed">
                Google Play (출시 예정)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <div className="fixed bottom-0 left-0 w-full z-50 p-4 sm:p-0 sm:bottom-8 sm:left-auto sm:right-8 sm:w-auto">
        <a
          href="https://apps.apple.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-full sm:w-auto h-16 sm:h-16 sm:px-10 bg-[#E8941A] hover:bg-[#d17a0f] text-white font-black text-lg sm:text-xl rounded-2xl sm:rounded-full shadow-2xl shadow-[#E8941A]/40 transition-[transform,background] active:scale-95 hover:-translate-y-1 no-underline border border-white/20"
        >
          <span className="text-2xl">📱</span>
          캠프 공식 앱 다운로드
        </a>
      </div>

    </div>
  );
}
