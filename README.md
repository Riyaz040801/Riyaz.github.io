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
| Name, role, about text, services, tools, links, email | `src/data/site.ts` |
| Projects (title, category, tools, description, images, order) | `src/data/projects.ts` |
| Project images | `src/assets/work/<category>/` — drop in full-resolution PNG/JPG, the build optimizes them |
| Résumé PDF | `public/SyedRiyaz-Resume.pdf` |
| Colours, fonts, spacing | `src/styles/global.css` (variables at the top) |

**Add a project:** put the images in `src/assets/work/...`, import them at the top of `projects.ts`, and add an entry to the `projects` list. Its position in the list is its position on the page.

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
