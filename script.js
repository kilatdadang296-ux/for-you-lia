function revealSite() {
  const hero = document.querySelector('.hero-section');
  const main = document.getElementById('mainContainer');

  hero.style.transition = 'opacity 0.5s ease';
  hero.style.opacity = '0';

  setTimeout(() => {
    hero.style.display = 'none';
    main.classList.remove('hidden');
  }, 500);
}

