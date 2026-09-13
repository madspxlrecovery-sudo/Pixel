# Known Invalid Implementations

This file records visual approaches already tried in Pixel that must **not** be reused as production solutions.

Its purpose is to prevent the project from repeating the same fidelity mistakes.

## Current prototype items that are invalid as final assets

### CSS emerald
Reason: custom interpretation of Minecraft currency artwork.
Rule: replace only with an `APPROVED` official resource. Until then render text such as `EMERALDS 3373` or a neutral placeholder.

### CSS skull / lock / check / diamond pictograms
Reason: invented substitutes for recognizable Minecraft/Dungeons iconography.
Rule: remove from final UI. Do not redraw them in SVG, canvas, CSS or generated imagery.

### Hand-authored Dungeons-like frame
Reason: visually imitates the distinctive Dungeons border/frame language without using an approved official asset.
Rule: treat only as temporary debug geometry. Do not present it as a Dungeons frame.

### Synthetic CSS “world” background
Reason: generic Minecraft/Dungeons interpretation rather than the official Minecraft Marketplace background/environment requested for the project.
Rule: use a neutral temporary background until an approved official Marketplace resource/pattern is identified.

### Generic invented banner art
Reason: not sourced from the official Marketplace/Dungeons visual system.
Rule: banner regions remain empty/neutral during structural testing until real content/assets are defined.

### Generic third-party UI icon libraries
Reason: wrong visual language and not official Minecraft/Dungeons resources.
Rule: no Font Awesome, Material Icons, emoji or similar replacements for branded interface symbols.

### Cross-product “official” icon fallbacks
Reason: an asset can be genuinely official and still be the wrong resource for the target component.

September 2026 example: Pixel temporarily used Microsoft Fluent `Search 16 Regular` and `Person 16 Regular` for the current minecraft.net header. Those files are official Microsoft assets, but they were not proven to be the exact glyphs used by minecraft.net.

Rule: **do not substitute a missing target resource with another first-party Mojang/Microsoft asset merely because it is official.** Use the exact target resource or leave a neutral geometry slot until it is identified.

See `EXACT_RESOURCE_POLICY.md`.

### System-font fallback when an exact Mojang webfont is published
Reason: declaring `font-family: "Noto Sans", sans-serif` without loading Mojang's published Noto Sans files can render a different local/system build of the typeface.
Rule: fidelity-locked minecraft.net shell text must use the exact Mojang-hosted Noto Sans Regular/Bold files loaded in `assets/css/foundation/typography.css`.

### AI-generated branded UI assets
Reason: they are interpretations rather than official resources.
Rule: do not use image generation to create Minecraft/Dungeons icons, textures, frames, UI backgrounds, logos or branded visual components for this project.

## What may still be reused from the prototype
- semantic HTML structure;
- keyboard navigation;
- focus management;
- selected/locked/disabled state logic;
- responsive layout logic;
- accessibility labels;
- exact official font references;
- exact source-backed Mojang color tokens;
- generic non-branded spacing/layout utilities;
- neutral empty geometry used while an exact official asset is unresolved.

## Replacement procedure
For each invalid visual:
1. identify the exact target official screen/component;
2. inspect official Mojang/Microsoft/live-page sources;
3. identify the exact official resource used by that target component;
4. add it to `OFFICIAL_ASSET_GATE.md`;
5. verify source, usage status, geometry and typography;
6. if approved for the intended role, integrate that exact resource;
7. otherwise leave the UI neutral and keep researching.

Never “solve” a missing asset by creating a better imitation or by borrowing a merely similar first-party asset.
