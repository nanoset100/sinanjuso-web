import { ELECTION_INFO, NOTIFICATIONS } from '@/lib/static-data';

export default function NotificationsPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-16 px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl bg-white min-h-screen border-x border-gray-100 shadow-sm">
                <div className="bg-[#1B3A6B] p-6 text-white text-center rounded-b-3xl">
                    <h1 className="text-xl font-bold mb-6">팩트체크 & 알림</h1>

                    {/* D-Day 카드 */}
                    <div className="bg-gradient-to-b from-[#2d5aa0] to-[#1B3A6B] rounded-2xl p-6 shadow-inner border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2" />

                        <div className="flex items-center justify-center gap-2 mb-2 text-sm text-gray-200">
                            <span>🗳️</span> {ELECTION_INFO.title}
                        </div>
                        <div className="text-sm font-medium text-gray-300 mb-6">{ELECTION_INFO.dateString}</div>

                        <div className="text-7xl font-black mb-8 tracking-tighter">
                            <span className="text-4xl mr-2">D-</span>{ELECTION_INFO.dDay}
                        </div>

                        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm text-sm font-bold">
                            {ELECTION_INFO.slogan}
                        </div>
                    </div>
                </div>

                {/* 선거 정보 요약 */}
                <div className="p-6">
                    <h2 className="text-[#1B3A6B] font-black text-lg flex items-center gap-2 mb-4 border-b pb-2">
                        <span className="text-2xl">ⓘ</span> 선거 정보
                    </h2>
                    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm space-y-4">
                        <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                            <span className="text-gray-500 font-bold text-sm">선거명</span>
                            <span className="text-[#1B3A6B] font-black">{ELECTION_INFO.title}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-50 pb-3">
                            <span className="text-gray-500 font-bold text-sm">선거일</span>
                            <span className="text-[#1B3A6B] font-black">{ELECTION_INFO.dateString}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500 font-bold text-sm">선거구</span>
                            <span className="text-[#1B3A6B] font-black">{ELECTION_INFO.district}</span>
                        </div>
                    </div>
                </div>

                {/* 알림 내역 */}
                <div className="p-6 bg-gray-50 min-h-[400px]">
                    <h2 className="text-[#1B3A6B] font-black text-lg flex items-center gap-2 mb-4 border-b border-gray-200 pb-2">
                        <span className="text-2xl">🔔</span> 최신 알림
                    </h2>
                    <div className="space-y-3">
                        {NOTIFICATIONS.map((notice) => (
                            <div key={notice.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex gap-4">
                                <div className="w-12 h-12 flex-shrink-0 bg-blue-50 rounded-full flex items-center justify-center text-xl">
                                    {notice.topic.includes('유세') ? '📢' : notice.topic.includes('정책') ? '📋' : notice.topic.includes('뉴스') ? '📰' : '🗳️'}
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#1B3A6B] mb-1">{notice.title}</h3>
                                    <p className="text-sm text-gray-600 mb-2">{notice.body}</p>
                                    <span className="text-xs font-bold text-gray-400">{notice.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
