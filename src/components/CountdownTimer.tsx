'use client';

import { useEffect, useState } from 'react';

export default function CountdownTimer({ daysLeft }: { daysLeft: number }) {
    const [display, setDisplay] = useState(daysLeft);

    useEffect(() => {
        setDisplay(daysLeft);
    }, [daysLeft]);

    return (
        <div className="bg-white py-12 shadow-sm border-b-4 border-[#E8941A]">
            <div className="max-w-4xl mx-auto text-center px-4">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#1B3A6B] mb-2 opacity-60">선거 승리까지</p>
                <div className="flex items-center justify-center gap-4">
                    <span className="text-7xl sm:text-9xl font-black text-[#1B3A6B]">D-</span>
                    <span className="text-7xl sm:text-9xl font-black text-[#E8941A] tabular-nums">{display}</span>
                </div>
                <p className="mt-4 text-lg font-bold text-gray-500">신안의 내일을 바꾸는 소중한 시간</p>
            </div>
        </div>
    );
}
