// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    document.querySelector('.scroll-progress').style.width = scrolled + '%';
    
    // Parallax text effect for hero section
    const heroContainer = document.querySelector('#header .container');
    if (heroContainer) {
        heroContainer.style.transform = `translateY(${scrollTop * 0.03}px)`;
    }
});

// Intersection Observer for reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all reveal elements
document.querySelectorAll('.reveal, .reveal-card').forEach(el => {
    observer.observe(el);
});

// Typing effect
const typingElement = document.querySelector('.typing-text');
const text = 'Gian Ybut';
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typingElement.textContent = text.substring(0, index + 1);
        index++;
        setTimeout(typeWriter, 1.5 * 1000 / text.length); // 1.5 seconds total
    }
}

// Start typing when page loads
typeWriter();
