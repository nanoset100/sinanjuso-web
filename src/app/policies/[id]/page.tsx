import { POLICIES } from '@/lib/static-data';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return POLICIES.map((policy) => ({
        id: policy.id,
    }));
}

export default async function PolicyDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const policy = POLICIES.find(p => p.id === id);

    if (!policy) {
        notFound();
    }

    return (
        <article className="bg-[#f8f9fa] py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
            <div className="mx-auto max-w-6xl">
                {/* 뒤로가기 */}
                <Link
                    href="/policies"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#E8941A] hover:text-[#1B3A6B] transition-colors mb-12 group"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                    정책 목록으로 돌아가기
                </Link>

                {/* 헤더 */}
                <header className="mb-16">
                    <div className="flex items-center gap-6 mb-6">
                        <div className="flex-shrink-0 w-24 h-24 rounded-3xl flex items-center justify-center shadow-md border border-gray-100" style={{ backgroundColor: policy.iconBgColor }}>
                            <span className="text-5xl">{policy.emoji}</span>
                        </div>
                        <div>
                            {policy.subtitle && (
                                <span className="text-[#E8941A] font-black text-lg mb-2 block tracking-tight">
                                    {policy.subtitle}
                                </span>
                            )}
                            <h1 className="text-4xl md:text-5xl font-black text-[#1B3A6B] leading-tight">
                                {policy.title}
                            </h1>
                        </div>
                    </div>
                    <div className="h-1.5 w-24 bg-[#E8941A] rounded-full" />
                </header>

                {/* 2단 레이아웃 콘텐츠 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* 좌측: 배경 및 목표 */}
                    <div className="lg:col-span-7 space-y-10">
                        <section className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                            <h2 className="text-xl font-black text-[#1B3A6B] mb-6 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#1B3A6B] text-white text-sm">✓</span>
                                정책 배경
                            </h2>
                            <p className="text-gray-700 font-medium text-lg leading-loose whitespace-pre-wrap">
                                {policy.background}
                            </p>
                        </section>

                        {policy.goals && (
                            <section className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                                <h2 className="text-xl font-black text-[#1B3A6B] mb-6 flex items-center gap-3">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#E8941A] text-white text-sm">🎯</span>
                                    기대 효과
                                </h2>
                                <p className="text-gray-700 font-medium text-lg leading-loose whitespace-pre-wrap">
                                    {policy.goals}
                                </p>
                            </section>
                        )}
                    </div>

                    {/* 우측: 추진 로드맵 */}
                    <div className="lg:col-span-5 w-full sticky top-32">
                        <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                            <h2 className="text-[#1B3A6B] text-2xl font-black mb-8">
                                세부 로드맵
                            </h2>

                            {policy.roadmap && policy.roadmap.length > 0 ? (
                                <div className="space-y-6">
                                    {policy.roadmap.map((item: any, idx: number) => (
                                        <div key={idx} className="flex gap-5 relative">
                                            {/* 왼쪽 라인 (마지막 요소 제외) */}
                                            {idx < policy.roadmap.length - 1 && (
                                                <div className="absolute left-6 top-10 bottom-[-24px] w-0.5 bg-blue-100" />
                                            )}
                                            <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-[#1B3A6B] text-white rounded-full flex items-center justify-center font-black text-xl shadow-md">
                                                {item.step || idx + 1}
                                            </div>
                                            <div className="pt-2 pb-6">
                                                <h3 className="font-bold text-[#1B3A6B] text-lg mb-1 leading-tight">{item.title}</h3>
                                                <p className="text-gray-500 font-medium leading-snug">{item.subtitle}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-gray-500 font-medium">단계별 계획이 업데이트될 예정입니다.</p>
                            )}

                            {/* 평가 섹션 */}
                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <h3 className="text-[#E8941A] font-bold text-center mb-4 flex items-center justify-center gap-2">
                                    <span className="text-xl">☆</span> 이 정책을 평가해주세요
                                </h3>
                                <div className="flex justify-center gap-2 mb-6 text-3xl text-yellow-400">
                                    ☆☆☆☆☆
                                </div>
                                <button className="w-full h-14 bg-[#1B3A6B] hover:bg-[#2d5aa0] text-white font-bold rounded-xl transition-colors">
                                    평가 제출
                                </button>
                                <p className="text-center text-xs text-gray-400 mt-4">※ 익명으로 수집됩니다 — 개인정보는 저장되지 않습니다</p>
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </article>
    );
}
