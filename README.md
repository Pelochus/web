# web

My personal webpage — https://pelochus.duckdns.org/

Static HTML + CSS. No build step, no dependencies, no JavaScript, and the page
issues exactly one request per visitor: itself.

## What is here

| Path | Role |
| --- | --- |
| `site/index.html` | all copy, structure, and the inline brand marks |
| `site/style.css` | palette tokens, layout, animations, and the theme switch |
| `site/assets/CV.pdf` | the CV offered for download |
| `site/assets/pfp.webp` | avatar |
| `site/assets/rockobot.webp`, `site/assets/ezrknpu.svg` | project images |
| `site/favicon.svg` | icon |

Everything the page needs lives in those files, inside `site/`. To add a project:
a `card-img` block in `site/index.html`, its image wrapped in `<a class="card-link">`
(the image is the link, no link text), and an image in `site/assets/`.

## Theme

Auto / Light / Dark radio buttons in the nav; Auto follows `prefers-color-scheme`.
Edit the token blocks at the top of `site/style.css`; the dark block is duplicated for
system-dark and forced-dark, keep both in sync.

## Conventions

See [AGENTS.md](AGENTS.md) for the design, commit, and git rules.

## Deploying

Nothing to compile; copy `site/` to the web root:

```bash
rsync -a --delete ./site/ web-root/
```

The nginx config declares the MIME types this site needs, caches the long-lived
assets, and sets the response headers:

```nginx
server {
    root /srv/web;

    # Replaces nginx's default map: list every type this site serves.
    types { text/html html; text/css css; image/webp webp; application/pdf pdf; image/svg+xml svg; }

    try_files $uri $uri/ =404;

    add_header X-Content-Type-Options nosniff;
    add_header X-Frame-Options DENY;
    add_header Referrer-Policy no-referrer;
    add_header Content-Security-Policy "default-src 'self'; style-src 'self'; img-src 'self'";

    # expires emits Cache-Control without dropping the server-level headers above.
    location /        { expires 5m }
    location /assets/ { expires 7d }
}
```

The CSP is correct only while the page loads nothing third-party. If you add an
inline `<style>` or `<script>`, update it.
