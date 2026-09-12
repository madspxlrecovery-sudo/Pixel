# In-game UI Patterns — Screenshot Analysis

Evidence tier: **B — actual Minecraft Dungeons UI screenshots supplied for comparison**.

These observations describe layout/behavior visible in the game. They are not claimed to be published Mojang design tokens.

## Pattern A — Select Difficulty
Observed structure:
- centered white title plaque overlaps the top of the selector
- three tall vertical columns
- each column behaves as a state container, not a web card
- selected/available/locked states are communicated through border, contrast, icon and copy
- large icon near the top, title below it, bullet list beneath
- locked states preserve the complete layout instead of disappearing
- lock/unlock condition sits low in the panel
- footer control strip is separated from the content area

Pixel application:
- best reference for **banner selector screens**
- banners can be presented as large vertical options with clear state instead of carousel cards
- title plaque should feel independent from the content panels

## Pattern B — Wandering Trader / merchant screen
Observed structure:
- gameplay world remains visible around and behind the interface
- two large dark translucent panels overlap / interlock
- left panel gives broad information and shows multiple items floating directly in the panel
- right panel acts as focused purchase/action space
- item art is not wrapped in individual web cards
- strong white headings, lighter descriptive text
- primary transaction action is a large green bar with currency integrated into it
- merchant identity uses a compact colored banner/tag at the top

Pixel application:
- best reference for **banner detail + possible rewards**
- rewards can float directly in a shared panel
- currency/action belongs close to the action, not in a detached ecommerce header

## Pattern C — Mission select / Creeper Woods
Observed structure:
- left information panel + right world/map area
- UI and world art overlap; characters can cross visual boundaries
- difficulty badge sits high and compact
- horizontal progression nodes use repeated icon geometry
- gear drops/rewards use compact slots at the bottom
- primary green action occupies most of the lower width of the info panel
- yellow/gold is used for current/important state
- map remains visually active instead of becoming a neutral backdrop

Pixel application:
- best reference for **banner overview + contextual world/background**
- banner menu does not need to occupy the entire viewport with dark rectangles; a visible world layer should remain meaningful

## Shared grammar across the three screens
- fullscreen game composition
- background world is never an afterthought
- large uppercase titles
- dark panels with high contrast
- no rounded card language
- thin/pixel-stepped borders
- semantic color
- disabled/locked options remain spatially present
- keyboard/controller prompt strip
- strong negative space
- large objects and characters are allowed to overlap UI regions

## Anti-patterns for Pixel
If a screen starts looking like any of these, stop and compare again:
- ecommerce product grid
- dashboard sidebar
- glassmorphism control center
- mobile-app cards
- generic fantasy RPG stone frame
- neon/cyber HUD
- Genshin-style visual language outside the later reward-reveal mechanic
