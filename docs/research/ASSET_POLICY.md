# Official Asset Policy for Pixel

This document exists because “official source” does not automatically mean “free to redistribute”, and because Pixel must not replace unavailable official assets with lookalike recreations.

## Core rule
For recognizably Minecraft / Minecraft Dungeons visual material, Pixel uses **official resources only when their usage status is confirmed**.

If an official resource cannot legally or technically be used, Pixel must **omit it or show a neutral placeholder**. Do not redraw, generate, trace or approximate it.

This applies to:
- icons and pictograms;
- logos and wordmarks;
- currency symbols;
- UI frames/borders;
- background art;
- textures;
- badges;
- controller glyph artwork;
- decorative motifs;
- game item silhouettes/artwork;
- any visual intended to look like an original Minecraft/Dungeons asset.

## Approved foundation
### Font software
The official Mojang repository includes `assets/fonts/LICENSE_OFL.txt`, which applies SIL Open Font License 1.1 to the font software in that directory.

Current policy: reference the official hosted fonts remotely; do not commit font binaries unless there is a specific reason and the OFL requirements are preserved.

### Source code / SCSS / exact tokens
The software portion of Mojang’s public web-theme repository is covered by its software license. Pixel may use source-backed implementation concepts, exact published tokens and permitted code patterns while preserving applicable notices.

## Reference-only official material
The Mojang `web-theme-bootstrap` root license separately states that image assets in that project are copyrighted and may not be used outside that project without permission.

Therefore, unless separate permission is found, examples such as these remain `REFERENCE_ONLY`:
- `border-dungeons-25.png`;
- official Minecraft/Dungeons logos;
- official icon SVG/PNG image files;
- official marketing art/background images.

Reference-only means:
- we may inspect them to identify what the real game/site uses;
- we may cite them in research documentation;
- we may use them to locate a separately licensed/approved official source;
- we **may not** create a fake replacement that imitates their distinctive artwork.

## Extracted game files
Assets extracted from Minecraft Dungeons by community repositories are not treated as production-approved merely because they are genuine game files.

They can be used for research/discovery only until a valid official usage basis is established.

Do not commit extracted game textures, icons, models, sounds or UI images into the public Pixel repository without explicit permission/status confirmation.

## Asset statuses
Every specific branded visual must be classified as one of:
- `APPROVED` — official source found and usage basis confirmed for this project;
- `REFERENCE_ONLY` — official source found but redistribution/use is restricted;
- `UNKNOWN` — official resource likely exists but usage terms/source are not confirmed;
- `BLOCKED` — explicitly unsuitable or prohibited for this repo.

Only `APPROVED` resources may appear as official visual assets in production.

## Fallback behavior
For `REFERENCE_ONLY`, `UNKNOWN`, or `BLOCKED` resources:
- omit the icon/artwork; or
- use plain text; or
- use a neutral geometric placeholder that does **not** imitate the Minecraft/Dungeons asset.

Examples:
- use the word `EMERALDS` instead of a hand-drawn emerald icon;
- use `LOCKED` text instead of a recreated Dungeons lock;
- use an empty framed test region instead of a copied/recreated official decorative border;
- use a flat neutral background while an approved Marketplace background is being sourced.

## Public-site disclaimer
The project must not imply official Mojang/Microsoft status. The final public experience must retain an appropriate unofficial-project disclaimer and follow the current Minecraft Usage Guidelines.

## Mandatory review checklist
Before adding any branded visual:
- Is the source genuinely official?
- Is the exact file/component/token identified?
- What usage/license terms apply to that exact resource?
- Is its status recorded in `OFFICIAL_ASSET_GATE.md`?
- Are we using the actual approved official resource rather than a recreation?
- If usage is not approved, has the design remained neutral instead of creating a lookalike?
