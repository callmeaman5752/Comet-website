import { initNavbar } from './components/navbar.js';
import { initSlider } from './components/slider.js';
import { initCarousels } from './components/carousel.js';
import { initScrollTop } from './components/scrollTop.js';
import { initForm } from './components/form.js';
import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSlider();
  initCarousels();
  initScrollTop();
  initForm();
  initAnimations();
});