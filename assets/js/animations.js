// Typing Animation
const typingText = document.querySelector('.header-text h1 span');
const originalText = typingText.textContent;
typingText.textContent = '';

let charIndex = 0;
function typeWriter() {
    if (charIndex < originalText.length) {
        typingText.textContent += originalText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 150);
    }
}

// Start typing animation after a short delay
setTimeout(typeWriter, 500);

// Particle Background Effect
function createParticles() {
    const header = document.getElementById('header');
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    header.insertBefore(particlesContainer, header.firstChild);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

createParticles();

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
        }
    });
}, observerOptions);

// Add reveal class to sections
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('#about, #services, #portfolio, #contact');
    revealElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // Animate service cards on scroll
    const serviceCards = document.querySelectorAll('.services-list div');
    serviceCards.forEach((card, index) => {
        card.classList.add('reveal');
        card.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(card);
    });

    // Animate certificates on scroll
    const certificates = document.querySelectorAll('.certificate');
    certificates.forEach((cert, index) => {
        cert.classList.add('reveal');
        cert.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(cert);
    });
});

// Add smooth scroll progress indicator
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
});

// Enhanced cursor effect with optimized performance
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

const cursorDot = document.createElement('div');
cursorDot.className = 'cursor-dot';
document.body.appendChild(cursorDot);

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let dotX = 0, dotY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Use requestAnimationFrame for smooth animation
function animateCursor() {
    // Instant cursor movement
    cursorX = mouseX;
    cursorY = mouseY;
    cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    
    // Smooth dot movement with easing
    dotX += (mouseX - dotX) * 0.15;
    dotY += (mouseY - dotY) * 0.15;
    cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Add cursor hover effect for clickable elements
const clickables = document.querySelectorAll('a, button, .tab-links, .certificate');
clickables.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
        cursorDot.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
        cursorDot.classList.remove('cursor-hover');
    });
});
