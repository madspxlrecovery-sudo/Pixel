# Minecraft Dungeons UI Grammar

## 1. Screen, not webpage
Treat every route as a game screen. Base composition:
1. world/scene layer
2. dim/contrast layer
3. UI panel/frame layer
4. title/state layer
5. contextual controls

Do not default to website header + sidebar + cards + footer.

## 2. Panels
- Large rectangular fields.
- Dark/translucent interior.
- Minimal ornament.
- Layered/overlapping panels are acceptable when supported by a Dungeons menu reference.
- Corners should be square or pixel-stepped, never casually rounded.

## 3. Frames
The official Mojang web theme includes a dedicated `.border-dungeons` pattern. Pixel must not copy the restricted border image, but should reproduce the grammar with CSS/SVG authored for Pixel:
- thin line
- corner steps/squares
- occasional line interruptions
- selected state can alter border emphasis

## 4. Title plaques
Dungeons commonly uses strong isolated title regions. Pixel can use white/high-contrast plaques when matching the referenced menu, especially selector screens.

## 5. Selection states
Required states:
- `selected`: full contrast + frame/accent
- `available`: full content, lower emphasis than selected
- `locked`: visible structure + lock/reason, subdued
- `disabled`: strongly reduced contrast, no hover promise
- `new`: small semantic marker, not a full redesign
- `completed`: icon/state change with readable text fallback

Opacity is a legitimate state tool but must not be the only accessibility signal.

## 6. Buttons
Official Mojang web theme buttons use block-like inset highlights/shadows with a 4px internal edge model. Dungeons-flavored buttons should feel pressed/extruded rather than glossy.

For Pixel’s in-game-like screens:
- primary action: large, flat, high-contrast
- white/light outline where a Dungeons screen supports it
- no pill buttons
- label in Ten
- button state must be visible without relying only on animation

## 7. Objects and rewards
Do not automatically put each reward in a card. Dungeons frequently lets items float directly within a larger panel. Use cards only where an actual Dungeons pattern supports them.

## 8. Spacing
Prefer fewer, larger groups with visible empty space. Dungeons is designed for readability from a distance, so hierarchy must be obvious at a glance.
