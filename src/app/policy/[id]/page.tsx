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

      <div className="max-w-3xl mx-auto px-4 pt-12 space-y-8">

        {/* 추진 배경 */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10">
          <h2 className="text-lg font-black text-[#1B3A6B] mb-4 flex items-center gap-3">
            <span className="w-1 h-6 bg-[#E8941A] rounded-full inline-block" />
            추진 배경
          </h2>
          <p className="text-gray-700 text-base leading-relaxed break-keep">
            {policy.background}
          </p>
        </div>

        {/* 핵심 목표 */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10">
          <h2 className="text-lg font-black text-[#1B3A6B] mb-5 flex items-center gap-3">
            <span className="w-1 h-6 bg-[#1B3A6B] rounded-full inline-block" />
            핵심 목표
          </h2>
          <ul className="space-y-3">
            {policy.goals.map((goal: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: policy.badgeTextColor }}
                >
                  {i + 1}
                </span>
                <span className="text-gray-700 text-base break-keep">{goal}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 추진 로드맵 */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-10">
          <h2 className="text-lg font-black text-[#1B3A6B] mb-6 flex items-center gap-3">
            <span className="w-1 h-6 bg-[#E8941A] rounded-full inline-block" />
            추진 로드맵
          </h2>
          <div className="space-y-4">
            {policy.roadmap.map((r: { step: number; title: string; desc: string }) => (
              <div key={r.step} className="flex gap-4 items-start">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                  style={{ backgroundColor: policy.badgeTextColor }}
                >
                  {r.step}단계
                </div>
                <div className="flex-1 bg-gray-50 rounded-2xl p-4">
                  <p className="font-black text-[#1B3A6B] mb-1">{r.title}</p>
                  <p className="text-sm text-gray-600 break-keep">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 이전 / 다음 */}
        <div className="flex gap-4">
          {prev ? (
            <Link href={`/policy/${prev.id}`}
              className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all hover:border-[#1B3A6B] text-left">
              <span className="text-xs font-bold text-gray-400 block mb-1">◀ 이전 공약</span>
              <span className="text-sm font-black text-[#1B3A6B] break-keep">{prev.emoji} {prev.title}</span>
            </Link>
          ) : <div className="flex-1" />}
          {next ? (
            <Link href={`/policy/${next.id}`}
              className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all hover:border-[#1B3A6B] text-right">
              <span className="text-xs font-bold text-gray-400 block mb-1">다음 공약 ▶</span>
              <span className="text-sm font-black text-[#1B3A6B] break-keep">{next.emoji} {next.title}</span>
            </Link>
          ) : <div className="flex-1" />}
        </div>

        {/* 돌아가기 */}
        <div className="text-center pt-4">
          <Link href="/"
            className="inline-flex items-center gap-2 bg-[#1B3A6B] text-white font-black px-8 py-4 rounded-full hover:bg-[#2d5aa0] transition-all">
            ← 8대 핵심 공약 전체보기
          </Link>
        </div>
      </div>
    </div>
  );
}
