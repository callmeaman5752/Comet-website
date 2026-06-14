export function initAnimations() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children')
      .forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children')
    .forEach(el => observer.observe(el));
}