import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Policy } from '@/lib/types';

export default function PolicyGrid({ policies }: { policies: any[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {policies.map((item) => {
                const policy = item.fields as Policy;
                return (
                    <Card key={item.sys.id} className="group overflow-hidden border-2 transition-all hover:border-[#E8941A] hover:shadow-2xl">
                        <CardHeader className="bg-gray-50 p-8 text-center transition-colors group-hover:bg-[#1B3A6B]/5">
                            {policy.icon?.fields?.file?.url && (
                                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-md transition-transform group-hover:scale-110">
                                    <Image
                                        src={`https:${policy.icon.fields.file.url}`}
                                        alt={policy.title}
                                        width={48}
                                        height={48}
                                    />
                                </div>
                            )}
                            <CardTitle className="text-2xl font-black text-[#1B3A6B]">{policy.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-8">
                            <p className="line-clamp-3 text-gray-600 leading-relaxed font-medium">
                                {/* Rich Text의 간단한 텍스트 추출 (추후 별도 렌더러 사용 권장) */}
                                {typeof policy.description === 'string' ? policy.description : '정책 상세 내용을 확인해 보세요.'}
                            </p>
                            <div className="mt-6 flex justify-end">
                                <span className="text-sm font-bold text-[#E8941A]">자세히 보기 →</span>
                            </div>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}
