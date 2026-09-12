const activePanel = document.querySelector('.banner-panel.selected');
const openBanner = document.getElementById('openBanner');
const actionStatus = document.getElementById('actionStatus');
const closeBox = document.querySelector('.close-box');

function pulseSelection() {
  if (!activePanel) return;

  activePanel.animate(
    [
      { filter: 'brightness(1)' },
      { filter: 'brightness(1.12)' },
      { filter: 'brightness(1)' }
    ],
    { duration: 220, easing: 'ease-out' }
  );
}

function previewBanner() {
  pulseSelection();

  if (!openBanner || !actionStatus) return;
  const label = openBanner.querySelector('span');
  if (!label) return;

  const original = label.textContent;
  label.textContent = 'BANNER IN DEVELOPMENT';
  actionStatus.textContent = 'The gacha screen will be connected after the menu is approved';
  openBanner.disabled = true;

  window.setTimeout(() => {
    label.textContent = original;
    actionStatus.textContent = 'Rotation 01 selected';
    openBanner.disabled = false;
  }, 1200);
}

if (activePanel) {
  activePanel.addEventListener('click', pulseSelection);
  activePanel.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      pulseSelection();
    }
  });
}

if (openBanner) {
  openBanner.addEventListener('click', previewBanner);
}

if (closeBox) {
  closeBox.addEventListener('click', () => {
    pulseSelection();
    if (actionStatus) actionStatus.textContent = 'Back action is not connected yet';
  });
}

document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();

  if (event.key === 'Enter' || key === 'a') {
    previewBanner();
  }

  if (event.key === 'Escape' || key === 'b') {
    pulseSelection();
    if (actionStatus) actionStatus.textContent = 'Back action is not connected yet';
  }
});
