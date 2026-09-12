# Typography System

## Official families available from Mojang
The public Mojang theme registers:
- `MinecraftTen`
- `MinecraftTenV2`
- `MinecraftSeven`
- `MinecraftSevenV2`
- `MinecraftFive`
- Noto Sans fallbacks

The official SCSS uses `text-transform: uppercase` and `letter-spacing: 1px` for headings.

## Pixel mapping
### Minecraft Ten V2
Use for:
- screen titles
- banner titles
- major status labels
- primary actions
- short, high-impact navigation labels

Behavior:
- uppercase by default
- compact line-height
- avoid excessive letter spacing; the font already carries strong geometry

### Minecraft Seven V2
Use for:
- descriptions
- instructions
- bullet lists
- secondary labels
- prices/stat explanations
- accessibility copy

### Minecraft Five
Reserve for experiments/components that match an actual Minecraft web/game reference. Do not mix all three fonts on one screen without a source-driven reason.

## Scale rule derived from Dungeons menu screenshots
Dungeons uses strong hierarchy rather than small incremental steps. Pixel should favor approximately:
- Hero/menu title: 44–64px desktop
- Section title: 26–38px
- Action label: 18–26px
- Body: 14–18px
- Micro/help: 11–14px

These sizes are Pixel implementation targets, not claimed Mojang tokens.

## Implementation
Use `assets/css/foundation/typography.css`. It references Mojang-hosted font files and falls back to system fonts if unavailable.
