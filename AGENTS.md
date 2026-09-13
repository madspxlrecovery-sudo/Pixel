# Pixel — Official-Source UI Rules

This repository is an unofficial fan/server project. It is not approved by, associated with, or endorsed by Mojang or Microsoft.

## Project identity
Pixel is being designed as an extension of the official Minecraft Marketplace experience, specialized around Minecraft Dungeons content.

The visual hierarchy is therefore:
1. **Minecraft.net official web shell** — global navigation, header/footer behavior, CTA buttons, search/account controls, dropdown chevrons and web micro-iconography.
2. **Minecraft Marketplace / Bedrock Store** — storefront structure, offer grids, wallet/store context, catalog composition and marketplace surfaces.
3. **Minecraft Dungeons** — specialized in-product menu language, typography, controls, states, panels and game-facing interaction patterns.

Do not replace any of these layers with a generic “Minecraft-inspired” or “fantasy game” interpretation.

## Non-negotiable rule: exact official visual resources only
For any visual element that is recognizably Minecraft/Minecraft Dungeons — icons, logos, currency symbols, frames, borders, textures, backgrounds, badges, controller glyphs, item silhouettes, decorative motifs or game UI artwork — **do not invent, redraw, generate, trace, approximate, reinterpret, or substitute it**.

When reproducing a specific component from a specific official Minecraft/Mojang page or game UI, **“official somewhere else” is not enough**. The exact resource or exact implementation used by that component must be identified.

Allowed outcomes are only:
- use the exact official asset used by the target component when its source and usage basis are confirmed;
- reference that exact official asset remotely when that use is explicitly documented for the prototype;
- use the exact official implementation/token/source-code pattern when its source permits it;
- otherwise leave a neutral geometry placeholder or omit the visual until the exact resource is identified.

A missing official asset is **not** permission to create a lookalike or to use a substitute from another Microsoft/Mojang product.

### No-substitution rule
This rule overrides all older prototype fallback behavior.

For fidelity-locked components:
- no Microsoft Fluent icon may stand in for a minecraft.net icon unless the live minecraft.net implementation itself is proven to use that exact Fluent asset;
- no generic Mojang icon may stand in for a different live minecraft.net glyph merely because both are official;
- no CSS shape, emoji, Font Awesome, Material icon, generated SVG, traced SVG, or hand-built approximation may fill a missing branded resource;
- no “close enough” font may stand in for an official published font when the exact font files are available;
- no component may be called “exact”, “official”, or “1:1” while any fidelity-critical asset inside it remains unidentified.

The September 2026 Search/Account fallback incident is the canonical example: Microsoft Fluent Search/Person were official Microsoft assets, but they were **not proven to be the exact live minecraft.net header glyphs**, so they were removed. Until those exact live glyphs are identified, Pixel keeps only their neutral layout slots.

See `docs/research/EXACT_RESOURCE_POLICY.md` for the permanent incident record and enforcement checklist.

## Exact fidelity rule — size, spacing and proportion are part of the asset
Official-source fidelity includes geometry, not only colors and icons.

When Pixel adopts a specific official Minecraft / Marketplace / Dungeons component, the implementation must preserve the source component's documented or measured desktop geometry:
- width and height;
- internal padding;
- border thickness;
- icon dimensions;
- icon-to-label gap;
- typography family, weight, size and line-height;
- neighboring spacing/margins;
- aspect ratio;
- hover/pressed inset depth;
- component order and alignment;
- sticky/fixed/scroll behavior.

Do **not** arbitrarily scale an official component to “fit better”. If responsive behavior is required, preserve the official desktop size at the reference breakpoint and define responsive variants only when an official responsive pattern/source exists or when the change is clearly documented as a Pixel adaptation.

Every new approved component must record a `geometry_source` in `docs/research/OFFICIAL_ASSET_GATE.md`: `OFFICIAL_CODE`, `LIVE_DOM/CSS`, or `MEASURED_OFFICIAL_CAPTURE`.

If exact dimensions are not known yet, the component is not ready for fidelity-critical production use.

## Official web-shell rule
The current official Minecraft.net header is a first-class design reference. When Pixel needs web navigation controls, use the exact resources and patterns from that shell before anything else:
- exact Noto Sans webfonts published by Mojang for the shell;
- green primary CTA with the official Minecraft button treatment;
- exact directional arrow asset attached to CTA text;
- exact search control asset once positively identified;
- exact account/profile control asset once positively identified;
- exact dropdown caret asset;
- dark global header bar, measured spacing, and sticky behavior.

These controls belong to the **Minecraft.net web shell**, not to the Dungeons in-game UI. Do not mix their roles accidentally.

The only intentional adaptation in the global header is Pixel-owned content placed inside official layout slots, such as the project wordmark and wallet data. That does **not** authorize changing the official shell’s unrelated typography, iconography, spacing, or behavior.

