const reveal = document.getElementById('reveal');
const cardsStage = document.getElementById('cardsStage');
const particleField = document.getElementById('particleField');
const closeReveal = document.getElementById('closeReveal');
const pullButtons = document.querySelectorAll('[data-pull]');

const rarityPool = [
  { name: 'rare', weight: 70 },
  { name: 'epic', weight: 25 },
  { name: 'legendary', weight: 5 }
];

function pickRarity() {
  const roll = Math.random() * 100;
  let cursor = 0;

  for (const rarity of rarityPool) {
    cursor += rarity.weight;
    if (roll <= cursor) return rarity.name;
  }

  return 'rare';
}

function makeParticles(amount = 34) {
  particleField.innerHTML = '';

  for (let i = 0; i < amount; i += 1) {
    const particle = document.createElement('span');
    particle.className = 'particle';
    particle.style.left = `${45 + Math.random() * 10}%`;
    particle.style.top = `${45 + Math.random() * 10}%`;
    particle.style.setProperty('--x', `${(Math.random() - 0.5) * 900}px`);
    particle.style.setProperty('--y', `${(Math.random() - 0.5) * 620}px`);
    particle.style.animationDelay = `${Math.random() * 0.25}s`;
    particleField.appendChild(particle);
  }
}

function openReveal(count) {
  cardsStage.innerHTML = '';
  makeParticles(count === 10 ? 54 : 30);

  for (let i = 0; i < count; i += 1) {
    const card = document.createElement('article');
    card.className = `reward-card ${pickRarity()}`;
    card.setAttribute('aria-label', `Tarjeta de recompensa vacía ${i + 1}`);
    cardsStage.appendChild(card);

    window.setTimeout(() => {
      card.classList.add('show');
    }, 180 + (i * 95));
  }

  reveal.classList.add('active');
  reveal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function hideReveal() {
  reveal.classList.remove('active');
  reveal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

pullButtons.forEach((button) => {
  button.addEventListener('click', () => {
    openReveal(Number(button.dataset.pull));
  });
});

closeReveal.addEventListener('click', (event) => {
  event.stopPropagation();
  hideReveal();
});

reveal.addEventListener('click', (event) => {
  if (event.target.closest('.reward-card')) return;
  hideReveal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && reveal.classList.contains('active')) {
    hideReveal();
  }
});
