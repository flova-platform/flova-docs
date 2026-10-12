import { Provider } from '@/components/provider';
import type { Metadata } from 'next';
import './global.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.flova.ir'),
  title: {
    default: 'Flova Docs',
    template: '%s | Flova Docs',
  },
  description: 'Documentation for managing Flova devices, building dashboards, developing firmware, and using Flova APIs.',
  applicationName: 'Flova Docs',
  keywords: ['Flova', 'IoT', 'devices', 'dashboards', 'firmware', 'API'],
  alternates: {
    types: {
      'text/plain': '/llms.txt',
      'text/markdown': '/llms-full.txt',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/logo/flova-icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Flova Docs',
    title: 'Flova Docs',
    description: 'Documentation for managing Flova devices, building dashboards, developing firmware, and using Flova APIs.',
    images: [
      {
        url: '/logo-light.png',
        width: 512,
        height: 138,
        alt: 'Flova',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Flova Docs',
    description: 'Documentation for managing Flova devices, building dashboards, developing firmware, and using Flova APIs.',
    images: ['/logo-light.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
