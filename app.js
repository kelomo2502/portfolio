//  harmburger toggle
const openMenu = document.querySelector('.open-menu');
const mobileMenu = document.querySelector('.nav-links');
const closeMenu = document.querySelector('.close-menu');
const show = () => {
  mobileMenu.style.display = 'flex';
  mobileMenu.style.top = '0';
  closeMenu.style.display = 'block';
};
const close = () => {
  mobileMenu.style.top = '-100%';
  closeMenu.style.display = 'none';
};
openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
document.querySelectorAll('.menu').forEach((menu) => {
  menu.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    closeMenu.style.display = 'none';
  });
});

// Modal
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');
function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});
closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});
const projects = [
  {
    name: 'Multi-Post Stories',
    description: `A daily selection of privately personalized reads; no accounts or
            sign-ups required. has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a standard dummy text..`,
    featuredImage: './images/recent-works.png',
    technology: ['html', 'Bootstrap', 'Ruby on Rails'],
    liveVersion: 'https://kelomo2502.github.io/portfolio/',
    sourceCode: 'https://github.com/kelomo2502/portfolio',
  },
  {
    name: 'Professional Art Printing Data',
    description: ` A daily selection of privately personalized reads; no accounts or
            sign-ups required. has been the industry's standard`,
    featuredImage: './modal-images/project5.png',
    technology: ['html', 'bootstrap', 'Ruby on Rails'],
    liveVersion: 'https://kelomo2502.github.io/portfolio/',
    sourceCode: 'https://github.com/kelomo2502/portfolio',
  },
];
const seeProjectBtn = document.querySelectorAll('.cards-btn');
seeProjectBtn.forEach((button, i) => {
  button.addEventListener('click', () => {
    const modalMenu = document.querySelector('.modal');
    const project = projects[i];
    const title = modalMenu.querySelector('.modal h4');
    title.textContent = project.name;
    const description = modalMenu.querySelector('.modal-body');
    description.textContent = project.description;
    const projectImage = modalMenu.querySelector('.modal img');
    projectImage.src = project.featuredImage;
    const liveLink = modalMenu.querySelector('.modal-footer .see-live');
    liveLink.href = project.liveVersion;
    const seeSource = modalMenu.querySelector('.modal-footer .see-source');
    seeSource.href = project.sourceCode;
    const techs = modalMenu.querySelectorAll('.modal-tech-lists');
    techs.forEach((tech, idx) => {
      tech.innerHTML = project.technology[idx];
    });

    modalMenu.classList.add('active');
  });
});

const form=document.querySelector('#my-form');
form.addEventListener('submit', (e)=>{
    const email=document.querySelector('#email').value;
    const errorMessage=document.querySelector('.error-msg');
if (email!== email.toLowerCase()) {
e.preventDefault();
errorMessage.style.display='flex';
}  
});
