import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1B3A6B] py-10 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-md bg-white/20 flex items-center justify-center">
                <span className="text-white text-xs font-black">정</span>
              </div>
              <h3 className="text-lg font-black">신안 정책마당</h3>
            </div>
            <p className="text-sm opacity-75 leading-relaxed">
              군민이 제안하고, 군민이 함께하면,<br />신안이 바뀝니다.<br />
              <span className="text-xs opacity-60 mt-1 block">
                본 사이트는 공개된 정책 제안 채널이며 특정 정당·단체와 무관합니다.
              </span>
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-bold text-sm uppercase tracking-wider opacity-60">메뉴</h4>
            <ul className="space-y-1.5 text-sm">
              <li><Link href="/participate"  className="opacity-75 hover:opacity-100 hover:text-[#E8941A] transition-colors">군민 참여 마당</Link></li>
              <li><Link href="/proposals"    className="opacity-75 hover:opacity-100 hover:text-[#E8941A] transition-colors">정책 제안</Link></li>
              <li><Link href="/special-city" className="opacity-75 hover:opacity-100 hover:text-[#E8941A] transition-colors">전남광주특별시 소식</Link></li>
              <li><Link href="/message"      className="opacity-75 hover:opacity-100 hover:text-[#E8941A] transition-colors">군수 메시지</Link></li>
              <li><Link href="/about"        className="opacity-75 hover:opacity-100 hover:text-[#E8941A] transition-colors">소개</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-bold text-sm uppercase tracking-wider opacity-60">관련 링크</h4>
            <ul className="space-y-1.5 text-sm">
              <li>
                <a href="https://www.shinan.go.kr" target="_blank" rel="noopener noreferrer"
                   className="opacity-75 hover:opacity-100 hover:text-[#E8941A] transition-colors">
                  신안군청 공식 홈페이지 →
                </a>
              </li>
              <li>
                <a href="https://jeonnam-gwangju.go.kr" target="_blank" rel="noopener noreferrer"
                   className="opacity-75 hover:opacity-100 hover:text-[#E8941A] transition-colors">
                  전남광주통합특별시 →
                </a>
              </li>
              <li className="pt-1">
                <a href="mailto:nanoset@korea.com"
                   className="opacity-75 hover:opacity-100 hover:text-[#E8941A] transition-colors">
                  nanoset@korea.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/20 pt-6 text-center text-xs opacity-50">
          <p>© {year} 신안 정책마당 — 자원봉사 운영팀. 민원 처리는 <a href="https://www.shinan.go.kr" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#E8941A]">신안군청 공식 홈페이지</a>를 이용하세요.</p>
        </div>
      </div>
    </footer>
  );
}
