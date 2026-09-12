# Pixel — Official-Source UI Rules

This repository is an unofficial fan/server project. It is not approved by, associated with, or endorsed by Mojang or Microsoft.

## Project identity
Pixel is being designed as an extension of the official Minecraft Marketplace experience, specialized around Minecraft Dungeons content.

The visual hierarchy is therefore:
1. **Minecraft.net official web shell** — global navigation, header/footer behavior, CTA buttons, search/account controls, dropdown chevrons and web micro-iconography.
2. **Minecraft Marketplace / Bedrock Store** — storefront structure, offer grids, wallet/store context, catalog composition and marketplace surfaces.
3. **Minecraft Dungeons** — specialized in-product menu language, typography, controls, states, panels and game-facing interaction patterns.

Do not replace any of these layers with a generic “Minecraft-inspired” or “fantasy game” interpretation.

## Non-negotiable rule: official visual assets only
For any visual element that is recognizably Minecraft/Minecraft Dungeons — icons, logos, currency symbols, frames, borders, textures, backgrounds, badges, controller glyphs, item silhouettes, decorative motifs or game UI artwork — **do not invent, redraw, generate, trace, approximate or reinterpret it**.

Allowed outcomes are only:
- use an official asset when its source and usage permission are confirmed;
- reference an official asset remotely when that use is explicitly permitted;
- use an official implementation/token/source-code pattern when its license permits it;
- otherwise leave a neutral placeholder or omit the visual until the correct official resource can be used.

A missing official asset is **not** permission to create a lookalike.

## Official web-shell rule
The current official Minecraft.net header is a first-class design reference. When Pixel needs web navigation controls, prefer the same official patterns used there before inventing anything:
- green primary CTA with the official Minecraft button treatment;
- small directional/diagonal arrow treatment attached to CTA text;
- search magnifier control;
- account/profile control;
- dropdown chevrons;
- dark global header bar and spacing hierarchy.

These controls belong to the **Minecraft.net web shell**, not to the Dungeons in-game UI. Do not mix their roles accidentally.

Exact production assets must still pass `docs/research/OFFICIAL_ASSET_GATE.md`. If the exact live/official asset cannot be approved for use, keep the control text-only or neutral rather than redrawing the icon.

## Explicitly forbidden
Unless the user later changes this policy explicitly:
- no CSS-drawn Minecraft emeralds, locks, skulls, checks, chests or other branded pictograms;
- no hand-made SVG recreations of Minecraft/Dungeons icons;
- no AI-generated Minecraft/Dungeons UI assets, backgrounds, icons or textures;
- no “inspired by Dungeons” custom border/frame pretending to be the real UI asset;
- no Font Awesome, Material Icons or emoji substitutes for Minecraft/Dungeons interface symbols;
- no invented Marketplace-style or Dungeons-style textures/backgrounds when the intent is to reproduce an official visual;
- no invented replacements for minecraft.net search/account/arrow/chevron icons when an official source exists;
- no extracted game asset copied into the public repo unless usage permission is independently confirmed.

## Source priority
1. **Tier A — Official Mojang/Microsoft sources**: minecraft.net live pages, `Mojang/web-theme-bootstrap`, `Mojang/bedrock-samples`, official Minecraft Marketplace pages, Xbox/Microsoft pages, official media/assets with clear usage terms.
2. **Tier B — Actual Minecraft / Minecraft Dungeons in-game screenshots**: evidence for layout, hierarchy, spacing, state behavior and identifying the correct official asset; screenshots do not automatically grant redistribution rights for cropped assets.
3. **Tier C — Third-party/community sources**: discovery only. They may help locate or name an official resource but must not become the production source of truth.

## Asset gate — mandatory before implementation
Every Minecraft/Dungeons-specific visual must pass this gate before being added to production code:
1. Identify the exact official source.
2. Identify the exact asset/component/token name when possible.
3. Record the source in `docs/research/OFFICIAL_SOURCES.md` and/or `docs/research/OFFICIAL_ASSET_GATE.md`.
4. Record usage status: `APPROVED`, `REFERENCE_ONLY`, `UNKNOWN`, or `BLOCKED`.
5. Only `APPROVED` assets may be rendered as official visual assets in the site.
6. `REFERENCE_ONLY`, `UNKNOWN`, and `BLOCKED` assets must remain placeholders/omitted. Do not recreate them.

## Typography
Use only source-backed Minecraft type families.
- Minecraft Ten family: titles, buttons, strong labels when appropriate.
- Minecraft Seven family: body/help text when appropriate.
- Minecraft Five only when a verified official pattern calls for it.

Font licensing and source are documented in `THIRD_PARTY_NOTICES.md` and `docs/research/ASSET_POLICY.md`.

## Colors and implementation tokens
Exact Mojang values must remain distinguishable from Pixel mappings:
- `--mc-*` = exact source-backed Mojang values.
- `--px-*` = project mapping/behavior, never presented as an official Mojang token.

Do not approximate an official color if the exact source-backed value exists.

## UI behavior
Behavior may be implemented in original code while matching documented official patterns:
- keyboard/controller navigation;
- selected, available, locked, disabled, completed and new states;
- Escape/back behavior;
- visible focus and meaningful accessible labels.

Behavioral implementation must not be used as an excuse to invent branded visual assets.

## Current legacy warning
The existing prototype contains earlier experimental CSS interpretations (for example a CSS emerald, CSS locks/checks/skulls, hand-built frames and a synthetic world background). These are **legacy experiments, not approved design-system components** and must be removed/replaced as official permitted resources are identified.

See `docs/research/KNOWN_INVALID_IMPLEMENTATIONS.md` before reusing any existing visual class.

## Baseline
The branch `baseline/first-valid-prototype` is the frozen rollback point for the first visually valid Marketplace + Dungeons prototype. Do not rewrite or repurpose that branch.

## Branding/legal guardrail
Never present Pixel as official Minecraft or Minecraft Dungeons content. Keep the project identity clear and retain the required unofficial-project disclaimer in the final public site.
