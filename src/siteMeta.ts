/**
 * The site's public address — the one place to change after the domain is
 * registered.
 *
 * Used for the canonical URL and the og:url tag, both of which must be absolute:
 * a relative value there makes search engines and link previews resolve against
 * whatever host happens to serve the page.
 *
 * After registering the domain, edit SITE_URL here and rebuild. Nothing else in
 * the project hard-codes a hostname.
 */
export const SITE_URL = 'https://pai.com';

/** Absolute URL for a path on the site, e.g. absoluteUrl('/og-image.jpg'). */
export function absoluteUrl(path: string): string {
  return `${SITE_URL.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`;
}
