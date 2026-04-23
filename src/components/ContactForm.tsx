'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactForm() {
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

    if (status === 'success') {
        return (
            <div className="bg-white p-8 sm:p-12 rounded-3xl text-center border-2 border-[#E8941A] shadow-lg">
                <div className="text-6xl mb-6">💌</div>
                <h3 className="text-2xl font-black text-[#1B3A6B] mb-4">응원 메시지가 성공적으로 전달되었습니다!</h3>
                <p className="text-gray-500 font-medium mb-8 text-lg">김태성 후보가 직접 확인합니다. 소중한 의견 감사합니다.</p>
                <Button onClick={() => setStatus('idle')} className="w-full bg-[#1B3A6B] hover:bg-[#2d5aa0] text-white rounded-2xl h-16 font-black text-lg transition-transform active:scale-95">
                    계속 둘러보기
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-10 rounded-[1.5rem] space-y-6 m-1">
            <div className="text-center mb-8">
                <h3 className="text-3xl font-black text-[#1B3A6B] mb-2">응원 메시지 보내기</h3>
                <p className="text-gray-500 font-medium">유권자 여러분의 목소리가 신안을 바꿉니다.</p>
            </div>

            <div className="space-y-4">
                <Input name="name" required placeholder="성함 (필수)" value={formData.name} onChange={handleChange} className="h-16 px-6 font-bold text-lg rounded-2xl bg-gray-50 border-gray-200 focus:bg-white focus:border-[#1B3A6B] focus:ring-0 transition-colors" />
                <Input name="email" type="email" placeholder="연락처나 이메일 (선택)" value={formData.email} onChange={handleChange} className="h-16 px-6 font-bold text-lg rounded-2xl bg-gray-50 border-gray-200 focus:bg-white focus:border-[#1B3A6B] focus:ring-0 transition-colors" />
                <Textarea name="message" required placeholder="김태성 후보에게 전할 응원이나 건의사항을 남겨주세요." rows={5} value={formData.message} onChange={handleChange} className="rounded-2xl bg-gray-50 border-gray-200 focus:bg-white p-6 font-medium text-lg resize-none focus:border-[#1B3A6B] focus:ring-0 transition-colors" />
            </div>

            {status === 'error' && (
                <p className="text-red-500 text-sm font-bold text-center py-3 bg-red-50 rounded-xl">⚠️ 네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.</p>
            )}

            <Button type="submit" disabled={status === 'loading'} className="w-full h-16 bg-[#E8941A] hover:bg-[#d17a0f] text-white font-black text-xl rounded-2xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 active:scale-95 disabled:opacity-50">
                {status === 'loading' ? '전송 중...' : '메시지 발송하기 👉'}
            </Button>
        </form>
    );
}
