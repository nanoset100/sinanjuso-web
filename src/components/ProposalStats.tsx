'use client';

import { useState, useEffect } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface Stats {
  total: number;
  mayorRead: number;
  reflected: number;
  thisMonth: number;
}

export default function ProposalStats() {
  const [stats, setStats] = useState<Stats>({ total: 0, mayorRead: 0, reflected: 0, thisMonth: 0 });

  useEffect(() => {
    const q = query(collection(db, 'proposals'));
    const unsub = onSnapshot(q, (snapshot) => {
      const now = new Date();
      const thisMonth = now.getMonth();
      const thisYear = now.getFullYear();

      let mayorRead = 0, reflected = 0, thisMonthCount = 0;
      snapshot.docs.forEach((doc) => {
        const d = doc.data();
        if (d.mayorRead) mayorRead++;
        if (d.status === '정책 반영') reflected++;
        if (d.createdAt) {
          const date = d.createdAt.toDate();
          if (date.getMonth() === thisMonth && date.getFullYear() === thisYear) thisMonthCount++;
        }
      });
      setStats({ total: snapshot.size, mayorRead, reflected, thisMonth: thisMonthCount });
    });
    return () => unsub();
  }, []);

  const CARDS = [
    { label: '누적 제안', value: stats.total, icon: '💡' },
    { label: '군수가 읽은 제안', value: stats.mayorRead, icon: '👁️' },
    { label: '정책 반영', value: stats.reflected, icon: '✅' },
    { label: '이번 달 신규', value: stats.thisMonth, icon: '🆕' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {CARDS.map((card) => (
        <div key={card.label} className="rounded-2xl p-4 shadow-sm border border-white/80 bg-white">
          <div className="text-2xl mb-1">{card.icon}</div>
          <div className="text-2xl font-black text-gray-800">
            {card.value}
            <span className="text-sm font-medium text-gray-500 ml-1">건</span>
          </div>
          <div className="text-xs text-gray-500 font-medium mt-0.5">{card.label}</div>
        </div>
      ))}
    </div>
  );
}
