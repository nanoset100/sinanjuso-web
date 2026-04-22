import { NEWS_ITEMS } from '@/lib/static-data';
import NewsCard from '@/components/NewsCard';

export default function NewsPage() {
    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
            <div className="mx-auto max-w-2xl bg-white min-h-screen border-x border-gray-100 shadow-sm">
                <div className="px-6 py-6 border-b border-gray-100 sticky top-20 bg-white/90 backdrop-blur z-10">
                    <h1 className="text-2xl font-black text-[#1B3A6B] text-center">뉴스</h1>
                </div>

                <div className="flex flex-col">
                    {NEWS_ITEMS.map((item) => (
                        <NewsCard key={item.id} article={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
