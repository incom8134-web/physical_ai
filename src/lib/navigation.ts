/** Pages of the site. The home page is `/`; the others live under `#/<page>`. */
export type Page = 'home' | 'education' | 'consulting' | 'support' | 'rental';

const SUBPAGES: Exclude<Page, 'home'>[] = ['education', 'consulting', 'support', 'rental'];

export function pageFromHash(hash = window.location.hash): Page {
  return SUBPAGES.find(page => hash.startsWith(`#/${page}`)) ?? 'home';
}

/** Home-page sections that the header links to, in page order. */
export const HOME_SECTION_IDS = ['services', 'robots', 'physical-ai', 'contact'];
