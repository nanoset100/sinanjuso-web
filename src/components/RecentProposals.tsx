'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { collection, query, orderBy, limit, onSnapshot, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface Proposal {
  id: string;
  categoryLabel: string;
  title: string;
  content: string;
  region: string;
  authorName: string;
  createdAt: Timestamp | null;
  status: string;
  mayorRead: boolean;
}

const STATUS_STYLE: Record<string, string> = {
  '접수됨':    'bg-gray-100 text-gray-500',
  '검토중':    'bg-blue-100 text-blue-700',
  '정책 반영': 'bg-green-100 text-green-700',
};

function formatDate(ts: Timestamp | null): string {
  if (!ts) return '';
  const d = ts.toDate();
  return `${d.getMonth() + 1}.${d.getDate()}`;
}

export default function RecentProposals() {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(
      collection(db, 'proposals'),
      orderBy('createdAt', 'desc'),
      limit(5),
    );
    const unsub = onSnapshot(q, (snap) => {
      setProposals(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Proposal)));
      setLoading(false);
    }, () => setLoading(false));
    return () => unsub();
  }, []);

  if (loading) {
    return (
      <div className="space-y-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-16 bg-gray-100 rounded-xl animate-pulse" />
        ))}
      </div>
    );
  }

  if (proposals.length === 0) {
    return (
      <div className="bg-gray-50 rounded-2xl p-8 text-center text-gray-400">
        <div className="text-3xl mb-2">📭</div>
        <div className="text-sm font-medium">아직 제안이 없습니다</div>
        <div className="text-xs mt-1">첫 번째 제안자가 되어보세요!</div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {proposals.map((p) => (
        <div key={p.id} className="bg-white rounded-xl border border-gray-100 px-4 py-3 flex items-center gap-3 shadow-sm">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5 flex-wrap">
              <span className="text-xs bg-blue-50 text-blue-700 font-bold px-1.5 py-0.5 rounded-full shrink-0">
                {p.categoryLabel}
              </span>
              {p.mayorRead && (
                <span className="text-xs bg-orange-100 text-orange-700 font-bold px-1.5 py-0.5 rounded-full shrink-0">
                  👁️ 군수 확인
                </span>
              )}
            </div>
            <div className="text-sm font-bold text-gray-800 truncate">{p.title}</div>
            <div className="text-xs text-gray-400">{p.authorName} · {p.region !== '미지정' ? p.region : ''} {formatDate(p.createdAt)}</div>
          </div>
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 ${STATUS_STYLE[p.status] ?? 'bg-gray-100 text-gray-500'}`}>
            {p.status}
          </span>
        </div>
      ))}
      <Link
        href="/participate"
        className="block text-center text-sm font-bold text-[#1B3A6B] hover:text-[#E8941A] py-2 transition-colors"
      >
        전체 제안 보기 →
      </Link>
    </div>
  );
}
