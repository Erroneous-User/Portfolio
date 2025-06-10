// script.js

// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const userPref = localStorage.getItem('theme');

if (userPref === 'dark' || (!userPref && prefersDark)) {
  document.body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Responsive navbar toggle
const navbarMenu = document.getElementById('navbarMenu');
const navLinks = document.getElementById('navLinks');

navbarMenu.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Magic background for navbar links
const links = navLinks.querySelectorAll('a'); // Get all anchor tags within navLinks

// Create the moving background element
const magicBg = document.createElement('div');
magicBg.className = 'magic-bg';
navLinks.prepend(magicBg); // Prepend so it sits behind the links visually

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    const rect = link.getBoundingClientRect();
    const parentRect = navLinks.getBoundingClientRect();
    magicBg.style.left = (rect.left - parentRect.left) + "px";
    magicBg.style.width = rect.width + "px";
    magicBg.style.top = (rect.top - parentRect.top) + "px"; // Ensure top is calculated correctly
    magicBg.style.height = rect.height + "px";
    magicBg.style.opacity = 1;
  });
  link.addEventListener('mouseleave', () => {
    magicBg.style.opacity = 0;
  });
});

// Optional: Pause/play videos on hover for project cards
document.querySelectorAll('.project-card video').forEach(video => {
  video.parentElement.addEventListener('mouseenter', () => video.play());
  video.parentElement.addEventListener('mouseleave', () => video.pause());
});