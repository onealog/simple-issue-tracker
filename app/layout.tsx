import React from 'react';
import '@radix-ui/themes/styles.css';
import './theme-config.css';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { Theme } from '@radix-ui/themes';
import NavBar from './NavBar';

const pretendard = localFont({
  src: [
    {
      path: './fonts/Pretendard-Light.woff2',
      weight: '300',
      style: 'light',
    },
    {
      path: './fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'regular',
    },
    {
      path: './fonts/Pretendard-Medium.woff2',
      weight: '500',
      style: 'medium',
    },
    {
      path: './fonts/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'semibold',
    },
    {
      path: './fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: './fonts/Pretendard-ExtraBold.woff2',
      weight: '800',
      style: 'extrabold',
    },
  ],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme appearance="light" accentColor="cyan" grayColor="mauve" panelBackground="solid">
          <NavBar />
          <main>
            {children}
          </main>
        </Theme>
      </body>
    </html>
  );
}
