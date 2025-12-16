// Smooth scroll to sections
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navItems = document.querySelectorAll('.nav-item');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            // Toggle mobile menu visibility
            document.body.classList.toggle('mobile-menu-open');
        });
        
        // Close menu when clicking on a nav item
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                document.body.classList.remove('mobile-menu-open');
            });
        });
    }
    
    // Navigation click handlers
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const text = this.textContent.trim().toLowerCase();
            let targetSection = null;
            
            if (text.includes('community')) {
                targetSection = document.querySelector('.community-section');
            } else if (text.includes('attitude')) {
                targetSection = document.querySelector('.attitude-section');
            } else if (text.includes('music')) {
                targetSection = document.querySelector('.music-section');
            } else if (text.includes('event')) {
                targetSection = document.querySelector('.events-section');
            }
            
            if (targetSection) {
                targetSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Sound button toggle
    // const soundButton = document.querySelector('.sound-button');
    /* let isSoundOn = false;
    
    if (soundButton) {
        soundButton.addEventListener('click', function() {
            isSoundOn = !isSoundOn;
            // Add visual feedback
            this.style.opacity = isSoundOn ? '1' : '0.6';
            // Add actual audio functionality
            console.log('Sound toggled:', isSoundOn ? 'ON' : 'OFF');
        });
    } */
    
    // Playlist card interactions
    const playlistCards = document.querySelectorAll('.playlist-card');
    
    playlistCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add hover effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Here you could add functionality to open playlist
            console.log('Playlist clicked');
        });
        
        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease';
            this.style.transform = 'scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Lazy loading for images
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
});

// Handle window resize for responsive adjustments
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Recalculate any dynamic layouts if needed
        console.log('Window resized');
    }, 250);
});

