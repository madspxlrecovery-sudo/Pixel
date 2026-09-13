const categoryConfig = {
  inicio: {
    label: 'INICIO',
    view: 'inicio',
  },
  ruletas: {
    label: 'RULETAS',
    view: 'ruletas',
  },
  gachas: {
    label: 'GACHAS',
    view: 'gachas',
  },
  crates: {
    label: 'CRATES',
    view: 'crates',
  },
  battlepass: {
    label: 'BATTLEPASS',
    view: 'battlepass',
  },
  consumibles: {
    label: 'CONSUMIBLES',
    view: 'catalogo',
    title: 'Packs de consumibles',
    description: 'Productos comparables por función, cantidad y duración. La tarjeta prioriza qué hace el pack y cuánto contiene.',
    filters: ['USO', 'CANTIDAD', 'DURACIÓN'],
    productType: 'CONSUMIBLE',
    products: [
      ['Pack de consumibles 01', 'Cantidad, duración y uso principal.'],
      ['Pack de consumibles 02', 'Comparación rápida contra el pack anterior.'],
      ['Pack de consumibles 03', 'Beneficio principal expresado sin ambigüedad.'],
      ['Pack de consumibles 04', 'Contenido y condiciones de uso visibles.'],
      ['Pack de consumibles 05', 'Variante para otro perfil de comprador.'],
      ['Pack de consumibles 06', 'Cantidad total y valor por unidad.'],
      ['Pack de consumibles 07', 'Disponibilidad y límites de compra.'],
      ['Pack de consumibles 08', 'Resumen corto para decisión rápida.'],
    ],
  },
  cosmeticos: {
    label: 'COSMÉTICOS',
    view: 'catalogo',
    title: 'Sets de cosméticos',
    description: 'La ficha muestra el conjunto completo, las piezas incluidas, la compatibilidad y una galería antes de comprar.',
    filters: ['SLOT', 'COLECCIÓN', 'COMPATIBILIDAD'],
    productType: 'COSMÉTICO',
    supportsIndividual: true,
    products: [
      ['Set cosmético 01', 'Cantidad de piezas y slots incluidos.'],
      ['Set cosmético 02', 'Vista del conjunto y sus variantes.'],
      ['Set cosmético 03', 'Compatibilidad y condiciones visibles.'],
      ['Set cosmético 04', 'Piezas incluidas y ahorro del set.'],
      ['Set cosmético 05', 'Galería de estados y combinaciones.'],
      ['Set cosmético 06', 'Resumen visual para comparar colecciones.'],
      ['Set cosmético 07', 'Disponibilidad y pertenencia a colección.'],
      ['Set cosmético 08', 'Contenido exacto antes de agregar al carrito.'],
    ],
  },
  pets: {
    label: 'PETS',
    view: 'catalogo',
    title: 'Packs de pets',
    description: 'Compañeros agrupados por pack, variante y comportamiento. El preview debe explicar qué cambia y qué permanece igual.',
    filters: ['TIPO', 'VARIANTE', 'PACK'],
    productType: 'PET',
    supportsIndividual: true,
    products: [
      ['Pack de pets 01', 'Compañeros incluidos y variantes.'],
      ['Pack de pets 02', 'Preview, comportamiento y compatibilidad.'],
      ['Pack de pets 03', 'Cantidad de pets dentro del pack.'],
      ['Pack de pets 04', 'Diferencias frente a otras variantes.'],
      ['Pack de pets 05', 'Set temático y contenido exacto.'],
      ['Pack de pets 06', 'Beneficio del pack frente a piezas sueltas.'],
      ['Pack de pets 07', 'Disponibilidad y limitaciones visibles.'],
      ['Pack de pets 08', 'Resumen para comparar en la grilla.'],
    ],
  },
  talismanes: {
    label: 'TALISMANES',
    view: 'catalogo',
    title: 'Sets de talismanes',
    description: 'Colecciones comparables por tipo, efecto y compatibilidad. Cada set también permite abrir el detalle de sus talismanes individuales.',
    filters: ['TIPO', 'EFECTO', 'COMPATIBILIDAD'],
    productType: 'TALISMÁN',
    supportsIndividual: true,
    products: [
      ['Set de talismanes 01', 'Efectos, piezas y compatibilidad visibles.'],
      ['Set de talismanes 02', 'Comparación entre conjunto y piezas individuales.'],
      ['Set de talismanes 03', 'Alcance exacto de cada beneficio.'],
      ['Set de talismanes 04', 'Contenido completo y valor por pieza.'],
      ['Set de talismanes 05', 'Colección, variantes y condiciones de uso.'],
      ['Set de talismanes 06', 'Compatibilidad y límites claramente indicados.'],
      ['Set de talismanes 07', 'Disponibilidad sin escasez artificial.'],
      ['Set de talismanes 08', 'Resumen para comparar antes de comprar.'],
    ],
  },
  moneda: {
    label: 'MONEDA PREMIUM',
    view: 'moneda',
  },
  pixelplus: {
    label: 'PIXEL+',
    view: 'pixelplus',
  },
  bundles: {
    label: 'BUNDLES Y OFERTAS',
    view: 'catalogo',
    title: 'Bundles y ofertas',
    description: 'Combinaciones de varias categorías. El ahorro solo se destaca cuando puede demostrarse contra los precios individuales.',
    filters: ['CONTENIDO', 'AHORRO', 'DISPONIBILIDAD'],
    productType: 'BUNDLE',
    products: [
      ['Bundle 01', 'Contenido mixto y valor combinado.'],
      ['Bundle 02', 'Ahorro verificable frente a piezas sueltas.'],
      ['Bundle 03', 'Set cosmético más consumibles.'],
      ['Bundle 04', 'Pet, cosméticos y contenido adicional.'],
      ['Bundle 05', 'Oferta de entrada para nuevos compradores.'],
      ['Bundle 06', 'Pack recurrente con condiciones claras.'],
      ['Bundle 07', 'Disponibilidad temporal sin urgencia falsa.'],
      ['Bundle 08', 'Resumen completo de todo lo incluido.'],
    ],
  },
};

