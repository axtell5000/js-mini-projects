const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', () => {
  if (!modalOverlay.classList.contains('open-modal')) {
    modalOverlay.classList.toggle('open-modal');
  }
});

closeBtn.addEventListener('click', () => {
  if (modalOverlay.classList.contains('open-modal')) {
    modalOverlay.classList.remove('open-modal');
  }
})
