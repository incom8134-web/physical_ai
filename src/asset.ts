/** Resolve public assets against Vite's base URL, including subpath previews. */
const BASE = import.meta.env.BASE_URL;

export function asset(path: string): string {
  return BASE + path.replace(/^\/+/, '');
}
