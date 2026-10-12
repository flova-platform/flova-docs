import { docsLlms } from '@/lib/source';

export const revalidate = false;

export async function GET() {
  return new Response(await docsLlms.index(), {
    headers: {
      'Cache-Control': 'public, max-age=3600',
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
