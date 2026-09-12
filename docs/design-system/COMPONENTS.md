# Component Contracts

## `.du-frame`
Purpose: thin stepped frame inspired by Dungeons menu borders.
Must:
- remain square/pixel-stepped
- support selected/disabled color changes
- avoid copying Mojang’s restricted border bitmap

## `.du-panel`
Purpose: dark translucent UI plane over a scene.
Must:
- preserve some background visibility
- avoid rounded corners
- avoid decorative gradients unless source-backed

## `.du-title-plaque`
Purpose: strong screen title region.
Must:
- use Minecraft Ten V2
- support white/high-contrast variant
- keep short titles; long explanatory text belongs below

## `.du-action`
Purpose: primary action.
Must:
- use Ten
- have visible normal/hover/focus/pressed/disabled states
- use block-like inset/highlight geometry
- never be pill-shaped

## `.du-hint`
Purpose: controller/keyboard prompt.
Must:
- map to a real interaction
- pair icon/key with readable text
- remain legible at TV-like viewing distance

## `.du-state--selected`
Must use at least two channels: border/accent + contrast/marker. Never color alone.

## `.du-state--locked`
Must preserve layout context, show a lock/reason and suppress interaction.
