// ===================================
// GV Sweet - Interactive Features
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // Theme Toggle (Dark/Light Mode)
    // ===================================
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const themeIcon = themeToggle.querySelector('i');
    
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }
    
    // ===================================
    // Navbar Scroll Effect
    // ===================================
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // ===================================
    // Mobile Menu Toggle
    // ===================================
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        const isExpanded = menuToggle.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
    
    // ===================================
    // Smooth Scroll for Navigation Links
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===================================
    // Active Section Highlighting
    // ===================================
    const sections = document.querySelectorAll('section[id]');
    
    function highlightActiveSection() {
        const scrollPosition = window.scrollY + navbar.offsetHeight + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection();
    
    // ===================================
    // Back to Top Button
    // ===================================
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ===================================
    // Typing Effect on Hero Title
    // ===================================
    const typingText = document.getElementById('typingText');
    const textToType = 'Brownies artesanais feitos para surpreender.';
    let charIndex = 0;
    
    function typeText() {
        if (charIndex < textToType.length) {
            typingText.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 50);
        }
    }
    
    // Start typing effect when hero section is visible
    const heroSection = document.getElementById('home');
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeText();
                heroObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    heroObserver.observe(heroSection);
    
    // ===================================
    // Intersection Observer for Animations
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe differential cards
    const differentialCards = document.querySelectorAll('.differential-card');
    differentialCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Observe other fade-in elements
    const fadeElements = document.querySelectorAll('.stat-card, .menu-card, .contact-card, .faq-item');
    fadeElements.forEach((element, index) => {
        element.classList.add('fade-in');
        element.style.transitionDelay = `${index * 0.05}s`;
        observer.observe(element);
    });
    
    // ===================================
    // FAQ Accordion
    // ===================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });
    
    // ===================================
    // Reviews Carousel
    // ===================================
    const reviewsTrack = document.getElementById('reviewsTrack');
    
    // Clone all review cards for infinite scroll effect
    const reviewCards = reviewsTrack.querySelectorAll('.review-card');
    reviewCards.forEach(card => {
        const clone = card.cloneNode(true);
        reviewsTrack.appendChild(clone);
    });
    
    // Pause animation on hover
    reviewsTrack.addEventListener('mouseenter', function() {
        reviewsTrack.style.animationPlayState = 'paused';
    });
    
    reviewsTrack.addEventListener('mouseleave', function() {
        reviewsTrack.style.animationPlayState = 'running';
    });
    
    // ===================================
    // WhatsApp Integration
    // ===================================
    // All WhatsApp links already have the message parameter in HTML
    // This is just to ensure consistency
    
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Allow the link to open normally
            // The message is already encoded in the href
        });
    });
    
    // ===================================
    // Performance Optimizations
    // ===================================
    
    // Lazy load images (if needed in future)
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.src;
        });
    }
    
    // Debounce scroll events for performance
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debounce to scroll-heavy functions
    const debouncedHighlight = debounce(highlightActiveSection, 10);
    window.removeEventListener('scroll', highlightActiveSection);
    window.addEventListener('scroll', debouncedHighlight);
    
    // ===================================
    // Accessibility Enhancements
    // ===================================
    
    // Keyboard navigation for FAQ
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
        });
    });
    
    // Focus trap for mobile menu
    const focusableElements = navMenu.querySelectorAll('a, button');
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    navMenu.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        }
    });
    
    // Close mobile menu with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.focus();
        }
    });
    
    // ===================================
    // Console Message
    // ===================================
    console.log('%c🍫 GV Sweet - Brownies Artesanais', 'color: #C79A3B; font-size: 20px; font-weight: bold;');
    console.log('%cSite desenvolvido com carinho para os melhores brownies de Osasco!', 'color: #5C3A2E; font-size: 14px;');
    
});
