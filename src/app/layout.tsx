import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '김태성과 신안사랑 - 신안군수 예비후보',
  description: '신안의 미래를 함께 만드는 공식 캠프',
  openGraph: {
    title: '김태성과 신안사랑: 새 술은 새 부대에!',
    description: '신안군수 예비후보 김태성 웹사이트',
    url: 'https://sinanjuso-web.vercel.app',
    siteName: '김태성과 신안사랑',

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
