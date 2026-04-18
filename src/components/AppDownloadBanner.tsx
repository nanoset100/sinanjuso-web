import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

export default function AppDownloadBanner() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <Card className="overflow-hidden border-none bg-gradient-to-r from-[#E8941A] to-[#ffb347] text-white shadow-2xl">
                <div className="flex flex-col items-center justify-between p-12 md:flex-row">
                    <div className="mb-8 text-center md:mb-0 md:text-left">
                        <h2 className="text-4xl font-black leading-tight sm:text-5xl">
                            스마트폰에서도<br />
                            <span className="text-[#1B3A6B]">김태성</span>을 만나보세요!
                        </h2>
                        <p className="mt-4 text-lg font-bold opacity-90">
                            신안군 소식을 가장 빠르게 전달해 드립니다.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Button size="lg" className="h-16 rounded-xl bg-[#1B3A6B] px-8 text-lg font-bold transition-all hover:scale-105 hover:bg-[#1B3A6B]/90">
                            App Store
                        </Button>
                        <Button size="lg" variant="secondary" className="h-16 rounded-xl px-8 text-lg font-bold text-[#1B3A6B] transition-all hover:scale-105">
                            Google Play
                        </Button>
                    </div>
                </div>
            </Card>
        </section>
    );
}
