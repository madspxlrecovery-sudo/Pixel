# Official Asset Policy for Pixel

This document exists because “official source” does not automatically mean “free to redistribute”.

## Allowed foundation
### Font software
The official Mojang repository includes `assets/fonts/LICENSE_OFL.txt`, which applies SIL Open Font License 1.1 to the font software in that directory. Pixel may rely on those files under that license and must preserve the applicable license requirements if it ever vendors the font files.

Current policy: reference the official hosted fonts remotely; do not commit font binaries.

### Source code / SCSS concepts
The root repository license applies MIT terms to the software portion. Pixel may study and adapt implementation concepts while keeping attribution/notice requirements where applicable.

## Reference-only assets
The same Mojang repository explicitly states that its image assets are copyrighted by Mojang Studios and may not be used outside that project without permission.

Therefore Pixel must not directly copy into this repository:
- `border-dungeons-25.png`
- official Minecraft/Dungeons logos
- official icon SVG/PNG files
- marketing art/backgrounds
- game textures/models/sounds extracted from Minecraft Dungeons

Instead:
- record the source
- analyze proportions/color/behavior
- create an original Pixel implementation that follows the UI grammar

## Public-site disclaimer
Minecraft Usage Guidelines require public projects using Minecraft names/brand/assets to avoid implying official status and to include a prominent disclaimer similar to:

`NOT AN OFFICIAL MINECRAFT PRODUCT. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.`

This disclaimer must be integrated into the final public site before release.

## Review checklist for every new asset
- Is the source official?
- What license/usage terms apply?
- Are we copying a file, or learning from a pattern?
- Could the result be mistaken for an official Mojang page/product?
- Is Pixel’s own identity still dominant?
