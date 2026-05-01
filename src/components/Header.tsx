import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md">
      {/* 조국혁신당 상단 바 */}
      <div className="w-full bg-[#1B3A6B] text-white text-center py-1.5 text-xs font-bold tracking-wide">
        🗳 2026년 6월 3일 — 조국혁신당 신안군수 예비후보 <span className="text-[#E8941A]">김태성</span>
      </div>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-black tracking-tight text-[#1B3A6B]">김태성과 신안사랑</span>
        </Link>
        <nav className="hidden space-x-6 md:flex">
          <Link href="/profile"    className="text-sm font-bold text-gray-700 transition-colors hover:text-[#E8941A]">프로필</Link>
          <Link href="/policies"   className="text-sm font-bold text-gray-700 transition-colors hover:text-[#E8941A]">5대 공약</Link>
          <Link href="/regions"    className="text-sm font-bold text-gray-700 transition-colors hover:text-[#E8941A]">지역 공약</Link>
          <Link href="/news"       className="text-sm font-bold text-gray-700 transition-colors hover:text-[#E8941A]">뉴스</Link>
          <Link href="/contact"    className="text-sm font-bold text-gray-700 transition-colors hover:text-[#E8941A]">소통</Link>
          <Link href="/notifications" className="text-sm font-bold text-gray-700 transition-colors hover:text-[#E8941A]">알림</Link>
        </nav>
        <Link
          href="/contact"
          className="rounded-full bg-[#E8941A] px-5 py-2 text-sm font-bold text-white transition-all hover:bg-[#d17a0f] hover:shadow-lg"
        >
          응원 메시지
        </Link>
      </div>
    </header>
  );
}
