// Force scroll to top on page load with multiple attempts
let scrollToTopAttempts = 0;
const maxAttempts = 10;

function forceScrollToTop() {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

// Immediate scroll to top
forceScrollToTop();

// On DOM ready
document.addEventListener('DOMContentLoaded', () => {
    forceScrollToTop();
    // Additional attempts to override browser scroll restoration
    setTimeout(forceScrollToTop, 100);
    setTimeout(forceScrollToTop, 500);
});

// On full page load
window.addEventListener('load', () => {
    forceScrollToTop();
    // Keep forcing until we know it's at top
    let interval = setInterval(() => {
        if (scrollToTopAttempts < maxAttempts) {
            forceScrollToTop();
            scrollToTopAttempts++;
        } else {
            clearInterval(interval);
        }
    }, 50);
});

// Also prevent history scroll restoration
if (window.history.scrollRestoration) {
    window.history.scrollRestoration = 'manual';
}

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
