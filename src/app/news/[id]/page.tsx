import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getNewsById } from '@/lib/contentful-detail';

export const dynamic = 'force-dynamic';

export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const article: any = await getNewsById(id);

    if (!article) {
        notFound();
    }

    const { title, content, publishedAt, featuredImage, category, externalLink } = article.fields;

    // 외부 링크가 있는 뉴스는 상세 페이지 대신 리다이렉트
    if (externalLink) {
        return (
            <div className="bg-white py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-xl font-bold text-gray-500 mb-6">외부 링크로 이동 중입니다...</p>
                    <a
                        href={externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#E8941A] text-white font-black rounded-2xl hover:bg-[#1B3A6B] transition-colors"
                    >
                        원문 보러가기 →
                    </a>
                    <div className="mt-6">
                        <Link href="/news" className="text-sm font-bold text-gray-400 hover:text-[#E8941A] transition-colors">
                            뉴스 목록으로 돌아가기
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const date = publishedAt
        ? new Date(publishedAt).toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
        : '날짜 미정';

    return (
        <article className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
                {/* 뒤로가기 */}
                <Link
                    href="/news"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#E8941A] hover:text-[#1B3A6B] transition-colors mb-10 group"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                    전체 뉴스로 돌아가기
                </Link>

                {/* 헤더 */}
                <header className="mb-12">
                    <span className="bg-[#1B3A6B] text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
                        {category || '뉴스'}
                    </span>
                    <h1 className="text-4xl font-black text-[#1B3A6B] leading-tight mb-4">
                        {title}
                    </h1>
                    <div className="flex items-center gap-3">
                        <div className="h-0.5 w-8 bg-[#E8941A]" />
                        <div className="text-gray-400 font-bold text-sm">{date}</div>
                    </div>
                </header>

                {/* 대표 이미지 */}
                {featuredImage?.fields?.file?.url && (
                    <div className="relative h-[400px] w-full overflow-hidden rounded-3xl mb-12 shadow-lg">
                        <Image
                            src={`https:${featuredImage.fields.file.url}`}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}

                {/* 본문 */}
                <div className="prose prose-blue prose-lg max-w-none text-gray-800 leading-relaxed font-medium">
                    <div className="whitespace-pre-wrap text-lg leading-8">
                        {typeof content === 'string'
                            ? content
                            : '상세 뉴스 내용이 준비 중입니다.'}
                    </div>
                </div>

                {/* 하단 */}
                <div className="mt-20 pt-10 border-t border-gray-100 flex justify-between items-center">
                    <Link
                        href="/news"
                        className="text-sm font-bold text-[#1B3A6B] hover:text-[#E8941A] transition-all flex items-center gap-1 group"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> 목록으로
                    </Link>
                    <Link
                        href="/"
                        className="text-sm font-bold text-gray-400 hover:text-[#E8941A] transition-colors"
                    >
                        홈으로
                    </Link>
                </div>
            </div>
        </article>
    );
}
