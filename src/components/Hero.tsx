import { Button } from '@/components/ui/button';

export default function Hero({ settings }: { settings: any }) {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1B3A6B] via-[#2d5aa0] to-[#1B3A6B] py-24 text-white lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative z-10 text-center lg:text-left">
                    <h1 className="animate-in fade-in slide-in-from-bottom-8 duration-1000 text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                        신안의 새로운 미래,<br />
                        <span className="text-[#E8941A]">김태성</span>이 함께합니다.
                    </h1>
                    <p className="mt-8 max-w-2xl text-lg font-medium opacity-90 sm:text-xl">
                        {settings?.description || '신안군 전역의 균형있는 발전과 군민이 행복한 신안을 만들겠습니다.'}
                    </p>
                    <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                        <Button className="h-16 w-full rounded-full bg-[#E8941A] px-10 text-xl font-bold text-white transition-all hover:scale-105 hover:bg-[#d17a0f] hover:shadow-xl sm:w-auto">
                            정책 공약 보기
                        </Button>
                        <Button variant="outline" className="h-16 w-full rounded-full border-2 border-white bg-transparent px-10 text-xl font-bold text-white transition-all hover:bg-white/10 sm:w-auto">
                            앱 다운로드
                        </Button>
                    </div>
                </div>
            </div>

            {/* 장식용 배경 요소 */}
            <div className="absolute right-0 top-0 -mr-16 -mt-16 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-80 w-80 rounded-full bg-[#E8941A]/10 blur-3xl" />
        </section>
    );
}
