# Official Minecraft.net Web Shell

Primary live reference: https://www.minecraft.net/es-es/about-dungeons

This document defines the official **web-facing** layer of Pixel. It is separate from Bedrock Marketplace UI and separate from Minecraft Dungeons in-game UI.

## Current live desktop composition
The current official Minecraft.net Dungeons page exposes the desktop navigation in this order:

`Minecraft logo → JUEGOS → TIENDA → EXPLORACIÓN → APRENDER → SOPORTE TÉCNICO → COMPRAR AHORA → Buscar → CUENTA`

The live page confirms the navigation labels, search control, account control and `Comprar ahora` action. The official Mojang `web-theme-bootstrap` repository provides the Minecraft logo asset, pixel caret/arrow resources, typography, colors and button implementation evidence used to reconstruct the source-backed shell.

## Measured current desktop reference
Reference capture supplied from the current official page: `1365×97 px`.

Measured visible header properties:
- shell height: approximately `80 px`, including a `1 px` dark divider;
- shell background: `#2A2225`;
- centered content span: approximately `1240 px`;
- left/right outer margin at the reference width: approximately `60–63 px`;
- Minecraft logo display: approximately `220×38 px`;
- green `COMPRAR AHORA` CTA: `154×36 px`;
- dropdown caret display: approximately `8×8 px`;
- menu is a single compact horizontal row.

This `80 px` measurement supersedes the earlier `72 px` estimate, which was based on a differently cropped screenshot.

## Official logo and navigation resources
Mojang `web-theme-bootstrap` contains:
- `assets/svg/logos/minecraft.svg`
- `assets/svg/logos/minecraft-core-brand.svg`
- `assets/svg/icons/pixel-arrow-right.svg`
- `assets/svg/icons/pixel-arrow-left.svg`
- `assets/svg/icons/pixel-arrow-up.svg`
- `assets/svg/icons/pixel-arrow-down.svg`
- `assets/svg/icons/pixel-caret.svg`

The current Pixel prototype remotely references the exact `minecraft.svg`, `pixel-arrow-right.svg`, and `pixel-caret.svg` assets instead of redrawing them.

## Search and account pictograms
The exact current resources were verified on 2026-09-13 in the live Minecraft.net component stylesheet `https://www.minecraft.net/webui/mc-components.min.css`:

- Search: `--mc-environment-search_icon_svg-18x18` and `_hover`, applied by `.MC_globalHeaderA_searchGlyph::before` at `18×18px`.
- Account: `--mc-environment-accountIcon_svg-16x16` and `_hover`, applied by `.MC_globalHeaderA_accountGlyph::before` at `16×16px`, with `3px` right margin before the label.

These variables contain the original SVG data URIs used by the target component. Pixel uses those exact data URIs and the official white-to-`#86D562` interaction states. The previous Fluent substitutes remain blocked.

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

The current desktop header capture also confirms the green CTA outline at the exact Mojang primary green `#3c8527`.

## Dungeons page-content CTA reference
From the official Minecraft Dungeons CTA capture supplied by the user:
- outer CTA frame: `273×54 px`;
- orange face: `269×50 px`;
- top highlight: `6 px`;
- bottom shadow: `6 px`;
- measured face colors: `#FFA41F`, highlight `#FFD953`, shadow `#FF791A`.

This remains a separate Dungeons page-content component; it must not be confused with the global Minecraft.net header CTA.

## Pixel mapping
Use the Minecraft.net shell for:
- global navigation;
- logo placement;
- top-level menu hierarchy;
- search/account positioning;
- `COMPRAR AHORA`-style global CTA;
- dropdown carets;
- desktop shell proportions.

Use Bedrock Marketplace for store/catalog structure underneath this shell, and Dungeons for specialized content/UI language.

## Composition lock
When Pixel claims to reproduce the current desktop Minecraft.net shell, do not simplify away the middle navigation. The desktop reference order is locked as:

`logo / Juegos / Tienda / Exploración / Aprender / Soporte técnico / CTA / Search / Cuenta`

A different label set or simplified navigation is a Pixel adaptation and must be explicitly documented as such rather than called 1:1 official fidelity.

## Geometry rule
For every shell component record:
- source breakpoint/capture size;
- outer width and height;
- internal padding;
- icon width/height;
- icon-to-label gap;
- type size and line-height;
- border thickness;
- neighboring spacing and order.

Accepted provenance is `LIVE_DOM/CSS`, `OFFICIAL_CODE`, or `MEASURED_OFFICIAL_CAPTURE`.

Do not arbitrarily scale official-source components to make the Pixel layout easier.

## Current implementation status
- full desktop row restored;
- official Minecraft logo restored by exact Mojang remote SVG;
- `JUEGOS`, `TIENDA`, `EXPLORACIÓN`, `APRENDER`, `SOPORTE TÉCNICO` restored in source order;
- official Mojang carets used for dropdown navigation;
- green header CTA restored at `154×36 px` with official arrow;
- exact live Search and Account embedded SVG resources restored with their source dimensions and hover states;
- shell corrected to approximately `80 px` at the desktop reference breakpoint;
- orange Dungeons CTA remains implemented at its separately measured `273×54 px` source size.
