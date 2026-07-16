# LeverHub — Marketing Website

The public marketing site for **LeverHub**, a personal money, markets and trading academy.
Built with [Astro](https://astro.build). Design follows the **LeverHub Brand Book v2.0**
("It starts with you — not the charts").

## Running locally

```sh
npm install
astro dev --background   # dev server at http://localhost:4321
astro dev status         # check it
astro dev logs           # tail logs
astro dev stop           # stop it
```

`npm run build` produces the production site in `./dist/`.

## Structure

```text
src/
├── styles/global.css        # brand design tokens (colors, type, buttons, pills)
├── layouts/Layout.astro     # head, fonts (Tilt Warp / Poppins / Inter / Space Mono), reveal script
├── pages/index.astro        # homepage assembly
└── components/              # one section per component, in page order:
    Header, Hero, VideoIntro, Differences, Path, PersonalHub,
    Academy, Practice, Access, Testimonials, Faq, CtaBand, Footer
    + Logo.astro             # logo lockup (mark + wordmark)
```

## Pending assets

- **Intro video** — `src/components/VideoIntro.astro` currently renders a designed
  placeholder. When the final cut is delivered, drop it at
  `public/media/leverhub-intro.mp4` and follow the swap instructions in the
  component's comment.
- **Legal pages** — footer links (Terms, Privacy, Risk Disclosure, Cookies) are
  placeholders pending final legal copy.

The official logo lockup is integrated in `src/components/Logo.astro` (navy and
reversed white variants) with raw files at `public/images/leverhub-logo.svg` and
`public/images/leverhub-logo-white.svg`.

## Staging deployment

Deployed to Cloudflare Pages (`npx wrangler pages deploy dist --project-name leverhub`).
The deployment is gated by HTTP Basic Auth via `functions/_middleware.js`
(user `parola` / password `parola`) — remove that file to go public.

## Brand quick reference

| Token | Value | Use |
| :-- | :-- | :-- |
| Lever Navy | `#173C77` | primary / structure |
| Deep Navy | `#0E2750` | depth, dark panels |
| Pivot Teal | `#2FAE9B` | single accent — buttons, icons, fills only |
| Teal Deep | `#208C7C` | teal-colored text & hovers (AA) |
| Teal Wash | `#E2F3F0` | soft fills |
| Paper | `#F6F7F9` | page background |
| Ink | `#0C1A30` | body copy |

Type: **Tilt Warp** (H1–H3 only, never bold) · **Poppins** (subheads, buttons) ·
**Inter** (body) · **Space Mono** (labels, fine print).

Compliance: LeverHub is never the broker; no profit promises; risk disclosure must
accompany every broker/trading mention. See the brand book §09 before editing copy.

## Localization

English only for now. PL, SWE and IT will be added later (deliberately not scaffolded
in advance).
