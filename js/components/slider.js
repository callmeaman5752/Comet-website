export function initSlider() {
  const slides = document.querySelectorAll('.hero-bg img');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;

  let current = 0;
  let interval;

  function goTo(index) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    if (dots[current]) dots[current].classList.add('active');
  }

  function next() { goTo(current + 1); }

  function startAuto() {
    interval = setInterval(next, 5000);
  }

  function stopAuto() {
    clearInterval(interval);
  }

  // Dot clicks
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      stopAuto();
      goTo(i);
      startAuto();
    });
  });

  // Pause on hover
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.addEventListener('mouseenter', stopAuto);
    hero.addEventListener('mouseleave', startAuto);
  }

  startAuto();
}