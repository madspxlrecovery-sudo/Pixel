# Official Asset Gate

This is the approval registry for every Minecraft / Minecraft Dungeons branded visual used by Pixel.

## Status meanings
- `APPROVED` — official source and usage basis confirmed for Pixel.
- `REFERENCE_ONLY` — official source found, but the resource cannot currently be bundled/reused as a local production asset.
- `UNKNOWN` — likely official resource exists, but exact source/terms are not yet confirmed.
- `BLOCKED` — do not use in this repository.

Only `APPROVED` entries may be bundled as official branded production visuals. Exact official resources marked `REFERENCE_ONLY` may be remotely referenced in the prototype when specifically documented, but they must not be copied/redrawn into the repository.

## Geometry status
Every fidelity-critical component must also record geometry provenance:
- `OFFICIAL_CODE` — dimensions/padding/border values come from Mojang source code.
- `LIVE_DOM/CSS` — dimensions are taken from the live official page implementation.
- `MEASURED_OFFICIAL_CAPTURE` — dimensions are measured from an official screenshot/capture supplied as reference.
- `UNVERIFIED` — exact geometry still unknown; do not claim 1:1 fidelity.

The official component size is part of the component. Color fidelity without geometry fidelity does not pass this gate.

## Current Minecraft.net desktop header lock
Reference: current `https://www.minecraft.net/es-es/about-dungeons` plus the official-page desktop capture supplied by the user at `1365×97 px`.

Measured visible shell geometry at that reference scale:
- header height: approximately `80 px`, including the bottom divider;
- header background: `#2A2225`;
- bottom divider: approximately `1 px` black;
- centered inner content width: approximately `1240 px`;
- Minecraft logo display box: approximately `220×38 px`;
- green `COMPRAR AHORA` CTA: `154×36 px`;
- navigation order: `Minecraft logo → JUEGOS → TIENDA → EXPLORACIÓN → APRENDER → SOPORTE TÉCNICO → COMPRAR AHORA → Buscar → CUENTA`;
- dropdown items use official Mojang pixel-carets;
- the exact current search and account/profile pictograms remain `UNKNOWN` until their live assets are identified.

This lock supersedes the older `72 px` shell estimate, which came from a differently cropped reference.

