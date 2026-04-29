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
            <div className="mx-auto max-w-5xl">
                {/* 뒤로가기 */}
                <Link
                    href="/policies"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#E8941A] hover:text-[#1B3A6B] transition-colors mb-12 group"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                    정책 목록으로 돌아가기
                </Link>

                {/* 헤더 */}
                <header className="mb-12">
                    <div className="flex items-center gap-6 mb-6">
                        <div className="flex-shrink-0 w-20 h-20 rounded-3xl flex items-center justify-center shadow-md border border-gray-100" style={{ backgroundColor: policy.iconBgColor }}>
                            <span className="text-4xl">{policy.emoji}</span>
                        </div>
                        <div>
                            {policy.subtitle && (
                                <span className="text-[#E8941A] font-black text-base mb-2 block tracking-tight">
                                    {policy.subtitle}
                                </span>
                            )}
                            <h1 className="text-3xl md:text-4xl font-black text-[#1B3A6B] leading-tight">
                                {policy.title}
                            </h1>
                        </div>
                    </div>
                    <div className="h-1.5 w-24 bg-[#E8941A] rounded-full" />
                </header>

                {/* 1. 추진목표 */}
                <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mb-6">
                    <h2 className="text-lg font-black text-[#1B3A6B] mb-5 flex items-center gap-3">
                        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1B3A6B] text-white text-sm font-black">1</span>
                        추진목표
                    </h2>
                    <p className="text-gray-700 font-medium text-base leading-loose whitespace-pre-wrap">
                        {policy.background}
                    </p>
                </section>

                {/* 2. 추진전략 */}
                {(policy as any).strategies && (
                    <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mb-6">
                        <h2 className="text-lg font-black text-[#1B3A6B] mb-5 flex items-center gap-3">
                            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#E8941A] text-white text-sm font-black">2</span>
                            추진전략
                        </h2>
                        <p className="text-gray-700 font-medium text-base leading-loose whitespace-pre-wrap">
                            {(policy as any).strategies}
                        </p>
                    </section>
                )}

                {/* 3. 기대효과 */}
                {policy.goals && (
                    <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mb-6">
                        <h2 className="text-lg font-black text-[#1B3A6B] mb-5 flex items-center gap-3">
                            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1B3A6B] text-white text-sm font-black">3</span>
                            기대효과
                        </h2>
                        <p className="text-gray-700 font-medium text-base leading-loose whitespace-pre-wrap">
                            {policy.goals}
                        </p>
                    </section>
                )}

                {/* 평가 섹션 */}
                <section className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
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
                </section>

            </div>
        </article>
    );
}
