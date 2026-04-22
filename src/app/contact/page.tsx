'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { CAMP_CONTACT } from '@/lib/static-data';

export default function ContactPage() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        const payload: Record<string, string> = {
            name: formData.name,
            message: formData.message,
        };
        if (formData.email.trim()) {
            payload.email = formData.email.trim();
        }

        try {
            const res = await fetch('https://formspree.io/f/myklwvqr', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl bg-white min-h-screen border-x border-gray-100 shadow-sm p-6 sm:p-10">
                <div className="text-center mb-10 border-b pb-8">
                    <h1 className="text-3xl font-black text-[#1B3A6B]">소통 창구</h1>
                    <div className="mx-auto mt-4 h-1.5 w-16 bg-[#E8941A] rounded-full" />
                    <p className="mt-4 text-gray-500 font-medium">캠프와 가장 빠르게 소통하는 방법입니다.</p>
                </div>

                {/* 캠프 연락처 */}
                <div className="mb-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    {CAMP_CONTACT.contacts.map((contact) => (
                        <a key={contact.label} href={contact.url} target="_blank" rel="noopener noreferrer" className="bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm transition-all hover:-translate-y-1 hover:border-[#1B3A6B] block no-underline">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl shadow-inner mx-auto mb-3" style={{ backgroundColor: contact.iconBgColor }}>
                                <span className="text-[#1B3A6B] font-black text-xl">
                                    {contact.label === '전화' ? '📞' : contact.label === '이메일' ? '✉️' : '💬'}
                                </span>
                            </div>
                            <div className="text-xs font-black text-gray-500 uppercase tracking-wider mb-1">{contact.label}</div>
                            <div className="text-sm font-bold text-[#1B3A6B]">{contact.value}</div>
                        </a>
                    ))}
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-12 flex gap-4">
                    <span className="text-3xl">📍</span>
                    <div>
                        <div className="text-sm font-black text-gray-400 mb-1">스마트 캠프 주소</div>
                        <div className="text-[#1B3A6B] font-bold">{CAMP_CONTACT.addressFull}</div>
                    </div>
                </div>

                <div className="relative mb-10 flex items-center justify-center">
                    <div className="absolute w-full border-t border-gray-200"></div>
                    <span className="bg-white px-4 text-gray-400 font-bold text-sm z-10 relative">또는 직접 메시지 남기기</span>
                </div>

                {/* 성공 메시지 */}
                {status === 'success' ? (
                    <Card className="p-8 text-center border-2 border-[#E8941A] bg-orange-50 shadow-sm">
                        <div className="text-5xl mb-4">💌</div>
                        <h2 className="text-xl font-black text-[#1B3A6B] mb-2">
                            메시지가 전달되었습니다!
                        </h2>
                        <p className="text-gray-500 text-sm font-medium mb-6">
                            김태성 후보가 직접 읽어보겠습니다. 감사합니다.
                        </p>
                        <Button
                            onClick={() => setStatus('idle')}
                            className="bg-[#1B3A6B] hover:bg-[#E8941A] text-white font-bold w-full rounded-xl transition-colors"
                        >
                            한 번 더 응원하기
                        </Button>
                    </Card>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <Input
                                name="name"
                                type="text"
                                required
                                placeholder="성함 (필수)"
                                value={formData.name}
                                onChange={handleChange}
                                className="border border-gray-200 focus:border-[#1B3A6B] rounded-xl h-14 font-medium transition-colors bg-gray-50 focus:bg-white"
                            />
                        </div>
                        <div>
                            <Input
                                name="email"
                                type="email"
                                placeholder="연락처나 이메일 (선택)"
                                value={formData.email}
                                onChange={handleChange}
                                className="border border-gray-200 focus:border-[#1B3A6B] rounded-xl h-14 font-medium transition-colors bg-gray-50 focus:bg-white"
                            />
                        </div>
                        <div>
                            <Textarea
                                name="message"
                                required
                                placeholder="김태성 예비후보에게 응원 메시지를 남겨주세요."
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className="border border-gray-200 focus:border-[#1B3A6B] rounded-xl font-medium resize-none transition-colors p-4 bg-gray-50 focus:bg-white"
                            />
                        </div>

                        {status === 'error' && (
                            <p className="text-red-500 text-sm font-bold text-center py-2 bg-red-50 rounded-xl">
                                ⚠️ 잠시 후 다시 시도해 주세요.
                            </p>
                        )}

                        <Button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full h-14 bg-[#1B3A6B] hover:bg-[#E8941A] text-white font-black text-lg rounded-xl shadow-md transition-all duration-300 disabled:opacity-60"
                        >
                            {status === 'loading' ? '전송 중...' : '💌 메시지 보내기'}
                        </Button>
                    </form>
                )}
            </div>
        </div>
    );
}
