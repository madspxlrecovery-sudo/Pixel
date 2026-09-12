# Pixel — Source-First UI Rules

This repository is an unofficial fan/server project. It is not approved by, associated with, or endorsed by Mojang or Microsoft.

## Non-negotiable design rule
Every UI decision must be traceable to an official Minecraft / Minecraft Dungeons source, or to an actual in-game screenshot supplied for visual comparison. Do not invent a parallel “Minecraft-like” design language when a documented Minecraft/Dungeons pattern exists.

## Source priority
1. **Tier A — Official source code/assets published by Mojang/Microsoft**: `Mojang/web-theme-bootstrap`, minecraft.net, Xbox/Microsoft pages.
2. **Tier B — Actual Minecraft Dungeons screenshots**: used to measure composition, hierarchy, state treatment, spacing and visual behavior.
3. **Tier C — Third-party/community material**: may be used only to locate an official source. Never use it as the primary authority for production styling.

## Required visual invariants
- Titles/buttons: Minecraft Ten family when appropriate.
- Body/help copy: Minecraft Seven family when appropriate.
- Square/pixel geometry; no rounded-card SaaS styling unless a real Dungeons menu proves it.
- Dark translucent panels over a visible scene/world layer.
- Thin stepped/cornered frames instead of thick fantasy-stone borders.
- Strong state system: selected, available, locked, disabled, completed, new.
- Color is semantic, not decorative.
- Controller/keyboard prompts are part of the interface grammar.
- Large type hierarchy and generous negative space.
- Objects/rewards should not automatically be placed in generic web cards.

## Asset rule
Do **not** copy restricted Mojang image assets into this repository unless their license explicitly permits it. The official `web-theme-bootstrap` license says image assets in that project may not be used outside that project without permission. Use them as research references and rebuild original Pixel components from the documented visual grammar.

Fonts in `Mojang/web-theme-bootstrap/assets/fonts` have a separate SIL Open Font License file. This repo references those font files remotely and records the license source in `THIRD_PARTY_NOTICES.md`.

## Implementation rule
Before adding or redesigning a component:
1. Identify the closest Dungeons menu pattern.
2. Record the official source in `docs/research/OFFICIAL_SOURCES.md` or `source-manifest.json`.
3. Reproduce the behavior/grammar, not copyrighted art.
4. Preserve accessibility: keyboard navigation, visible focus, Escape/back behavior and meaningful labels.

## Branding/legal guardrail
Never present Pixel as official Minecraft or Minecraft Dungeons content. Keep the project name dominant and keep the required unofficial-project disclaimer visible in the final public site.
