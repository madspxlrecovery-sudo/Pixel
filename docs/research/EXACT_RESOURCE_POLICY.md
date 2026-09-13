# Exact Resource Policy

## Purpose

This file records a permanent project correction made in September 2026 after Pixel used first-party Microsoft fallback icons for controls that were meant to reproduce the current minecraft.net header.

The fallbacks were technically official Microsoft resources, but they were **not proven to be the exact resources used by the target minecraft.net component**. That was a fidelity error.

This document exists so that error is not repeated in later work.

---

## Permanent rule

When the task is to reproduce or extend an existing official Minecraft / Minecraft Marketplace / Minecraft Dungeons component, Pixel must use the **exact target resource** whenever a recognisable official visual is involved.

`official` does not automatically mean `correct`.

A substitute from another Mojang/Microsoft system is still a substitute.

### Allowed

- exact live/official asset from the target component;
- exact source-code implementation used by the target component;
- exact official font file/family/weight used by the target component;
- exact official token/color/spacing rule used by the target component;
- neutral geometry placeholder while the target resource is unresolved;
- project-owned Pixel branding inside a clearly documented `PIXEL_ADAPTATION` slot.

### Not allowed

- a similar official icon from another Microsoft/Mojang library;
- Font Awesome / Material / emoji fallback;
- custom SVG redraw;
- CSS-drawn pictogram;
- AI-generated approximation;
- extracted community asset presented as production source;
- a similar font when the exact official webfont is published;
- claiming a component is exact/official while one of its key visual resources is unresolved.

---

# September 2026 correction record

## What happened

The Pixel header was being rebuilt from the current Minecraft.net Marketplace shell.

The live header visibly contains:
- a search magnifier;
- an account/profile pictogram;
- dropdown carets;
- the green `COMPRAR AHORA` CTA and arrow;
- Noto Sans navigation typography.

The exact current search/account pictogram files were not positively identified in the public Mojang sources inspected at that point.

Pixel temporarily used:
- Microsoft Fluent `Search 16 Regular`;
- Microsoft Fluent `Person 16 Regular`.

Those icons were official Microsoft assets, but there was no evidence that minecraft.net itself used those exact assets.

## Decision

Both Fluent fallbacks were invalidated and removed.

The header now keeps neutral 16px layout slots for Search/Account pictograms until the exact live resources are identified.

This is intentional. A missing pictogram is preferable to a false claim of fidelity.

## Typography correction

The project previously declared `font-family: "Noto Sans", sans-serif` without ensuring that the same published Mojang font files were actually loaded.

Pixel now loads the exact Mojang-hosted files from `Mojang/web-theme-bootstrap`:
- `NotoSans-Regular.woff2/.woff`;
- `NotoSans-Bold.woff2/.woff`.

The global shell uses `--font-mc-web` mapped to those exact resources.

## Pixel brand exception

The `PIXEL` wordmark is project-owned content and is intentionally not an official Mojang logo.

Current title structure:

`PIXEL` + `DUNGEONS MARKETPLACE`

`PIXEL` uses the OFL-licensed `MinecraftFive-Bold` resource published in Mojang's web-theme repository. The small `DUNGEONS MARKETPLACE` caption is a Pixel adaptation using an official-source Dungeons orange token.

This brand exception does **not** relax the exact-resource requirement for surrounding Minecraft.net shell controls.

---

# Exact-resource checklist

Before implementing a visual copied from an official UI, answer all of these:

1. What exact official screen/page/component is the target?
2. What exact file/component renders the visual?
3. Is that file/component from the same target system, not merely another first-party library?
4. Is the exact font file/family/weight known?
5. Are dimensions and spacing sourced from official code/live CSS or measured official captures?
6. Are hover/pressed/scroll/sticky states known?
7. Is the usage status documented in `OFFICIAL_ASSET_GATE.md`?
8. If any answer is unknown, can the visual be omitted while preserving neutral geometry?

If item 2 or 3 is unknown for a recognisable official pictogram, **do not render a substitute**.

---

# September 2026 exact-glyph resolution

On 2026-09-13 the two current header glyphs were positively identified in the live official Minecraft.net component stylesheet at `https://www.minecraft.net/webui/mc-components.min.css`.

- Search uses the exact embedded SVG data URI from `--mc-environment-search_icon_svg-18x18` and its `_hover` variant.
- Account uses the exact embedded SVG data URI from `--mc-environment-accountIcon_svg-16x16` and its `_hover` variant.
- The live component applies them through `.MC_globalHeaderA_searchGlyph::before` at `18×18px` and `.MC_globalHeaderA_accountGlyph::before` at `16×16px`.

Their Asset Gate status is now `APPROVED`. This resolution does not rehabilitate the removed Fluent fallbacks: those remain `BLOCKED` because they are different resources.

Exact resources already identified and allowed in the prototype include:
- Mojang Noto Sans Regular/Bold webfonts;
- Mojang `pixel-caret.svg`;
- Mojang `pixel-arrow-right.svg`;
- the live Minecraft.net Search `18×18px` embedded SVG, including its hover state;
- the live Minecraft.net Account `16×16px` embedded SVG, including its hover state;
- official Minecoin SVG hosted on minecraft.net;
- official Dungeons/Marketplace artwork already individually documented in the project.

---

# Enforcement

`AGENTS.md` and `OFFICIAL_ASSET_GATE.md` both reference this policy.

If a future instruction or implementation conflicts with this file, the stricter exact-resource rule wins unless the user explicitly changes the policy.
