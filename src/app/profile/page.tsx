import { CANDIDATE_PROFILE } from '@/lib/static-data';

export default function ProfilePage() {
    return (
        <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl bg-white min-h-screen border-x border-gray-100 shadow-sm">
                {/* 상단 프로필 헤더 */}
                <div className="bg-gradient-to-b from-[#1B3A6B] to-[#2d5aa0] p-8 text-center text-white relative flex flex-col items-center justify-center">
                    {/* 얼굴 사진 */}
                    <div className="w-36 h-36 rounded-full mb-4 shadow-xl border-4 border-white/30 overflow-hidden bg-white">
                        <img
                            src="/candidate-photo.png"
                            alt="김태성 후보"
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                    <h1 className="text-4xl font-black tracking-tight mb-2">{CANDIDATE_PROFILE.name}</h1>
                    <p className="text-[#E8941A] font-bold text-sm mb-1 bg-white/10 px-3 py-1 rounded-full border border-[#E8941A]/50">
                        {CANDIDATE_PROFILE.title} · {CANDIDATE_PROFILE.district}
                    </p>
                </div>

                {/* 학력 사항 */}
                <div className="p-6 pb-4">
                    <h2 className="text-[#1B3A6B] font-black text-lg flex items-center gap-2 mb-4 border-b pb-2">
                        <span className="text-2xl">🎓</span> 학력 사항
                    </h2>
                    <ul className="space-y-3 pl-2">
                        {CANDIDATE_PROFILE.education.map((item: { title: string }, idx: number) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#1B3A6B] flex-shrink-0" />
                                <span className="text-gray-800 font-medium leading-snug">{item.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 경력 사항 */}
                <div className="p-6 pt-2">
                    <h2 className="text-[#1B3A6B] font-black text-lg flex items-center gap-2 mb-4 border-b pb-2">
                        <span className="text-2xl">📋</span> 경력 사항
                    </h2>
                    <ul className="space-y-3 pl-2">
                        {CANDIDATE_PROFILE.career.map((item: { title: string }, idx: number) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="mt-1.5 w-2 h-2 rounded-full bg-[#E8941A] flex-shrink-0" />
                                <span className="text-gray-800 font-medium leading-snug">{item.title}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
}
