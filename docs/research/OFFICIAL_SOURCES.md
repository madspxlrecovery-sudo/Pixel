# Official Source Registry

Last research pass: 2026-09-12.

## A. Minecraft.net — official Dungeons page and global web shell
https://www.minecraft.net/es-es/about-dungeons

Status: **official Mojang/Microsoft live website**.

Relevant evidence from the current page:
- dark global Minecraft header shell;
- green `COMPRAR AHORA` primary CTA;
- CTA directional arrow treatment;
- official search magnifier control;
- account/profile control;
- dropdown chevrons;
- shared Minecraft.net spacing, typography and navigation hierarchy;
- Dungeons-specific content embedded inside the standard Minecraft.net shell.

Pixel use:
- primary reference for web navigation/header/footer micro-UI;
- use the real Minecraft.net interaction pattern before inventing a web control;
- search/account/arrow/chevron visuals must come from an official approved asset/source, not a redraw.

See `OFFICIAL_WEB_SHELL.md`.

## B. Mojang — web-theme-bootstrap
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
- `assets/svg/icons/`: official Minecraft web icon inventory including cart, chest, close, menu, Dungeons launcher and other resources.
- `assets/img/border-dungeons-25.png`: official Dungeons border reference. **Reference only; do not copy into Pixel unless usage is separately approved.**

## C. Mojang — bedrock-samples
https://github.com/Mojang/bedrock-samples

Status: **official Mojang GitHub repository**.

Relevant evidence:
- `resource_pack/ui/store_item_list_screen.json`: official Store offer-grid structure, 25% grid items and 16:9 key-art behavior.
- `resource_pack/ui/csb_screen.json`: official CSB/Marketplace screen shell, top bar references and screen background construction.
- `resource_pack/ui/marketplace_sdl/sdl_content_navigation.json`: official Marketplace content navigation.
- `resource_pack/ui/_global_variables.json`: official Bedrock UI variables/colors including CSB panel background.
- `resource_pack/textures/ui/`: official Bedrock UI texture inventory used by the sample pack.

Pixel use: primary structural reference for the Marketplace/store layer.

## D. Minecraft Dungeons accessibility
https://www.minecraft.net/en-us/accessibility/dungeons

Status: **official minecraft.net documentation**.

Relevant evidence:
- Menus are navigable with controller or keyboard.
- Escape acts as back/close on PC.
- Menu UI narration is a supported first-class behavior.
- Communication uses predefined icon-based commands.
- Multiple enemy-outline colors are supported, confirming that state/readability must not rely on a single color channel.

## E. Minecraft Usage Guidelines
https://www.minecraft.net/usage-guidelines

Status: **official Mojang/Microsoft policy**.

Relevant evidence:
- Brand includes names, logos, fonts, textures and other distinctive characteristics.
- Assets include code, graphics, textures, images, models, sounds and screenshots.
- Community creations must not imply official approval/association.
- A prominent unofficial-project disclaimer is required for public pages using Minecraft names/brand/assets.
- Websites related to Minecraft are allowed subject to the guidelines.

## F. Xbox — Minecraft Dungeons product page
https://www.xbox.com/games/minecraft-dungeons

Status: **official Microsoft/Xbox product page**.

Use: official gameplay imagery and franchise context only. Do not copy marketing art into Pixel without separate permission.

## Sources intentionally excluded from authority
- Asset-extraction repositories.
- Minecraft wikis and fandom sites.
- Fan-made fonts, icon packs or CSS themes.
- Pinterest/Reddit/YouTube recreations.

They can help locate a source, but they cannot define Pixel’s production design language.
