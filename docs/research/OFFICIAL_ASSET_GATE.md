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
- `OFFICIAL_CODE` — dimensions/padding/border/typography values come from Mojang/Microsoft source code.
- `LIVE_DOM/CSS` — dimensions/behavior are taken from the live official page implementation.
- `MEASURED_OFFICIAL_CAPTURE` — dimensions are measured from an official screenshot/capture supplied as reference.
- `PIXEL_ADAPTATION` — project-specific content is inserted into an official shell/component while preserving source-backed component geometry and typography where applicable.
- `UNVERIFIED` — exact geometry still unknown; do not claim 1:1 fidelity.

The official component size, font, color, spacing, scroll behavior and state behavior are all part of the component. Matching only the silhouette is not enough.

## Current Minecraft.net desktop header lock
Reference: current `https://www.minecraft.net/es-es/about-dungeons`, Mojang `web-theme-bootstrap`, and the official-page desktop captures supplied by the user.

Confirmed source-backed facts:
- Mojang `_variables.scss` sets `$font-family-sans-serif: "Noto Sans", sans-serif`.
- Mojang `_navbar.scss` does not override that family for `.nav-link`.
- `.nav-link` uses `padding: 0.5rem 0.75rem`, `line-height: 1`, uppercase, `letter-spacing: 1px`, flex alignment.
- `.nav-item` uses `margin: 0 2px`.
- the live minecraft.net header remains visible at the top while scrolling; Pixel must preserve that sticky/fixed viewport behavior rather than scrolling away with page content.
- raw Mojang pixel SVG files render black if naïvely loaded as `<img>` because their rect/path fill is implicit black. In the live shell, navigation symbols must follow the light/currentColor appearance; Pixel therefore uses the exact Mojang SVG geometry as a CSS mask/currentColor source rather than recoloring/redrawing the artwork.

Measured visible shell geometry at the supplied desktop reference scale:
- header height: approximately `80 px`, including the bottom divider;
- header background: `#2A2225`;
- bottom divider: approximately `1 px` black;
- centered inner content width: approximately `1240 px`;
- Minecraft logo display box: approximately `220×38 px`;
- green `COMPRAR AHORA` CTA: `154×36 px`;
- dropdown items use the official Mojang `pixel-caret.svg` geometry;
- the exact current minecraft.net search and account/profile glyph files remain `UNKNOWN` until their live assets are identified.

The previous Pixel implementation that used Minecraft Ten for the web-shell navigation is invalid. Minecraft Ten/Seven remain valid for Dungeons/Marketplace contexts when source-backed, but the minecraft.net global header follows Noto Sans in Mojang's published web theme.

## Pixel shell adaptation rule
Pixel does **not** copy the institutional minecraft.net nav labels verbatim. The official desktop shell is used as the structural/visual container, while project-specific navigation and account/store information are inserted into it.

Current Pixel desktop shell order:
`Minecraft logo → PIXEL NETWORK / DUNGEONS MARKETPLACE → MARKETPLACE → EXPLORACIÓN → APRENDER → ABOUT US → Minecoin wallet → COMPRAR AHORA → Buscar → CUENTA`

Rules:
- official shell controls keep source-backed size/typography/behavior;
- project-only labels (`PIXEL NETWORK`, expansion name, `MARKETPLACE`, `ABOUT US`) use Noto Sans and official navbar metrics so they remain native to the web-shell layer;
- `EXPLORACIÓN` and `APRENDER` deliberately retain official Minecraft.net naming and navbar treatment;
- the wallet uses the exact official Minecoin image hosted on `minecraft.net`;
- project-specific placement is marked `PIXEL_ADAPTATION`, not falsely documented as a 1:1 minecraft.net layout;
- until the exact live minecraft.net search/account glyph files are located, Pixel may use the documented Microsoft Fluent 16 Regular search/person glyphs as an **official Microsoft fallback only**. They must never be described as the exact minecraft.net glyphs.

