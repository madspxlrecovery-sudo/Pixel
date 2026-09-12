# Technical Evidence from Mojang's Official Web Theme

Source repository: https://github.com/Mojang/web-theme-bootstrap

This file records exact implementation facts published by Mojang so future Pixel work can distinguish official evidence from our own interpretation.

## Global geometry
`scss/abstract/_variables.scss` explicitly sets `$enable-rounded: false`.

**Pixel rule:** rounded corners are opt-in and require a specific Dungeons reference. Square geometry is the default.

## Official focus treatment
The same file defines a focus color by mixing official blue/light-blue tokens and a dual outer/inner glow box-shadow.

**Pixel rule:** focus must remain visible. A controller/keyboard-oriented UI cannot hide browser focus without replacing it with an equally clear state.

## Official heading baseline
The Mojang theme defines:
- H1: 36px baseline
- H2: 28px
- H3: 19px
- small text: 14px
- smaller: 12px
- smallest: 10px

The theme also uppercases H1–H4 and applies 1px letter spacing.

These are minecraft.net values, not guaranteed in-game Dungeons values, but they confirm the strong uppercase hierarchy used throughout the brand.

## Dungeons colors
`scss/abstract/_colors.scss` + `_theme.scss` define:
- `$dungeons-primary`: `#e67834` (Light Orange)
- `$dungeons-secondary`: `#299b6e` (Eucalyptus)
- `$dungeons-tertiary`: `#FFCB56` (Golden Tainoi)

## Dungeons border implementation
`scss/components/_borders.scss` defines `.border-dungeons` as:
- `border: 30px solid rgba(white, .25)`
- `border-image: .../border-dungeons-25.png 30`

The bitmap itself is an image asset and therefore reference-only under the repository's root license. Pixel recreates the stepped-frame grammar with original CSS/SVG.

## Button construction
`scss/components/_buttons.scss` sets a 4px button-edge model and builds the block effect using inset shadows:
- light on top/left
- dark on bottom/right
- explicit hover/focus/active treatment
- disabled buttons remain fully opaque (`$btn-disabled-opacity: 1`) but change visual state
- buttons are uppercase with 1px tracking

The theme also includes `btn-dungeons-primary` and `btn-dungeons-secondary` variants.

**Pixel rule:** buttons should feel like game controls with physical edge logic, not glossy web CTAs.

## Official icon inventory
The official repository includes pixel arrows, pixel check, pixel close, pixel play/pause, colored chest, Dungeons launcher icon, creeper, wallet and other web assets. They prove the brand's preference for simple pixel-oriented pictograms.

Because the root license restricts Mojang image assets outside the project, Pixel will create its own icon files rather than copying these files.

## Dungeons launcher icon color behavior
The official `color-dungeons-launcher.svg` is built on a strict 32px block grid inside a 256×256 viewBox and mixes burnt orange/red-orange cells with neutral gray cells, plus small highlight/shadow strips.

**Pixel takeaway:** even detailed icon art is constructed from large block units with discrete shading, not smooth illustration.
