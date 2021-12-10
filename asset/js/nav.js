const burger = document.querySelector('.nav__button');
const close = document.querySelector('.nav__close');
const nav = document.querySelector('.nav-list');

burger.addEventListener('click', () => {
  nav.classList.contains("display-none") ? 
  nav.classList.remove("display-none") : 
  nav.classList.add("display-none");
})

close.addEventListener('click', () => {
  nav.classList.contains("display-none") ? 
  nav.classList.remove("display-none") : 
  nav.classList.add("display-none");
})