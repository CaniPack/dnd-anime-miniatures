# DND Anime Figures — Landing Page + 59 Product Pages

Static SEO + AI-search-optimized site promoting 59 One Piece STL listings on Etsy.

## Output structure

```
landing/
├── index.html              # main landing page (8 sections, all 59 products in grid)
├── product/
│   ├── <slug>/
│   │   └── index.html      # individual SEO product page (59 total)
│   └── ...
├── images/                 # all product images (one or more per product)
├── sitemap.xml             # main + 59 product URLs with image annotations
├── robots.txt              # allows all crawlers including GPTBot, ClaudeBot, PerplexityBot, Google-Extended
├── llms.txt                # AI-engine readable catalog (emerging standard)
└── README.md
```

## Deploy

This folder is 100% static. Drop it on any host:

**Cloudflare Pages** (free, fastest):
1. pages.cloudflare.com → Create Application → Upload Assets
2. Drag the `landing/` folder
3. Get a `<name>.pages.dev` URL instantly

**GitHub Pages**: push to a public repo, Settings → Pages → main branch.

**Netlify**: netlify.com → drag the folder onto "Sites".

## Before deploying

Find/replace `https://YOUR-DOMAIN-HERE.com` in `index.html`, all `product/*/index.html`, `sitemap.xml`, `robots.txt`, and `llms.txt` with your real domain.

Quick command on Linux/macOS:
```bash
find landing -type f \( -name '*.html' -o -name '*.xml' -o -name '*.txt' \) -exec sed -i 's|https://YOUR-DOMAIN-HERE.com|https://your-real-domain.com|g' {} +
```

PowerShell on Windows:
```powershell
Get-ChildItem landing -Recurse -Include *.html,*.xml,*.txt | ForEach-Object { (Get-Content $_) -replace 'https://YOUR-DOMAIN-HERE.com','https://your-real-domain.com' | Set-Content $_ }
```

## SEO / AI Submission

1. **Google Search Console**: search.google.com/search-console → add property → submit `sitemap.xml`
2. **Bing Webmaster Tools**: bing.com/webmasters → same
3. **Indexnow** (notify Bing/Yandex on every change): indexnow.org
4. AI engines auto-discover via robots.txt + llms.txt; no submission needed

## Regenerate

After updating listings on Etsy or in `uploaded/`, just re-run:
```bash
node build-landing.js
```

This rebuilds everything: main page, all 59 product pages, sitemap, images, llms.txt.

## SEO features included

- Product schema (rich snippets in Google: price, availability, image)
- BreadcrumbList schema (breadcrumb in search results)
- FAQPage schema (FAQ snippets in Google)
- ItemList schema on main page
- Organization schema
- OpenGraph + Twitter Cards on every page
- Image sitemap annotations
- Internal linking: each product page links to up to 6 related characters in the same saga
- Mobile-first responsive
- Lazy loading on all images
- llms.txt for AI crawler context
- Liberal robots.txt: explicit allow for GPTBot, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, CCBot
