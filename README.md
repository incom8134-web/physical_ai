# Physical AI · HAEBOT

Jinie EduTech's bilingual website for HAEBOT robots, education, consulting, CS/AS, sales and rental. Maintained by [incom8134-web](https://github.com/incom8134-web).

Live site: [www.haebotai.com](https://www.haebotai.com).

## Development

Use Node.js 22 (current patch) and npm. Figma Make uses pnpm 10.34.3 through `.mise.toml`.

```sh
npm ci
npm run dev
```

The local server uses port 8443 unless `PORT` is set. In Figma Make, the preview server is managed by the platform. Keep the scripts under `.figma/make/`, the Figma Vite plugins and the `figma:*` placeholders in `index.html` intact.

```sh
npm run check             # Type checking, unused-code scan, build and regression tests
npm run check:attribution # Commit and PR credit policy
npm run format            # Format the project with oxfmt
npm run build             # Production output in dist/
npm run preview           # Serve the production build
```

Both lockfiles are tracked and tested in CI: npm for local development, pnpm for Figma Make. Update both when adding dependencies while preserving each toolchain's existing resolutions.

## Pages and content

| URL             | Content                                                  |
| --------------- | -------------------------------------------------------- |
| `/`             | Services, HAEBOT, physical AI, latest news and inquiries |
| `/#/education`  | Program, curriculum preview and enrollment inquiry       |
| `/#/consulting` | Audiences, topics and consulting process                 |
| `/#/support`    | CS/AS scope and support process                          |
| `/#/rental`     | Sales/rental options and expandable posters              |
| `/#/updates`    | News and field reports                                   |

`src/App.tsx` handles navigation and the home page. Translations live in `src/i18n.tsx`; page content lives in `src/data.ts`. Add news entries to the top of `src/updates.ts`, including Korean and English copy and image descriptions.

Keep the canonical domain consistent in `src/siteMeta.ts`, `index.html` and `.figma/make/site.json`. The company's main-site link is configured separately as `MAIN_SITE_URL`.

## Inquiry delivery

Copy `.env.example` to `.env` and optionally set `VITE_WEB3FORMS_KEY` to a Web3Forms key registered to `incom2794@naver.com`. The build embeds this public form key; it determines the receiving inbox. Rebuild after changing it.

With a key, the form submits to Web3Forms. Without one, it opens the visitor's mail app with the completed message. Delivery failures also expose email, message-copy and telephone options. Regression tests mock the relay and never send real inquiries.

## Media and deployment

Vercel deploys the static `dist/` build. Media served by the site lives under `public/`; preserve the `.gitattributes` exceptions that store these files as real bytes rather than Git LFS pointers. Files under `src/imports/` are retained source materials.

Use `asset()` from `src/asset.ts` for public media paths so Figma subpath previews continue to work. `FIGMA_PUBLIC_URL` sets the preview build base. Hero and intro videos include WebM and MP4 sources; reduced-motion preferences and playback controls are handled in the application.

The Quality workflow runs on pull requests and pushes to `main`. It checks types, unused code, production rendering, navigation, dialogs, media references and mocked inquiry delivery. It also rejects automated-tool credit trailers and session links in new commits and PR descriptions.
