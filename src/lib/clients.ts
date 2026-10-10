import { getCollection, type CollectionEntry } from 'astro:content';

export type Client = CollectionEntry<'clients'>;
export type Reel = Client['data']['reels'][number] & { client: Client };

/** Step shown by the full-screen viewer / present mode. */
export type Step = { t: 'ig'; src: string };

export const igEmbed = (code: string) => `https://www.instagram.com/reel/${code}/embed/`;
export const igProfile = (handle: string) => `https://www.instagram.com/${handle}/`;

/** "4.6M" → 4600000, "15.9K" → 15900, "2,575" → 2575 */
export function parseCount(s: string) {
  const n = parseFloat(s.replace(/,/g, ''));
  if (/m$/i.test(s)) return n * 1e6;
  if (/k$/i.test(s)) return n * 1e3;
  return n;
}

export function formatCount(n: number) {
  if (n >= 1e6) return `${(n / 1e6).toFixed(1).replace(/\.0$/, '')}M`;
  if (n >= 1e4) return `${Math.round(n / 1e3)}K`;
  if (n >= 1e3) return `${(n / 1e3).toFixed(1).replace(/\.0$/, '')}K`;
  return String(n);
}

export async function getClients() {
  const all = (await getCollection('clients')).sort((a, b) => a.data.order - b.data.order);
  const stories = all.filter((c) => c.data.showcase === 'story');
  const names = all.filter((c) => c.data.showcase === 'name');
  // Client totals exclude VegaCore's own page.
  const paying = stories.filter((c) => c.data.industry !== 'vegacore');
  const totals = {
    reels: paying.reduce((s, c) => s + (c.data.period?.reels ?? 0), 0),
    views: paying.reduce((s, c) => s + parseCount(c.data.period?.views ?? '0'), 0),
    top: Math.max(...paying.flatMap((c) => c.data.reels.map((r) => parseCount(r.views)))),
  };
  const asOf = stories.map((c) => c.data.asOf).filter(Boolean).sort().pop();
  return { all, stories, names, paying, totals, asOf };
}

export function reelsOf(clients: Client[]): Reel[] {
  return clients.flatMap((client) => client.data.reels.map((r) => ({ ...r, client })));
}
