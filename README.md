# Stack Daily

Verified tech deals, every day — a static [Astro](https://astro.build) site for US shoppers (VPN & security, hosting & VPS, AI tools, electronics, investing & cashback apps, Black Friday 2026).

Live: https://buytoship.github.io/hark/

## Where things live

| What | Where |
|---|---|
| Brand name, tagline, site URL, base path, Telegram link | `site.config.mjs` (the one config file) |
| Deals (one JSON file per deal) | `src/content/deals/*.json` |
| Daily digest posts (one Markdown file per day) | `src/content/posts/YYYY-MM-DD.md` |
| Merchants + affiliate links | `src/data/merchants.json` |
| Category pages (intro + top merchants) | `src/data/categories.ts` |
| Retailer Black Friday calendars | `src/data/calendar.ts` |
| Outbound link logic | `src/lib/links.ts` (`dealHref`) |

## Add a daily post

1. Create `src/content/posts/2026-11-03.md`:

   ```md
   ---
   title: "Headline for the day"
   date: 2026-11-03
   description: "One-sentence summary (used on the home page, RSS and SEO)."
   deals: [nordvpn-2yr, hostinger-vps]   # ids = deal file names without .json
   lastChecked: "2026-11-03"
   ---

   Body in Markdown…
   ```

2. Commit and push to `main`. GitHub Actions builds the site and publishes it to the `gh-pages` branch (~1–2 min). The post appears on the home page, `/digest/`, the RSS feed and the sitemap automatically.

## Add or update a deal

Create or edit `src/content/deals/<id>.json`. Required: `merchant` (key in `merchants.json`), `product`, `categories`, `now`, `verified` (YYYY-MM-DD), `url` (official page). Optional: `was`, `discount`, `starts`, `ends` (use `"unknown"` when the merchant doesn’t say), `code`, `status` (`live` / `upcoming` / `ended`), `note`, `featured` (shows on the home page), `order`, `affiliate_url`.

Only list prices you have seen on the merchant’s official page.

## Affiliate links

Every “Get deal” button goes through `dealHref()` in `src/lib/links.ts`:

`deal.affiliate_url` → `merchants.json[merchant].affiliate_url` → `deal.url` (official page).

So once an affiliate account is approved, set `affiliate_url` for that merchant in `src/data/merchants.json` (or per deal) and every link switches over. Affiliate links automatically get `rel="sponsored"`.

## Custom domain

1. In `site.config.mjs` set `url: 'https://yourdomain.com'` and `base: '/'`.
2. Add `public/CNAME` containing `yourdomain.com`.
3. Point DNS at GitHub Pages and set the custom domain in the repo’s Pages settings.

## Local development

```bash
npm ci
npm run dev     # http://localhost:4321/hark/
npm run build   # outputs dist/
```
