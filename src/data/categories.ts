// Category pages. Top merchants come from the Top 5 lists in the research files
// (deals-digest/verticals/*), with merchants that don't allow deal/coupon promotion removed.
export type TopMerchant = { name: string; domain: string; line: string };
export type Group = { title: string; merchants: TopMerchant[] };
export type Category = {
  slug: string;
  name: string;
  short: string;
  icon: string;
  intro: string;
  groups: Group[];
};

const m = (name: string, domain: string, line: string): TopMerchant => ({ name, domain, line });

export const CATEGORIES: Category[] = [
  {
    slug: 'vpn-security',
    name: 'VPN & Security',
    short: 'VPNs, antivirus, password managers, identity protection',
    icon: 'shield',
    intro:
      'VPN and security subscriptions run their deepest discounts around Black Friday, usually on 1–2 year plans. We list the plan length, the renewal price when the merchant publishes it, and the date we last checked the official page.',
    groups: [
      { title: 'Consumer VPN', merchants: [
        m('NordVPN', 'nordvpn.com', 'Widely used VPN from Nord Security; biggest sale of the year runs around Black Friday.'),
        m('Surfshark', 'surfshark.com', 'VPN with unlimited devices; bundles antivirus and alerts in its One plans.'),
        m('PureVPN', 'purevpn.com', 'Long-running VPN provider with frequent long-term plan discounts.'),
        m('Proton VPN', 'protonvpn.com', 'Privacy-focused VPN from the Swiss team behind Proton Mail.'),
        m('CyberGhost', 'cyberghostvpn.com', 'Budget-friendly VPN known for low prices on long plans.'),
      ]},
      { title: 'Antivirus & security suites', merchants: [
        m('Norton', 'norton.com', 'Antivirus and device security suites from Gen Digital.'),
        m('ESET', 'eset.com', 'Lightweight antivirus and internet security for home and business.'),
        m('Bitdefender', 'bitdefender.com', 'Antivirus and total security suites for Windows, Mac and mobile.'),
        m('Malwarebytes', 'malwarebytes.com', 'Malware removal and real-time protection.'),
        m('Avast', 'avast.com', 'Free and premium antivirus from Gen Digital.'),
      ]},
      { title: 'Password managers', merchants: [
        m('NordPass', 'nordpass.com', 'Password manager from the makers of NordVPN.'),
        m('LastPass', 'lastpass.com', 'Password manager for individuals, families and teams.'),
        m('Keeper Security', 'keepersecurity.com', 'Zero-knowledge password and secrets manager.'),
        m('1Password', '1password.com', 'Password manager for individuals, families and businesses.'),
        m('Proton Pass', 'proton.me', 'Encrypted password manager from Proton.'),
      ]},
      { title: 'Identity protection & data removal', merchants: [
        m('Aura', 'aura.com', 'All-in-one identity theft, credit and device protection.'),
        m('LifeLock', 'lifelock.norton.com', 'Identity theft protection from Norton.'),
        m('Identity Guard', 'identityguard.com', 'Identity monitoring and theft protection.'),
        m('Incogni', 'incogni.com', 'Automated personal data removal from data brokers.'),
        m('DeleteMe', 'joindeleteme.com', 'Removes your personal info from people-search sites.'),
        m('Optery', 'optery.com', 'Personal data removal with before/after reports.'),
      ]},
    ],
  },
  {
    slug: 'hosting-vps',
    name: 'Hosting & VPS',
    short: 'Web hosting, VPS, domains, website builders',
    icon: 'server',
    intro:
      'Hosting deals look cheap because they are monthly prices on long prepaid terms. Every listing here notes the term and, when published, the renewal price — check both before you buy.',
    groups: [
      { title: 'Shared hosting', merchants: [
        m('Hostinger', 'hostinger.com', 'Budget-friendly shared, cloud and VPS hosting with frequent sales.'),
        m('DreamHost', 'dreamhost.com', 'Independent web host with long-term promo pricing.'),
        m('InterServer', 'interserver.net', 'US host known for price-lock shared hosting and cheap VPS.'),
        m('FastComet', 'fastcomet.com', 'Shared and managed cloud hosting.'),
      ]},
      { title: 'Budget & cloud VPS', merchants: [
        m('RackNerd', 'racknerd.com', 'Low-cost KVM VPS, popular for seasonal specials.'),
        m('Hostinger VPS', 'hostinger.com', 'KVM VPS plans with a simple control panel.'),
        m('Contabo', 'contabo.com', 'High-spec VPS and dedicated servers at low prices.'),
        m('Kamatera', 'kamatera.com', 'Configurable cloud servers billed by the hour.'),
        m('Vultr', 'vultr.com', 'Developer cloud compute in data centers worldwide.'),
      ]},
      { title: 'Managed WordPress & dedicated', merchants: [
        m('DreamHost DreamPress', 'dreamhost.com', 'Managed WordPress hosting from DreamHost.'),
        m('Liquid Web', 'liquidweb.com', 'Managed hosting, dedicated servers and Nexcess WordPress.'),
        m('Cloudways', 'cloudways.com', 'Managed cloud hosting on top of major cloud providers.'),
        m('ServerMania', 'servermania.com', 'Dedicated servers and cloud hosting.'),
        m('Rocket.net', 'rocket.net', 'Managed WordPress with a built-in CDN.'),
      ]},
      { title: 'Domains & website builders', merchants: [
        m('Namecheap', 'namecheap.com', 'Domain registrar with low first-year pricing.'),
        m('Spaceship', 'spaceship.com', 'Newer registrar from the Namecheap team.'),
        m('Name.com', 'name.com', 'Domain registrar and DNS.'),
        m('Squarespace', 'squarespace.com', 'Website builder with templates and domains.'),
        m('Shopify', 'shopify.com', 'Ecommerce platform for online stores.'),
      ]},
    ],
  },
  {
    slug: 'ai-tools',
    name: 'AI Tools',
    short: 'AI writing, video, voice, builders and SEO',
    icon: 'spark',
    intro:
      'AI tools change pricing often and rarely run classic doorbusters. We only list a deal here once the price is on the official page; most AI brands have not announced 2026 Black Friday pricing yet.',
    groups: [
      { title: 'AI writing', merchants: [
        m('Rytr', 'rytr.me', 'Low-cost AI writing assistant.'),
        m('Grammarly', 'grammarly.com', 'AI writing and grammar assistant.'),
        m('Jasper', 'jasper.ai', 'AI content platform for marketing teams.'),
        m('QuillBot', 'quillbot.com', 'Paraphrasing and writing tools.'),
        m('Writesonic', 'writesonic.com', 'AI writer and SEO content tools.'),
      ]},
      { title: 'AI video, image & voice', merchants: [
        m('InVideo AI', 'invideo.io', 'Turns text prompts into edited videos.'),
        m('Pictory', 'pictory.ai', 'Creates short videos from scripts and articles.'),
        m('Synthesia', 'synthesia.io', 'AI avatar video generator.'),
        m('ElevenLabs', 'elevenlabs.io', 'AI voice generation and dubbing.'),
        m('Descript', 'descript.com', 'Edit video and podcasts by editing text.'),
      ]},
      { title: 'Productivity, builders & SEO', merchants: [
        m('Gamma', 'gamma.app', 'AI presentations, docs and web pages.'),
        m('Notion', 'notion.com', 'Workspace for notes and docs with built-in AI.'),
        m('Lovable', 'lovable.dev', 'Build web apps by describing them in chat.'),
        m('Semrush', 'semrush.com', 'SEO and marketing toolkit.'),
        m('Surfer', 'surferseo.com', 'AI content optimization for SEO.'),
      ]},
    ],
  },
  {
    slug: 'electronics',
    name: 'Electronics',
    short: 'Laptops, accessories, cameras and big-box sales',
    icon: 'chip',
    intro:
      'Big retailers publish their Black Friday calendars weeks ahead. We track the official dates and only add product prices once they are confirmed on the retailer’s own page.',
    groups: [
      { title: 'Computers & laptops', merchants: [
        m('Lenovo US', 'lenovo.com', 'ThinkPad, Legion and IdeaPad laptops direct from Lenovo.'),
        m('Dell', 'dell.com', 'XPS, Alienware and business laptops and desktops.'),
        m('HP Store', 'hp.com', 'HP laptops, desktops and printers direct.'),
        m('Newegg', 'newegg.com', 'PC components, builds and electronics.'),
        m('Micro Center', 'microcenter.com', 'PC parts and electronics retailer.'),
      ]},
      { title: 'Audio & accessories', merchants: [
        m('Anker', 'anker.com', 'Chargers, power banks and audio gear.'),
        m('Logitech', 'logitech.com', 'Mice, keyboards, webcams and gaming gear.'),
        m('Bose', 'bose.com', 'Headphones, earbuds and speakers.'),
        m('Sonos', 'sonos.com', 'Wireless home speakers and soundbars.'),
      ]},
      { title: 'Cameras & retailers', merchants: [
        m('B&H Photo Video', 'bhphotovideo.com', 'Cameras, lenses and pro electronics.'),
        m('Adorama', 'adorama.com', 'Camera and creator gear retailer.'),
        m('Amazon', 'amazon.com', 'Largest US online retailer.'),
        m('Walmart', 'walmart.com', 'Big-box retailer with multiple Black Friday events.'),
        m('Best Buy', 'bestbuy.com', 'Electronics retailer with weekly Black Friday drops.'),
      ]},
    ],
  },
  {
    slug: 'investing-cashback',
    name: 'Investing & Cashback Apps',
    short: 'Brokerage apps, crypto and cashback',
    icon: 'coin',
    intro:
      'Brokerage and cashback apps compete with sign-up bonuses rather than Black Friday sales, and the terms change often. We only list an offer once it is confirmed on the official page. Bonuses are not investment advice.',
    groups: [
      { title: 'Brokerage & crypto apps', merchants: [
        m('Webull', 'webull.com', 'Commission-free stock, ETF and options trading app.'),
        m('Robinhood', 'robinhood.com', 'Commission-free investing and crypto app.'),
        m('moomoo', 'moomoo.com', 'Trading app with research tools and market data.'),
        m('Coinbase', 'coinbase.com', 'US crypto exchange.'),
      ]},
      { title: 'Cashback & savings apps', merchants: [
        m('Rakuten', 'rakuten.com', 'Cash back at thousands of online stores.'),
        m('Ibotta', 'ibotta.com', 'Cash back on groceries and everyday purchases.'),
        m('Capital One Shopping', 'capitaloneshopping.com', 'Browser extension that finds coupons and better prices.'),
      ]},
    ],
  },
];

export const getCategory = (slug: string) => CATEGORIES.find((c) => c.slug === slug);
