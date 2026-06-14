export function initCarousels() {
  document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
    const track = wrapper.querySelector('.carousel-track');
    const prev = wrapper.querySelector('.prev');
    const next = wrapper.querySelector('.next');
    if (!track) return;

    const scrollAmount = 220;
    let interval;

    function updateButtons() {
      const hasOverflow = track.scrollWidth > track.clientWidth + 2;
      if (prev) prev.style.display = hasOverflow ? '' : 'none';
      if (next) next.style.display = hasOverflow ? '' : 'none';
      return hasOverflow;
    }

    function scroll(dir) {
      track.scrollBy({ left: dir * scrollAmount, behavior: 'smooth' });
    }

    if (prev) prev.addEventListener('click', () => scroll(-1));
    if (next) next.addEventListener('click', () => scroll(1));

    function startAuto() {
      stopAuto();
      if (!updateButtons()) return;
      interval = setInterval(() => {
        const maxScroll = track.scrollWidth - track.clientWidth;
        if (track.scrollLeft >= maxScroll - 10) {
          track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }, 3500);
    }

    function stopAuto() { clearInterval(interval); }

    wrapper.addEventListener('mouseenter', stopAuto);
    wrapper.addEventListener('mouseleave', startAuto);

    // Re-check on resize
    const ro = new ResizeObserver(() => startAuto());
    ro.observe(track);

    startAuto();
  });
}