# Marketplace Information Architecture and Templates

Last design pass: 2026-09-13.

## Objective

Create a marketplace that helps players discover, understand, compare and purchase fundamentally different Pixel product types without placing every offer in one undifferentiated grid.

This document defines structure and neutral template geometry only. It does not approve or invent Minecraft / Minecraft Dungeons artwork, frames, icons, currency symbols or product assets.

No interface can guarantee sales. This architecture is intended to improve discovery, decision clarity, trust and measurable conversion. Commercial performance must be validated with analytics and controlled experiments after real catalog data exists.

## Research basis

- [Baymard Product Lists & Filtering UX](https://baymard.com/research/ecommerce-product-lists) reports that product lists, filtering and sorting must work together, and warns against one-size-fits-all catalogs. Pixel therefore uses product-specific filters and card priorities.
- [Baymard Product Page UX](https://baymard.com/research/product-page) identifies the product page as the place where most users make the purchase decision. Pixel therefore includes a shared detail template with exact contents, compatibility, delivery and purchase information.
- The [Fortnite Item Shop](https://www.fortnite.com/item-shop) uses section navigation, featured groups, bundles and a separate currency-purchase route. Pixel adopts structural ideas without copying Fortnite visuals or assets.
- Apple's [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) require paid randomized virtual-item mechanisms to disclose the odds of each item type before purchase. Pixel permanently reserves visible space for odds, total cost, guarantees, duplicates and availability conditions.
- The [UK Gambling Commission](https://www.gamblingcommission.gov.uk/news/article/loot-boxes-within-video-games) distinguishes items confined to a game from systems where prizes can be cashed out or traded for money or money's worth. The current Pixel templates assume no cash-out, real-money redemption or external prize marketplace. Any change to that assumption requires a separate legal and product architecture review before implementation.

## Category architecture

1. `Inicio`: featured story, category gateway and merchandising shelves.
2. `Ruletas`: web-native paid rounds with visible pool, entry, odds, result and immutable history.
3. `Gachas`: rotating banners, single/multi-pull actions and pity/guarantee progress.
4. `Crates`: keys purchased on the web; one key opens one compatible crate in-game; crate sets rotate.
5. `Battlepass`: season duration, free/premium tracks, levels and rewards.
6. `Consumibles`: packs compared by use, quantity and duration.
7. `Cosméticos`: sets compared by slot, collection and compatibility; complete set or individual pieces.
8. `Pets`: sets/packs compared by type and variant; complete set or individual pieces where offered.
9. `Talismanes`: sets compared by type, effect and compatibility; complete set or individual talismans.
10. `Moneda premium`: quantity/bonus matrix separated from the ordinary catalog.
11. `Pixel+`: monthly subscription with gifts, server content, billing cadence and cancellation terms.
12. `Bundles y ofertas`: cross-category combinations with verifiable savings only.

`Novedades` and `Más vendidos` are merchandising shelves, not permanent categories. This keeps navigation stable while campaigns change.

## Randomized-product boundaries

The three randomized experiences are not interchangeable:

| Product | Where the action occurs | What the player buys | Essential information |
| --- | --- | --- | --- |
| Ruleta | Website | Entry to one web round | Cost, complete pool, odds, limits, result and history |
| Gacha | Website/account flow | One or multiple pulls from a banner | Banner rotation, cost, odds, pity/guarantee and duplicate rule |
| Crate | In-game | A key compatible with one rotating crate set | `1 key = 1 opening`, compatible set, rotation dates, contents and odds |

All three assume virtual results remain in the Pixel ecosystem. The UI must never suggest cash withdrawal, monetary value or guaranteed profit.

## Template contracts

### Marketplace home

Order: template-state notice, one featured commercial story, category gateway, best-seller shelf, and later personalized/recently viewed shelves. Home sells the next relevant click; it does not expose the entire catalog at once.

### Standard catalog and set detail

Used by Consumables, Cosmetics, Pets, Talismans and Bundles. Required regions: category proposition, scoped search, product-specific filters, sorting, result count, product grid and detail.

For a set that supports individual sale, the detail must show:

- one primary action for the complete set;
- each included piece with its individual price and action;
- owned/unavailable state when real account data exists;
- a savings claim only when the sum of current individual prices proves it.

### Ruletas

Required regions: selected roulette, prize track, entry tiers, complete pool and odds before confirmation, result delivery state, recent history, spending/session limits and failure/refund handling. Visual anticipation may not hide cost, probability or outcome.

### Gachas

Required regions: banner and rotation, animation stage, possible outcomes, single/multi-pull prices, pity/guarantee progress, odds, duplicate rule and reduced-motion behavior.

### Crates

Required regions: current rotating sets, compatibility of each key, quantity selector, `1 key = 1 opening`, contents and odds, rotation dates, in-game delivery instructions and any expiry. A web key purchase must not look like a web roulette spin.

### Battlepass

Required regions: season duration, price, number of levels, free/premium comparison, reward-track preview, retroactive unlock behavior and what happens when the season ends.

### Pixel+

Required regions: monthly price, billing cadence, auto-renewal, next billing date, cancellation path, current monthly drop, recurring benefits and what happens to granted/ongoing benefits after cancellation. No preselected add-ons or cancellation friction.

### Premium currency

Required regions: current balance, four or fewer comparable packs, base and bonus amounts separated, real-money price/local currency, mathematically valid recommendation, payment provider, receipt, support and delivery.

## Conversion principles

- Keep one primary action per decision region.
- Show price and received value together.
- Use category-specific comparison attributes.
- Make the whole product card open details.
- Never fabricate popularity, scarcity, discounts or countdowns.
- Never hide odds or preselect paid extras.
- Preserve the unofficial-project disclaimer and purchase support path.

## Measurement plan

Production should record category click-through, detail-to-cart, cart-to-purchase, revenue per visitor, search failures, filter abandonment and support/refunds by product type. Specialized signals include roulette started/completed/failed/refunded, odds views before randomized purchase, crate key purchase/in-game redemption, Battlepass unlock/progression and Pixel+ activation/renewal/cancellation.

Only real measurement can determine which layout sells better. Future changes should test one hypothesis at a time.

## Exact-resource guardrail

All current `MEDIA`, `ICONO PENDIENTE` and similar blocks are neutral geometry. Replace them only after the exact intended resource is approved in `docs/research/OFFICIAL_ASSET_GATE.md`. Do not skin these templates with invented Minecraft/Dungeons frames, pictograms or generated imagery.
