import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '洞察台 · AI 服务分析',
  description: '脱敏的 AI 服务使用洞察与质量分析看板',
  openGraph: {
    title: '洞察台 · AI 服务分析',
    description: '周覆盖 150+ 用户、680+ 次问答的脱敏演示看板',
  },
  twitter: {
    card: 'summary_large_image',
    title: '洞察台 · AI 服务分析',
    description: '周覆盖 150+ 用户、680+ 次问答的脱敏演示看板',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
