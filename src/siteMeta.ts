/**
 * The site's public address — the one place to change if the domain moves.
 *
 * Used for the canonical URL and the og:url tag, both of which must be absolute:
 * a relative value there makes search engines and link previews resolve against
 * whatever host happens to serve the page.
 *
 * This is the host Vercel redirects to (haebotai.com -> www.haebotai.com), so
 * the canonical URL matches where visitors actually land. Change it here and
 * in index.html's static canonical / og:url if the primary domain is switched.
 */
export const SITE_URL = 'https://www.haebotai.com';

/** The company's main website, linked from the hero, the header and the contact block. */
export const MAIN_SITE_URL = 'http://www.jcodeedu.com/';

/** Absolute URL for a path on the site, e.g. absoluteUrl('/og-image.jpg'). */
export function absoluteUrl(path: string): string {
  return `${SITE_URL.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`;
}
