# Syed Riyaz N — Portfolio

Static portfolio site built with [Astro](https://astro.build). Images are converted to AVIF/WebP at several sizes during the build, so pages stay fast even with 4K renders.

## Run it locally

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Updating content

| What | Where |
| --- | --- |
| Name, role, current job, about text, services, links, email | `src/data/site.ts` |
| Career: experience, education, languages | `src/data/site.ts` (`experience`, `education`, `languages`) |
| Skills groups and the scrolling Software list | `src/data/site.ts` (`skillGroups`, `software`) |
| Projects (title, category, tools, description, images, order) | `src/data/projects.ts` |
| Moments: events, milestones, awards | `src/data/moments.ts` — images go in `src/assets/moments/` |
| Project images | `src/assets/work/<category>/` — drop in full-resolution PNG/JPG, the build optimizes them |
| Résumé PDF | `public/SyedRiyaz-Resume.pdf` |
| Colours, fonts, spacing | `src/styles/global.css` (theme variables at the top) |

**Add a project:** put the images in `src/assets/work/...`, import them at the top of `projects.ts`, and add an entry to the `projects` list. Its position in the list is its position on the page.

Optional fields in `projects.ts`:

- `date` — a year or month shown on the card (e.g. `'2025'`, `'2024–25'`).
- `link` — `{ label, href }`, shown as a button on the card (e.g. a LinkedIn video post).
- `wide: true` — makes the card span two columns on large screens.

For LinkedIn posts, use the `post('<activity id>')` helper: pass the number from the post's URL (`...urn:li:activity:<id>...`) and it builds the full link. A video-only project can have `images: []`; it then renders as a styled "video card" that links to `link.href`, so give it a `link`.

**Add a moment:** put the photos in `src/assets/moments/`, import them at the top of `moments.ts`, and add an entry to the `moments` list (newest first). Each one has a `date`, a `tag` (Event, Milestone, Award…), a `title`, `text`, and `images` (can be `[]`). `link` is optional; use `post('<activity id>')` for a LinkedIn post.

## Interactive 3D

- **`src/components/Scene3D.astro`** draws a lightweight wireframe on a `<canvas>` (no 3D library). It spins slowly, turns toward the mouse and pushes its points away from the cursor. Use `<Scene3D shape="knot" />` or `shape="sphere"`. It only animates while on screen. With reduced-motion on, the auto-spin stops and it redraws only when the pointer moves.
- **`src/components/Cursor.astro`** adds the custom dot-and-ring cursor. It also provides two attributes you can put on any element:
  - `data-tilt="N"` — the element leans toward the cursor, up to N degrees (default 8).
  - `data-cursor="Label"` — shows that word inside the cursor ring while hovering.

The custom cursor and tilt are for mouse devices only; touch screens keep their normal behaviour. Tilt is also off when the visitor prefers reduced motion.

**Contact form:** off by default (the page shows an "Email me" button). To turn it on, create a free form at formspree.io and paste its ID into `formspreeId` in `site.ts`.

## Deploying (GitHub Pages)

`.github/workflows/deploy.yml` builds and publishes the site on every push to `main`.
One-time setup: repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.

The workflow detects the address automatically:

- Repo named `Riyaz.github.io` → `https://riyaz040801.github.io/Riyaz.github.io/`
- Repo renamed to `riyaz040801.github.io` → `https://riyaz040801.github.io/`
- Custom domain added in Settings → Pages → served at the domain root

## Adding a custom domain later

1. Buy the domain (e.g. Cloudflare Registrar, Porkbun, Namecheap).
2. At the registrar, add DNS records:
   - `A` records for `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `riyaz040801.github.io`
3. Repo **Settings → Pages → Custom domain**: enter the domain, save, then tick **Enforce HTTPS**.
4. GitHub profile **Settings → Pages**: verify the domain.

No code change is needed: the workflow picks up the new address.
