export const SITE = {
  site: {
    url: "https://aygross.com/",
  },
  author: {
    firstName: "Ay",
    lastName: "Gross",
    fullName: "AY Gross",
    shortName: "AY",
    jobTitle: "IT Consultant, Photo Editor & Photographer",
    twitterHandle: "aygross",
  },
  location: {
    countryName: "Israel",
    countryCode: "IL",
    timezone: "Asia/Jerusalem",
  },
  links: {
    facebook: "https://www.facebook.com/AvrohomYosefGross/",
    mastodon: "https://polymaths.social/@ay",
    telegram: "https://t.me/notapizza",
    wishlist: "https://www.giftster.com/gift/public/Zge4f/",
    email: "mailto:avrohomygross@gmail.com",
  },
  visitedCountries: [
    "France",
    "China",
    "Italy",
    "Sri Lanka",
    "Uzbekistan",
    "Turkey",
    "Greece",
    "Malta",
    "Hungary",
    "Portugal",
    "Morocco",
    "Spain",
    "Netherlands",
    "Belgium",
  ],
};

export function buildPageTitle(page?: string): string {
  return page
    ? `${page} — ${SITE.author.fullName} | ${SITE.author.jobTitle}`
    : `${SITE.author.fullName} — ${SITE.author.jobTitle}`;
}
