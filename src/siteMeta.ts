// Keep this domain in sync with index.html and .figma/make/site.json.
const SITE_URL = 'https://www.haebotai.com';

/** The company's main website, linked from the hero, the header and the contact block. */
export const MAIN_SITE_URL = 'http://www.jcodeedu.com/';

/** Absolute URL for a path on the site, e.g. absoluteUrl('/og-image.jpg'). */
export function absoluteUrl(path: string): string {
  return `${SITE_URL.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`;
}
