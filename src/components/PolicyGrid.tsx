import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PolicyGrid({ policies }: { policies: any[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {policies.map((policy) => {
                return (
                    <Link key={policy.id} href={`/policies/${policy.id}`} className="block h-full no-underline">
                        <Card className="group overflow-hidden border-2 transition-all duration-300 hover:-translate-y-2 hover:border-[#E8941A] hover:shadow-2xl h-full" style={{ backgroundColor: policy.cardColor }}>
                            <CardHeader className="p-8 pb-4 text-center">
                                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl shadow-sm transition-transform group-hover:scale-110" style={{ backgroundColor: policy.iconBgColor }}>
                                    <span className="text-4xl">{policy.emoji}</span>
                                </div>
                                <CardTitle className="text-2xl font-black text-[#1B3A6B] group-hover:text-[#E8941A] transition-colors">{policy.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-8 pt-0 text-center">
                                <p className="line-clamp-2 text-gray-700 font-bold mb-4">
                                    {policy.subtitle}
                                </p>
                                <div className="mt-4 flex justify-end">
                                    <span className="text-sm font-bold text-[#E8941A]">자세히 보기 →</span>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                );
            })}
        </div>
    );
}
