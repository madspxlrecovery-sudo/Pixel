# Official Asset Gate

This file is the authoritative approval registry for every Minecraft / Minecraft Dungeons / minecraft.net visual used by Pixel.

**The exact-resource rule in this file supersedes all older prototype fallback notes.**

## Core rule

When Pixel reproduces a specific official component, only the **exact resource or exact implementation used by that target component** counts as valid fidelity.

A resource being official somewhere else is not enough.

Examples:
- an official Microsoft Fluent search icon is **not** a valid replacement for the current minecraft.net search glyph unless the live minecraft.net implementation is proven to use that exact Fluent asset;
- a generic Mojang icon is **not** a valid replacement for another Mojang glyph;
- a similar Minecraft font is **not** valid when the exact published webfont is available;
- a measured placeholder may reserve geometry, but it must not pretend to be the missing official pictogram.

If the exact target asset cannot be identified, the visual stays neutral/omitted.

See also `EXACT_RESOURCE_POLICY.md`.

## Status meanings

- `APPROVED` — exact source/implementation and usage basis confirmed for the intended role.
- `REFERENCE_ONLY` — exact official resource identified but currently used only as a documented remote prototype reference or research source.
- `UNKNOWN` — target resource is visibly present in the official component but its exact asset/implementation has not yet been positively identified.
- `BLOCKED` — do not render this resource for the target role.

## Geometry provenance

- `OFFICIAL_CODE` — value comes from Mojang/Microsoft source code.
- `LIVE_DOM/CSS` — value/behavior comes from the live official page implementation.
- `MEASURED_OFFICIAL_CAPTURE` — value measured from an official screenshot/capture.
- `PIXEL_ADAPTATION` — project-owned content inserted into an official layout slot.
- `UNVERIFIED` — exact provenance not yet established.

Geometry includes width, height, padding, margin, border, font metrics, icon dimensions, component order, alignment and sticky/fixed behavior.

---

# Minecraft.net desktop shell lock

Primary live target:
`https://www.minecraft.net/es-es/marketplace/category/texture-packs`

Supporting official source:
`Mojang/web-theme-bootstrap`

## Confirmed shell facts

- shell font family: `Noto Sans`, published by Mojang;
- Pixel now loads Mojang's exact `NotoSans-Regular.woff2/.woff` and `NotoSans-Bold.woff2/.woff` files rather than relying on a system font;
- Mojang `_navbar.scss` uses `.5rem .75rem` nav-link padding, `line-height: 1`, uppercase, `letter-spacing: 1px`, and `0 2px` nav-item margin;
- shell height is approximately `80px` in the supplied desktop references;
- shell background is approximately `#2A2225`;
- wide desktop uses roughly `60px` side gutters rather than a permanently capped 1240px inner container;
- header remains visible while scrolling; Pixel keeps it sticky;
- CTA uses the exact Mojang `pixel-arrow-right.svg` geometry;
- dropdowns use the exact Mojang `pixel-caret.svg` geometry.

## Pixel desktop mapping

`brand slot → PIXEL + DUNGEONS MARKETPLACE`

`navigation → MARKETPLACE → EXPLORACIÓN → APRENDER → ABOUT US`

`actions → COMPRAR AHORA → Buscar slot → Minecoin wallet → CUENTA`

Only the Pixel wordmark/copy and wallet placement are project adaptations. The surrounding shell grammar remains source-backed.

---

# Current registry

