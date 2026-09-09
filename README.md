# Jim Bednar for Sullivan County Commissioner

One-page campaign website for Jim Bednar, Democratic candidate for Sullivan County
Commissioner, **District 2** (Croydon, Grantham, Newport, Plainfield, Springfield),
New Hampshire.

Built with the **AHA stack**: [Astro](https://astro.build) + [htmx](https://htmx.org) +
[Alpine.js](https://alpinejs.dev), styled with Tailwind CSS.

## Design

Colors are sampled straight from the printed yard sign — navy `#002094`, deep red
`#8C0000`, off-white `#F8FAF9` — but laid over a **white** background with red and blue
used as accents. Type is Montserrat (display, matching the sign) + Lora (body).

## AHA at work

- **Astro** — static output, one page, image optimization on the headshot.
- **htmx** — the "County Government 101" panel fetches its answers on demand from static
  fragments in `public/partials/*.html` (`hx-get` / `hx-target` / `hx-indicator`).
- **Alpine** — mobile nav toggle and active-topic highlighting on the County 101 tabs.

## Commands

| Command           | Action                                     |
| :---------------- | :----------------------------------------- |
| `npm install`     | Install dependencies                       |
| `npm run dev`     | Start local dev server at `localhost:4321` |
| `npm run build`   | Build the production site to `./dist/`     |
| `npm run preview` | Preview the production build locally       |

## Deployment

Static Astro site — deploys on [Vercel](https://vercel.com) with zero config
(framework preset: Astro). Update `site` in `astro.config.mjs` once the production
domain is attached.

## Content sources

Everything on the page is drawn from campaign materials or public records:

- Half-flyer and yard sign PDFs (tagline, four pillars, committee name, email)
- [bednar4nh.com](https://bednar4nh.com/) — committee name, "Friends of Jim Bednar"
- [Sullivan County Democrats candidate page](https://vote.sullivancountynhdems.org/jim-bednar)
- [New London Democrats town committee list](https://newlondondemocrats.com/democratic-town-committees/)
  — Jim chairs the Springfield Democratic Town Committee
- District 2 boundaries: NH RSA 28 / [HB 1717 (2012)](https://gc.nh.gov/legislation/2012/HB1717.html)
- County facts: [About Sullivan County](https://www.sullivancountynh.gov/1219/About-Sullivan-County)

There is a `TODO (campaign)` comment in `src/pages/index.astro` marking where Jim's own
biography should go once the campaign supplies it.

## Links

- Contribute: https://secure.actblue.com/donate/jim-bednar-1
- Email: bednar4sullivannh@gmail.com

Paid for by the Friends of Jim Bednar.
