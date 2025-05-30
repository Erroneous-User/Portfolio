const navLinks = document.querySelector('.nav-links');
const links = navLinks.querySelectorAll('a');

// Create the moving background element
const magicBg = document.createElement('div');
magicBg.className = 'magic-bg';
navLinks.prepend(magicBg);

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    const rect = link.getBoundingClientRect();
    const parentRect = navLinks.getBoundingClientRect();
    magicBg.style.left = (rect.left - parentRect.left) + "px";
    magicBg.style.width = rect.width + "px";
    magicBg.style.top = (rect.top - parentRect.top) + "px";
    magicBg.style.height = rect.height + "px";
    magicBg.style.opacity = 1;
  });
  link.addEventListener('mouseleave', () => {
    magicBg.style.opacity = 0;
  });
});

const navbarMenu = document.querySelector('.navbar-menu');
navbarMenu.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});


document.addEventListener("DOMContentLoaded", function() {
  // Select all project cards
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    const video = card.querySelector('video');
    if (!video) return; // Skip if no video

    card.addEventListener('mouseenter', () => {
      video.play();
    });

    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  });
});
