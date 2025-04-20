// Generate particles for the home section
const particlesContainer = document.querySelector('.particles-container');
const particlesCount = 30;
const colors = ['#2D46B9', '#F08A5D', '#6884FD'];

for (let i = 0; i < particlesCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random properties
    const size = Math.random() * 20 + 5;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 10;
    
    // Apply styles
    particle.style.width = ${size}px;
    particle.style.height = ${size}px;
    particle.style.left = ${posX}%;
    particle.style.top = ${posY}%;
    particle.style.backgroundColor = color;
    particle.style.animationDuration = ${duration}s;
    particle.style.animationDelay = ${delay}s;
    
    particlesContainer.appendChild(particle);
}

// Navbar scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Hero section animations
document.addEventListener('DOMContentLoaded', () => {
    // Animate hero content
    gsap.to('.hero-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5
    });
    
    gsap.to('.hero-subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.8
    });
    
    gsap.to('.hero-btn', {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.1
    });
    
    // Scroll animations
    gsap.registerPlugin(ScrollTrigger);
    
    // About section animation
    gsap.from('.about-img', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 1
    });
    
    gsap.from('.about-text p', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        stagger: 0.3,
        duration: 1
    });
    
    // Skills section animation
    gsap.from('.skill-card', {
        scrollTrigger: {
            trigger: '#skills',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8
    });
    
    gsap.to('.progress-bar', {
        scrollTrigger: {
            trigger: '#skills',
            start: 'top 70%'
        },
        scaleX: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power2.out',
        delay: 0.5
    });
    
    // Projects section animation
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '#projects',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 0.8
    });
    
    // Certifications section animation
    gsap.from('.certification-card', {
        scrollTrigger: {
            trigger: '#certifications',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 0.8
    });
    
    // Experience section animation
    gsap.from('.timeline-content', {
        scrollTrigger: {
            trigger: '#experience',
            start: 'top 80%'
        },
        opacity: 0,
        x: (i) => i % 2 === 0 ? 100 : -100,
        stagger: 0.3,
        duration: 0.8
    });
    
    gsap.from('.timeline-dot', {
        scrollTrigger: {
            trigger: '#experience',
            start: 'top 80%'
        },
        opacity: 0,
        scale: 0,
        stagger: 0.3,
        duration: 0.5,
        delay: 0.3
    });
    
    // Achievements section animation
    gsap.from('.achievement-card', {
        scrollTrigger: {
            trigger: '#achievements',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 0.8
    });
    
    // Contact section animation
    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%'
        },
        opacity: 0,
        x: -100,
        duration: 0.8
    });
    
    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%'
        },
        opacity: 0,
        x: 100,
        duration: 0.8
    });
});

// Form submission (prevent default for demo)
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo, so the form submission is disabled.');
});