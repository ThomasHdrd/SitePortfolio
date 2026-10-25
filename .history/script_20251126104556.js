





const burger = document.querySelector('.burger');
const body   = document.body;

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  body.classList.toggle('menu-open');
});
