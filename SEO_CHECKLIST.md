# SEO Deployment Checklist

Step-by-step actions to do **after** deploying `landing/` to a real domain.

## Step 0 — Replace domain placeholders

Find/replace `https://YOUR-DOMAIN-HERE.com` in every file with your real domain.

PowerShell (Windows):
```powershell
Get-ChildItem landing -Recurse -Include *.html,*.xml,*.txt | ForEach-Object {
  (Get-Content $_) -replace 'https://YOUR-DOMAIN-HERE.com','https://yourdomain.com' | Set-Content $_
}
```

## Step 1 — Google Search Console (most important)

1. Go to https://search.google.com/search-console
2. Click **"Add property"** → URL prefix → enter `https://yourdomain.com`
3. Choose verification method **"HTML tag"** — copy the value of `content="..."`
4. Find in `landing/index.html`:
   ```
   <meta name="google-site-verification" content="REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN">
   ```
5. Replace `REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN` with the token from step 3
6. Re-deploy (Cloudflare Pages: drag folder again; Netlify: drag again; GitHub: `git push`)
7. Back in GSC, click **Verify**
8. Once verified → Sidebar → **Sitemaps** → submit: `sitemap.xml`
9. URL Inspection tool → paste a product URL → **"Request indexing"** for 3-5 priority products (luffy, zoro, sir-crocodile, mugiwara-crew-pretimeskip-bundle)

## Step 2 — Bing Webmaster Tools

1. Go to https://www.bing.com/webmasters
2. Add site → `https://yourdomain.com`
3. Verify via **HTML Meta Tag** option — copy the token
4. Replace `REPLACE_WITH_BING_WEBMASTER_TOKEN` in `landing/index.html`
5. Re-deploy → Verify
6. Submit sitemap: `https://yourdomain.com/sitemap.xml`
7. *Tip*: enable **"Import from Google Search Console"** — bypasses doing everything twice

## Step 3 — IndexNow (instant indexing on Bing/Yandex/Seznam/Naver)

The key file `b7e3d4f1c2a89e6f5b0d7c2a4e1f9b3d.txt` is already in place. After deploy, ping IndexNow:

