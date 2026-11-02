import { getCollection, type CollectionEntry } from 'astro:content';
import { SITE } from '../../site.config.mjs';
export { SITE };

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
/** Build an internal URL that respects the configured base path. */
export const url = (path = '/') => `${BASE}${path.startsWith('/') ? path : '/' + path}`;

export type Deal = CollectionEntry<'deals'>;
export type Post = CollectionEntry<'posts'>;

export async function getDeals(): Promise<Deal[]> {
  const all = await getCollection('deals');
  return all.sort((a, b) => a.data.order - b.data.order);
}
export async function getActiveDeals() {
  return (await getDeals()).filter((d) => d.data.status !== 'ended');
}
export async function getPosts(): Promise<Post[]> {
  const all = await getCollection('posts');
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
/** Latest date any deal was verified on an official page. */
export async function lastChecked(): Promise<string> {
  const d = await getDeals();
  return d.map((x) => x.data.verified).sort().at(-1) ?? '';
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
/** "2026-10-28" -> "Oct 28, 2026"; anything else returned as-is. */
export function fmtDate(s: string | Date): string {
  const iso = s instanceof Date ? s.toISOString().slice(0, 10) : s;
  const m = /^(\d{4})-(\d{2})-(\d{2})(.*)$/.exec(iso);
  if (!m) return iso;
  return `${MONTHS[+m[2] - 1]} ${+m[3]}, ${m[1]}${m[4]}`;
}
