'use client';

import { useState } from 'react';
import { REGIONAL_POLICIES } from '@/lib/static-data';

const CATEGORY_COLORS: Record<string, string> = {
  교통: '#DBEAFE',
  경제: '#FEF9C3',
  관광: '#DCFCE7',
  복지: '#FCE7F3',
  의료: '#FEE2E2',
  생활: '#F3F4F6',
  청년: '#EDE9FE',
  주거: '#FFEDD5',
  문화: '#E0F2FE',
  교육: '#D1FAE5',
  재해: '#FEF3C7',
};
const CATEGORY_TEXT: Record<string, string> = {
  교통: '#1D4ED8',
  경제: '#92400E',
  관광: '#065F46',
  복지: '#9D174D',
  의료: '#991B1B',
  생활: '#374151',
  청년: '#5B21B6',
  주거: '#C2410C',
  문화: '#0369A1',
  교육: '#064E3B',
  재해: '#B45309',
};

export default function RegionsPage() {
  const [active, setActive] = useState(REGIONAL_POLICIES[0].id);
  const current = REGIONAL_POLICIES.find((r) => r.id === active)!;

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* 헤더 */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#1B3A6B]/10 text-[#1B3A6B] font-black px-6 py-2 rounded-full mb-4 text-sm">
            14개 읍·면 맞춤 공약
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#1B3A6B] mb-4">우리 동네 공약</h1>
          <div className="w-16 h-1.5 bg-[#E8941A] mx-auto mb-6 rounded-full" />
          <p className="text-gray-500 font-bold text-lg break-keep">
            우리 지역을 선택하면 맞춤 공약을 확인할 수 있습니다
          </p>
        </div>

        {/* 읍면 선택 탭 */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {REGIONAL_POLICIES.map((r) => (
            <button
              key={r.id}
              id={r.name}
              onClick={() => setActive(r.id)}
              className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all border-2 ${
                active === r.id
                  ? 'bg-[#1B3A6B] text-white border-[#1B3A6B] shadow-lg scale-105'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-[#E8941A] hover:text-[#E8941A]'
              }`}
            >
              {r.emoji} {r.name}
            </button>
          ))}
        </div>

        {/* 선택된 지역 공약 */}
        <div
          className="rounded-3xl p-8 sm:p-12 border-2 border-white shadow-xl transition-all"
          style={{ backgroundColor: current.color }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">{current.emoji}</span>
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#1B3A6B]">{current.name}</h2>
              <p className="text-[#E8941A] font-bold mt-1">총 {current.pledges.length}개 공약 분야</p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {current.pledges.map((pledge: any, i: number) => (
              <div
                key={i}
                className="bg-white/90 backdrop-blur rounded-2xl p-6 hover:bg-white hover:shadow-md transition-all"
              >
                {/* 제목 행 */}
                <div className="flex items-start gap-4 mb-3">
                  <span className="w-8 h-8 rounded-full bg-[#1B3A6B] text-white font-black text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <p className="font-black text-[#1B3A6B] text-lg break-keep leading-snug">{pledge.title}</p>
                      <span
                        className="text-xs font-black px-3 py-0.5 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor: CATEGORY_COLORS[pledge.category] || '#F3F4F6',
                          color: CATEGORY_TEXT[pledge.category] || '#374151',
                        }}
                      >
                        {pledge.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 세부 항목 */}
                {pledge.items && pledge.items.length > 0 && (
                  <div className="ml-12 mb-3">
                    <ul className="space-y-1">
                      {pledge.items.map((item: string, j: number) => (
                        <li key={j} className="flex items-start gap-2 text-gray-700 font-medium">
                          <span className="text-[#E8941A] font-black mt-0.5 flex-shrink-0">-</span>
                          <span className="break-keep leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 부연설명 */}
                {pledge.description && (
                  <div className="ml-12 mt-2 flex items-start gap-2">
                    <span className="text-[#1B3A6B] font-black text-xs mt-0.5 flex-shrink-0">▶</span>
                    <p className="text-gray-500 text-sm font-medium break-keep leading-snug italic">
                      {pledge.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 하단 안내 */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm font-medium mb-4">
            지역 공약에 대한 건의사항이나 추가 요청이 있으시면 아래로 연락해 주세요
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#E8941A] text-white font-black px-8 py-3 rounded-full hover:bg-[#d17a0f] transition-all"
          >
            📬 건의사항 전달하기
          </a>
        </div>

      </div>
    </div>
  );
}
