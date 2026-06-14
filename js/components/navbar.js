export function initNavbar() {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-links');

  if (!nav) return;

  // Scroll effect
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        nav.classList.toggle('scrolled', window.scrollY > 60);
        ticking = false;
      });
      ticking = true;
    }
  });

  // Mobile menu toggle
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      toggle.classList.toggle('active');
      document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    });

    // Close on link click
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
}