const marketplaceMenu = document.getElementById('marketplaceMenu');
const menuToggle = document.getElementById('marketplaceMenuToggle');
const mobileMenuToggle = document.getElementById('marketplaceMenuMobileToggle');
const menuItems = [...document.querySelectorAll('[data-category]')];
const categoryLinks = [...document.querySelectorAll('[data-category-link]')];
const views = [...document.querySelectorAll('[data-view]')];
const currentCategoryLabel = document.getElementById('currentCategoryLabel');
const main = document.getElementById('main');
const status = document.getElementById('marketplaceStatus');

const catalogTitle = document.getElementById('catalogTitle');
const catalogDescription = document.getElementById('catalogDescription');
const catalogFilters = document.getElementById('catalogFilters');
const catalogGrid = document.getElementById('catalogGrid');
const catalogCount = document.getElementById('catalogCount');
const catalogSearch = document.getElementById('catalogSearch');
const catalogSort = document.getElementById('catalogSort');
const clearFilters = document.getElementById('clearFilters');
const catalogCardTemplate = document.getElementById('catalogCardTemplate');

const productDialog = document.getElementById('productDialog');
const productDialogTitle = document.getElementById('productDialogTitle');
const productDialogClose = document.getElementById('productDialogClose');
const addToCartButton = document.getElementById('addToCartButton');
const setBreakdown = document.getElementById('setBreakdown');
const cartButton = document.getElementById('cartButton');
const cartCount = document.getElementById('cartCount');
const crateQuantity = document.getElementById('crateQuantity');
const crateQuantitySummary = document.getElementById('crateQuantitySummary');
const crateOpeningsSummary = document.getElementById('crateOpeningsSummary');
const selectedCrateName = document.getElementById('selectedCrateName');

let activeCategory = 'inicio';
let activeCatalog = null;
let selectedProduct = 'Producto';
let selectedProductSupportsIndividual = false;
let cartItems = 0;
let activeFilters = new Set();

function setMenuOpen(open, { focusFirst = false } = {}) {
  if (!marketplaceMenu) return;

  marketplaceMenu.hidden = !open;
  menuToggle?.setAttribute('aria-expanded', String(open));
  mobileMenuToggle?.setAttribute('aria-expanded', String(open));

  if (open && focusFirst) menuItems[0]?.focus();
}

