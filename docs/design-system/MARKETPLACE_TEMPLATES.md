# Marketplace Information Architecture and Templates

Last design pass: 2026-09-13.

## Objective

Create a marketplace that helps players discover, understand and purchase fundamentally different product types without placing every offer in one undifferentiated grid.

This document defines structure and neutral template geometry only. It does not approve or invent Minecraft / Minecraft Dungeons artwork, frames, icons, currency symbols or product assets.

No interface can guarantee sales. This architecture is intended to improve product discovery, decision clarity, trust and measurable conversion. Commercial performance must be validated with analytics and controlled experiments after real catalog data exists.

## Research basis

- [Baymard Product Lists & Filtering UX](https://baymard.com/research/ecommerce-product-lists) reports that product lists, filtering and sorting must work together, and warns against one-size-fits-all catalogs. Pixel therefore uses different filters and card priorities for consumables, cosmetics, pets and bundles.
- [Baymard Product Page UX](https://baymard.com/research/product-page) identifies the product page as the place where most users make the purchase decision. Pixel therefore includes a shared detail template with gallery, contents, compatibility, delivery and purchase information.
- The [Fortnite Item Shop](https://www.fortnite.com/item-shop) uses section navigation, featured groups, best-seller discovery, bundles and a separate currency-purchase route. Pixel adopts those structural ideas without copying Fortnite visuals or assets.
- Apple's [App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/) require paid randomized virtual-item mechanisms to disclose the odds of each item type before purchase. Pixel permanently reserves visible space for odds, total cost, guarantee/pity, duplicates and availability conditions.

## Category architecture

1. `Inicio`
   - featured campaign;
   - category gateway;
   - best sellers;
   - later: personalized and recently viewed shelves.
2. `Gachas`
   - active banners;
   - roulette/reveal animation stage;
   - single and multi-pull purchase;
   - odds, duplicate and pity/guarantee rules.
3. `Consumibles`
   - packs compared by use, quantity and duration.
4. `Cosméticos`
   - sets compared by slot, collection and compatibility.
5. `Pets`
   - packs compared by type, variant and pack composition.
6. `Moneda premium`
   - separate quantity/bonus matrix;
   - current balance and real-money price;
   - no mixing with ordinary product cards.
7. `Bundles y ofertas`
   - cross-category packs;
   - visible contents and only verifiable savings;
   - no false scarcity or unsupported discount claims.

`Novedades` and `Más vendidos` are merchandising shelves, not permanent categories. This keeps navigation stable while campaigns change.

## Template contracts

### Marketplace home

Order:

1. template-state notice;
2. one featured commercial story with price and two actions;
3. six category gateway cards;
4. best-seller shelf;
5. later: new, recommended and recently viewed shelves.

The home page sells the next click. It must not expose the entire catalog at once.

### Standard catalog

Used by Consumables, Cosmetics, Pets and Bundles.

Required regions:

- category title and value proposition;
- category-scoped search;
- filters specific to the product type;
- sorting and visible result count;
- product grid;
- product-detail dialog/page.

Card priority: approved media slot, product type, name, differentiating value, price/currency, and a full-card link to details.

### Gacha

Required regions:

- selected banner and rotation information;
- large animation stage;
- preview strip of possible outcomes;
- single-pull and multi-pull actions with total cost;
- visible pity/guarantee progress;
- probability table before confirmation;
- duplicate conversion/rule;
- available-banner selector;
- reduced-motion behavior before production.

The animation may create anticipation but must not obscure price, odds or the actual result.

### Premium currency

Required regions:

- current balance;
- four or fewer comparable packs at once;
- base amount and bonus displayed separately;
- real-money price and local currency;
- one recommended pack only when the value claim is mathematically true;
- payment provider, receipt, support and delivery information.

### Product detail

Shared by deterministic product packs: gallery/preview, exact contents, compatibility, delivery behavior, price and primary add-to-cart action. Related items and owned-state information can be added after real catalog data exists.

## Conversion principles

- Keep one primary action per decision region.
- Show price and received value together.
- Use category-specific comparison attributes.
- Make the whole product card open the detail view.
- Keep best sellers and featured offers explainable; never fabricate popularity.
- Label discounts only when a comparison price exists.
- Never use fake countdowns, false stock, hidden odds or preselected paid extras.
- Preserve the unofficial-project disclaimer and purchase support path.

## Measurement plan

Production should record:

- category click-through rate;
- category-to-product-detail rate;
- product-detail-to-cart rate;
- cart-to-purchase conversion;
- revenue per marketplace visitor;
- repeat purchase rate by category;
- search-with-no-results rate;
- filter use and filter abandonment;
- gacha odds-view rate before purchase;
- refunds/support contacts by product type.

Only real measurement can determine which layout sells better. Future changes should test one hypothesis at a time.

## Exact-resource guardrail

All current `MEDIA`, `ICONO PENDIENTE` and similar blocks are neutral geometry. Replace them only after the exact intended resource is approved in `docs/research/OFFICIAL_ASSET_GATE.md`. Do not skin these templates with invented Minecraft/Dungeons frames, pictograms or generated imagery.
