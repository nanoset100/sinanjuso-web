'use client';

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Share2 } from 'lucide-react';

export default function NewsCard({ article }: { article: any }) {
    const { title, source, publishedAt, thumbnailEmoji, url, category, summary } = article;

    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="block w-full no-underline">
            <Card className="group overflow-hidden border-b transition-all duration-300 hover:bg-gray-50 flex flex-row items-stretch rounded-none sm:rounded-xl sm:border border-transparent">
                {/* 썸네일 영역 */}
                <div className="flex-shrink-0 p-4 flex items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#E3F2FD] shadow-inner transition-transform group-hover:scale-105">
                        <span className="text-4xl">{thumbnailEmoji}</span>
                    </div>
                </div>

                {/* 텍스트 영역 */}
                <CardContent className="flex flex-col justify-center p-4 pl-0 flex-grow">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="line-clamp-2 text-lg font-black leading-snug text-[#1B3A6B] group-hover:text-[#E8941A] transition-colors pr-4">
                            {title}
                        </h3>
                        <button className="text-gray-400 hover:text-gray-600 p-1 flex-shrink-0" onClick={(e) => {
                            e.preventDefault();
                            if (navigator.share) {
                                navigator.share({
                                    title: title,
                                    url: url
                                });
                            }
                        }}>
                            <Share2 className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex items-center gap-2 mt-auto">
                        <span className="inline-block rounded bg-[#EBF4FF] px-2 py-0.5 text-xs font-bold text-[#1B3A6B]">
                            {category}
                        </span>
                        <span className="text-xs font-medium text-gray-500">
                            {source}
                        </span>
                        <span className="text-xs font-medium text-gray-500 ml-1">
                            {publishedAt}
                        </span>
                    </div>
                    {summary && (
                        <p className="mt-2 text-xs text-gray-400 line-clamp-1">{summary}</p>
                    )}
                </CardContent>
            </Card>
        </a>
    );
}
