# Nordren

Next.js App Router, React, TypeScript, and Tailwind CSS. This increment contains bilingual routes and typed placeholder content, not the finished website.

## Development and verification

```sh
npm run dev
npm run lint
npx next typegen
npx tsc --noEmit
npm run build
```

Generate route types before standalone TypeScript checking on a fresh checkout or after moving routes. The production build also generates route types. Geist Sans uses next/font/google; a fresh build may need network access to download the font.

## Languages and routes

Norwegian Bokmål (nb) is the default. English (en) is secondary. There is no browser-language detection, automatic redirect, or i18n library.

| Page | Norwegian | English |
| --- | --- | --- |
| Home | / | /en |
| Services | /tjenester | /en/services |
| Pricing | /priser | /en/pricing |
| About | /om-oss | /en/about |
| Contact | /kontakt | /en/contact |
| Quote | /tilbud | /en/quote |

`app/(norwegian)/layout.tsx` and `app/(english)/layout.tsx` are separate root layouts. Both reuse `components/document.tsx`, which renders the server-side document language and shared font. There is intentionally no top-level app/layout.tsx.

Switching languages loads a new document and does not preserve in-memory form state. `components/language-switcher.tsx` uses ordinary links and equivalent-page URLs in `lib/i18n/routes.ts`; it needs no client JavaScript.

Route files select a page ID and locale. `components/foundation-page.tsx` renders the shared placeholder presentation. `content/types.ts` defines the dictionary contract; `content/nb.ts` and `content/en.ts` provide all page content and language labels. These are consumed by server components; avoid importing the full dictionaries into future client components.

To add a page, extend PageId, the route map, both dictionaries, and the two thin route entries. TypeScript checks completeness of the route map and dictionaries.

## Metadata and domain configuration

`lib/metadata.ts` generates localized titles and descriptions. Development placeholders are deliberately noindex, follow; review this policy when approved real content replaces them.

Set the server-side environment variable `SITE_URL` to the approved production origin when known. Do not include credentials, a subpath, query, or fragment. Do not commit environment files.

Without SITE_URL, canonical and language-alternate tags are omitted. No production domain, localhost canonical, or preview-domain fallback is invented. With SITE_URL, each page receives its own canonical URL and reciprocal nb/en alternates from the route map. Invalid configuration fails explicitly. Because pages are prerendered, rebuild after changing SITE_URL.

Forms, email delivery, business facts, final navigation, visual design, and launch SEO are outside this increment.
