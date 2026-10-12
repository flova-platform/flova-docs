import { redirect } from 'next/navigation';
import { i18n } from '@/lib/i18n';

export default async function LocaleHome({ params }: PageProps<'/[lang]'>) {
  const { lang } = await params;
  redirect(`/${lang}/docs`);
}

export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}