| Resource / component | Exact source | Status | Geometry/source | Rule |
|---|---|---|---|---|
| Minecraft.net Noto Sans Regular | Mojang `web-theme-bootstrap/assets/fonts/NotoSans-Regular.*` | APPROVED | OFFICIAL_CODE | Required for normal minecraft.net shell text |
| Minecraft.net Noto Sans Bold | Mojang `web-theme-bootstrap/assets/fonts/NotoSans-Bold.*` | APPROVED | OFFICIAL_CODE | Required for bold minecraft.net shell text |
| Minecraft Five Bold | Mojang `web-theme-bootstrap/assets/fonts/MinecraftFive-Bold.woff` + OFL | APPROVED for Pixel branding | PIXEL_ADAPTATION | May be used for project-owned `PIXEL` wordmark only; does not make Pixel official |
| Minecraft Ten V2 | Mojang `web-theme-bootstrap/assets/fonts/Minecraft-Tenv2.*` + OFL | APPROVED where source-backed | OFFICIAL_CODE | Dungeons/Marketplace title use only when supported by official pattern |
| Minecraft Seven V2 | Mojang `web-theme-bootstrap/assets/fonts/Minecraft-Seven_v2.*` + OFL | APPROVED where source-backed | OFFICIAL_CODE | Dungeons/Marketplace body use only when supported by official pattern |
| Navbar metrics | Mojang `scss/components/_navbar.scss` | APPROVED | OFFICIAL_CODE | Preserve padding, margin, line-height, uppercase and letter spacing |
| Sticky header behavior | live minecraft.net shell | APPROVED | LIVE_DOM/CSS / observed behavior | Header follows viewport on scroll |
| `pixel-caret.svg` | Mojang `web-theme-bootstrap/assets/svg/icons/pixel-caret.svg` | REFERENCE_ONLY exact geometry | OFFICIAL_CODE | Exact identified dropdown geometry; no hand redraw |
| `pixel-arrow-right.svg` | Mojang `web-theme-bootstrap/assets/svg/icons/pixel-arrow-right.svg` | REFERENCE_ONLY exact geometry | OFFICIAL_CODE | Exact identified CTA arrow geometry; no hand redraw |
| Minecoin icon | `minecraft.net/content/dam/minecraftnet/franchise/component-library/icons/minecoin.svg` | REFERENCE_ONLY exact official asset | OFFICIAL_ASSET | Remote prototype reference only; never redraw/emoji substitute |
| Green `COMPRAR AHORA` CTA | live minecraft.net + Mojang button code | APPROVED as shell component pattern | OFFICIAL_CODE + MEASURED_OFFICIAL_CAPTURE | Desktop reference approximately `154×36px`; preserve source treatment |
| `PIXEL` wordmark | Pixel-owned branding using licensed Minecraft Five Bold | APPROVED project adaptation | PIXEL_ADAPTATION | May differ from Minecraft logo; must stay inside official brand slot |
| `DUNGEONS MARKETPLACE` brand caption | Pixel-owned text | APPROVED project adaptation | PIXEL_ADAPTATION | Current project accent uses source-backed Dungeons orange token |
| Search control geometry slot | live minecraft.net header | APPROVED geometry only | MEASURED_OFFICIAL_CAPTURE | Keep slot, but do not render a pictogram until exact target resource is identified |
| Current minecraft.net search magnifier pictogram | live minecraft.net header | UNKNOWN | UNVERIFIED | **OMIT/NEUTRAL ONLY** until exact asset/implementation is positively identified |
| Account control geometry slot | live minecraft.net header | APPROVED geometry only | MEASURED_OFFICIAL_CAPTURE | Keep slot/label/caret, but do not render a pictogram until exact target resource is identified |
| Current minecraft.net account/profile pictogram | live minecraft.net header | UNKNOWN | UNVERIFIED | **OMIT/NEUTRAL ONLY** until exact asset/implementation is positively identified |
| Microsoft Fluent Search 16 Regular | Microsoft Fluent System Icons | BLOCKED for minecraft.net shell | n/a | Removed September 2026: official Microsoft ≠ exact minecraft.net target asset |
| Microsoft Fluent Person 16 Regular | Microsoft Fluent System Icons | BLOCKED for minecraft.net shell | n/a | Removed September 2026: official Microsoft ≠ exact minecraft.net target asset |
| CSS-drawn Minecraft/Dungeons pictograms | legacy Pixel prototype | BLOCKED | n/a | Never use as official-looking visuals |
| AI-generated Minecraft/Dungeons UI assets | generated content | BLOCKED | n/a | Not allowed under current fidelity policy |
| Third-party extracted Dungeons assets | community extraction | BLOCKED for production | n/a | Research/discovery only unless an independent official usage basis is established |

---

# Dungeons / Marketplace source model

Pixel's source hierarchy is:

1. **Exact current minecraft.net shell implementation** for web chrome.
2. **Exact Minecraft Marketplace / Bedrock Store source** for catalog/store structure.
3. **Exact Minecraft Dungeons source/screenshots/assets** for Dungeons-specific UI/content identity.
4. Other official Microsoft/Mojang resources are discovery evidence only unless proven to be the target component's actual resource.
5. Community sources are discovery only.

---

# Mandatory process before rendering a new official-looking resource

1. Name the target official component.
2. Inspect the live official page/game/source first.
3. Find the exact asset or implementation used by that target.
4. Record its official source.
5. Record status and geometry provenance here.
6. Confirm font file/family/weight if text is involved.
7. Confirm exact icon/source file if a pictogram is involved.
8. Confirm width/height/padding/margins/order/scroll behavior when relevant.
9. Only then render it.
10. If any fidelity-critical asset remains `UNKNOWN`, keep it neutral/omitted and state that it is unresolved.

## Forbidden completion shortcut

Do not close a fidelity task by silently replacing an unresolved official target asset with:
- another Microsoft/Mojang icon;
- a generic web icon;
- an emoji;
- a CSS drawing;
- a traced/generated SVG;
- a visually similar font;
- an AI-generated resource.

**Exact target or neutral placeholder. There is no third option for official-looking UI.**
