import '@/styles/globals.css';

import type { Metadata } from 'next';

import CSSPreloader from '@/components/CSSPreloader';
import StyledComponentsRegistry from '@/lib/registry';

import { pretendard } from './fonts';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <CSSPreloader />
      <body className={`${pretendard.className}`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
