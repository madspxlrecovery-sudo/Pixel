const activeChoice = document.querySelector('.banner-choice.is-active');
const openBanner = document.getElementById('openBanner');
const actionStatus = document.getElementById('actionStatus');

function pulseSelection() {
  if (!activeChoice) return;
  activeChoice.animate(
    [
      { filter: 'brightness(1)' },
      { filter: 'brightness(1.1)' },
      { filter: 'brightness(1)' }
    ],
    { duration: 190, easing: 'ease-out' }
  );
}

function openPrototypeBanner() {
  pulseSelection();
  if (!openBanner || !actionStatus) return;

  const label = openBanner.querySelector('span');
  if (!label) return;

  const previous = label.textContent;
  label.textContent = 'BANNER IN DEVELOPMENT';
  actionStatus.textContent = 'Menu test complete — gacha screen is not connected yet';
  openBanner.disabled = true;

  window.setTimeout(() => {
    label.textContent = previous;
    actionStatus.textContent = 'Rotation 01 selected';
    openBanner.disabled = false;
  }, 1100);
}

activeChoice?.addEventListener('click', pulseSelection);
openBanner?.addEventListener('click', openPrototypeBanner);

document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();

  if (event.key === 'Enter' || key === 'a') {
    event.preventDefault();
    openPrototypeBanner();
  }

  if (event.key === 'Escape' || key === 'b') {
    event.preventDefault();
    pulseSelection();
    if (actionStatus) actionStatus.textContent = 'Back is not connected in this prototype';
  }
});
