import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'Flova Docs';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

export const gitConfig = {
  user: 'flova-platform',
  repo: 'flova-docs',
  branch: 'main',
};

const getContentUrl = createGetUrl(docsContentRoute);
const getImageUrl = createGetUrl(docsImageRoute);

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];
  return { segments, url: getContentUrl(segments, page.locale) };
}

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];
  return { segments, url: getImageUrl(segments, page.locale) };
}
