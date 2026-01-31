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

// Parallax Scrolling Effect (only on desktop)
window.addEventListener('scroll', () => {
    // Disable parallax on mobile for performance
    if (window.innerWidth <= 859) {
        // Reset transform on mobile
        const parallaxElements = document.querySelectorAll('.header-text, nav');
        parallaxElements.forEach(el => {
            el.style.transform = 'none';
        });
        return;
    }
    
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.header-text, nav');
    
    parallaxElements.forEach(el => {
        const speed = 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Parallax Scrolling Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.header-text, nav');
    
    parallaxElements.forEach(el => {
        const speed = 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn, .btn2, .hero-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Magnetic effect for service cards (only on desktop)
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.services-list div');
    
    serviceCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            // Disable magnetic effect on mobile/tablet
            if (window.innerWidth <= 859) return;
            
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            card.style.transform = `translateY(-10px) scale(1.02) rotateX(${-y / 20}deg) rotateY(${x / 20}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1) rotateX(0) rotateY(0)';
        });
    });
});

// Tilt effect on certificates (only on desktop)
document.addEventListener('DOMContentLoaded', () => {
    const certificates = document.querySelectorAll('.certificate');
    
    certificates.forEach(cert => {
        cert.addEventListener('mousemove', (e) => {
            // Disable tilt effect on mobile/tablet
            if (window.innerWidth <= 859) return;
            
            const rect = cert.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            cert.style.transform = `translateY(-5px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        
        cert.addEventListener('mouseleave', () => {
            cert.style.transform = 'translateY(0) perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
});
