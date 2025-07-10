// Created by Harsh Chaudhary

// Sticky Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Section Reveal on Scroll (Smooth Fade-Up Effect)
const sections = document.querySelectorAll('section');

function revealSections() {
  const triggerPoint = window.innerHeight * 0.85;  // Reveal when 85% of viewport

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerPoint) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
}

// Run on scroll
window.addEventListener('scroll', revealSections);

// Run once on page load
revealSections();