## Explicitly forbidden
Unless the user later changes this policy explicitly:
- no CSS-drawn Minecraft emeralds, locks, skulls, checks, chests or other branded pictograms;
- no hand-made SVG recreations of Minecraft/Dungeons icons;
- no AI-generated Minecraft/Dungeons UI assets, backgrounds, icons or textures;
- no “inspired by Dungeons” custom border/frame pretending to be the real UI asset;
- no Font Awesome, Material Icons or emoji substitutes for Minecraft/Dungeons interface symbols;
- no invented Marketplace-style or Dungeons-style textures/backgrounds when the intent is to reproduce an official visual;
- no invented replacements for minecraft.net search/account/arrow/chevron icons when an official source exists;
- no cross-product “official fallback” used as a visual substitute for an unidentified target asset;
- no arbitrary resizing of source-backed controls just to suit the Pixel layout;
- no extracted game asset copied into the public repo unless usage permission is independently confirmed.

## Source priority
1. **Tier A — Exact target official source**: the live minecraft.net page/component being reproduced, exact Mojang/Microsoft source repository for that component, exact official Marketplace/Bedrock/Dungeons resource.
2. **Tier B — Other official Mojang/Microsoft sources**: research/discovery only unless they are proven to be the same resource used by the target component.
3. **Tier C — Actual Minecraft / Minecraft Dungeons screenshots**: evidence for layout, hierarchy, spacing, state behavior and identifying the correct official asset; screenshots do not automatically grant redistribution rights for cropped assets.
4. **Tier D — Third-party/community sources**: discovery only. They may help locate or name an official resource but must never become the production source of truth.

## Asset gate — mandatory before implementation
Every Minecraft/Dungeons-specific visual must pass this gate before being added to production code:
1. Identify the exact official target source.
2. Identify the exact asset/component/token name or live implementation when possible.
3. Prove that it is the resource used by the target component, not merely a similar first-party asset.
4. Record the source in `docs/research/OFFICIAL_SOURCES.md`, `docs/research/OFFICIAL_ASSET_GATE.md`, and when relevant `docs/research/EXACT_RESOURCE_POLICY.md`.
5. Record usage status: `APPROVED`, `REFERENCE_ONLY`, `UNKNOWN`, or `BLOCKED`.
6. Record geometry provenance and exact reference dimensions when the component has a fixed/standard geometry.
7. Only `APPROVED` assets/components may be rendered as exact official visual assets in the site.
8. `REFERENCE_ONLY`, `UNKNOWN`, and `BLOCKED` target assets must remain neutral/omitted. Do not recreate or substitute them.
9. Before marking a task complete, check the page for accidental legacy substitutes or approximations.

## Typography
Typography follows the same exact-resource rule.

- **Minecraft.net shell:** use the exact Mojang-published Noto Sans Regular/Bold files loaded by `assets/css/foundation/typography.css`.
- **Minecraft Dungeons:** Minecraft Ten / Seven only where the official Dungeons pattern supports them.
- **Pixel-owned wordmark:** Minecraft Five Bold may be used as a licensed project typeface; this is a Pixel adaptation, not an official Minecraft logo.

Never rely on a system-installed font when Mojang publishes the exact webfont needed for the target component.

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

## Current exact shell glyphs
The current minecraft.net desktop header search and account pictograms were positively identified on 2026-09-13 in the live official component stylesheet:

- stylesheet: `https://www.minecraft.net/webui/mc-components.min.css`;
- search: `--mc-environment-search_icon_svg-18x18` and its `_hover` variant;
- account: `--mc-environment-accountIcon_svg-16x16` and its `_hover` variant;
- implementation: exact SVG data URIs applied by the live `.MC_globalHeaderA_searchGlyph::before` and `.MC_globalHeaderA_accountGlyph::before` rules.

Pixel may use those exact data URIs at their live `18×18px` and `16×16px` geometry. Do not redraw them or restore the removed Fluent Search/Person fallbacks.

## Current legacy warning
The prototype history contains earlier experimental CSS interpretations and substitutes. These are **legacy experiments, not approved design-system components** and must not be reused.

Examples include CSS emeralds, locks/checks/skulls, hand-built frames, synthetic world backgrounds, and the removed Microsoft Fluent Search/Person header fallback.

See `docs/research/KNOWN_INVALID_IMPLEMENTATIONS.md` and `docs/research/EXACT_RESOURCE_POLICY.md` before reusing any existing visual class.

## Baseline
The branch `baseline/first-valid-prototype` is the frozen rollback point for the first visually valid Marketplace + Dungeons prototype. Do not rewrite or repurpose that branch.

## Branding/legal guardrail
Never present Pixel as official Minecraft or Minecraft Dungeons content. Keep the project identity clear and retain the required unofficial-project disclaimer in the final public site.