```bash
# Single URL update
curl "https://api.indexnow.org/IndexNow?url=https://yourdomain.com/&key=b7e3d4f1c2a89e6f5b0d7c2a4e1f9b3d"

# Bulk submit all URLs (run from project root after re-build)
curl -X POST "https://api.indexnow.org/IndexNow" \
  -H "Content-Type: application/json" \
  -d @- <<EOF
{
  "host": "yourdomain.com",
  "key": "b7e3d4f1c2a89e6f5b0d7c2a4e1f9b3d",
  "keyLocation": "https://yourdomain.com/b7e3d4f1c2a89e6f5b0d7c2a4e1f9b3d.txt",
  "urlList": [
    "https://yourdomain.com/",
    "https://yourdomain.com/product/baroque-works-bundle/",
    "https://yourdomain.com/product/blackbeard-pirates-pretimeskip-bundle/",
    "https://yourdomain.com/product/brogy/",
    "https://yourdomain.com/product/brontosaurio/",
    "https://yourdomain.com/product/cat-sea-beast/",
    "https://yourdomain.com/product/chess/",
    "https://yourdomain.com/product/chessmarino/",
    "https://yourdomain.com/product/chopper-animal/",
    "https://yourdomain.com/product/chopper-humano/",
    "https://yourdomain.com/product/chopper-normal/",
    "https://yourdomain.com/product/dalton-animal/",
    "https://yourdomain.com/product/dalton-persona/",
    "https://yourdomain.com/product/dory/",
    "https://yourdomain.com/product/dr-q/",
    "https://yourdomain.com/product/drum-island-bundle/",
    "https://yourdomain.com/product/guard-poitn-chopper/",
    "https://yourdomain.com/product/hiking-bear/",
    "https://yourdomain.com/product/hiruluk/",
    "https://yourdomain.com/product/jesus-burges/",
    "https://yourdomain.com/product/jesus-burgess/",
    "https://yourdomain.com/product/karu/",
    "https://yourdomain.com/product/kureha/",
    "https://yourdomain.com/product/kuromarino/",
    "https://yourdomain.com/product/laffitte/",
    "https://yourdomain.com/product/lapahn/",
    "https://yourdomain.com/product/lasso-baroque-works/",
    "https://yourdomain.com/product/little-garden-bundle/",
    "https://yourdomain.com/product/luffy/",
    "https://yourdomain.com/product/miss-all-sunday/",
    "https://yourdomain.com/product/miss-double-finger/",
    "https://yourdomain.com/product/miss-friday/",
    "https://yourdomain.com/product/miss-merry-chrismass/",
    "https://yourdomain.com/product/miss-monday/",
    "https://yourdomain.com/product/miss-valenine-2/",
    "https://yourdomain.com/product/miss-valentina-1/",
    "https://yourdomain.com/product/miss-wednesday/",
    "https://yourdomain.com/product/mr-1/",
    "https://yourdomain.com/product/mr-13/",
    "https://yourdomain.com/product/mr-3/",
    "https://yourdomain.com/product/mr-4/",
    "https://yourdomain.com/product/mr-5/",
    "https://yourdomain.com/product/mr-8/",
    "https://yourdomain.com/product/mr-9/",
    "https://yourdomain.com/product/mugiwara-crew-pretimeskip-bundle/",
    "https://yourdomain.com/product/nami/",
    "https://yourdomain.com/product/nefertari-cobra/",
    "https://yourdomain.com/product/nefertari-vivi/",
    "https://yourdomain.com/product/negikuma-maria/",
    "https://yourdomain.com/product/robson/",
    "https://yourdomain.com/product/roronoa-zoro/",
    "https://yourdomain.com/product/sanji/",
    "https://yourdomain.com/product/sir-crocodile/",
    "https://yourdomain.com/product/skinny-schopper/",
    "https://yourdomain.com/product/smoker/",
    "https://yourdomain.com/product/tashigi/",
    "https://yourdomain.com/product/teach-pre-timeskip/",
    "https://yourdomain.com/product/ussop/",
    "https://yourdomain.com/product/van-augur/",
    "https://yourdomain.com/product/wappol/"
  ]
}
EOF
```

## Step 4 — Validate structured data

1. Test Product schema: https://search.google.com/test/rich-results
2. Paste any product page URL — should detect: **Product**, **BreadcrumbList**, **FAQPage**
3. Fix any warnings (there shouldn't be any)

## Step 5 — Performance check

1. Run https://pagespeed.web.dev/ on your homepage and 2-3 product pages
2. Target: **Performance > 90**, **SEO > 95**, **Accessibility > 90**
3. If images are slow → consider compressing JPEGs (the originals from Etsy are large)

## Step 6 — Off-site signals (the part that actually moves the needle)

The above gets you indexed. Now you need links and traffic for rankings:

- **Etsy shop "About" section**: link to your landing page from your Etsy shop
- **Etsy shop announcement**: link there too
- **Reddit**: r/3Dprinting, r/PrintedMinis, r/DnD (with care — share useful content, not spam)
- **Discord**: anime + 3d printing communities — Bambu Lab, Elegoo official, r/DnD discord
- **TikTok / Instagram / YouTube Shorts**: short videos of the models with link in bio
- **Cults3D, MyMiniFactory mirror**: re-list some models there for cross-traffic (different audience)
- **Google Business Profile**: doesn't apply to digital-only shops
- **Pinterest**: anime + 3d print boards convert surprisingly well — pin every product image

## Step 7 — Ongoing

- Each time you add new listings → re-run `node build-landing.js` → re-deploy → ping IndexNow
- Check Google Search Console weekly for indexed pages / impressions / clicks
- If a page has impressions but no clicks → tune title + description
- If a page has zero impressions after 4 weeks → request indexing manually in GSC

## Reference files

- `sitemap.xml` — all 60 URLs with lastmod, image metadata, license info
- `robots.txt` — explicit allows for AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot, etc.)
- `llms.txt` — AI-friendly catalog with character lore + D&D class suggestions
- `humans.txt` — site metadata for curious humans
- `b7e3d4f1c2a89e6f5b0d7c2a4e1f9b3d.txt` — IndexNow validation key
