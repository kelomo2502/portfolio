const openMenu = document.querySelector('.open-menu');
const mobileMenu = document.querySelector('.nav-links');
const closeMenu = document.querySelector('.close-menu');

function show() {
  mobileMenu.style.display = 'flex';
  mobileMenu.style.top = '0';
  closeMenu.style.display = 'block';
}

function close() {
  mobileMenu.style.top = '-100%';
    closeMenu.style.display = "none";
 
}

openMenu.addEventListener('click', show); 
closeMenu.addEventListener('click', close);  