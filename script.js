// Typewriter effect for headline
const typewriterText = "Design. Animate. Wow.";
const typewriterElem = document.getElementById('typewriter');
let i = 0;
function typeWriter() {
  if (i < typewriterText.length) {
    typewriterElem.textContent += typewriterText.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
window.addEventListener('DOMContentLoaded', typeWriter);

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Intersection Observer for glass-section entry animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.glass-section').forEach(section => {
  observer.observe(section);
});

// Optional: SVG floating interactivity (parallax on mouse move)
const svg = document.getElementById('floating-svg');
if (svg) {
  svg.addEventListener('mousemove', (e) => {
    const rect = svg.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;
    svg.style.transform = `translateY(-10px) scale(1.05) rotateX(${y/20}deg) rotateY(${-x/20}deg)`;
  });
  svg.addEventListener('mouseleave', () => {
    svg.style.transform = '';
  });
} 