function renderCatalog() {
  if (!activeCatalog || !catalogGrid || !catalogCardTemplate) return;

  const query = catalogSearch?.value.trim().toLocaleLowerCase('es') ?? '';
  let products = activeCatalog.products.map(([title, description], index) => ({
    title,
    description,
    index,
    popularity: activeCatalog.products.length - index,
    freshness: (index * 3) % activeCatalog.products.length,
    priceOrder: (index * 5) % activeCatalog.products.length,
  }));

  if (query) {
    products = products.filter((product) => `${product.title} ${product.description}`.toLocaleLowerCase('es').includes(query));
  }

  if (activeFilters.size) {
    products = products.filter((_, index) => index % (activeFilters.size + 1) !== activeFilters.size);
  }

  const sort = catalogSort?.value;
  if (sort === 'popular') products.sort((a, b) => b.popularity - a.popularity);
  if (sort === 'new') products.sort((a, b) => b.freshness - a.freshness);
  if (sort === 'price-low') products.sort((a, b) => a.priceOrder - b.priceOrder);
  if (sort === 'price-high') products.sort((a, b) => b.priceOrder - a.priceOrder);

  catalogGrid.replaceChildren();

  products.forEach((product) => {
    const fragment = catalogCardTemplate.content.cloneNode(true);
    const openButton = fragment.querySelector('[data-product-template]');
    const eyebrow = fragment.querySelector('.product-card__eyebrow');
    const title = fragment.querySelector('.product-card__title');
    const description = fragment.querySelector('.product-card__description');

    openButton.dataset.productName = product.title;
    openButton.dataset.supportsIndividual = String(Boolean(activeCatalog.supportsIndividual));
    eyebrow.textContent = `${activeCatalog.productType} · ${activeCatalog.supportsIndividual ? 'SET' : 'PACK'}`;
    title.textContent = product.title;
    description.textContent = product.description;
    catalogGrid.append(fragment);
  });

  if (!products.length) {
    const emptyState = document.createElement('p');
    emptyState.className = 'catalog-empty';
    emptyState.textContent = 'No hay productos de template que coincidan. Probá quitar filtros o cambiar la búsqueda.';
    catalogGrid.append(emptyState);
  }

  catalogCount.textContent = `${products.length} ${products.length === 1 ? 'PRODUCTO' : 'PRODUCTOS'}`;
}

function configureCatalog(config) {
  activeCatalog = config;
  activeFilters.clear();

  catalogTitle.textContent = config.title;
  catalogDescription.textContent = config.description;
  catalogSearch.value = '';
  catalogSort.value = 'featured';
  catalogFilters.replaceChildren();

  config.filters.forEach((filter) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = filter;
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => {
      const selected = button.getAttribute('aria-pressed') !== 'true';
      button.setAttribute('aria-pressed', String(selected));
      if (selected) activeFilters.add(filter);
      else activeFilters.delete(filter);
      renderCatalog();
    });
    catalogFilters.append(button);
  });

  renderCatalog();
}

function setCategory(category, { updateHistory = true, focusMain = true } = {}) {
  const config = categoryConfig[category] ?? categoryConfig.inicio;
  activeCategory = categoryConfig[category] ? category : 'inicio';

  if (config.view === 'catalogo') configureCatalog(config);

  views.forEach((view) => {
    const active = view.dataset.view === config.view;
    view.hidden = !active;
    view.classList.toggle('is-active', active);
  });

  currentCategoryLabel.textContent = config.label;
  menuItems.forEach((item) => {
    const active = item.dataset.category === activeCategory;
    item.classList.toggle('is-current', active);
    if (active) item.setAttribute('aria-current', 'page');
    else item.removeAttribute('aria-current');
  });

  setMenuOpen(false);
  status.textContent = '';
  document.title = `${config.label} — Pixel Marketplace`;

  if (updateHistory) history.pushState({ category: activeCategory }, '', `#marketplace/${activeCategory}`);
  if (focusMain) main?.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function categoryFromHash() {
  const match = window.location.hash.match(/^#marketplace\/([a-z-]+)/);
  return match?.[1] ?? 'inicio';
}

menuToggle?.addEventListener('click', () => setMenuOpen(marketplaceMenu.hidden));
mobileMenuToggle?.addEventListener('click', () => setMenuOpen(marketplaceMenu.hidden));

menuToggle?.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    setMenuOpen(true, { focusFirst: true });
  }
});

