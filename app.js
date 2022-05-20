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
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});
const projects = [
  {
    name: 'Multi Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImage: './images/recent-works.png',
    technology: ['html', 'Bootstrap', 'Ruby on Rails'],
    liveVersion: 'https://kelomo2502.github.io/portfolio/',
    sourceCode: 'https://github.com/kelomo2502/portfolio',
  },
  {
    name: 'Multi Post Stories',
    description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImage: './modal-images/project5.png',
    technology: ['html', 'bootstrap', 'Ruby on Rails'],
    liveVersion: 'https://kelomo2502.github.io/portfolio/',
    sourceCode: 'https://github.com/kelomo2502/portfolio',
  },
  {
    name: 'Multi Post Stories',
    description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImage: './modal-images/project5.png',
    technology: ['html', 'bootstrap', 'Ruby on Rails'],
    liveVersion: 'https://kelomo2502.github.io/portfolio/',
    sourceCode: 'https://github.com/kelomo2502/portfolio',
  },
  {
    name: 'Multi Post Stories',
    description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImage: './modal-images/project5.png',
    technology: ['html', 'bootstrap', 'Ruby on Rails'],
    liveVersion: 'https://kelomo2502.github.io/portfolio/',
    sourceCode: 'https://github.com/kelomo2502/portfolio',
  },
  {
    name: 'Multi Post Stories',
    description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImage: './modal-images/project5.png',
    technology: ['html', 'bootstrap', 'Ruby on Rails'],
    liveVersion: 'https://kelomo2502.github.io/portfolio/',
    sourceCode: 'https://github.com/kelomo2502/portfolio',
  },
  {
    name: 'Multi Post Stories',
    description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featuredImage: './modal-images/project5.png',
    technology: ['html', 'bootstrap', 'Ruby on Rails'],
    liveVersion: 'https://kelomo2502.github.io/portfolio/',
    sourceCode: 'https://github.com/kelomo2502/portfolio',
  },
];
const seeProjectBtn = document.querySelectorAll('.cards-btn');
seeProjectBtn.forEach((button, i) => {
  button.addEventListener('click', () => {
    const project = projects[i];
    const modalBody = document.querySelector('.popup-modal');

    modalBody.innerHTML = `
    <div class="modal" id="modal">
      <div class="modal-header">
        <div class="modal-title">
          <h4>${project.name}</h4>
          <button data-close-button class="close-button">&times;</button>
        </div>
        <ul class="modal-tech-list">
          ${project.technology
    .map(
      (tech) => `<li class="modal-tech-lists"><button>${tech}</button></li>`,
    )
    .join('')}
        </ul>
      </div>

      <div class="desktop-modal">
        <div class="modal-image">
          <img src=${project.featuredImage} alt="project image" />
        </div>
        <div class="modal-body-footer">
          <p class="modal-body">
            ${project.description}
          </p>
          <div class="modal-footer">
            <a
              href=${project.liveVersion}
              target="_blank"
              rel="noopener noreferrer"
              class="see-live"
              >see live<img src="./modal-images/see-live.png" alt=""
            /></a>

            <a
              href=${project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              class="see-source"
              >see Source<img
                src="./modal-images/github.png"
                alt="github icon"
            /></a>
          </div>
        </div>
      </div>
    </div>`;
    openModal(overlay);
    const closeBtn = document.querySelector('.close-button');
    closeBtn.addEventListener('click', () => {
      modalBody.innerHTML = '';
      closeModal(overlay);
    });
  });
});
