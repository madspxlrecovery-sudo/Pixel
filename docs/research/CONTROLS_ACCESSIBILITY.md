# Controls & Accessibility

Official reference: https://www.minecraft.net/en-us/accessibility/dungeons

## Confirmed Dungeons behavior
- Menus can be navigated with keyboard or controller.
- Escape is a shortcut to return/close on PC.
- Menu UI narration is supported.
- Icon-based communication is part of the game’s interaction language.

## Pixel requirements
Every menu component should support:
- keyboard focus
- visible focus state
- Enter/Space activation
- Escape/back behavior where appropriate
- semantic button/heading markup
- readable labels in addition to iconography
- `aria-disabled` / native disabled states
- logical focus order

## Controller-like prompts
Prompts such as `A SELECT`, `B BACK`, `LB/RB`, or keyboard equivalents can be part of the visual language, but must reflect real interactions. Never display a control hint that does nothing.

## Responsive behavior
When collapsing to mobile:
- preserve title hierarchy
- keep selection state obvious
- move prompts rather than delete all navigation context
- never shrink body text below practical readability just to preserve desktop composition
