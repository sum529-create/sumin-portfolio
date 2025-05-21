import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: [
    {
      path: './fonts/pretendard/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/pretendard/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/pretendard/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/pretendard/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: "프론트엔드 개발자 | 노수민",
  description: "사용자 중심의 UI와 인터렉티브 웹 개발에 관심이 많은 프론트엔드 개발자 노수민의 포트폴리오 입니다.",
  keywords:[
    "프론트엔드 개발자",
    "노수민",
    "포트폴리오",
    "웹 개발",
    "UI/UX",
    "React",
    "Next.js",
    "TypeScript",
    "프론트엔드",
    "개발자",
    "프로그래밍",
    "웹 디자인",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph:{
    type: 'website',
    locale: "ko_KR",
    url: 'https://sumin-portfolio-sigma.vercel.app/',
    siteName: "노수민의 포트폴리오",
    title: "프론트엔드 개발자 | 노수민",
    description: "사용자 중심의 UI와 인터렉티브 웹 개발에 관심이 많은 프론트엔드 개발자 노수민의 포트폴리오 입니다.",
    images:[
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "프론트엔드 개발자 | 노수민",
      },
    ]
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  initialScale: 1,
  width: "device-width",
  height: "device-height",
  maximumScale: 1,
  userScalable: false,
  themeColor: '#6366f1'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className="antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
