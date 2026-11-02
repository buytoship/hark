// ─────────────────────────────────────────────────────────────
//  Stack Daily — single place for brand + deployment settings.
//  To move to a custom domain: set url to "https://yourdomain.com",
//  set base to "/", and add public/CNAME containing the domain.
//  (Both can also be overridden at build time with SITE_URL / SITE_BASE.)
// ─────────────────────────────────────────────────────────────
export const SITE = {
  name: 'Stack Daily',
  tagline: 'Verified tech deals, every day',
  description:
    'Stack Daily tracks verified tech deals for US shoppers — VPNs, hosting & VPS, AI tools, electronics and Black Friday 2026 — with prices checked on official merchant pages.',
  url: process.env.SITE_URL || 'https://buytoship.github.io',
  base: process.env.SITE_BASE ?? '/hark',
  locale: 'en-US',
  // Telegram channel (placeholder until the channel exists)
  telegramUrl: '#telegram',
  telegramLabel: 'Telegram channel coming soon',
};
