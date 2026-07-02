import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '신안 정책마당',
  description: '군민이 제안하고, 군민이 함께하면, 신안이 바뀝니다',
  openGraph: {
    title: '신안 정책마당',
    description: '군민이 제안하고, 군민이 함께하면, 신안이 바뀝니다',
    url: 'https://sinanjuso-web.vercel.app',
    siteName: '신안 정책마당',
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