| Resource / system | Official source | Status | Geometry source / reference | Production rule |
|---|---|---|---|---|
| Minecraft Ten V2 font | Mojang `web-theme-bootstrap/assets/fonts` + `LICENSE_OFL.txt` | APPROVED | OFFICIAL_CODE | May be used under OFL terms; current project references official hosted file |
| Minecraft Seven V2 font | Mojang `web-theme-bootstrap/assets/fonts` + `LICENSE_OFL.txt` | APPROVED | OFFICIAL_CODE | May be used under OFL terms; current project references official hosted file |
| Mojang published color tokens | Mojang `web-theme-bootstrap/scss/abstract/_colors.scss` and `_theme.scss` | APPROVED | OFFICIAL_CODE | Exact values may be used and must remain marked `--mc-*` |
| Current Minecraft.net desktop header composition | live `minecraft.net/es-es/about-dungeons` + official capture supplied by user | APPROVED as layout reference | MEASURED_OFFICIAL_CAPTURE: `1365×97` source capture; shell ≈`80 px`; inner ≈`1240 px`; bg `#2A2225`; logo ≈`220×38`; CTA `154×36` | Preserve order, scale and spacing at the desktop reference breakpoint; do not omit middle navigation merely to simplify Pixel |
| `minecraft.svg` | Mojang `web-theme-bootstrap/assets/svg/logos/minecraft.svg` | REFERENCE_ONLY | OFFICIAL_CODE native `viewBox 0 0 1295.5 221.8`; measured display ≈`220×38 px` in current header reference | Prototype may reference exact official remote file; preserve aspect ratio; do not redraw or bundle without separate permission basis |
| Minecraft.net green primary CTA construction | live minecraft.net + Mojang `scss/components/_buttons.scss` | APPROVED as interaction/style pattern | OFFICIAL_CODE + MEASURED_OFFICIAL_CAPTURE `154×36 px` current desktop header | Use exact source-backed colors/construction and measured desktop geometry; do not arbitrarily resize |
| Dungeons orange CTA — reference capture | Official Minecraft Dungeons page screenshot supplied by user | APPROVED as measured reference pattern | MEASURED_OFFICIAL_CAPTURE: outer dark frame `273×54 px`; orange face `269×50 px`; top highlight `6 px`; bottom shadow `6 px`; face fill `#FFA41F`; highlight `#FFD953`; shadow `#FF791A` | Use this exact geometry only when reproducing this CTA variant at the same desktop reference scale; do not stretch it to fit text |
| Dungeons primary token | Mojang `$dungeons-primary` / `$light-orange` = `#e67834` | APPROVED | OFFICIAL_CODE | Use exact token where the official component calls for it; do not confuse it with the orange CTA capture above |
| Dungeons secondary CTA color | Mojang `$dungeons-secondary` / `$eucalyptus` = `#299b6e` | APPROVED | OFFICIAL_CODE | Use exact value only |
| Dungeons tertiary CTA color | Mojang `$dungeons-tertiary` / `$golden-tainoi` = `#FFCB56` | APPROVED | OFFICIAL_CODE | Use exact value only |
| Minecraft button hover | Mojang `$primary-hover` / `$soil` = `#313131` | APPROVED | OFFICIAL_CODE | Use exact source-backed hover behavior when following web-theme button pattern |
| `pixel-arrow-right.svg` | Mojang `web-theme-bootstrap/assets/svg/icons/pixel-arrow-right.svg` | REFERENCE_ONLY | OFFICIAL_CODE asset dimensions | Prototype may reference exact official remote file; do not redraw or bundle without separate permission basis |
| `pixel-arrow-left.svg` | Mojang `web-theme-bootstrap/assets/svg/icons/pixel-arrow-left.svg` | REFERENCE_ONLY | OFFICIAL_CODE asset dimensions | Prototype may reference exact official remote file; do not redraw or bundle without separate permission basis |
| `pixel-arrow-up.svg` | Mojang `web-theme-bootstrap/assets/svg/icons/pixel-arrow-up.svg` | REFERENCE_ONLY | OFFICIAL_CODE asset dimensions | Prototype may reference exact official remote file; do not redraw or bundle without separate permission basis |
| `pixel-arrow-down.svg` | Mojang `web-theme-bootstrap/assets/svg/icons/pixel-arrow-down.svg` | REFERENCE_ONLY | OFFICIAL_CODE asset dimensions | Prototype may reference exact official remote file; do not redraw or bundle without separate permission basis |
| `pixel-caret.svg` | Mojang `web-theme-bootstrap/assets/svg/icons/pixel-caret.svg` | REFERENCE_ONLY | OFFICIAL_CODE asset dimensions; displayed at ≈`8×8 px` in current prototype | Prototype may reference exact official remote file; do not redraw or bundle without separate permission basis |
| Minecraft.net search magnifier | live `minecraft.net/es-es/about-dungeons` | UNKNOWN | UNVERIFIED | Keep a neutral geometry slot only. Locate exact live asset/URL and dimensions before rendering; do not redraw |
| Minecraft.net account/profile icon | live `minecraft.net/es-es/about-dungeons` | UNKNOWN | UNVERIFIED | Keep a neutral geometry slot only. Locate exact live asset/URL and dimensions before rendering; do not redraw |
| Mojang Dungeons border image `border-dungeons-25.png` | Mojang `web-theme-bootstrap` | REFERENCE_ONLY | OFFICIAL_CODE | Do not copy or recreate; use only to identify the real component until a permitted usage basis exists |
| Other Mojang official SVG/PNG icon files | Mojang `web-theme-bootstrap/assets/svg/icons` and related image dirs | REFERENCE_ONLY | OFFICIAL_CODE when metadata is available | Do not copy or redraw as substitutes until separately documented |
| Minecraft / Dungeons logos | Official Mojang/Microsoft sources | REFERENCE_ONLY | OFFICIAL_ASSET native aspect ratio required | Prototype may reference official hosted resources; never distort aspect ratio; bundling requires separate permitted usage basis |
| Minecraft Marketplace background/artwork | Official Marketplace / minecraft.net / Mojang `bedrock-samples` | REFERENCE_ONLY | OFFICIAL_ASSET / OFFICIAL_CODE | Prototype may reference exact official remote resources; preserve source aspect/tiling behavior; do not create lookalikes |
| Minecraft Dungeons in-game UI screenshots | Official game/screenshots | REFERENCE_ONLY | MEASURED_OFFICIAL_CAPTURE allowed for layout research | Use for layout/state/geometry research; do not crop/extract UI art into production as an asset |
| Extracted Dungeons game assets from community repos | Third-party extraction of genuine game data | BLOCKED for production | n/a | Research/discovery only unless a separate official usage permission is established |
| CSS-drawn Minecraft/Dungeons pictograms | Pixel legacy prototype | BLOCKED | n/a | Remove/replace; never treat as official |
| AI-generated Minecraft/Dungeons UI art/icons/textures | Generated content | BLOCKED | n/a | Not permitted under current project fidelity rule |

## Required process for new assets/components
Before implementing any new icon, border, texture, background, badge, currency mark, branded visual, button, header control or navigation component:
1. Find the exact official source.
2. Add an entry here.
3. Record the usage/license basis.
4. Set the status.
5. Record `geometry_source`.
6. Record exact width/height/padding/border/icon dimensions when the source component has a fixed desktop geometry.
7. Record neighboring spacing and component order when composition is part of the official pattern.
8. Use exact official remote references in the prototype only when explicitly documented here.
9. Never recreate a missing resource.
10. Never resize or reorder a source-backed component merely to make the Pixel layout easier.

If a component's dimensions are still `UNVERIFIED`, it may be used only as a clearly neutral structural placeholder, not as a claim of 1:1 fidelity.

## Three-layer source model
Pixel’s target is:
- **Minecraft.net live web shell** for header/footer, search, account, CTA arrows, dropdown chevrons and other website chrome;
- **Minecraft Marketplace / Bedrock Store** for storefront/catalog structure and store context;
- **Minecraft Dungeons** for specialized menu/interaction language and content identity.

All three layers still require the same official-asset gate. Do not create lookalikes to fill gaps.
