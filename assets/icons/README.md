# Icons

Pixel does not vendor Mojang’s official icon files here.

Official research inventory exists in `Mojang/web-theme-bootstrap/assets/svg/icons` and includes pixel arrows, check, close, chest, Dungeons launcher and other Minecraft web icons. The root Mojang repository license restricts reuse of its image assets outside that project, so these are **reference-only** for Pixel.

Production icons belong in a future `assets/icons/pixel/` directory and must be original Pixel artwork that follows the same low-resolution, high-contrast grammar.

Rules:
- no Font Awesome
- no emoji-as-interface
- no generic Material icons when a Dungeons-style pictogram is appropriate
- every icon must work at small size and in monochrome
- important icon-only controls require accessible text/aria labels
