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
  title: 'Bet Collective',
  description:
    'Base Horse is a horse racing tipping service that provides high-quality, data-driven tips for horse racing enthusiasts. We use machine learning algorithms to predict the outcome of horse races and provide our subscribers with the most likely winner of each race. Our tips are based on a thorough analysis of historical data, form, and other relevant factors. We also provide detailed race previews and analysis to help our subscribers make informed decisions. Our service is designed to be easy to use and understand, and we provide customer support to help our subscribers with any questions they may have.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
