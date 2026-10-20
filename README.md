# Physical AI — 지니에듀테크(주)

Landing site for JINIE EDUTECH's physical AI services: education, consulting, CS / AS and Haebot sales & rental.
Korean and English, built with React 19, Vite and Tailwind CSS v4.

## Getting started

Requirements: Node.js 22 or newer and pnpm 10 (`corepack enable` picks the pinned version from `package.json`).

```bash
pnpm install
pnpm dev          # local site at http://localhost:5173
```

| Command          | What it does                                  |
| ---------------- | --------------------------------------------- |
| `pnpm dev`       | Development server with live reload           |
| `pnpm build`     | Production build into `dist/`                 |
| `pnpm preview`   | Serve the production build locally            |
| `pnpm typecheck` | TypeScript check (also catches unused code)   |
| `pnpm format`    | Format every file with Prettier               |

## Project structure

```
index.html                 Page shell: title, description, link-preview tags
public/                    Images, videos and icons, served as-is
src/
  main.tsx                 Entry point
  App.tsx                  Page routing, header and footer
  index.css                Colour tokens, shared CSS classes, animations
  config/site.ts           Site address, company contact details, main-site link
  i18n/
    dictionary.ts          All visible text, Korean and English
    LanguageProvider.tsx   Current language and the useLanguage() hook
  content/                 Structured data for the subpages (modules, rental plans, …)
  pages/
    home/                  Home page, one file per section
    EducationPage.tsx      #/education
    ConsultingPage.tsx     #/consulting
    SupportPage.tsx        #/support   (CS / AS)
    RentalPage.tsx         #/rental
  components/              Shared UI: header, footer, page sections, reveal animation, …
  hooks/                   Reusable React hooks
  lib/                     Helpers: asset paths, page routing, inquiry form delivery
```

## Editing the site

| To change …                                  | Edit                                       |
| -------------------------------------------- | ------------------------------------------ |
| Any text on the site (both languages)        | `src/i18n/dictionary.ts`                   |
| Course modules, rental plans, posters, …     | `src/content/*.ts`                         |
| Email, phone numbers, registration number    | `src/config/site.ts`                       |
| Page title and link-preview text             | `index.html`                               |
| Images and videos                            | `public/images`, `public/video`            |
| Colours                                      | the tokens at the top of `src/index.css`   |

Korean is the source shape of the dictionary: when a key is added in Korean it must be added in English too, or
`pnpm typecheck` fails.

Sections alternate between white and navy bands. Wrapping a section in `className="theme-dark"` switches every
colour inside it to the navy palette; cards inside a navy band stay white.

## Contact form

The form is delivered by [Web3Forms](https://web3forms.com). Copy `.env.example` to `.env` and paste the access key
(registered with incom2794@naver.com). Without a key the form says it is not connected and offers the email address
instead.

## Deployment

Vercel builds and deploys the `main` branch automatically. Work on a branch, open a pull request, and merge it to
publish. Every pull request also gets its own preview deployment.
