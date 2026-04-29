import { POLICIES } from '@/lib/static-data';
import PolicyGrid from '@/components/PolicyGrid';

export default function PoliciesPage() {
    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
            <div className="mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-black text-[#1B3A6B] sm:text-5xl mb-4">핵심 정책 5가지</h1>
                    <div className="mx-auto mt-4 h-1.5 w-20 bg-[#E8941A]" />
                    <p className="mt-6 text-lg font-bold text-gray-500">탭하면 자세히 볼 수 있어요</p>
                </div>

                <PolicyGrid policies={POLICIES} />
            </div>
        </div>
    );
}
