# Foundation CSS status

This folder contains both approved foundations and legacy experimental primitives.

## Approved foundations
### `typography.css`
Source-backed font declarations for Minecraft Ten / Seven families documented in the research layer.

### `tokens.css`
Contains exact Mojang-published values under `--mc-*` plus clearly separated Pixel mappings under `--px-*`.

## Experimental / not visually approved
### `dungeons-core.css`
The interaction/accessibility ideas may be reusable, but several visual primitives were created before the official-asset-only rule was adopted.

Do **not** assume these are final Dungeons visuals:
- `.du-frame`
- `.du-title-plaque` shape
- `.du-action` skin
- any custom stepped-border treatment

Before reusing a branded visual primitive, check:
1. `../../../docs/research/OFFICIAL_ASSET_GATE.md`
2. `../../../docs/research/KNOWN_INVALID_IMPLEMENTATIONS.md`
3. `../../../docs/design-system/COMPONENTS.md`

If the official resource is not `APPROVED`, keep the visual neutral. Do not improve the imitation.
