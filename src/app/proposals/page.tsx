import Link from 'next/link';

export default function ProposalsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">

        <div className="mb-8">
          <div className="text-sm text-gray-400 font-medium mb-1">
            <Link href="/" className="hover:text-[#1B3A6B]">홈</Link> / 정책 제안
          </div>
          <h1 className="text-3xl font-black text-[#1B3A6B] mb-2">📄 정책 제안</h1>
          <p className="text-gray-600 text-sm">전문가·연구자·관계자의 구체적 정책안을 모읍니다.</p>
        </div>

        {/* 조례 제안 트래커 */}
        <div id="ordinance" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-2xl">📋</span>
            <div>
              <h2 className="font-black text-lg text-[#1B3A6B]">조례 제안 트래커</h2>
              <p className="text-sm text-gray-500">전남광주특별시 출범 후 6개월 내 정비 필요</p>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mb-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-orange-600 font-black text-sm">⏰ D+1</span>
              <span className="text-xs text-orange-600 font-bold">2026년 12월 31일까지 정비 완료 필요</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              전남광주 통합특별시 특별법(법률 제21446호) 및 시행령(대통령령 제36423호)에 따라
              신안군은 수산업, 해양관광, 농업, 에너지 등 영역의 조례를 신설·개정해야 합니다.
            </p>
          </div>

          <div className="text-center py-6 text-gray-400 text-sm border-2 border-dashed border-gray-200 rounded-xl">
            조례 정비 대상 목록을 준비 중입니다.<br />
            <span className="text-xs">전문가 제안은 nanoset@korea.com으로 보내주세요</span>
          </div>
        </div>

        {/* 해양관광 */}
        <div id="marine" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-2xl">🚢</span>
            <div>
              <h2 className="font-black text-lg text-[#1B3A6B]">해양관광 정책 제안</h2>
              <p className="text-sm text-gray-500">신안군 실정에 맞는 중소형 해양관광 정책</p>
            </div>
          </div>
          <div className="space-y-2 mb-4">
            {[
              '크루즈보다 소형 선박 중심 도서 투어 패키지',
              '염전·갯벌 체험 브랜드화',
              '1004섬 스탬프 투어 앱',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-[#E8941A] mt-0.5 shrink-0">▸</span>
                {item}
              </div>
            ))}
          </div>
          <div className="text-center py-5 text-gray-400 text-sm border-2 border-dashed border-gray-200 rounded-xl">
            세부 제안서를 준비 중입니다.
          </div>
        </div>

        {/* 에너지·농어민 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-2xl">🌱</span>
            <div>
              <h2 className="font-black text-lg text-[#1B3A6B]">에너지·농어민 정책 제안</h2>
              <p className="text-sm text-gray-500">신재생에너지 수익 환원 + 농산물 가공·유통</p>
            </div>
          </div>
          <div className="text-center py-5 text-gray-400 text-sm border-2 border-dashed border-gray-200 rounded-xl">
            제안서를 준비 중입니다.
          </div>
        </div>

        {/* 제안 제출 CTA */}
        <div className="bg-[#1B3A6B] rounded-2xl p-6 text-white text-center">
          <h3 className="font-black text-lg mb-2">전문가·연구자 제안 접수</h3>
          <p className="text-sm text-blue-200 mb-4">
            PDF 정책 제안서를 보내주시면 이 페이지에 게시합니다.
          </p>
          <a
            href="mailto:nanoset@korea.com?subject=신안 정책마당 - 정책 제안서 제출"
            className="inline-block rounded-full bg-[#E8941A] px-6 py-2.5 text-sm font-black text-white hover:bg-[#d17a0f] transition-colors"
          >
            📧 제안서 보내기
          </a>
        </div>

      </div>
    </div>
  );
}
