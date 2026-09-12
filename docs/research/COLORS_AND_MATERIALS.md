# Colors & Materials

## Exact values published by Mojang
From `scss/abstract/_colors.scss`:

Core Minecraft/theme grays:
- Shark `#1d1e1e`
- Soil `#313131`
- Tundora `#404040`
- Scorpion `#5a5a5a`
- Gravel `#757575`
- Dusty Gray `#949494`

Minecraft greens:
- Fun Green `#3c8527`
- Malachite `#a0e080`

Dungeons-specific map:
- Dungeons primary / Light Orange `#e67834`
- Dungeons secondary / Eucalyptus `#299b6e`
- Dungeons tertiary / Golden Tainoi `#FFCB56`

## Material grammar seen in Dungeons UI
Use official screenshots/in-game references to tune opacity and composition, but preserve these principles:
- The world remains visible behind the UI.
- Panels are dark neutral overlays, not decorative stone slabs.
- Frames are thin and technical/pixel-stepped.
- White is used for high-contrast labels and title plaques.
- Bright colors indicate function/state.

## Pixel derived tokens
Any token prefixed `--px-` is a Pixel decision derived from official evidence, not an official Mojang value. Every derived token should be explainable by a source or screenshot.

## Prohibited drift
Avoid:
- glassmorphism blur cards
- rounded SaaS cards
- neon cyber gradients
- arbitrary gold fantasy ornament
- excessive material textures
- color used only to “make it Minecraft”
