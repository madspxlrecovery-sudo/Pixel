# Official Source Registry

Last research pass: 2026-09-12.

## A. Mojang — web-theme-bootstrap
https://github.com/Mojang/web-theme-bootstrap

Status: **official Mojang GitHub repository**. Archived/read-only, but historically authoritative for the minecraft.net theme.

Relevant evidence:
- README: package contains SCSS for minecraft.net look-and-feel plus generic image/SVG assets.
- Changelog: v7.3.x added Minecraft Ten V2 and Minecraft Seven V2; earlier versions added/updated Minecraft Dungeons logo, Dungeons color, and Dungeons launcher icons.
- `assets/fonts/`: Minecraft Ten, Ten V2, Seven, Seven V2, Five.
- `scss/abstract/_colors.scss`: official Minecraft and Dungeons color values.
- `scss/abstract/_theme.scss`: maps Dungeons primary/secondary/tertiary tokens.
- `scss/components/_borders.scss`: `.border-dungeons` implementation.
- `scss/components/_buttons.scss`: blocky inset-shadow button construction and Dungeons theme variants.
- `assets/svg/icons/`: pixel arrows/check/close/play, chest, launcher and other official web icon resources.
- `assets/img/border-dungeons-25.png`: official Dungeons border reference. **Reference only; do not copy into Pixel.**

## B. Minecraft Dungeons accessibility
https://www.minecraft.net/en-us/accessibility/dungeons

Status: **official minecraft.net documentation**.

Relevant evidence:
- Menus are navigable with controller or keyboard.
- Escape acts as back/close on PC.
- Menu UI narration is a supported first-class behavior.
- Communication uses predefined icon-based commands.
- Multiple enemy-outline colors are supported, confirming that state/readability must not rely on a single color channel.

## C. Minecraft Usage Guidelines
https://www.minecraft.net/usage-guidelines

Status: **official Mojang/Microsoft policy**.

Relevant evidence:
- Brand includes names, logos, fonts, textures and other distinctive characteristics.
- Assets include code, graphics, textures, images, models, sounds and screenshots.
- Community creations must not imply official approval/association.
- A prominent unofficial-project disclaimer is required for public pages using Minecraft names/brand/assets.
- Websites related to Minecraft are allowed subject to the guidelines.

## D. Xbox — Minecraft Dungeons product page
https://www.xbox.com/games/minecraft-dungeons

Status: **official Microsoft/Xbox product page**.

Use: official gameplay imagery and franchise context only. Do not copy marketing art into Pixel without separate permission.

## Sources intentionally excluded from authority
- Asset-extraction repositories.
- Minecraft wikis and fandom sites.
- Fan-made fonts, icon packs or CSS themes.
- Pinterest/Reddit/YouTube recreations.

They can help locate a source, but they cannot define Pixel’s production design language.
