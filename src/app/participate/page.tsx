'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  collection, addDoc, query, orderBy,
  onSnapshot, serverTimestamp, Timestamp,
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

// ── 타입 ────────────────────────────────────────
interface Proposal {
  id: string;
  category: string;
  categoryLabel: string;
  title: string;
  content: string;
  region: string;
  authorName: string;
  createdAt: Timestamp | null;
  status: '접수됨' | '검토중' | '정책 반영';
  mayorRead: boolean;
  likes: number;
}

// ── 상수 ────────────────────────────────────────
const CATEGORIES = [
  { value: 'road',    label: '🛣️ 도로·교통' },
  { value: 'env',     label: '🌿 청소·환경' },
  { value: 'farm',    label: '🌾 농업·어업' },
  { value: 'edu',     label: '🎓 교육·청년' },
  { value: 'culture', label: '🎨 문화·관광' },
  { value: 'welfare', label: '❤️ 의료·복지' },
  { value: 'other',   label: '💬 기타' },
];

const REGIONS = [
  '지도읍', '압해읍', '암태면', '자은면', '비금면', '도초면',
  '신의면', '장산면', '안좌면', '팔금면', '증도면', '임자면',
  '흑산면', '하의면', '신안군 전체',
];

const STATUS_STYLE: Record<string, string> = {
  '접수됨':   'bg-gray-100 text-gray-600',
  '검토중':   'bg-blue-100 text-blue-700',
  '정책 반영': 'bg-green-100 text-green-700',
};

function formatDate(ts: Timestamp | null): string {
  if (!ts) return '';
  const d = ts.toDate();
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
}

