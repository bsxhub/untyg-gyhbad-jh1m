  // Mobile Menu Toggle
  document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For demo purposes, we'll just alert the user
            alert(`Terima kasih ${name}! Pertanyaan anda telah dihantar. Saya akan menghubungi anda dalam masa 24 jam.`);
            
            // Reset form
            contactForm.reset();
        });
    }

    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.padding = '0.5rem 0';
            header.style.backgroundColor = '#ff4d4d';
        } else {
            header.style.padding = '1rem 0';
            header.style.backgroundColor = 'var(--primary-color)';
        }
    });

    // Add animation to cards on scroll
    const cards = document.querySelectorAll('.card');
    const animateOnScroll = () => {
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight * 0.8;
            
            if (cardTop < triggerBottom) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial setup for card animations
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on load
    animateOnScroll();
});

// Testimonial Slider (if you want to add a slider in the future)
// This is a placeholder for potential future enhancement
class TestimonialSlider {
    constructor() {
        this.testimonials = document.querySelectorAll('.testimonial');
        this.currentIndex = 0;
        
        // For future implementation
    }
    
    // Methods for slider functionality
}