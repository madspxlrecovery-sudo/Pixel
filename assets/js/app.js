const cards = [...document.querySelectorAll('.banner-card:not(:disabled)')];
const openButton = document.getElementById('openBanner');
const status = document.getElementById('actionStatus');

let selectedIndex = Math.max(0, cards.findIndex((card) => card.classList.contains('is-selected')));

function selectCard(index, { focus = false } = {}) {
  if (!cards.length) return;

  selectedIndex = (index + cards.length) % cards.length;

  cards.forEach((card, cardIndex) => {
    const selected = cardIndex === selectedIndex;
    card.classList.toggle('is-selected', selected);
    card.setAttribute('aria-selected', String(selected));

    if (selected && focus) card.focus();
  });

  if (status) status.textContent = 'Ready';
}

cards.forEach((card, index) => {
  card.addEventListener('click', () => selectCard(index));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      selectCard(index + 1, { focus: true });
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      selectCard(index - 1, { focus: true });
    }
  });
});

function openSelectedBanner() {
  if (!status || !openButton) return;

  status.textContent = 'Banner screen is intentionally not connected yet';
  openButton.disabled = true;

  window.setTimeout(() => {
    status.textContent = 'Ready';
    openButton.disabled = false;
  }, 1100);
}

if (openButton) {
  openButton.addEventListener('click', openSelectedBanner);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && document.activeElement !== openButton) {
    openSelectedBanner();
  }

  if (event.key === 'Escape') {
    if (status) status.textContent = 'Back action is not connected yet';
  }
});