| Resource / system | Official source | Status | Geometry/source reference | Production rule |
|---|---|---|---|---|
| Minecraft Ten V2 font | Mojang `web-theme-bootstrap/assets/fonts` + `LICENSE_OFL.txt` | APPROVED | OFFICIAL_CODE | Use only where the official source/pattern calls for it; do not automatically apply it to minecraft.net shell navigation |
| Minecraft Seven V2 font | Mojang `web-theme-bootstrap/assets/fonts` + `LICENSE_OFL.txt` | APPROVED | OFFICIAL_CODE | Use where the official source/pattern calls for it |
| Minecraft.net shell text family | Mojang `scss/abstract/_variables.scss` | APPROVED | OFFICIAL_CODE: `"Noto Sans", sans-serif` | Required for global navbar labels/actions unless newer live code proves a different family |
| Minecraft.net nav-link metrics | Mojang `scss/components/_navbar.scss` | APPROVED | OFFICIAL_CODE: `.5rem .75rem` padding, `line-height:1`, uppercase, `letter-spacing:1px`; nav-item margin `0 2px` | Preserve source values before making Pixel adaptations |
| Minecraft.net sticky shell behavior | live minecraft.net current page + user verification | APPROVED as behavior pattern | LIVE_DOM/CSS behavior still to be captured exactly; observed shell follows viewport on scroll | Header must not scroll away with the document on desktop |
| Mojang published color tokens | Mojang `web-theme-bootstrap/scss/abstract/_colors.scss` and `_theme.scss` | APPROVED | OFFICIAL_CODE | Exact values may be used and must remain marked `--mc-*` |
| Current Minecraft.net desktop header composition | live `minecraft.net/es-es/about-dungeons` + official capture supplied by user | APPROVED as layout reference | MEASURED_OFFICIAL_CAPTURE: shell ≈`80 px`; inner ≈`1240 px`; bg `#2A2225`; logo ≈`220×38`; CTA `154×36` | Preserve shell scale, sticky behavior and official control geometry; Pixel-specific content may replace institutional nav only when marked `PIXEL_ADAPTATION` |
| Pixel Network identity block in shell | Pixel project content inside official shell | APPROVED as project adaptation | PIXEL_ADAPTATION | Use `Noto Sans`; do not present the label as an official minecraft.net item; keep hierarchy compact and within shell geometry |
| Pixel shell navigation labels | Pixel project content + official minecraft.net navbar grammar | APPROVED as project adaptation | PIXEL_ADAPTATION + OFFICIAL_CODE navbar metrics | Use `MARKETPLACE`, `EXPLORACIÓN`, `APRENDER`, `ABOUT US`; retain official Noto Sans/uppercase/spacing/caret grammar; do not invent a separate nav style |
| `minecraft.svg` | Mojang `web-theme-bootstrap/assets/svg/logos/minecraft.svg` | REFERENCE_ONLY | OFFICIAL_CODE native `viewBox 0 0 1295.5 221.8`; measured display ≈`220×38 px` | Prototype may reference exact official remote file; preserve aspect ratio; do not redraw or bundle without separate permission basis |
| Official Minecoin icon | `minecraft.net/content/dam/minecraftnet/franchise/component-library/icons/minecoin.svg` | REFERENCE_ONLY | OFFICIAL_ASSET; displayed at `20×20 px` in Pixel shell adaptation | Prototype may remotely reference exact official file; do not redraw or replace with CSS/emoji |
| Pixel shell Minecoin wallet | Official Minecoin asset + Pixel balance value | APPROVED as project adaptation | PIXEL_ADAPTATION | Official coin art only; numeric balance may be project data; keep wallet in Noto Sans within the web-shell layer |
| Minecraft.net green primary CTA construction | live minecraft.net + Mojang `scss/components/_buttons.scss` | APPROVED as interaction/style pattern | OFFICIAL_CODE + MEASURED_OFFICIAL_CAPTURE `154×36 px` | Use exact source-backed construction and measured desktop geometry; do not arbitrarily resize |
| Dungeons orange CTA — reference capture | Official Minecraft Dungeons page screenshot supplied by user | APPROVED as measured reference pattern | MEASURED_OFFICIAL_CAPTURE: outer dark frame `273×54 px`; orange face `269×50 px`; top highlight `6 px`; bottom shadow `6 px`; face fill `#FFA41F`; highlight `#FFD953`; shadow `#FF791A` | Use exact geometry only for this CTA variant at the same desktop reference scale |
| Dungeons primary token | Mojang `$dungeons-primary` / `$light-orange` = `#e67834` | APPROVED | OFFICIAL_CODE | Use exact token where the official component calls for it |
| Dungeons secondary CTA color | Mojang `$dungeons-secondary` / `$eucalyptus` = `#299b6e` | APPROVED | OFFICIAL_CODE | Use exact value only |
| Dungeons tertiary CTA color | Mojang `$dungeons-tertiary` / `$golden-tainoi` = `#FFCB56` | APPROVED | OFFICIAL_CODE | Use exact value only |
| Minecraft button hover | Mojang `$primary-hover` / `$soil` = `#313131` | APPROVED | OFFICIAL_CODE | Use exact source-backed hover behavior when following web-theme button pattern |
| `pixel-arrow-right.svg` | Mojang `web-theme-bootstrap/assets/svg/icons/pixel-arrow-right.svg` | REFERENCE_ONLY | OFFICIAL_CODE asset geometry | Prototype may reference exact remote geometry; when used in the shell, preserve live currentColor/light appearance via mask/currentColor instead of black raw `<img>` rendering |
| `pixel-arrow-left.svg` | Mojang `web-theme-bootstrap/assets/svg/icons/pixel-arrow-left.svg` | REFERENCE_ONLY | OFFICIAL_CODE asset geometry | Prototype may reference exact official remote file; do not redraw |
| `pixel-arrow-up.svg` | Mojang `web-theme-bootstrap/assets/svg/icons/pixel-arrow-up.svg` | REFERENCE_ONLY | OFFICIAL_CODE asset geometry | Prototype may reference exact official remote file; do not redraw |
| `pixel-arrow-down.svg` | Mojang `web-theme-bootstrap/assets/svg/icons/pixel-arrow-down.svg` | REFERENCE_ONLY | OFFICIAL_CODE asset geometry | Prototype may reference exact official remote file; do not redraw |
| `pixel-caret.svg` | Mojang `web-theme-bootstrap/assets/svg/icons/pixel-caret.svg` | REFERENCE_ONLY | OFFICIAL_CODE asset geometry | Use exact geometry; shell presentation must be light/currentColor, not black raw-image rendering |
| Microsoft Fluent Search 16 Regular | Microsoft `fluentui-system-icons/assets/Search/SVG/ic_fluent_search_16_regular.svg` | REFERENCE_ONLY | OFFICIAL_CODE native `16×16` | Official Microsoft fallback for Pixel prototype only while exact minecraft.net search glyph remains unresolved; render via currentColor mask; do **not** claim it is the exact live minecraft.net glyph |
| Microsoft Fluent Person 16 Regular | Microsoft `fluentui-system-icons/assets/Person/SVG/ic_fluent_person_16_regular.svg` | REFERENCE_ONLY | OFFICIAL_CODE native `16×16` | Official Microsoft fallback for Pixel prototype only while exact minecraft.net account glyph remains unresolved; render via currentColor mask; do **not** claim it is the exact live minecraft.net glyph |
| Minecraft.net exact search magnifier | live `minecraft.net/es-es/about-dungeons` | UNKNOWN | UNVERIFIED | Continue research for the exact live component/asset. Microsoft Fluent fallback may be used meanwhile only under the documented fallback rule |
| Minecraft.net exact account/profile header icon | live `minecraft.net/es-es/about-dungeons` | UNKNOWN | UNVERIFIED | Continue research for the exact live component/asset. Microsoft Fluent fallback may be used meanwhile only under the documented fallback rule |
| Mojang Dungeons border image `border-dungeons-25.png` | Mojang `web-theme-bootstrap` | REFERENCE_ONLY | OFFICIAL_CODE | Do not copy or recreate |
| Other Mojang official SVG/PNG icon files | Mojang `web-theme-bootstrap/assets/svg/icons` and related image dirs | REFERENCE_ONLY | OFFICIAL_CODE when metadata is available | Do not use merely because they are official; they must match the actual component being reproduced |
| Minecraft / Dungeons logos | Official Mojang/Microsoft sources | REFERENCE_ONLY | OFFICIAL_ASSET native aspect ratio required | Prototype may reference official hosted resources; never distort aspect ratio |
| Minecraft Marketplace background/artwork | Official Marketplace / minecraft.net / Mojang `bedrock-samples` | REFERENCE_ONLY | OFFICIAL_ASSET / OFFICIAL_CODE | Preserve source aspect/tiling behavior; do not create lookalikes |
| Minecraft Dungeons in-game UI screenshots | Official game/screenshots | REFERENCE_ONLY | MEASURED_OFFICIAL_CAPTURE allowed for layout research | Use for layout/state/geometry research; do not crop/extract UI art into production as an asset |
| Extracted Dungeons game assets from community repos | Third-party extraction of genuine game data | BLOCKED for production | n/a | Research/discovery only unless separate official usage permission is established |
| CSS-drawn Minecraft/Dungeons pictograms | Pixel legacy prototype | BLOCKED | n/a | Remove/replace; never treat as official |
| AI-generated Minecraft/Dungeons UI art/icons/textures | Generated content | BLOCKED | n/a | Not permitted under current project fidelity rule |

