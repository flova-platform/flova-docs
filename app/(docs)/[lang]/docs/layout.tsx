import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions, docsSections } from '@/lib/layout.shared';

export default async function Layout({ params, children }: LayoutProps<'/[lang]/docs'>) {
  const { lang } = await params;
  const locale = lang === 'fa' ? 'fa' : 'en';

  return (
    <DocsLayout
      tree={source.getPageTree(lang)}
      tabs={{
        transform: (tab, node) => {
          const section = docsSections.find((item) => item.slug === node.$ref?.folder);
          if (!section) return tab;

          return {
            ...tab,
            ...section[locale],
            icon: node.icon ? (
              <span className="inline-flex size-4 shrink-0 [&_svg]:size-4">{node.icon}</span>
            ) : undefined,
          };
        },
      }}
      tabMode="auto"
      sidebar={{ defaultOpenLevel: 1 }}
      {...baseOptions(lang)}
    >
      {children}
    </DocsLayout>
  );
}
