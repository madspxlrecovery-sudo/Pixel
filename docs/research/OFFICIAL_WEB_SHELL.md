# Official Minecraft.net Web Shell

Primary live reference: https://www.minecraft.net/es-es/about-dungeons

This document defines the official **web-facing** layer of Pixel. It is separate from Bedrock Marketplace UI and separate from Minecraft Dungeons in-game UI.

## Confirmed live components
The official Minecraft Dungeons page on minecraft.net currently uses:
- dark global navigation/header bar;
- green primary CTA (`COMPRAR AHORA` / equivalent locale text);
- Dungeons orange/gold CTA variants in page content (`OBTENER DUNGEONS`, `NOVEDAD: EDICIÓN ULTIMATE`);
- directional arrow attached to CTA text;
- large carousel left/right navigation arrows;
- search magnifier control;
- account/profile control;
- small downward chevrons for expandable navigation/account menus;
- white primary text on dark surfaces;
- compact icon sizing and restrained spacing;
- Minecraft typography and official web button treatment.

The official Dungeons page currently exposes `Obtener Dungeons` as a primary content CTA and `Novedad: Edición Ultimate` as a second orange/gold CTA in the Ultimate Edition carousel/content section.

## Official button system evidence
Mojang `web-theme-bootstrap` defines:
- button border/highlight thickness: `4px`;
- uppercase labels;
- square geometry;
- inset light/shadow construction;
- default hover color: `$primary-hover = $soil`;
- Minecraft primary green: `#3c8527`;
- Dungeons primary: `#e67834`;
- Dungeons secondary: `#299b6e`;
- Dungeons tertiary: `#FFCB56`.

These are source-backed values, not sampled approximations.

## Official arrow assets
Mojang `web-theme-bootstrap/assets/svg/icons/` includes exact official pixel navigation assets:
- `pixel-arrow-right.svg`
- `pixel-arrow-left.svg`
- `pixel-arrow-up.svg`
- `pixel-arrow-down.svg`
- `pixel-caret.svg`

Do not redraw these arrows. For prototypes that require them, reference the exact official resource. Production reuse still follows the asset gate and Mojang usage terms.

## Pixel mapping
Use these components for **website shell tasks** only:
- top-level navigation;
- global account/profile area;
- search;
- top-level CTA;
- dropdown menus;
- small web navigation arrows/chevrons;
- page-content CTA variants where the live Dungeons page provides a direct precedent.

Do not use the minecraft.net shell as a replacement for Dungeons in-game controls or Marketplace product-card structure.

## Three-layer source model
1. `minecraft.net` live shell -> website chrome/micro-UI and official page CTAs.
2. `Mojang/bedrock-samples` -> Marketplace/Store catalog structure.
3. Minecraft Dungeons -> content identity and specialized game-facing UI.

## Asset rule
The fact that an icon appears on an official page confirms its visual authority, but does not by itself prove unrestricted redistribution rights.

For search/account/arrow/chevron/icon files:
- locate the exact official file or live official asset URL;
- record it in `OFFICIAL_ASSET_GATE.md`;
- prefer remote official references for prototypes rather than redrawing or copying the asset;
- never redraw it as a substitute.

## Geometry rule
The official shell must not be merely “visually similar”. Size, spacing and proportion are part of the source component.

For every shell component record:
- source breakpoint or capture size;
- outer width and height;
- internal padding;
- icon width/height;
- icon-to-label gap;
- type size and line-height;
- border thickness;
- neighboring spacing.

Accepted geometry provenance is `LIVE_DOM/CSS`, `OFFICIAL_CODE`, or `MEASURED_OFFICIAL_CAPTURE`.

If exact dimensions are unknown, do not claim 1:1 fidelity and do not arbitrarily resize the component to make the Pixel layout easier.

## Current measured references
From the official minecraft.net header capture supplied by the user:
- desktop shell height reference: `72 px`;
- green `COMPRAR AHORA` CTA reference: `154 × 36 px` at the supplied desktop capture scale.

From the official Minecraft Dungeons CTA capture supplied by the user:
- outer CTA frame: `273 × 54 px`;
- orange face: `269 × 50 px`;
- top highlight: `6 px`;
- bottom shadow: `6 px`;
- measured face colors: `#FFA41F`, highlight `#FFD953`, shadow `#FF791A`.

These measured values are source evidence tied to the supplied official captures. Do not stretch them.

## Current implementation status
- green header CTA: restored at the measured desktop reference size and using the official Mojang primary green token + exact `pixel-arrow-right.svg`;
- account dropdown caret: uses exact `pixel-caret.svg`;
- search magnifier: intentionally not drawn while the exact official asset/live URL and dimensions remain unverified;
- account/profile pictogram: intentionally not drawn while the exact official asset/live URL and dimensions remain unverified;
- orange Dungeons CTA: implemented at the measured `273 × 54 px` source size and measured capture colors.

## Current implementation priority
1. identify exact official search magnifier asset and dimensions;
2. identify exact official account/profile asset and dimensions;
3. verify live header spacing/padding from official DOM/CSS evidence;
4. only then replace the current text-only pending controls.

Until an exact icon asset is approved, keep that control text-only rather than using a homemade icon.
