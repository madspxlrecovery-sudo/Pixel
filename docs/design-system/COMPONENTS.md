# Component Contracts

## Status model
Every component in Pixel must declare whether it is:
- `OFFICIAL-BACKED` — uses an approved official asset/token/pattern;
- `NEUTRAL` — project-owned structure with no attempt to imitate a distinctive Minecraft/Dungeons asset;
- `LEGACY-INVALID` — earlier visual interpretation that must not be reused.

A component may not claim `OFFICIAL-BACKED` unless its source and usage status are recorded in `docs/research/OFFICIAL_ASSET_GATE.md`.

## Typography components — OFFICIAL-BACKED
### `.du-title`
Uses the official Minecraft Ten family under the documented font license.

### `.du-copy`
Uses the official Minecraft Seven family under the documented font license.

## Behavioral components — NEUTRAL unless paired with approved artwork
### selection state
May implement focus, selected/locked/disabled behavior, keyboard navigation and ARIA states.

Visual treatment must use official approved artwork/tokens when it attempts to reproduce Minecraft/Dungeons-specific presentation.

### action behavior
May implement hover/focus/pressed/disabled interactions.

Do not invent a Minecraft/Dungeons-looking button skin. If the official visual treatment is not approved for reuse, keep the button visually neutral while research continues.

### control hints
Textual prompts such as `BACK`, `SELECT`, `ESC`, `ENTER` may be used.

Do not draw/recreate branded controller glyphs unless an approved official glyph source is recorded.

## Deprecated / legacy-invalid components
The following ideas from the first prototype are not approved design-system primitives:

### `.du-frame` — LEGACY-INVALID for branded presentation
The hand-authored stepped frame was an interpretation of Dungeons borders. It must not be treated as the official Dungeons frame or reused as a substitute for a restricted official border asset.

Allowed future use: only as a clearly neutral temporary debug outline, not as final branded UI.

### `.du-title-plaque` — REVIEW REQUIRED
Typography is source-backed, but the plaque silhouette/shape must be matched to a verified official Marketplace/Dungeons pattern before final use.

### `.du-action` — REVIEW REQUIRED
Interaction logic is reusable. The visual skin must be validated against an official permitted source before final use.

### CSS pictograms — LEGACY-INVALID
Any CSS-drawn emerald, skull, lock, check, chest, diamond or similar Minecraft/Dungeons-specific pictogram is forbidden as a production substitute for official artwork.

### synthetic world/Marketplace backgrounds — LEGACY-INVALID
A custom CSS landscape or “Minecraft-like” background must not be used to pretend to be the official Marketplace environment. Until an approved official background is sourced, use a neutral temporary backdrop.

## Component acceptance checklist
Before promoting a visual component to production:
1. Which official Minecraft Marketplace or Minecraft Dungeons screen/component is the reference?
2. Is the exact official asset/token/pattern identified?
3. Is its usage status `APPROVED`?
4. Does the implementation use the approved official resource rather than a recreation?
5. If no approved asset exists, has the component remained neutral/placeholder-only?
6. Are interaction and accessibility behavior still correct?
