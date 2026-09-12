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
- official font references;
- exact source-backed Mojang color tokens;
- generic non-branded spacing/layout utilities.

## Replacement procedure
For each invalid visual:
1. search official Mojang/Microsoft sources;
2. identify the exact official resource;
3. add it to `OFFICIAL_ASSET_GATE.md`;
4. verify usage status;
5. if `APPROVED`, integrate the real resource;
6. otherwise leave the UI neutral and keep researching.

Never “solve” a missing asset by creating a better imitation.
