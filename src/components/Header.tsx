'use client';

import Link from 'next/link';
import { useState } from 'react';

const NAV_ITEMS = [
  { href: '/promise',      label: '공약 이행' },
  { href: '/proposals',    label: '정책 제안' },
  { href: '/participate',  label: '군민 참여' },
  { href: '/special-city', label: '특별시 소식' },
  { href: '/message',      label: '군수 메시지' },
  { href: '/about',        label: '소개' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-[#1B3A6B] flex items-center justify-center">
            <span className="text-white text-sm font-black">정</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-black tracking-tight text-[#1B3A6B]">신안 정책마당</span>
            <span className="text-[10px] text-gray-400 font-medium hidden sm:block">군민이 제안하고, 군수가 직접 읽고, 신안이 바뀝니다</span>
          </div>
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden lg:flex items-center space-x-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-bold text-gray-700 rounded-lg transition-colors hover:text-[#1B3A6B] hover:bg-blue-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA 버튼 + 모바일 햄버거 */}
        <div className="flex items-center gap-2">
          <Link
            href="/participate"
            className="rounded-full bg-[#E8941A] px-4 py-2 text-sm font-bold text-white transition-all hover:bg-[#d17a0f] hover:shadow-md"
          >
            💡 제안하기
          </Link>
          <button
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 드롭다운 */}
      {menuOpen && (
        <div className="lg:hidden border-t bg-white px-4 py-3 space-y-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-3 py-2.5 text-sm font-bold text-gray-700 rounded-lg hover:bg-blue-50 hover:text-[#1B3A6B]"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2 border-t">
            <Link
              href="/participate"
              className="block text-center rounded-full bg-[#E8941A] px-4 py-2.5 text-sm font-bold text-white"
              onClick={() => setMenuOpen(false)}
            >
              💡 제안하기
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
