import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://soozhee.com'),
  title: 'Soozhee — For Things Worth Thinking About Properly',
  description: 'A private place for proper conversations with Soozhee Pearce.',
  openGraph: {
    title: 'SOOZHEE',
    description: 'For things worth thinking about properly.',
    url: 'https://soozhee.com',
    siteName: 'Soozhee',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Soozhee — For things worth thinking about properly.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOOZHEE',
    description: 'For things worth thinking about properly.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
