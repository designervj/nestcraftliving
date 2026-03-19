import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/components/Providers';
import SiteChrome from '@/components/SiteChrome';

export const metadata: Metadata = {
  title: 'NestCraft Interiors',
  description: 'Design-led interiors and furniture storefront built with Next.js.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <SiteChrome>{children}</SiteChrome>
        </Providers>
      </body>
    </html>
  );
}
