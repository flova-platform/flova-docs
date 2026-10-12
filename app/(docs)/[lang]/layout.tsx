'use client';
import { RootProvider } from 'fumadocs-ui/provider/next';
import SearchDialog from '@/components/search';
import { i18nProvider } from 'fumadocs-ui/i18n';
import { translations } from '@/lib/layout.shared';
import { i18n } from '@/lib/i18n';
import { use, useEffect } from 'react';

export default function Layout({ params, children }: LayoutProps<'/[lang]'>) {
  const { lang } = use(params);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  }, [lang]);

  return (
    <RootProvider dir={lang === 'fa' ? 'rtl' : 'ltr'} i18n={i18nProvider(translations, lang)} search={{ SearchDialog }}>
      <div lang={lang} dir={lang === 'fa' ? 'rtl' : 'ltr'} className="flex flex-col min-h-screen">
        {children}
      </div>
    </RootProvider>
  );
}

