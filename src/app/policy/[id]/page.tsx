import { KEY_POLICIES_8 } from '@/lib/static-data';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return KEY_POLICIES_8.map((p) => ({ id: p.id }));
}

export default async function PolicyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const policy = KEY_POLICIES_8.find((p) => p.id === id);
  if (!policy) notFound();

  const idx = KEY_POLICIES_8.findIndex((p) => p.id === id);
  const prev = idx > 0 ? KEY_POLICIES_8[idx - 1] : null;
  const next = idx < KEY_POLICIES_8.length - 1 ? KEY_POLICIES_8[idx + 1] : null;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* 상단 배너 */}
      <div className="w-full py-16 px-4" style={{ backgroundColor: policy.badgeColor }}>
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-7xl block mb-6">{policy.emoji}</span>
          <span
            className="text-sm font-black tracking-wider px-4 py-1.5 rounded-full inline-block mb-4"
            style={{ backgroundColor: policy.badgeTextColor + '20', color: policy.badgeTextColor }}
          >
            핵심 공약 {policy.number}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#1B3A6B] mb-4 break-keep leading-tight">
            {policy.title}
          </h1>
          <p className="text-xl font-bold mt-2" style={{ color: policy.badgeTextColor }}>
            {policy.hook}
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 pt-12">
        {/* 공약 내용 */}
        <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-12 mb-8">
          <h2 className="text-xl font-black text-[#1B3A6B] mb-6 flex items-center gap-3">
            <span className="w-1 h-6 bg-[#E8941A] rounded-full inline-block" />
            공약 내용
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed break-keep">{policy.description}</p>
        </div>

        {/* 이전 / 다음 공약 */}
        <div className="flex gap-4 mb-12">
          {prev ? (
            <Link
              href={`/policy/${prev.id}`}
              className="flex-1 bg-white rounded-2xl shadow p-5 hover:shadow-md transition-all border-2 border-transparent hover:border-[#1B3A6B] text-left"
            >
              <span className="text-xs font-bold text-gray-400 block mb-1">◀ 이전 공약</span>
              <span className="text-sm font-black text-[#1B3A6B] break-keep">
                {prev.emoji} {prev.title}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
          {next ? (
            <Link
              href={`/policy/${next.id}`}
              className="flex-1 bg-white rounded-2xl shadow p-5 hover:shadow-md transition-all border-2 border-transparent hover:border-[#1B3A6B] text-right"
            >
              <span className="text-xs font-bold text-gray-400 block mb-1">다음 공약 ▶</span>
              <span className="text-sm font-black text-[#1B3A6B] break-keep">
                {next.emoji} {next.title}
              </span>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>

        {/* 돌아가기 */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#1B3A6B] text-white font-black px-8 py-4 rounded-full hover:bg-[#2d5aa0] transition-all"
          >
            ← 8대 핵심 공약 전체보기
          </Link>
        </div>
      </div>
    </div>
  );
}
