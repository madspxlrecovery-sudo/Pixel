# Official Asset Gate

This is the approval registry for every Minecraft / Minecraft Dungeons branded visual used by Pixel.

## Status meanings
- `APPROVED` — official source and usage basis confirmed for Pixel.
- `REFERENCE_ONLY` — official source found, but the resource cannot currently be reused in Pixel.
- `UNKNOWN` — likely official resource exists, but exact source/terms are not yet confirmed.
- `BLOCKED` — do not use in this repository.

Only `APPROVED` entries may appear as official branded visuals in production.

| Resource / system | Official source | Status | Production rule |
|---|---|---|---|
| Minecraft Ten V2 font | Mojang `web-theme-bootstrap/assets/fonts` + `LICENSE_OFL.txt` | APPROVED | May be used under OFL terms; current project references official hosted file |
| Minecraft Seven V2 font | Mojang `web-theme-bootstrap/assets/fonts` + `LICENSE_OFL.txt` | APPROVED | May be used under OFL terms; current project references official hosted file |
| Mojang published color tokens | Mojang `web-theme-bootstrap/scss/abstract/_colors.scss` and `_theme.scss` | APPROVED | Exact values may be used and must remain marked `--mc-*` |
| Minecraft.net green primary CTA construction | live minecraft.net + Mojang web-theme button implementation | APPROVED as interaction/style pattern | Reuse the official pattern; exact image/icon assets still require their own gate entry |
| Minecraft.net CTA arrow icon | live `minecraft.net/es-es/about-dungeons` | UNKNOWN | Locate exact official asset/live URL before rendering; do not redraw |
| Minecraft.net search magnifier | live `minecraft.net/es-es/about-dungeons` | UNKNOWN | Locate exact official asset/live URL before rendering; do not redraw |
| Minecraft.net account/profile icon | live `minecraft.net/es-es/about-dungeons` | UNKNOWN | Locate exact official asset/live URL before rendering; do not redraw |
| Minecraft.net dropdown chevrons | live `minecraft.net/es-es/about-dungeons` | UNKNOWN | Locate exact official asset/live URL before rendering; do not redraw |
| Mojang Dungeons border image `border-dungeons-25.png` | Mojang `web-theme-bootstrap` | REFERENCE_ONLY | Do not copy or recreate; use only to identify the real component until a permitted usage basis exists |
| Mojang official SVG/PNG icon files | Mojang `web-theme-bootstrap/assets/svg/icons` and related image dirs | REFERENCE_ONLY | Do not copy or redraw as substitutes until separately approved |
| Minecraft / Dungeons logos | Official Mojang/Microsoft sources | REFERENCE_ONLY | Do not place in production without explicit permitted usage basis |
| Minecraft Marketplace background/artwork | Official Marketplace / minecraft.net | UNKNOWN | Research exact source and usage terms; until then use a neutral background, not an imitation |
| Minecraft Dungeons in-game UI screenshots | Official game/screenshots | REFERENCE_ONLY | Use for layout/state research; do not crop/extract UI art into production as an asset |
| Extracted Dungeons game assets from community repos | Third-party extraction of genuine game data | BLOCKED for production | Research/discovery only unless a separate official usage permission is established |
| CSS-drawn Minecraft/Dungeons pictograms | Pixel legacy prototype | BLOCKED | Remove/replace; never treat as official |
| AI-generated Minecraft/Dungeons UI art/icons/textures | Generated content | BLOCKED | Not permitted under current project fidelity rule |

## Required process for new assets
Before implementing any new icon, border, texture, background, badge, currency mark or branded visual:
1. Find the exact official source.
2. Add an entry here.
3. Record the usage/license basis.
4. Set the status.
5. Implement only if status is `APPROVED`.

If status is anything else, use text or a neutral placeholder and continue research.

## Three-layer source model
Pixel’s target is:
- **Minecraft.net live web shell** for header/footer, search, account, CTA arrows, dropdown chevrons and other website chrome;
- **Minecraft Marketplace / Bedrock Store** for storefront/catalog structure and store context;
- **Minecraft Dungeons** for specialized menu/interaction language and content identity.

All three layers still require the same official-asset gate. Do not create lookalikes to fill gaps.
