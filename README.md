# VegaCore Showcase

A bilingual (Arabic-first) portfolio site for the sales team. They present it to new clients in meetings and share it as a link afterwards.
It shows **real results only**: client success stories, real Instagram numbers, and the reels themselves played with Instagram's own player.

Built with [Astro](https://astro.build) as a static site and deployed on Vercel.

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

## Deploy (Vercel)

1. Create a **private** GitHub repo from this folder (`git init`, commit, push).
2. On vercel.com → *Add New Project* → import the repo. Astro is detected automatically.
3. *Settings → Domains* → add `work.vegacore.co`, then create the CNAME it shows (`cname.vercel-dns.com`) at the vegacore.co DNS provider.
4. Every push to the main branch redeploys.

Note: Vercel's free *Hobby* plan is for non-commercial use. A company site belongs on *Pro*.
Cloudflare Pages (free, commercial use allowed) also works with this project unchanged.
