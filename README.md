# VegaCore Showcase

A bilingual (Arabic-first) portfolio site for the sales team. They present it to new clients in meetings and share it as a link afterwards.
It shows **real results only**: client success stories, real Instagram numbers, and the reels themselves played with Instagram's own player.

Built with [Astro](https://astro.build) as a static site, hosted on GitHub Pages.

Pages (`/ar/…` and `/en/…`): Home · Success Stories · client story pages · Reels · Services · Contact.

## Run it

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs dist/
npm run check      # type + content check
```

## Sales features

- **Present / وضع العرض** opens the reels full screen. Use ←/→ (they follow reading direction), a presenter clicker (PageUp/PageDown), or swipe. Esc exits.
- On the Reels page, pick a client, then **Copy link** (e.g. `/ar/reels/?client=poplar`) to send only that client's reels.

## Adding or updating a client

Each client is one file in `src/content/clients/<slug>.yaml`. Copy `poplar.yaml` as a starting point.

- `showcase: story` gives the client a full page with reels. `showcase: name` lists the name only.
- `reels`: the reel code is the part after `/reel/` in the Instagram link, e.g. `instagram.com/reel/DZ2imFktnJK/` → `DZ2imFktnJK`. Add the views shown on Instagram and the date.
- `period`: how many reels we made and their total views during our work. These feed the totals on the home page.
- `growth`: before/after follower and post counts (optional; only from real screenshots).
- `stats`: the numbers block. **Real numbers only.** Set `asOf` to the date you read them.
- `featured: true` puts the client on the home page.

Instagram view counts keep changing, so refresh the numbers and `asOf` from time to time.

## Deploy (GitHub Pages)

Every push to `main` builds and publishes the site automatically (`.github/workflows/deploy.yml`).
Live at https://fadi29elias.github.io/vegacore-showcase/. Check the run under the repo's **Actions** tab.

To use `work.vegacore.co` instead:
1. In the repo → *Settings → Pages → Custom domain*, enter `work.vegacore.co`.
2. At the vegacore.co DNS provider, add a `CNAME` record: `work` → `fadi29elias.github.io`.
3. The workflow picks up the new address on the next deploy; links switch to the domain root automatically.

Internal links must go through `url()` from `src/i18n/ui.ts` so they work under both addresses.
