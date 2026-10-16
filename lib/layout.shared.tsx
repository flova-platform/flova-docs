import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { uiTranslations } from 'fumadocs-ui/i18n';
import { i18n } from '@/lib/i18n';
import Image from 'next/image';

export const translations = i18n.translations().extend(uiTranslations());

export const docsSections = [
  {
    slug: 'console',
    en: { title: 'Console', description: 'Manage devices and data.' },
    fa: { title: 'کنسول', description: 'مدیریت دستگاه‌ها و داده‌ها.' },
  },
  {
    slug: 'studio',
    en: { title: 'Studio', description: 'Build dashboards.' },
    fa: { title: 'استودیو', description: 'ساخت داشبورد.' },
  },
  {
    slug: 'sdk',
    en: { title: 'SDK', description: 'Build Flova firmware.' },
    fa: { title: 'SDK', description: 'ساخت firmware فلووا.' },
  },
  {
    slug: 'app',
    en: { title: 'App', description: 'Use published dashboards.' },
    fa: { title: 'اپلیکیشن', description: 'استفاده از داشبوردهای منتشرشده.' },
  },
] as const;

translations.add({
  fa: {
    displayName: 'فارسی',
    'Choose a language(language switcher)': 'انتخاب زبان',
    'Choose a language(language switcher)(aria-label)': 'انتخاب زبان',
    'Close Sidebar(sidebar)(aria-label)': 'بستن نوار کناری',
    'Collapse Sidebar(sidebar)(aria-label)': 'جمع‌کردن نوار کناری',
    'Copy Anchor Link(heading anchor)(aria-label)': 'کپی پیوند این بخش',
    'Copy Text(code block)(aria-label)': 'کپی متن',
    'Dark(theme switcher)(aria-label)': 'تیره',
    'Light(theme switcher)(aria-label)': 'روشن',
    'Next Page(pagination)': 'صفحهٔ بعد',
    'No Headings(table of contents)': 'عنوانی وجود ندارد',
    'On this page(table of contents)': 'در این صفحه',
    'Open Search(search trigger)(aria-label)': 'باز کردن جست‌وجو',
    'Open Sidebar(sidebar)(aria-label)': 'باز کردن نوار کناری',
    'Previous Page(pagination)': 'صفحهٔ قبل',
    'Search(search dialog)': 'جست‌وجو',
    'Search(search trigger)': 'جست‌وجو',
    'System(theme switcher)(aria-label)': 'سیستم',
    'Toggle Theme(theme switcher)(aria-label)': 'تغییر پوسته',
  },
  en: { displayName: 'English' },
});

export function baseOptions(locale: string = i18n.defaultLanguage): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-2">
          <Image src="/logo/flova-icon.svg" alt="" width={24} height={24} />
          <span>{locale === 'fa' ? 'مستندات فلووا' : 'Flova Docs'}</span>
        </span>
      ),
      url: `/${locale}`,
    },
    githubUrl: 'https://github.com/flova-platform/flova-docs',
    i18n: true,
  };
}
