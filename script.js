function revealSite() {
  const hero = document.querySelector('.hero-section');
  const main = document.getElementById('mainContainer');

  hero.style.opacity = '0';

  setTimeout(() => {
    hero.style.display = 'none';
    main.classList.remove('hidden');
    window.scrollTo(0, 0);

    // Efek Kembang Api / Confetti saat dibuka
    if (typeof confetti === 'function') {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, 500);
}
