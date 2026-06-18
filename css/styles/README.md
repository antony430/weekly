# CSS split inventory

Backup:
- Local backup: `docs/css-refactor/backups/styles-20260618-130546.css`
- Backup SHA-256: `de148dc6877179cec8e9446bb46fe6c4528e31f37a25d7fa3acc7b4b49ef8cb8`

Entry point:
- `../../index.html` links the files below directly in cascade order.
- `../styles.css` is retained as a compatibility entry point only.

Split map:
- `foundation.css`: tokens, reset, base container, shared buttons, initial form primitives
- `legacy-layout.css`: original hero, intro, newsletter list, side rail, value/format/sample sections
- `modals-toast.css`: subscription modal, issue modal, policy/copyright/consent modals, loading, toast
- `legacy-responsive.css`: responsive overrides tied to the original layout and modal blocks
- `newsletter-layout.css`: refreshed newsletter landing layout, feed, card grid, placeholders, right rail
- `newsletter-responsive.css`: responsive overrides for the refreshed newsletter layout
- `bottom-subscription.css`: bottom subscription banner and consent form controls
- `visual-hero.css`: visual hero, phone mockup, live content, hero form overrides
- `motion-sections.css`: section reveal and shared card/section treatment
- `features.css`: feature cards and final responsive side rail behavior

Refactor rules:
- Preserve import order unless a visual regression check confirms the cascade is unchanged.
- Merge only identical selectors within the same file and same cascade context.
- Do not merge selectors across media queries, state selectors, or parent-scoped variants.
- Prefer section-local media queries over a separate global responsive file.
- Keep each cleanup as a small commit-sized change.

Suggested cleanup order:
- `newsletter-layout.css` and `newsletter-responsive.css`
- `modals-toast.css`
- `visual-hero.css`
- `bottom-subscription.css`
- `legacy-layout.css` and `legacy-responsive.css`
