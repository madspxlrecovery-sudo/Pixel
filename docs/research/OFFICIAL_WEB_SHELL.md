# Official Minecraft.net Web Shell

Primary live reference: https://www.minecraft.net/es-es/about-dungeons

This document defines the official **web-facing** layer of Pixel. It is separate from Bedrock Marketplace UI and separate from Minecraft Dungeons in-game UI.

## Confirmed live components
The official Minecraft Dungeons page on minecraft.net currently uses:
- dark global navigation/header bar;
- green primary CTA (`COMPRAR AHORA` / equivalent locale text);
- directional arrow attached to CTA text;
- search magnifier control;
- account/profile control;
- small downward chevrons for expandable navigation/account menus;
- white primary text on the dark header;
- compact icon sizing and restrained spacing;
- Minecraft typography and official web button treatment.

## Pixel mapping
Use these components for **website shell tasks** only:
- top-level navigation;
- global account/profile area;
- search;
- top-level CTA;
- dropdown menus;
- small web navigation arrows/chevrons.

Do not use the minecraft.net shell as a replacement for Dungeons in-game controls or Marketplace product-card structure.

## Three-layer source model
1. `minecraft.net` live shell -> website chrome/micro-UI.
2. `Mojang/bedrock-samples` -> Marketplace/Store catalog structure.
3. Minecraft Dungeons -> content identity and specialized game-facing UI.

## Asset rule
The fact that an icon appears on an official page confirms its visual authority, but does not by itself prove that the file may be copied into Pixel.

For search/account/arrow/chevron/icon files:
- locate the exact official file or live official asset URL;
- record it in `OFFICIAL_ASSET_GATE.md`;
- render it only when its status allows the intended use;
- never redraw it as a substitute.

## Current implementation priority
When refining the current prototype, the next web-shell pass should replace generic header controls with the exact official minecraft.net equivalents in this order:
1. primary green CTA + arrow;
2. search control;
3. account/profile control;
4. dropdown chevrons;
5. spacing/header proportions.

Until an exact icon asset is approved, keep that control text-only rather than using a homemade icon.
