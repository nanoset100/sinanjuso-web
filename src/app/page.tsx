import { CANDIDATE_PROFILE, ELECTION_INFO, POLICIES } from '@/lib/static-data';
import ContactForm from '@/components/ContactForm';
import PolicyGrid from '@/components/PolicyGrid';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden pb-24">

      {/* 1. Hero Section (시선 강탈) */}
      <section className="relative w-full bg-[#1B3A6B] pt-20 pb-32 sm:pt-32 sm:pb-48 flex flex-col items-center justify-center text-center px-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E8941A]/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/3" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* 메인 사진 (실제 후보님 누끼 이미지 적용) */}
          <div className="w-56 h-56 sm:w-72 sm:h-72 mb-10 rounded-full bg-gradient-to-tr from-blue-50 to-white/90 border-8 border-white/10 shadow-2xl overflow-hidden shadow-[#1B3A6B]/50 flex items-center justify-center relative">
            <Image src="/candidate_face.png" alt="김태성 후보" fill className="object-cover object-top hover:scale-105 transition-transform duration-700" />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-[1.15] tracking-tight break-keep">
            신안의 100년을 바꾸는<br className="hidden sm:block" />
            <span className="block mt-2 text-[#E8941A]">단 하나의 비전</span>
          </h1>
        </div>
      </section>

      {/* 2. The Hook */}
      <section className="relative -mt-20 z-20 px-4 mx-auto max-w-4xl sm:max-w-5xl">
        <div className="bg-white rounded-[2rem] shadow-2xl shadow-[#1B3A6B]/10 p-8 sm:p-14 text-center border border-gray-100 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#1B3A6B] to-[#E8941A]" />

          <span className="inline-block bg-[#E3F2FD] text-[#1B3A6B] font-black px-4 py-1.5 rounded-full text-sm mb-6">주민 참여 앱 오픈</span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#1B3A6B] leading-snug mb-6">
            김태성의 6대 정책,<br className="sm:hidden" />
            가장 먼저 받아보시겠습니까?
          </h2>
          <p className="text-gray-500 font-medium sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            신안군민의 목소리가 직통으로 전달되는 공식 앱을 설치하고<br className="hidden sm:block" />
            가장 빠른 소식과 맞춤형 혜택을 만나보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="h-16 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors border-2 border-gray-100 rounded-2xl px-10 font-bold text-gray-400 sm:text-lg cursor-not-allowed">
              Google Play (준비중)
            </div>
            <div className="h-16 flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors border-2 border-gray-100 rounded-2xl px-10 font-bold text-gray-400 sm:text-lg cursor-not-allowed">
              App Store (준비중)
            </div>
          </div>
        </div>
      </section>

      {/* 3. 6대 정책 그리드 (타임라인 대체) */}
      <section className="py-24 sm:py-32 px-4 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-[#1B3A6B]">핵심 정책 6가지</h2>
          <div className="w-16 h-1.5 bg-[#E8941A] mx-auto mt-6 rounded-full" />
          <p className="mt-8 text-lg font-bold text-gray-500">탭하면 상세 추진 계획을 확인할 수 있습니다</p>
        </div>

        {/* 6대 정책 컴포넌트 렌더링 */}
        <PolicyGrid policies={POLICIES} />
      </section>

      {/* 4. Action & Engagement (D-Day & 소통) */}
      <section className="py-24 sm:py-32 bg-[#1B3A6B] px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="text-center mb-16 px-4 w-full">
            <div className="inline-block bg-[#E8941A] text-white font-black px-6 py-2 rounded-full mb-8 text-sm tracking-wider">
              {ELECTION_INFO.title}
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-8">
              D-{ELECTION_INFO.dDay}<br />
              <span className="text-blue-200 text-3xl sm:text-5xl mt-4 block leading-snug break-keep">
                신안의 미래를 결정할 시간입니다
              </span>
            </h2>
          </div>

          <div className="w-full max-w-2xl bg-white p-2 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl">
            {/* Formspree 연동 폼 컴포넌트 */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Floating CTA (모바일 고정, PC 우측하단 고정) */}
      <div className="fixed bottom-0 left-0 w-full z-50 p-4 sm:p-0 sm:bottom-8 sm:left-auto sm:right-8 sm:w-auto">
        <a href="#" className="flex items-center justify-center gap-3 w-full sm:w-auto h-16 sm:h-16 sm:px-10 bg-[#E8941A] hover:bg-[#d17a0f] text-white font-black text-lg sm:text-xl rounded-2xl sm:rounded-full shadow-2xl shadow-[#E8941A]/40 transition-[transform,background] active:scale-95 hover:-translate-y-1 no-underline border border-white/20">
          <span className="text-2xl">📱</span>
          캠프 공식 앱 다운로드
        </a>
      </div>

    </div>
  );
}
