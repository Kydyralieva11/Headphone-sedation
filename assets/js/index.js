let hamburger = document.querySelector('.hamburger');
let navCollapse = document.querySelector('.nav_collapse')
hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('is-active');
  navCollapse.classList.toggle('is-active');
})