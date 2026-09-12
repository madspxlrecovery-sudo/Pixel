# Official Bedrock Marketplace UI evidence

This file records the official Bedrock Store/Marketplace UI references used by Pixel.

## Source repository
- Mojang: `https://github.com/Mojang/bedrock-samples`

## Store shell
`resource_pack/ui/csb_screen.json`
- Uses `common_store.store_top_bar` as the header.
- Uses a full-screen layout.
- Defines `csb_background` as the white texture tinted with `$csb_panel_background`.
- Uses `textures/ui/csbBannerBackground` as a tiled gradient/banner texture.
- Uses `textures/ui/csb_particles` as an overlay texture.

## Exact Marketplace/CSB color
`resource_pack/ui/_global_variables.json`
- `$csb_panel_background`: `[0.14, 0.14, 0.13]` (approximately `#242421`).
- `$csb_secondary_panel_background`: `[1, 0.85, 0.33]` (approximately `#FFD954`).

## Offer cards
`resource_pack/ui/store_item_list_screen.json`
- Store grid items default to 25% width.
- Standard card control size is `100%-2px` by `56.25%x + 34px`.
- Key art fills nearly the entire image area.
- Offers that do not meet requirements can be displayed grayscale.

## Navigation
`resource_pack/ui/marketplace_sdl/sdl_content_navigation.json`
- Marketplace content navigation is vertical where navigation is required.
- Uses `textures/ui/screen_background` with alpha around `0.8` for navigation surfaces.
- Navigation rows use thin dividers and compact text/icon structure.

## Official textures referenced remotely for prototype
- `https://raw.githubusercontent.com/Mojang/bedrock-samples/main/resource_pack/textures/ui/csbBannerBackground.png`
- `https://raw.githubusercontent.com/Mojang/bedrock-samples/main/resource_pack/textures/ui/csb_particles.png`
- `https://raw.githubusercontent.com/Mojang/bedrock-samples/main/resource_pack/textures/ui/screen_background.png`

These files are not copied into Pixel. The prototype references the official Mojang-hosted repository directly.

## Official Minecraft Dungeons art used remotely for prototype
- Minecraft Dungeons logo: `https://www.minecraft.net/content/dam/minecraftnet/games/dungeons/logos/Dungeons-PMP_Hero-Logo_ParallaxB_432x98.png`
- Cloudy Climb key art: `https://www.minecraft.net/content/dam/minecraftnet/games/dungeons/key-art/MinecraftDungeons_S1AdventurePass_1280x768.jpg`
- Luminous Night key art: `https://www.minecraft.net/content/dam/minecraftnet/games/dungeons/key-art/MinecraftDungeons_S2AdventurePass_1280x768.jpg`
- Fauna Faire key art: `https://www.minecraft.net/content/dam/minecraftnet/games/dungeons/key-art/MinecraftDungeons_S3AdventurePass_1280x768.jpg`
- Ultimate DLC Bundle box art: `https://www.minecraft.net/content/dam/minecraftnet/games/dungeons/logos/dungeons-pmp-dlcbundle-boxart-500x500.jpg`
- Minecoin icon: `https://www.minecraft.net/content/dam/minecraftnet/franchise/component-library/icons/minecoin.svg`

These are official-source remote references for the visual prototype. They are not vendored into the repository. Final public-production usage must continue to follow `ASSET_POLICY.md` and the current Minecraft Usage Guidelines.
