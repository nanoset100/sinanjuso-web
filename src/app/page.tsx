import { getPolicies, getSettings } from '@/lib/contentful';
import Hero from '@/components/Hero';
import CountdownTimer from '@/components/CountdownTimer';
import PolicyGrid from '@/components/PolicyGrid';
import AppDownloadBanner from '@/components/AppDownloadBanner';

// ISR 캐싱 (3600초 = 1시간)
export const revalidate = 3600;

export default async function Home() {
  // Contentful에서 데이터 병렬로 가져오기
  const [policies, settings] = await Promise.all([
    getPolicies(),
    getSettings(),
  ]);

  return (
    <div className="flex flex-col gap-0">
      {/* 1. Hero 섹션 */}
      <Hero settings={settings} />

      {/* 2. D-Day 카운터 */}
      <CountdownTimer daysLeft={settings?.daysUntilElection || 0} />

      {/* 3. 핵심 정책 그리드 */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-black text-[#1B3A6B] sm:text-5xl">핵심 정책</h2>
            <div className="mx-auto mt-4 h-1.5 w-20 bg-[#E8941A]" />
            <p className="mt-6 text-lg font-bold text-gray-500">신안의 새로운 변화를 위한 김태성의 약속입니다.</p>
          </div>
          <PolicyGrid policies={policies} />
        </div>
      </section>

      {/* 4. 앱 다운로드 배너 */}
      <AppDownloadBanner />
    </div>
  );
}
