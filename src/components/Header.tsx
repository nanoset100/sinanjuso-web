import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-black tracking-tight text-[#1B3A6B]">김태성과 신안</span>
                </Link>
                <nav className="hidden space-x-8 md:flex">
                    <Link href="/profile" className="text-sm font-bold text-gray-700 transition-colors hover:text-[#E8941A]">프로필</Link>
                    <Link href="/policies" className="text-sm font-bold text-gray-700 transition-colors hover:text-[#E8941A]">정책</Link>
                    <Link href="/news" className="text-sm font-bold text-gray-700 transition-colors hover:text-[#E8941A]">뉴스</Link>
                    <Link href="/contact" className="text-sm font-bold text-gray-700 transition-colors hover:text-[#E8941A]">소통</Link>
                    <Link href="/notifications" className="text-sm font-bold text-gray-700 transition-colors hover:text-[#E8941A]">알림</Link>
                </nav>
                <div className="flex items-center">
                    <Link
                        href="/contact"
                        className="rounded-full bg-[#E8941A] px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#d17a0f] hover:shadow-lg"
                    >
                        응원 메시지
                    </Link>
                </div>
            </div>
        </header>
    );
}
