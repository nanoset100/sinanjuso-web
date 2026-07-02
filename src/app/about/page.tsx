import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">

        <div className="mb-8">
          <div className="text-sm text-gray-400 font-medium mb-1">
            <Link href="/" className="hover:text-[#1B3A6B]">홈</Link> / 소개
          </div>
          <h1 className="text-3xl font-black text-[#1B3A6B] mb-2">ℹ️ 신안 정책마당 소개</h1>
        </div>

        <div className="space-y-5">

          {/* 설립 배경 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-black text-lg text-[#1B3A6B] mb-3">이 사이트는 무엇인가요?</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              신안 정책마당은 <strong>군민의 아이디어와 정책 제안을 군수가 직접 읽는 공개 소통 채널</strong>입니다.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              2026년 6월 신안군수로 당선된 김태성 군수와의 협의를 거쳐,
              자원봉사 팀이 운영하는 민간 플랫폼으로 출발했습니다.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              기존 선거 캠프 웹사이트(sinanjuso-web.vercel.app)를 전환하여 만들었습니다.
            </p>
          </div>

          {/* 역할 구분 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-black text-lg text-[#1B3A6B] mb-4">신안군청 홈페이지와 뭐가 다른가요?</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-2 pr-4 font-bold text-gray-500 w-1/3">구분</th>
                    <th className="text-left py-2 pr-4 font-bold text-[#1B3A6B]">신안 정책마당</th>
                    <th className="text-left py-2 font-bold text-gray-500">군청 공식 홈피</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-50">
                    <td className="py-2 pr-4 font-medium text-gray-500">개인 민원</td>
                    <td className="py-2 pr-4 text-red-500">❌ 처리 안 함</td>
                    <td className="py-2 text-green-600">✅ 처리</td>
                  </tr>
                  <tr className="border-b border-gray-50">
                    <td className="py-2 pr-4 font-medium text-gray-500">역할</td>
                    <td className="py-2 pr-4">공개 아이디어·제안</td>
                    <td className="py-2">공식 행정·민원</td>
                  </tr>
                  <tr className="border-b border-gray-50">
                    <td className="py-2 pr-4 font-medium text-gray-500">운영</td>
                    <td className="py-2 pr-4">자원봉사팀 (민간)</td>
                    <td className="py-2">신안군청 (공식)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium text-gray-500">공개 여부</td>
                    <td className="py-2 pr-4">제안 공개 원칙</td>
                    <td className="py-2">행정 규정 준수</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 운영 원칙 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-black text-lg text-[#1B3A6B] mb-3">운영 원칙</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                '개인 민원은 처리하지 않으며 군청 공식 홈페이지로 안내합니다',
                '모든 제안은 원칙적으로 공개됩니다 (익명 제출 가능)',
                '특정 정당·단체와 무관하게 독립적으로 운영합니다',
                '운영팀이 직접 군수에게 제안 내용을 요약 전달합니다',
                '개인정보는 연락 목적 외에 사용하지 않습니다',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#E8941A] shrink-0 mt-0.5">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div className="bg-[#1B3A6B] rounded-2xl p-6 text-white">
            <h2 className="font-black text-lg mb-3">문의 및 연락</h2>
            <div className="space-y-2 text-sm text-blue-100">
              <div>운영: 자원봉사 운영팀 (장경수 외)</div>
              <div>
                이메일:{' '}
                <a href="mailto:nanoset@korea.com" className="text-[#E8941A] hover:underline font-bold">
                  nanoset@korea.com
                </a>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20 text-xs text-blue-200">
              신안 정책마당은 군수의 동의 하에 자원봉사팀이 운영하는 비영리 서비스입니다.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
