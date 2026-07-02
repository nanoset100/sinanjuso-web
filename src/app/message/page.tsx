import Image from 'next/image';
import Link from 'next/link';

// 군수 메시지 목록 (초기값)
const MESSAGES: Array<{
  date: string;
  title: string;
  body: string;
}> = [];

export default function MessagePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">

        <div className="mb-8">
          <div className="text-sm text-gray-400 font-medium mb-1">
            <Link href="/" className="hover:text-[#1B3A6B]">홈</Link> / 군수 메시지
          </div>
          <h1 className="text-3xl font-black text-[#1B3A6B] mb-2">💬 군수 메시지</h1>
          <p className="text-gray-600 text-sm">김태성 신안군수의 생각을 직접 전달합니다.</p>
        </div>

        {/* 군수 소개 카드 */}
        <div className="bg-[#1B3A6B] rounded-2xl p-6 text-white mb-8">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full border-2 border-white/30 overflow-hidden shrink-0">
              <Image src="/candidate_face.png" alt="김태성 신안군수" width={64} height={64} className="object-cover object-top w-full h-full" />
            </div>
            <div>
              <div className="font-black text-lg mb-0.5">김태성</div>
              <div className="text-[#E8941A] text-sm font-bold mb-3">제9대 신안군수 (2026.07~)</div>
              <p className="text-sm text-blue-100 leading-relaxed">
                군민 여러분의 제안을 직접 읽겠습니다.<br />
                신안 정책마당에 남겨주신 의견은 하나하나 검토하겠습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 메시지 목록 */}
        {MESSAGES.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center text-gray-400">
            <div className="text-4xl mb-3">✉️</div>
            <div className="font-bold mb-1">아직 메시지가 없습니다</div>
            <div className="text-sm">군수님 메시지가 등록되면 이 곳에 표시됩니다.</div>
          </div>
        ) : (
          <div className="space-y-4">
            {MESSAGES.map((msg, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <div className="text-xs text-gray-400 mb-1">{msg.date}</div>
                <h3 className="font-black text-gray-800 mb-2">{msg.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{msg.body}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400 mb-3">군수님께 전달할 아이디어가 있으신가요?</p>
          <Link
            href="/participate"
            className="inline-block rounded-full bg-[#E8941A] px-6 py-3 text-sm font-black text-white hover:bg-[#d17a0f] transition-colors"
          >
            💡 아이디어 제안하기
          </Link>
        </div>

      </div>
    </div>
  );
}