## Required process for new assets/components
Before implementing any new icon, border, texture, background, badge, currency mark, branded visual, button, header control or navigation component:
1. Find the exact official source.
2. Add an entry here.
3. Record the usage/license basis.
4. Set the status.
5. Record `geometry_source`.
6. Record exact width/height/padding/border/icon dimensions when the source component has fixed geometry.
7. Record font family, font weight, line-height and letter-spacing.
8. Record neighboring spacing and component order when composition is part of the official pattern.
9. Record viewport/scroll behavior for sticky/fixed shell components.
10. Verify actual rendered icon color/state; a black raw SVG does not pass if the official UI shows a white/currentColor symbol.
11. Mark every non-official placement/content change as `PIXEL_ADAPTATION` rather than silently treating it as official.
12. If using an official fallback from another first-party Microsoft/Mojang system, document it as a fallback and never mislabel it as the exact live asset being researched.
13. Use exact official remote references in the prototype only when explicitly documented here.
14. Never recreate a missing resource.
15. Never resize, recolor, reorder or restyle a source-backed component merely to make the Pixel layout easier, unless the live official source does the same transformation.

If a component's dimensions, typography or icon source remain `UNVERIFIED`, it may be used only as a clearly documented official fallback or a neutral structural placeholder, not as a claim of 1:1 fidelity.

## Three-layer source model
Pixel’s target is:
- **Minecraft.net live web shell** for header/footer, search, account, CTA arrows, dropdown chevrons and other website chrome;
- **Minecraft Marketplace / Bedrock Store** for storefront/catalog structure and store context;
- **Minecraft Dungeons** for specialized menu/interaction language and content identity.

All three layers still require the same official-asset gate. Do not create lookalikes to fill gaps.
