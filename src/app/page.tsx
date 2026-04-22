import Link from 'next/link';
import { POLICIES, NEWS_ITEMS, ELECTION_INFO } from '@/lib/static-data';
import Hero from '@/components/Hero';
import CountdownTimer from '@/components/CountdownTimer';
import PolicyGrid from '@/components/PolicyGrid';
import NewsCard from '@/components/NewsCard';
import AppDownloadBanner from '@/components/AppDownloadBanner';

export default function Home() {
  const latestNews = NEWS_ITEMS.slice(0, 3); // 메인에는 최신 3개만 표시

  return (
    <div className="flex flex-col gap-0">
      {/* 1. Hero 섹션 */}
      <Hero />

      {/* 2. D-Day 카운터 */}
      <CountdownTimer daysLeft={ELECTION_INFO.dDay} />

      {/* 3. 핵심 정책 그리드 */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-black text-[#1B3A6B] sm:text-5xl">핵심 정책 6가지</h2>
            <div className="mx-auto mt-4 h-1.5 w-20 bg-[#E8941A]" />
            <p className="mt-6 text-lg font-bold text-gray-500">탭하면 자세히 볼 수 있어요</p>
          </div>
          <PolicyGrid policies={POLICIES} />
        </div>
      </section>

      {/* 4. 최신 뉴스 섹션 */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-black text-[#1B3A6B] sm:text-5xl">최신 뉴스</h2>
              <div className="mt-4 h-1.5 w-20 bg-[#E8941A]" />
            </div>
            <Link href="/news" className="text-sm font-bold text-[#1B3A6B] hover:text-[#E8941A] transition-colors border-b-2 border-[#1B3A6B]">
              전체 보기 →
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            {latestNews.map((item) => (
              <NewsCard key={item.id} article={item} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. 앱 다운로드 배너 */}
      <AppDownloadBanner />
    </div>
  );
}
