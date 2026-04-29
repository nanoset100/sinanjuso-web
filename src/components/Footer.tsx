import Link from 'next/link';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#1B3A6B] py-12 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div>
                        <h3 className="mb-4 text-xl font-bold">김태성과 신안</h3>
                        <p className="text-sm opacity-80">
                            신안의 새로운 미래, 김태성이 함께합니다.<br />
                            섬마을 구석구석 행복이 전달되도록 노력하겠습니다.
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-4 font-bold uppercase tracking-wider">링크</h4>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li><Link href="/profile" className="transition-colors duration-300 hover:text-[#E8941A]">프로필</Link></li>
                            <li><Link href="/policies" className="transition-colors duration-300 hover:text-[#E8941A]">정책</Link></li>
                            <li><Link href="/news" className="transition-colors duration-300 hover:text-[#E8941A]">뉴스</Link></li>
                            <li><Link href="/contact" className="transition-colors duration-300 hover:text-[#E8941A]">소통</Link></li>
                            <li><Link href="/notifications" className="transition-colors duration-300 hover:text-[#E8941A]">알림</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 font-bold uppercase tracking-wider">캠프 사무실</h4>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li>전남 신안군 압해읍 압해로 797-1</li>
                            <li><a href="mailto:ts9838@hanmail.net" className="hover:text-[#E8941A] transition-colors">ts9838@hanmail.net</a></li>
                            <li><a href="tel:0612054059" className="hover:text-[#E8941A] transition-colors">061-205-4059</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-white/20 pt-8 text-center text-xs opacity-60">
                    <p>© {year} 김태성과 신안군수 예비후보 캠프. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