menuItems.forEach((item, index) => {
  item.addEventListener('click', () => setCategory(item.dataset.category));
  item.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      menuItems[(index + 1) % menuItems.length].focus();
    }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      menuItems[(index - 1 + menuItems.length) % menuItems.length].focus();
    }
    if (event.key === 'Home') {
      event.preventDefault();
      menuItems[0].focus();
    }
    if (event.key === 'End') {
      event.preventDefault();
      menuItems.at(-1).focus();
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      setMenuOpen(false);
      menuToggle?.focus();
    }
  });
});

categoryLinks.forEach((link) => link.addEventListener('click', () => setCategory(link.dataset.categoryLink)));

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  if (!marketplaceMenu?.hidden && !marketplaceMenu.contains(target) && !menuToggle?.contains(target) && !mobileMenuToggle?.contains(target)) {
    setMenuOpen(false);
  }

  const productButton = target.closest('[data-product-template]');
  if (productButton && productDialog) {
    selectedProduct = productButton.dataset.productName || 'Producto';
    selectedProductSupportsIndividual = productButton.dataset.supportsIndividual === 'true';
    productDialogTitle.textContent = selectedProduct;
    setBreakdown.hidden = !selectedProductSupportsIndividual;
    addToCartButton.textContent = selectedProductSupportsIndividual ? 'AGREGAR SET AL CARRITO' : 'AGREGAR AL CARRITO';
    productDialog.showModal();
  }

  const setPieceButton = target.closest('[data-set-piece]');
  if (setPieceButton && productDialog) {
    cartItems += 1;
    cartCount.textContent = String(cartItems);
    cartButton.setAttribute('aria-label', `Carrito, ${cartItems} ${cartItems === 1 ? 'producto' : 'productos'}`);
    productDialog.close();
    status.textContent = `${setPieceButton.dataset.setPiece} de ${selectedProduct} agregada al carrito de demostración.`;
  }

  const templateAction = target.closest('[data-template-action]');
  if (templateAction && status) {
    status.textContent = `Template: ${templateAction.dataset.templateAction}. La compra todavía no está conectada.`;
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !marketplaceMenu?.hidden) {
    setMenuOpen(false);
    menuToggle?.focus();
  }
});

catalogSearch?.addEventListener('input', renderCatalog);
catalogSort?.addEventListener('change', renderCatalog);

clearFilters?.addEventListener('click', () => {
  activeFilters.clear();
  catalogSearch.value = '';
  catalogSort.value = 'featured';
  catalogFilters.querySelectorAll('button').forEach((button) => button.setAttribute('aria-pressed', 'false'));
  renderCatalog();
});

document.getElementById('oddsJump')?.addEventListener('click', () => {
  document.getElementById('oddsPanel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.querySelectorAll('.roulette-tiers button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.roulette-tiers button').forEach((tier) => tier.setAttribute('aria-pressed', String(tier === button)));
    status.textContent = `Nivel de ruleta seleccionado: ${button.textContent}.`;
  });
});

document.querySelectorAll('[data-crate-name]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-crate-name]').forEach((card) => card.classList.toggle('is-selected', card === button));
    selectedCrateName.textContent = button.dataset.crateName;
  });
});

crateQuantity?.addEventListener('input', () => {
  const quantity = Math.min(100, Math.max(1, Number.parseInt(crateQuantity.value, 10) || 1));
  crateQuantity.value = String(quantity);
  crateQuantitySummary.textContent = String(quantity);
  crateOpeningsSummary.textContent = String(quantity);
});

productDialogClose?.addEventListener('click', () => productDialog.close());
productDialog?.addEventListener('click', (event) => {
  if (event.target === productDialog) productDialog.close();
});

addToCartButton?.addEventListener('click', () => {
  cartItems += 1;
  cartCount.textContent = String(cartItems);
  cartButton.setAttribute('aria-label', `Carrito, ${cartItems} ${cartItems === 1 ? 'producto' : 'productos'}`);
  productDialog.close();
  status.textContent = `${selectedProductSupportsIndividual ? `Set ${selectedProduct}` : selectedProduct} agregado al carrito de demostración.`;
});

cartButton?.addEventListener('click', () => {
  status.textContent = `Template de carrito: ${cartItems} ${cartItems === 1 ? 'producto' : 'productos'}. El checkout todavía no está conectado.`;
});

window.addEventListener('popstate', () => setCategory(categoryFromHash(), { updateHistory: false }));
window.addEventListener('hashchange', () => setCategory(categoryFromHash(), { updateHistory: false }));

setCategory(categoryFromHash(), { updateHistory: false, focusMain: false });
