# Icons

Pixel does not create lookalike Minecraft / Minecraft Dungeons icons.

## Production rule
A Minecraft/Dungeons-specific icon may be rendered only when:
1. the exact official source is identified;
2. its usage status is recorded as `APPROVED` in `docs/research/OFFICIAL_ASSET_GATE.md`;
3. the implementation uses that approved official resource.

If those conditions are not met, use text or a neutral non-branded placeholder. Do not draw a substitute.

## Explicitly forbidden substitutes
- CSS-drawn emeralds, skulls, locks, checks, chests or diamonds;
- hand-made SVG recreations of official icons;
- AI-generated Minecraft/Dungeons icon lookalikes;
- Font Awesome / Material / emoji replacements intended to stand in for a Minecraft/Dungeons icon;
- traced or pixel-by-pixel redrawn official art.

## Official research inventory
Mojang’s public `web-theme-bootstrap/assets/svg/icons` directory is useful for identifying official icon names and visual systems, but the root repository license restricts reuse of its image assets outside that project unless separate permission applies.

Therefore those files remain `REFERENCE_ONLY` until an explicit approved usage basis is found.

## Current implementation status
Any pictogram currently drawn by CSS in the prototype is legacy test code and must not be promoted to production. See:
`docs/research/KNOWN_INVALID_IMPLEMENTATIONS.md`

Accessibility still applies: icon-only controls require readable labels/ARIA text whenever an approved icon is eventually used.
