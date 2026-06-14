export function initForm() {
  const form = document.querySelector('form[onsubmit]');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = 'thankyou.html';
  });
}

