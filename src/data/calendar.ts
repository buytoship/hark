// Retailer Black Friday 2026 calendars, as published on official corporate pages.
export type CalEvent = { name: string; dates: string; note?: string };
export type Retailer = { name: string; source?: string; verified: string; events: CalEvent[]; note?: string };

export const KEY_DATES = [
  { label: 'Thanksgiving', date: '2026-11-26', day: 'Thu' },
  { label: 'Black Friday', date: '2026-11-27', day: 'Fri' },
  { label: 'Cyber Monday', date: '2026-11-30', day: 'Mon' },
];

export const RETAILERS: Retailer[] = [
  {
    name: 'Walmart',
    source: 'https://corporate.walmart.com/news/2026/10/walmart-unwraps-three-major-holiday-shopping-events',
    verified: '2026-10-28',
    events: [
      { name: 'Early Black Friday Deals', dates: 'Nov 12 – Nov 15', note: 'Online 12:01 a.m. ET; stores 6 a.m. local. Walmart+ members get hot Deal drops 24 hours early from Nov 12.' },
      { name: 'Black Friday Deals', dates: 'Nov 23 – Nov 29', note: 'Online 12:01 a.m. ET (Walmart+ early access Nov 23; everyone Nov 24 at 12:01 a.m. ET); stores Nov 27 at 6 a.m. local.' },
      { name: 'Cyber Monday', dates: 'Nov 30 – Dec 2', note: 'Online 12:01 a.m. ET.' },
    ],
  },
  {
    name: 'Best Buy',
    source: 'https://corporate.bestbuy.com/2026/holiday-calendar/',
    verified: '2026-10-28',
    note: 'Double points for My Best Buy Plus/Total members Nov 19 – Dec 6. Stores closed on Thanksgiving. Time zone not stated.',
    events: [
      { name: 'DoorBOOsters', dates: 'From Oct 30' },
      { name: 'Early Black Friday Deals + Doorbusters', dates: 'From Nov 6', note: 'New deals every Friday.' },
      { name: 'Black Friday Doorbusters & Deals (10 days)', dates: 'From Nov 19' },
      { name: 'Cyber Sunday & Monday', dates: 'Nov 29 – Nov 30' },
      { name: 'Cyber Week Deals', dates: 'Dec 1 – Dec 6' },
      { name: 'Last-Minute Savings', dates: 'Dec 18 – Dec 24' },
    ],
  },
  {
    name: 'Target',
    source: 'https://corporate.target.com/press/release/2026/10/target-makes-it-easier-for-guests-to-discover-stylish-holiday-gifts-they-can-t-wait-to-give',
    verified: '2026-10-28',
    note: 'Official Black Friday week dates: not yet announced.',
    events: [
      { name: 'Deal of the Day', dates: 'Nov 1 – Dec 24', note: 'One deal per day, with a preview the day before.' },
      { name: 'Early Black Friday deals', dates: 'Nov 5 – Nov 7' },
      { name: 'Weekend limited-time deals', dates: 'Every weekend after' },
    ],
  },
  {
    name: 'The Home Depot',
    source: 'https://corporate.homedepot.com/news/products/home-depot-kicks-black-friday-season',
    verified: '2026-10-29',
    note: 'Time zone not stated.',
    events: [
      { name: 'Black Friday Savings Event (stores + online)', dates: 'Nov 5 – Nov 25', note: 'Includes buy-one-get-one on select RYOBI, Milwaukee and DEWALT power tools.' },
    ],
  },
  {
    name: "Lowe's",
    source: 'https://corporate.lowes.com/newsroom/press-releases/lowes-unveils-holiday-2026-lineup-new-gifts-and-decor-mylowes-rewards-perks-and-weeks-of-black-friday-savings',
    verified: '2026-10-29',
    note: 'Time zone not stated; item prices not listed in the announcement.',
    events: [
      { name: 'Black Friday deals (4 weeks)', dates: 'From Oct 29', note: 'Tools, holiday decor, appliances and outdoor power equipment; free tool with select battery kits from some brands.' },
      { name: '12 Days of Deals', dates: 'From Nov 16', note: 'New deals daily through Black Friday.' },
      { name: 'Thanksgiving week', dates: 'Thanksgiving week', note: 'Stores closed on Thanksgiving; online only that day.' },
      { name: 'Black Friday Doorbusters', dates: 'Nov 27', note: 'MyLowe’s Rewards members get online access one day early (Nov 26).' },
      { name: 'December Deal Drops', dates: 'Dec 3 – Dec 24' },
    ],
  },
  {
    name: 'Amazon',
    verified: '2026-10-30',
    note: 'Amazon’s official FAQ confirms Black Friday on Nov 27. The rest of its Black Friday week schedule has not been announced.',
    events: [{ name: 'Black Friday', dates: 'Nov 27' }],
  },
];
