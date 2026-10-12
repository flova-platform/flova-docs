import { source } from '@/lib/source';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import { notFound, redirect } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { i18n } from '@/lib/i18n';

export default async function Page(props: PageProps<'/[lang]/docs/[[...slug]]'>) {
  const params = await props.params;
  const slug = params.slug;
  if (!slug) redirect(`/${params.lang}/docs/console/overview`);

  const page = source.getPage(slug, params.lang);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return [
    ...i18n.languages.map((lang) => ({ lang, slug: [] })),
    ...source.generateParams(),
  ];
}

export async function generateMetadata(props: PageProps<'/[lang]/docs/[[...slug]]'>): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug;
  if (!slug) {
    return {
      title: { absolute: params.lang === 'fa' ? 'مستندات فلووا' : 'Flova Docs' },
    };
  }

  const page = source.getPage(slug, params.lang);
  if (!page) notFound();

  const siteName = params.lang === 'fa' ? 'مستندات فلووا' : 'Flova Docs';
  const url = page.url.endsWith('/') ? page.url : `${page.url}/`;
  const languages = Object.fromEntries(
    i18n.languages.flatMap((language) => {
      const translatedPage = source.getPage(page.slugs, language);
      return translatedPage
        ? [[language, translatedPage.url.endsWith('/') ? translatedPage.url : `${translatedPage.url}/`]]
        : [];
    }),
  );

  return {
    title: { absolute: `${page.data.title} | ${siteName}` },
    description: page.data.description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type: 'article',
      url,
      siteName,
      title: page.data.title,
      description: page.data.description,
      locale: params.lang === 'fa' ? 'fa_IR' : 'en_US',
      images: ['/logo-light.png'],
    },
    twitter: {
      card: 'summary',
      title: page.data.title,
      description: page.data.description,
      images: ['/logo-light.png'],
    },
  };
}
