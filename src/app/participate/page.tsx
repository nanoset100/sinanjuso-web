'use client';

import Link from 'next/link';

const CATEGORIES = [
  { value: 'road',     label: '🛣️ 도로·교통' },
  { value: 'env',      label: '🌿 청소·환경' },
  { value: 'farm',     label: '🌾 농업·어업' },
  { value: 'edu',      label: '🎓 교육·청년' },
  { value: 'culture',  label: '🎨 문화·관광' },
  { value: 'welfare',  label: '❤️ 의료·복지' },
  { value: 'other',    label: '💬 기타' },
];

const REGIONS = [
  '지도읍', '압해읍', '암태면', '자은면', '비금면', '도초면',
  '신의면', '장산면', '안좌면', '팔금면', '증도면', '임자면',
  '흑산면', '하의면', '신안군 전체',
];

export default function ParticipatePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">

        <div className="mb-8">
          <div className="text-sm text-gray-400 font-medium mb-1">
            <Link href="/" className="hover:text-[#1B3A6B]">홈</Link> / 군민 참여 마당
          </div>
          <h1 className="text-3xl font-black text-[#1B3A6B] mb-2">🗣️ 군민 참여 마당</h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            생활 속 불편함, 좋은 아이디어를 알려주세요.<br />
            군수님이 직접 읽습니다.
          </p>
        </div>

        {/* 안내 */}
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-6 text-sm text-amber-800">
          <strong>💡 이 공간은 아이디어 제안 채널입니다.</strong><br />
          개인 민원 처리는 <a href="https://www.shinan.go.kr" target="_blank" rel="noopener noreferrer" className="underline font-bold">신안군청 공식 홈페이지</a>를 이용해주세요.
          이 곳은 신안 전체를 위한 공개 아이디어를 나누는 자리입니다.
        </div>

        {/* 제안 폼 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="font-black text-lg text-[#1B3A6B] mb-5">새 아이디어 제안하기</h2>

          {/* Step 1: 주제 선택 */}
          <div className="mb-5">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Step 1. 주제 선택
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {CATEGORIES.map((cat) => (
                <label key={cat.value} className="flex items-center gap-2 p-2.5 rounded-lg border border-gray-200 cursor-pointer hover:border-[#1B3A6B]/40 hover:bg-blue-50 transition-colors text-sm">
                  <input type="radio" name="category" value={cat.value} className="accent-[#1B3A6B]" />
                  {cat.label}
                </label>
              ))}
            </div>
          </div>

          {/* Step 2: 내용 */}
          <div className="mb-5">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Step 2. 제안 내용
            </label>
            <input
              type="text"
              placeholder="제목을 입력하세요"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-3 focus:outline-none focus:border-[#1B3A6B] focus:ring-1 focus:ring-[#1B3A6B]"
            />
            <textarea
              rows={4}
              placeholder="어떤 불편이 있고, 어떻게 바뀌면 좋을지 적어주세요."
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:border-[#1B3A6B] focus:ring-1 focus:ring-[#1B3A6B]"
            />
            <select className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mt-3 focus:outline-none focus:border-[#1B3A6B] bg-white">
              <option value="">읍·면을 선택하세요 (선택)</option>
              {REGIONS.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          {/* Step 3: 제출 */}
          <div className="mb-5">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Step 3. 제출 정보 (모두 선택 사항)
            </label>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="이름 (익명 가능)"
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1B3A6B]"
              />
              <input
                type="tel"
                placeholder="연락처 (선택)"
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1B3A6B]"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-3 mb-4 text-xs text-gray-500">
            ※ 제출된 제안은 공개 게시판에 게시됩니다. 개인 민원이나 특정인을 비방하는 내용은 게시되지 않습니다.
          </div>

          <button
            className="w-full rounded-xl bg-[#E8941A] py-4 text-base font-black text-white hover:bg-[#d17a0f] transition-colors"
            onClick={() => alert('현재 게시판 기능을 구축 중입니다. 곧 오픈합니다!')}
          >
            💡 제안 제출하기
          </button>
        </div>

        {/* 공개 게시판 */}
        <div>
          <h2 className="font-black text-lg text-[#1B3A6B] mb-4">공개 제안 게시판</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center text-gray-400">
            <div className="text-4xl mb-3">📭</div>
            <div className="font-bold mb-1">아직 제안이 없습니다</div>
            <div className="text-sm">첫 번째 제안자가 되어보세요!</div>
          </div>
        </div>

      </div>
    </div>
  );
}
