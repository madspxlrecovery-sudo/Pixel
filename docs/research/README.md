# Minecraft Dungeons UI Research

This folder is the canonical research layer for Pixel. Its purpose is to prevent visual drift and stop future work from becoming merely “Minecraft-inspired”.

## What is confirmed from official sources
- Mojang’s public web theme contains Minecraft Ten, Minecraft Seven, Minecraft Five, Dungeons-specific color tokens, a Dungeons border resource, pixel icon families and the Minecraft Dungeons logo.
- The official theme defines Dungeons colors as orange `#e67834`, eucalyptus `#299b6e`, and golden-tainoi `#FFCB56`.
- The official theme defines a `.border-dungeons` component built around a dedicated Dungeons border image.
- The official accessibility page confirms full menu navigation by controller/keyboard, Escape-to-back on PC, UI narration and icon-based communication patterns.
- Mojang’s usage guidelines treat names, logos, fonts, textures and other distinctive characteristics as brand; game graphics/models/sounds/screenshots are assets. Public work must not look official or endorsed.

## Research conclusion for Pixel
The target is not a modern marketplace website with Minecraft decoration. It is a web implementation of a **game-screen grammar**: scene behind UI, translucent overlays, large Ten headings, Seven copy, stepped line frames, semantic color, explicit selected/locked states and controller-style prompts.

Read the files in this order:
1. `OFFICIAL_SOURCES.md`
2. `TYPOGRAPHY.md`
3. `COLORS_AND_MATERIALS.md`
4. `UI_GRAMMAR.md`
5. `CONTROLS_ACCESSIBILITY.md`
6. `ASSET_POLICY.md`
