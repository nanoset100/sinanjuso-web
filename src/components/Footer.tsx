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
                            <li><a href="/" className="hover:text-[#E8941A]">홈</a></li>
                            <li><a href="/policies" className="hover:text-[#E8941A]">정책</a></li>
                            <li><a href="/news" className="hover:text-[#E8941A]">뉴스 소식</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 font-bold uppercase tracking-wider">캠프 사무실</h4>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li>주소: 전라남도 신안군</li>
                            <li>이메일: campaign@kimtaesung.kr</li>
                            <li>전화: 061-XXX-XXXX</li>
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
