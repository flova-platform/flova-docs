import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { uiTranslations } from 'fumadocs-ui/i18n';
import { i18n } from '@/lib/i18n';

export const translations = i18n.translations().extend(uiTranslations());

translations.add({
  fa: { displayName: 'فارسی' },
  en: { displayName: 'English' },
});

export function baseOptions(locale: string = i18n.defaultLanguage): BaseLayoutProps {
  return {
    nav: {
      title: 'Flova Docs',
      url: `/${locale}`,
    },
    githubUrl: 'https://github.com/flova-platform/flova-docs',
    i18n: true,
  };
}
