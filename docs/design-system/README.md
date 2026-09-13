# Pixel Marketplace + Dungeons Design System

This design system is not a library of Minecraft/Dungeons lookalikes. It is a controlled implementation layer that may use **approved official resources** plus neutral project structure/behavior.

## Visual direction
- **Minecraft Marketplace** provides the base storefront/page environment.
- **Minecraft Dungeons** provides the specialized game-menu language used inside the experience.

## Foundation files
- `assets/css/foundation/typography.css`
- `assets/css/foundation/tokens.css`
- `assets/css/foundation/dungeons-core.css`

## Marketplace templates
- `MARKETPLACE_TEMPLATES.md` — category architecture, commercial templates, conversion rationale and measurement plan.

Important: the existence of an old CSS primitive does not mean it is approved for final visual use. Read `COMPONENTS.md` and `../research/KNOWN_INVALID_IMPLEMENTATIONS.md` before reusing anything.

## Component philosophy
Components are promoted to production only after their visual resources pass the official asset gate.

The correct workflow is:
1. identify the real Marketplace/Dungeons component or asset;
2. verify official source and usage basis;
3. record it in `docs/research/OFFICIAL_ASSET_GATE.md`;
4. implement the approved official resource;
5. keep neutral placeholders for anything still unapproved.

Do not design a “close enough” replacement.

## Safe reusable layer
The following may be reusable without inventing branded artwork:
- semantic structure;
- spacing and responsive layout;
- accessibility behavior;
- keyboard/controller interaction logic;
- state machines;
- official font references;
- exact approved Mojang tokens;
- neutral placeholder containers.

## Branded visual layer
Icons, frames, backgrounds, currency marks, textures, logos, badges and decorative game artwork require explicit `APPROVED` status before production use.

See:
- `COMPONENTS.md`
- `../research/OFFICIAL_ASSET_GATE.md`
- `../research/KNOWN_INVALID_IMPLEMENTATIONS.md`
- `../research/ASSET_POLICY.md`
