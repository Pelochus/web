# web

My personal webpage — https://pelochus.duckdns.org/

Static HTML + CSS. No build step, no dependencies, no JavaScript, and the page
issues exactly one request per visitor: itself.

## What is here

| Path | Role |
| --- | --- |
| `index.html` | all copy, structure, and the inline brand marks |
| `style.css` | palette tokens, layout, animations, and the theme switch |
| `assets/CV.pdf` | the CV offered for download (its size is quoted in the page text) |
| `assets/pfp.webp` | avatar |
| `assets/rockobot.webp`, `assets/ezrknpu.svg` | project images |
| `favicon.svg` | icon |

Everything the page needs lives in those files; adding a project means adding a
`card-img` block in `index.html` and an image in `assets/`.

## Theme

The nav carries three radio buttons — Auto, Light, Dark. Auto follows
`prefers-color-scheme`; forcing a theme is done with `:has()` on `:root`, so a
browser without `:has()` support falls back to following the system theme rather
than breaking. Animations are wrapped in `prefers-reduced-motion: no-reduce`,
hover effects in `hover: hover`.

To change the look, edit the token blocks at the top of `style.css`: one light
`:root`, one dark block repeated for "system dark" and "dark forced".

## Contact

The email is assembled from fragments by `.obf::after` in `style.css`, so no
scraper finds an address pattern in the markup — and the phone number is not
published at all. Adding a `mailto:` href puts the address back within reach of
collectors; if you do, the CSP header below does not need to change, but the
protection does.

## Conventions

Rules for anyone — human or agent — editing this page live in [AGENTS.md](AGENTS.md):
the design bar (simple, fast to load, dependency-free), the commit style, and the
git caveats specific to this repository.

## Deploying

There is nothing to compile or install. Copy the repository contents to the web
root and serve them:

```bash
rsync -a --delete ./ web-root/
```

The nginx site config below declares the MIME types the page needs, caches the
long-lived assets, and sets the headers that matter once the site answers on a
public port:

```nginx
server {
    root /srv/web;

    # Replaces nginx's default map, so list every type this site serves.
    types { text/html html; text/css css; image/webp webp; application/pdf pdf; image/svg+xml svg; }

    try_files $uri $uri/ =404;

    add_header X-Content-Type-Options nosniff;
    add_header X-Frame-Options DENY;
    add_header Referrer-Policy no-referrer;
    add_header Content-Security-Policy "default-src 'self'; style-src 'self'; img-src 'self'";

    # expires also emits Cache-Control, and keeps the server-level headers above
    # intact, unlike add_header inside a location block.
    location /        { expires 5m }
    location /assets/ { expires 7d }
}
```

The CSP is only useful because the page genuinely loads nothing third-party: no
script, no webfont, no remote image. The brand marks and the ezrknpu poster are
inline or same-origin, so the header above stays correct. If a future edit adds
an inline `<style>` or a `<script>`, that header has to change with it.
