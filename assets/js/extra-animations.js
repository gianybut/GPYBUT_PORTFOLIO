// Removed floating circles animation
// function createFloatingCircles() {
//     // Check if screen width is larger than 860px (desktop)
//     if (window.innerWidth <= 859) return;
    
//     const about = document.getElementById('about');
//     const services = document.getElementById('services');
//     const contact = document.getElementById('contact');
    
//     [about, services, contact].forEach(section => {
//         if (section) {
//             for (let i = 0; i < 3; i++) {
//                 const circle = document.createElement('div');
//                 circle.className = 'floating-circle';
//                 circle.style.left = Math.random() * 100 + '%';
//                 circle.style.top = Math.random() * 100 + '%';
//                 circle.style.animationDelay = Math.random() * 5 + 's';
//                 circle.style.animationDuration = (10 + Math.random() * 10) + 's';
//                 section.style.position = 'relative';
//                 section.style.overflow = 'hidden';
//                 section.appendChild(circle);
//             }
//         }
//     });
// }

// createFloatingCircles();

// Add stagger animation to tab contents
document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.tab-links');
    
    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            const activeTab = document.querySelector('.tab-contents.active-tab');
            if (activeTab) {
                const items = activeTab.querySelectorAll('li');
                items.forEach((item, index) => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateX(-20px)';
                    setTimeout(() => {
                        item.style.transition = 'all 0.5s ease';
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 100);
                });
            }
        });
    });
    
    // Initial animation for first tab
    const firstTab = document.querySelector('.tab-contents.active-tab');
    if (firstTab) {
        const items = firstTab.querySelectorAll('li');
        items.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            setTimeout(() => {
                item.style.transition = 'all 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 500 + (index * 100));
        });
    }
});

// Add number counting animation
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Parallax effect for sections (only on desktop)
window.addEventListener('scroll', () => {
    // Disable parallax on mobile
    if (window.innerWidth <= 859) return;
    
    const scrolled = window.pageYOffset;
    const sections = document.querySelectorAll('#about, #services, #portfolio, #contact');
    
    sections.forEach((section, index) => {
        const speed = 0.1 + (index * 0.05);
        const yPos = -(scrolled * speed);
        section.style.backgroundPosition = `center ${yPos}px`;
    });
});

// Interactive button effects
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn, .hero-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Removed contact reveal animations for static appearance
// const observerOptions = {
//     threshold: 0.3
// };

// const contactObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.style.animation = 'slideInLeft 0.8s ease forwards';
//         }
//     });
// }, observerOptions);

// document.addEventListener('DOMContentLoaded', () => {
//     const contactLeft = document.querySelector('.contact-left');
//     const contactRight = document.querySelector('.contact-right');
    
//     if (contactLeft) {
//         contactLeft.style.opacity = '0';
//         contactObserver.observe(contactLeft);
//     }
    
//     if (contactRight) {
//         contactRight.style.opacity = '0';
//         contactRight.style.animation = 'slideInRight 0.8s ease forwards 0.2s';
//     }
// });

// Add animation for certificate hover
document.addEventListener('DOMContentLoaded', () => {
    const certificates = document.querySelectorAll('.certificate');
    
    certificates.forEach(cert => {
        const layer = cert.querySelector('.layer');
        if (layer) {
            cert.addEventListener('mouseenter', () => {
                layer.style.transform = 'translateY(0)';
            });
        }
    });
});

// Certificate Modal/Lightbox functionality
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('certificateModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.modal-close');
    
    // Add click event to all certificate images
    const certificates = document.querySelectorAll('.certificate img');
    certificates.forEach((img, index) => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            captionText.innerHTML = this.alt || `Certificate ${index + 1}`;
        });
    });
    
    // Add click event to certificate layer links
    const certLinks = document.querySelectorAll('.certificate .layer a');
    certLinks.forEach((link) => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // If it's not # (which means it has a real image URL), open in new tab
            if (href && href !== '#' && !href.startsWith('javascript')) {
                // Let the default behavior happen (open in new tab)
                return true;
            }
            // Otherwise, show the modal
            e.preventDefault();
            const certImg = this.closest('.certificate').querySelector('img');
            if (certImg) {
                modal.style.display = 'block';
                modalImg.src = certImg.src;
                captionText.innerHTML = certImg.alt || 'Certificate';
            }
        });
    });
    
    // Close modal on X click
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});
