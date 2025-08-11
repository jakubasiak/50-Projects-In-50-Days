const faqs = document.querySelectorAll('.faq');
faqs.forEach((faq) => {
  faq.querySelector('button').addEventListener('click', () => {
    faq.classList.toggle('active');
  });
});
