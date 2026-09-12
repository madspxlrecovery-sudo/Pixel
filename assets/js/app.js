const stage = document.querySelector('.banner-stage');
const arrows = document.querySelectorAll('[data-direction]');
const activeSlot = document.querySelector('.banner-slot.selected');
const enterBanner = document.getElementById('enterBanner');
const backButton = document.querySelector('.back-button');

function pulseSelection() {
  if (!stage) return;
  stage.animate(
    [
      { filter: 'brightness(1)', transform: 'scale(1)' },
      { filter: 'brightness(1.08)', transform: 'scale(.997)' },
      { filter: 'brightness(1)', transform: 'scale(1)' }
    ],
    { duration: 260, easing: 'ease-out' }
  );

  if (activeSlot) {
    activeSlot.animate(
      [
        { filter: 'brightness(1)' },
        { filter: 'brightness(1.16)' },
        { filter: 'brightness(1)' }
      ],
      { duration: 260, easing: 'ease-out' }
    );
  }
}

arrows.forEach((button) => {
  button.addEventListener('click', pulseSelection);
});

if (enterBanner) {
  enterBanner.addEventListener('click', () => {
    const label = enterBanner.querySelector('span');
    if (!label) return;

    const original = label.textContent;
    label.textContent = 'BANNER EN PREPARACIÓN';
    enterBanner.disabled = true;

    window.setTimeout(() => {
      label.textContent = original;
      enterBanner.disabled = false;
    }, 900);
  });
}

if (backButton) {
  backButton.addEventListener('click', pulseSelection);
}

document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  if (key === 'q' || key === 'e' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    pulseSelection();
  }
});
