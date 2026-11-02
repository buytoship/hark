import merchants from '../data/merchants.json';

type Merchant = { name: string; domain: string; url: string; affiliate_url?: string };
const MERCHANTS = merchants as Record<string, Merchant>;

export const getMerchant = (key: string): Merchant =>
  MERCHANTS[key] ?? { name: key, domain: '', url: '#' };

/**
 * The ONE place every outbound deal link goes through.
 * Priority: deal.affiliate_url → merchant.affiliate_url (only when the deal has no own link
 * override and the merchant link is a generic tracking link) → deal.url (official page).
 */
export function dealHref(deal: { merchant: string; url: string; affiliate_url?: string }): string {
  if (deal.affiliate_url) return deal.affiliate_url;
  const m = MERCHANTS[deal.merchant];
  if (m?.affiliate_url) return m.affiliate_url;
  return deal.url;
}

/** rel attribute: sponsored once an affiliate link is in use. */
export function dealRel(deal: { merchant: string; affiliate_url?: string }): string {
  const isAff = Boolean(deal.affiliate_url || MERCHANTS[deal.merchant]?.affiliate_url);
  return isAff ? 'sponsored noopener' : 'noopener';
}
