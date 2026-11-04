# web

My personal webpage — https://pelochus.duckdns.org/

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
script, no webfont, no remote image. If a future edit adds an inline `<style>`
or a `<script>`, that header has to change with it.
