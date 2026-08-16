/**
 * RAAHIYOO — Interactive Lightbox & Gallery Controller
 * Keyboard navigation (arrows/esc), caption support, and modal handling
 */

document.addEventListener('DOMContentLoaded', () => {
  initGalleryLightbox();
});

function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (galleryItems.length === 0) return;

  // Create or retrieve Lightbox modal in DOM
  let lightbox = document.getElementById('raahiyooLightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'raahiyooLightbox';
    lightbox.className = 'lightbox-overlay';
    lightbox.innerHTML = `
      <div class="lightbox-dialog" role="dialog" aria-modal="true" aria-label="Image Preview">
        <button class="lightbox-close" aria-label="Close Lightbox">&times;</button>
        <button class="lightbox-nav lightbox-prev" aria-label="Previous Image">&larr;</button>
        <button class="lightbox-nav lightbox-next" aria-label="Next Image">&rarr;</button>
        <img class="lightbox-img" src="" alt="Enlarged gallery view" />
        <div class="lightbox-caption"></div>
      </div>
    `;
    document.body.appendChild(lightbox);
  }

  const imgEl = lightbox.querySelector('.lightbox-img');
  const captionEl = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');

  let currentIndex = 0;
  let activeItems = [];

  function updateActiveList() {
    activeItems = Array.from(document.querySelectorAll('.gallery-item'));
  }

  function showImage(index) {
    if (index < 0) index = activeItems.length - 1;
    if (index >= activeItems.length) index = 0;
    currentIndex = index;

    const item = activeItems[currentIndex];
    if (!item) return;

    const url = item.dataset.imgUrl || item.querySelector('img').src;
    const caption = item.dataset.imgCaption || item.querySelector('img').alt || '';

    imgEl.src = url;
    captionEl.textContent = caption;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Event Delegation for gallery item clicks
  document.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (item) {
      updateActiveList();
      const idx = activeItems.indexOf(item);
      if (idx !== -1) showImage(idx);
    }
  });

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', () => showImage(currentIndex - 1));
  nextBtn.addEventListener('click', () => showImage(currentIndex + 1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  });
}
