# AGENTS.md — rules for this repository

Scope: the personal page in this repo — `site/index.html`, `site/style.css`,
`site/favicon.svg`, `site/assets/`.

## Design

- Simple, fast to load, easy to maintain. This deploys on a local home server, so
  security and maintainability weigh more heavily than features.
- Default stack is hand-written HTML + CSS: no build step, no dependencies, no
  frameworks. JS/TS is allowed when it is genuinely worth it, and only if it does
  not weaken security or maintainability; keep it to a minimum.
- The served tree is `site/`: only what is inside it is deployed, so repo-root
  docs are never part of the page.
- No remote or hotlinked assets: everything ships inside `site/assets/`.
- No email and no phone number in the markup. The address is assembled from CSS
  fragments (`.obf::after`); never add a `mailto:` href.
- CSP is declared twice on purpose: `<meta http-equiv>` on the document and `add_header`
  in the nginx config, because framed pages ignore `<meta>` CSP. Keep both in sync.
- Palette is token-driven at the top of `site/style.css`; light/dark is CSS-only radio
  buttons in the nav (`:has()`), no JS and no cookie.
- Animations stay cheap (`transform` and `opacity` only) and every one is guarded by
  `prefers-reduced-motion`.
- One `site/style.css`, no duplicated selectors. The CSS checker flags duplicate
  declarations — fix them the moment they appear.
- Verify with the CSS and HTML checkers. There is no headless browser on this host, so
  visual changes are reviewed by reading the CSS, not by screenshot.

## Documentation

- Docs are scanned, not studied: short lines, plain wording, no narration of how a
  trick works.
- Prefer self-documenting code. Comment only where the code cannot show it — security
  contracts, browser quirks, config gotchas — and keep it to one line.
- README states what is here and how to deploy. The rationale belongs in neither file.

## Commits

- Scope commits to logical blocks rather than one commit per task, and squash
  iterations that touch the same thing.
- Subject: imperative, `Area: what changed`, with `Area` one of Assets | Content | Style |
  Docs | Polish.
- Body is optional. If it exists, it is short bullet points only — no prose paragraphs.
  No body is often better than a long one.

## Git

- Never `git push` unless explicitly asked; every other git operation is fine.
- `legacy-react-webpage` must never become GitHub's default branch: Dependabot scans
  the default branch only, and the old manifests would resurface every alert.

## References

- `README.md` carries the layout, the serve configuration, and the contact trade-off.
  Update it — and this file — whenever files or conventions change.
