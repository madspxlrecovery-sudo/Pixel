# Minecraft Marketplace + Dungeons UI Research

This folder is the canonical research layer for Pixel. Its purpose is to prevent visual drift and stop future work from becoming merely “Minecraft-inspired”.

## Product direction
Pixel is intended to feel like an extension of the **official Minecraft Marketplace**, specialized around **Minecraft Dungeons** content.

That means:
- Marketplace is the reference for the external shell, page environment and overall storefront context.
- Dungeons is the reference for specialized in-product menus, states, typography, controls and interaction language.

Neither layer may be replaced by a custom lookalike when an official resource/pattern exists.

## What is confirmed from official sources
- Mojang’s public web theme contains Minecraft Ten, Minecraft Seven, Minecraft Five, Dungeons-specific color tokens, a Dungeons border resource, pixel icon families and Minecraft/Dungeons web assets.
- The official theme defines Dungeons colors including orange `#e67834`, eucalyptus `#299b6e`, and golden-tainoi `#FFCB56`.
- The official theme defines a `.border-dungeons` component built around a dedicated Dungeons border image.
- The official theme disables rounded geometry globally and uses block-like edge treatment for buttons.
- The official accessibility page confirms full menu navigation by controller/keyboard, Escape-to-back on PC, UI narration and icon-based communication patterns.
- Mojang’s licenses/usage rules mean an official asset is not automatically reusable in Pixel.

## Critical policy change
Earlier research suggested rebuilding original Pixel artwork from official visual grammar when an official image asset could not be reused.

That approach is now **deprecated**.

For recognizable Minecraft/Dungeons visuals (icons, frames, backgrounds, currency marks, logos, textures, badges, pictograms):
- use an approved official resource;
- or leave it neutral/empty while research continues.

Do not recreate a lookalike.

## Mandatory files to read before visual implementation
1. `OFFICIAL_ASSET_GATE.md`
2. `KNOWN_INVALID_IMPLEMENTATIONS.md`
3. `ASSET_POLICY.md`
4. `OFFICIAL_SOURCES.md`
5. `TECHNICAL_EVIDENCE.md`
6. `IN_GAME_PATTERNS.md`
7. `TYPOGRAPHY.md`
8. `COLORS_AND_MATERIALS.md`
9. `UI_GRAMMAR.md`
10. `CONTROLS_ACCESSIBILITY.md`
11. `source-manifest.json`

## Research rule
If the correct official asset is not yet approved, the task is not “design something similar”. The task is **continue researching the official source/usage basis**.
