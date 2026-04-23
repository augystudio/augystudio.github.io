document.addEventListener('DOMContentLoaded', () => {
  const videoRow = document.querySelector('.video-row');
  const scrollLeftBtn = document.querySelector('.scroll-arrow.left');
  const scrollRightBtn = document.querySelector('.scroll-arrow.right');

  if (!videoRow || !scrollLeftBtn || !scrollRightBtn) return;

  const scrollAmount = 320;

  scrollLeftBtn.addEventListener('click', () => {
    videoRow.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  scrollRightBtn.addEventListener('click', () => {
    videoRow.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });
});