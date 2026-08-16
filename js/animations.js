/**
 * RAAHIYOO — 3D Motion & Card Physics Controller
 * Real 3D Card Tilt on mouse hover, 3D Hero Mountain Parallax, and 60fps Scroll Reveals
 */

document.addEventListener('DOMContentLoaded', () => {
  init3DCardTilt();
  init3DHeroParallax();
  initScrollReveals();
});

/**
 * 1. 3D Card Tilt Engine
 * Computes real 3D perspective rotation on cursor movement with smooth spring damping
 */
function init3DCardTilt() {
  // Disable on devices preferring reduced motion or mobile touch to preserve performance
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.innerWidth < 768) return;

  const cards = document.querySelectorAll('.destination-card, .collection-card, .philosophy-card');

  cards.forEach(card => {
    let bounds;

    function onMouseEnter(e) {
      bounds = card.getBoundingClientRect();
      card.style.transition = 'transform 0.1s ease-out, box-shadow 0.2s ease-out';
    }

    function onMouseMove(e) {
      if (!bounds) bounds = card.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2
      };

      const maxTilt = 10; // degrees
      const rotX = -(center.y / (bounds.height / 2)) * maxTilt;
      const rotY = (center.x / (bounds.width / 2)) * maxTilt;

      card.style.transform = `perspective(1000px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateZ(8px)`;
    }

    function onMouseLeave() {
      card.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease-out';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    }

    card.addEventListener('mouseenter', onMouseEnter);
    card.addEventListener('mousemove', onMouseMove);
    card.addEventListener('mouseleave', onMouseLeave);
  });
}

/**
 * 2. 3D Hero Mountain Parallax Engine
 * Moves distant peaks and mid ridges based on mouse cursor and scroll
 */
function init3DHeroParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const hero = document.querySelector('.hero-section');
  const distantPeaks = document.querySelector('.scene-distant-peaks');
  const midRidge = document.querySelector('.scene-mid-ridge');

  if (!hero || !distantPeaks) return;

  // Mouse Move Parallax in 3D
  hero.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const deltaX = (clientX - centerX) / centerX;
    const deltaY = (clientY - centerY) / centerY;

    if (distantPeaks) {
      distantPeaks.style.transform = `translate3d(${deltaX * 12}px, ${deltaY * 6}px, 0)`;
    }
    if (midRidge) {
      midRidge.style.transform = `translate3d(${deltaX * -18}px, ${deltaY * -10}px, 0)`;
    }
  });

  // Scroll Parallax
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        if (scrolled < window.innerHeight) {
          if (distantPeaks) distantPeaks.style.transform = `translate3d(0, ${scrolled * 0.18}px, 0)`;
          if (midRidge) midRidge.style.transform = `translate3d(0, ${scrolled * 0.3}px, 0)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/**
 * 3. 60fps Hardware-Accelerated Scroll Reveals
 */
function initScrollReveals() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const targets = document.querySelectorAll('.philosophy-card, .attraction-card, .fact-card, .why-matters-box, .vibe-finder-box');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translate3d(0, 0, 0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  targets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translate3d(0, 20px, 0)';
    el.style.transition = 'opacity 0.5s ease-out, transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
    observer.observe(el);
  });
}
