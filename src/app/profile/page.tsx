import { CANDIDATE_PROFILE } from '@/lib/static-data';
import Image from 'next/image';

export default function ProfilePage() {
    return (
        <div className="bg-gray-50 min-h-screen py-16 px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl bg-white min-h-screen border-x border-gray-100 shadow-sm">
                {/* 상단 프로필 헤더 */}
                <div className="bg-gradient-to-b from-[#1B3A6B] to-[#2d5aa0] p-8 text-center text-white relative flex flex-col items-center justify-center">
                    <div className="w-28 h-28 bg-white rounded-full p-1 mb-4 shadow-xl border-4 border-white/20">
                        {/* 더미 프로필 이미지 (실제 이미지 교체 필요) */}
                        <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                            <span className="text-4xl text-gray-400">👤</span>
                        </div>
                    </div>
                    <h1 className="text-4xl font-black tracking-tight mb-2">{CANDIDATE_PROFILE.name}</h1>
                    <p className="text-[#E8941A] font-bold text-sm mb-4 bg-white/10 px-3 py-1 rounded-full border border-[#E8941A]/50">
                        {CANDIDATE_PROFILE.title} · {CANDIDATE_PROFILE.district}
                    </p>
                </div>

                {/* 주요 이력 타임라인 */}
                <div className="p-6">
                    <h2 className="text-[#1B3A6B] font-black text-lg flex items-center gap-2 mb-6 border-b pb-2">
                        <span className="text-2xl">📋</span> 주요 경력
                    </h2>

                    <div className="px-4 border-l-2 border-gray-100 ml-4 space-y-8">
                        {CANDIDATE_PROFILE.career.map((item, idx) => (
                            <div key={idx} className="relative">
                                {/* Timeline Dot */}
                                <div className="absolute w-3 h-3 bg-[#1B3A6B] rounded-full -left-[23px] top-1.5 ring-4 ring-white" />

                                <div className="flex gap-4">
                                    <div className="w-12 text-[#1B3A6B] font-black pt-0.5">{item.year}</div>
                                    <div className="flex-1">
                                        <h3 className={`text-lg font-bold leading-tight mb-1 ${idx === 0 ? 'text-[#E8941A]' : 'text-gray-800'}`}>
                                            {item.title}
                                        </h3>
                                        {item.subtitle && (
                                            <p className="text-sm text-gray-500 font-medium">{item.subtitle}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
