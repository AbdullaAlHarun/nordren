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

## Shared visual foundation

`components/site-shell.tsx` composes the skip link, header, focusable main landmark, and footer. The skip link is visually clipped during normal browsing and becomes visible above the header on focus, retaining screen-reader access and the shared focus ring. Placeholder pages supply the locale and page identity so navigation and language links remain accurate without inspecting the browser URL.

All shell components are server components. Mobile navigation uses native details/summary: Enter or Space toggles it, the browser exposes expanded/collapsed state, and closed links leave the tab order. It expands in document flow with no overlay or focus trap. There is no custom Escape-to-close behavior. Language and navigation links load documents normally. No client component or additional dependency is needed.

`components/button.tsx` provides Button for actions (default type=button) and ButtonLink for navigation, each with primary, secondary, and text variants. Add client boundaries only when a future action needs browser-side behavior.

`app/globals.css` owns the forest/warm-stone tokens, spacing, typography, container widths, borders, radii, focus rings, and responsive shell rules. Geist Sans remains the font. Mobile disclosure is used below 70rem, including tablets; desktop navigation appears when there is room for both languages. No automatic dark theme is applied.

Measured WCAG contrast ratios:

| Foreground / background | Ratio |
| --- | --- |
| Main text / warm background | 13.84:1 |
| Main text / sage surface | 12.36:1 |
| Muted text / warm background | 6.05:1 |
| Muted text / sage surface | 5.40:1 |
| Warm white / forest button | 9.02:1 |
| Warm white / forest hover | 11.34:1 |
| Forest / sage surface | 8.06:1 |
| Control border / warm background | 4.30:1 |
| Control border / sage surface | 3.84:1 |

Subtle separators are decorative, not control boundaries. Focus uses a white inner ring and forest outer outline so a contrasting ring remains visible on dark and light surfaces; forced-colors mode uses the system Highlight color. Current links use underlining and weight as well as color. Controls have at least 44px targets, button heights can grow with wrapped text, and reduced motion removes button transitions.

For UI verification, check both languages at narrow and intermediate widths, keyboard activation of the disclosure, closed-menu tab order, skip-link focus, text resizing, reduced motion, and language destinations. Automated checks do not replace screen-reader and real-device review.

Forms, email delivery, business facts, homepage sections, detailed page designs, and launch SEO remain outside this increment.