// ── 메인 컴포넌트 ──────────────────────────────
export default function ParticipatePage() {
  // 폼 상태
  const [category, setCategory]       = useState('');
  const [title, setTitle]             = useState('');
  const [content, setContent]         = useState('');
  const [region, setRegion]           = useState('');
  const [authorName, setAuthorName]   = useState('');
  const [submitting, setSubmitting]   = useState(false);
  const [submitted, setSubmitted]     = useState(false);
  const [error, setError]             = useState('');

  // 게시판 상태
  const [proposals, setProposals]     = useState<Proposal[]>([]);
  const [loading, setLoading]         = useState(true);

  // Firestore 실시간 구독
  useEffect(() => {
    const q = query(
      collection(db, 'proposals'),
      orderBy('createdAt', 'desc'),
    );
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Proposal[];
      setProposals(data);
      setLoading(false);
    }, (err) => {
      console.error('Firestore 읽기 오류:', err);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  // 폼 제출
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    if (!category) { setError('주제를 선택해주세요.'); return; }
    if (!title.trim()) { setError('제목을 입력해주세요.'); return; }
    if (!content.trim()) { setError('내용을 입력해주세요.'); return; }

    setSubmitting(true);
    try {
      const catLabel = CATEGORIES.find((c) => c.value === category)?.label ?? category;
      await addDoc(collection(db, 'proposals'), {
        category,
        categoryLabel: catLabel,
        title: title.trim(),
        content: content.trim(),
        region: region || '미지정',
        authorName: authorName.trim() || '익명',
        createdAt: serverTimestamp(),
        status: '접수됨',
        mayorRead: false,
        likes: 0,
      });
      // 폼 초기화
      setCategory(''); setTitle(''); setContent('');
      setRegion(''); setAuthorName('');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error(err);
      setError('제출 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">

        {/* 헤더 */}
        <div className="mb-8">
          <div className="text-sm text-gray-400 font-medium mb-1">
            <Link href="/" className="hover:text-[#1B3A6B]">홈</Link> / 군민 참여 마당
          </div>
          <h1 className="text-3xl font-black text-[#1B3A6B] mb-2">🗣️ 군민 참여 마당</h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            생활 속 불편함, 좋은 아이디어를 알려주세요.<br />
            군수님이 직접 읽습니다.
          </p>
        </div>

        {/* 안내 */}
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-6 text-sm text-amber-800">
          <strong>💡 이 공간은 아이디어 제안 채널입니다.</strong><br />
          개인 민원 처리는{' '}
          <a href="https://www.shinan.go.kr" target="_blank" rel="noopener noreferrer" className="underline font-bold">
            신안군청 공식 홈페이지
          </a>를 이용해주세요.
        </div>

        {/* 제안 폼 */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <h2 className="font-black text-lg text-[#1B3A6B] mb-5">새 아이디어 제안하기</h2>

          {/* Step 1 */}
          <div className="mb-5">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Step 1. 주제 선택 <span className="text-red-400">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {CATEGORIES.map((cat) => (
                <label
                  key={cat.value}
                  className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-colors text-sm ${
                    category === cat.value
                      ? 'border-[#1B3A6B] bg-blue-50 font-bold text-[#1B3A6B]'
                      : 'border-gray-200 hover:border-[#1B3A6B]/40 hover:bg-blue-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="category"
                    value={cat.value}
                    checked={category === cat.value}
                    onChange={() => setCategory(cat.value)}
                    className="hidden"
                  />
                  {cat.label}
                </label>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-5">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Step 2. 제안 내용 <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              placeholder="제목을 입력하세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={60}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mb-3 focus:outline-none focus:border-[#1B3A6B] focus:ring-1 focus:ring-[#1B3A6B]"
            />
            <textarea
              rows={4}
              placeholder="어떤 불편이 있고, 어떻게 바뀌면 좋을지 적어주세요."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              maxLength={500}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:border-[#1B3A6B] focus:ring-1 focus:ring-[#1B3A6B]"
            />
            <div className="text-right text-xs text-gray-300 mt-1">{content.length}/500</div>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm mt-2 focus:outline-none focus:border-[#1B3A6B] bg-white text-gray-700"
            >
              <option value="">읍·면을 선택하세요 (선택)</option>
              {REGIONS.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>

          {/* Step 3 */}
          <div className="mb-5">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Step 3. 이름 (선택 — 미입력 시 익명)
            </label>
            <input
              type="text"
              placeholder="이름 (익명 가능)"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              maxLength={20}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1B3A6B]"
            />
          </div>

          <div className="bg-gray-50 rounded-xl p-3 mb-4 text-xs text-gray-500">
            제출된 제안은 공개 게시판에 게시됩니다. 개인 민원이나 특정인을 비방하는 내용은 게시되지 않습니다.
          </div>

          {error && (
            <div className="bg-red-50 border border-red-100 rounded-xl p-3 mb-4 text-sm text-red-600">
              ⚠️ {error}
            </div>
          )}

          {submitted && (
            <div className="bg-green-50 border border-green-100 rounded-xl p-3 mb-4 text-sm text-green-700 font-bold">
              ✅ 제안이 접수됐습니다! 군수님께 전달됩니다.
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-xl bg-[#E8941A] py-4 text-base font-black text-white hover:bg-[#d17a0f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? '제출 중...' : '💡 제안 제출하기'}
          </button>
        </form>

        {/* 공개 게시판 */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-black text-lg text-[#1B3A6B]">공개 제안 게시판</h2>
            <span className="text-sm text-gray-400 font-medium">총 {proposals.length}건</span>
          </div>

          {loading ? (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center text-gray-400">
              <div className="animate-spin text-3xl mb-3">⏳</div>
              <div className="text-sm">불러오는 중...</div>
            </div>
          ) : proposals.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center text-gray-400">
              <div className="text-4xl mb-3">📭</div>
              <div className="font-bold mb-1">아직 제안이 없습니다</div>
              <div className="text-sm">첫 번째 제안자가 되어보세요!</div>
            </div>
          ) : (
            <div className="space-y-3">
              {proposals.map((p) => (
                <div key={p.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded-full">
                        {p.categoryLabel}
                      </span>
                      {p.region && p.region !== '미지정' && (
                        <span className="text-xs bg-gray-100 text-gray-500 font-medium px-2 py-0.5 rounded-full">
                          📍 {p.region}
                        </span>
                      )}
                      {p.mayorRead && (
                        <span className="text-xs bg-orange-100 text-orange-700 font-bold px-2 py-0.5 rounded-full">
                          👁️ 군수가 읽었습니다
                        </span>
                      )}
                    </div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 ${STATUS_STYLE[p.status]}`}>
                      {p.status}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-800 mb-1 text-sm">{p.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-2 line-clamp-2">{p.content}</p>
                  <div className="flex items-center justify-between text-xs text-gray-300">
                    <span>{p.authorName}</span>
                    <span>{formatDate(p.createdAt)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
