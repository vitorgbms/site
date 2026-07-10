/* ===================================
   GV Sweet - Professional Brownie Website
   Color Palette & Design System
   =================================== */

/* CSS Variables */
:root {
    /* Colors */
    --color-chocolate: #2B1B17;
    --color-brown: #5C3A2E;
    --color-cream: #F8F5F1;
    --color-white: #FFFFFF;
    --color-gold: #C79A3B;
    
    /* Light Theme */
    --bg-primary: var(--color-white);
    --bg-secondary: var(--color-cream);
    --bg-dark: var(--color-chocolate);
    --text-primary: var(--color-chocolate);
    --text-secondary: #666;
    --text-light: var(--color-white);
    --card-bg: var(--color-white);
    --border-color: rgba(43, 27, 23, 0.1);
    --shadow-color: rgba(43, 27, 23, 0.1);
    
    /* Spacing */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 3rem;
    --spacing-xl: 5rem;
    
    /* Border Radius */
    --radius-sm: 0.5rem;
    --radius-md: 1rem;
    --radius-lg: 1.5rem;
    --radius-xl: 2rem;
    
    /* Transitions */
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
}

/* Dark Theme */
[data-theme="dark"] {
    --bg-primary: #1a1a1a;
    --bg-secondary: #0f0f0f;
    --bg-dark: #000000;
    --text-primary: var(--color-white);
    --text-secondary: #ccc;
    --text-light: var(--color-white);
    --card-bg: #252525;
    --border-color: rgba(255, 255, 255, 0.1);
    --shadow-color: rgba(0, 0, 0, 0.3);
}

/* ===================================
   Reset & Base Styles
   =================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 1.6;
    color: var(--text-primary);
    background-color: var(--bg-primary);
    transition: background-color var(--transition-normal), color var(--transition-normal);
    overflow-x: hidden;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

a {
    text-decoration: none;
    color: inherit;
    transition: all var(--transition-normal);
}

button {
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    border: none;
    background: none;
}

ul {
    list-style: none;
}

/* ===================================
   Typography
   =================================== */
h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
    color: var(--text-primary);
}

h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
}

h2 {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
}

h3 {
    font-size: clamp(1.25rem, 3vw, 1.75rem);
}

p {
    color: var(--text-secondary);
    line-height: 1.8;
}

/* ===================================
   Buttons
   =================================== */
.btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 2rem;
    border-radius: var(--radius-md);
    font-weight: 500;
    font-size: 1rem;
    transition: all var(--transition-normal);
    cursor: pointer;
    border: 2px solid transparent;
    text-align: center;
    justify-content: center;
}

.btn-primary {
    background: linear-gradient(135deg, var(--color-gold), #d4a84a);
    color: var(--color-chocolate);
    box-shadow: 0 4px 15px rgba(199, 154, 59, 0.3);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(199, 154, 59, 0.4);
}

.btn-secondary {
    background: transparent;
    color: var(--color-gold);
    border: 2px solid var(--color-gold);
}

.btn-secondary:hover {
    background: var(--color-gold);
    color: var(--color-chocolate);
}

.btn-small {
    padding: 0.625rem 1.5rem;
    font-size: 0.875rem;
}

.btn-large {
    padding: 1.125rem 2.5rem;
    font-size: 1.125rem;
}

/* ===================================
   Navbar
   =================================== */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    z-index: 1000;
    transition: all var(--transition-normal);
    border-bottom: 1px solid var(--border-color);
}

[data-theme="dark"] .navbar {
    background: rgba(26, 26, 26, 0.95);
}

.navbar.scrolled {
    box-shadow: 0 4px 20px var(--shadow-color);
}

.nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-gold);
    letter-spacing: -0.5px;
}

.nav-menu {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.nav-link {
    color: var(--text-primary);
    font-weight: 500;
    font-size: 0.95rem;
    position: relative;
    transition: color var(--transition-normal);
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--color-gold);
    transition: width var(--transition-normal);
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

.nav-link:hover,
.nav-link.active {
    color: var(--color-gold);
}

.btn-order {
    background: var(--color-gold);
    color: var(--color-chocolate);
    padding: 0.625rem 1.5rem;
    border-radius: var(--radius-md);
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all var(--transition-normal);
}

.btn-order:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(199, 154, 59, 0.4);
}

.theme-toggle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-secondary);
    color: var(--text-primary);
    font-size: 1.125rem;
    transition: all var(--transition-normal);
}

.theme-toggle:hover {
    background: var(--color-gold);
    color: var(--color-chocolate);
    transform: rotate(20deg);
}

/* Mobile Menu Toggle */
.menu-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    padding: 0.5rem;
    z-index: 1001;
}

.menu-toggle span {
    width: 25px;
    height: 3px;
    background: var(--text-primary);
    border-radius: 3px;
    transition: all var(--transition-normal);
}

.menu-toggle.active span:nth-child(1) {
    transform: rotate(45deg) translate(8px, 8px);
}

.menu-toggle.active span:nth-child(2) {
    opacity: 0;
}

.menu-toggle.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
}

/* ===================================
   Hero Section
   =================================== */
.hero {
    background: linear-gradient(135deg, var(--color-chocolate) 0%, var(--color-brown) 100%);
    padding: 8rem 0 5rem;
    margin-top: 80px;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 50%, rgba(199, 154, 59, 0.1) 0%, transparent 50%);
    pointer-events: none;
}

.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    position: relative;
    z-index: 1;
}

.hero-text {
    color: var(--color-white);
}

.hero-title {
    color: var(--color-white);
    margin-bottom: 1.5rem;
    min-height: 120px;
    display: flex;
    align-items: center;
}

.hero-description {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.125rem;
    margin-bottom: 2rem;
    line-height: 1.8;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
}

.hero-buttons .btn-secondary {
    color: var(--color-white);
    border-color: var(--color-white);
}

.hero-buttons .btn-secondary:hover {
    background: var(--color-white);
    color: var(--color-chocolate);
}

.floating-cards {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.floating-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 1rem 1.5rem;
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: var(--color-white);
    font-weight: 500;
    animation: float 3s ease-in-out infinite;
}

.floating-card:nth-child(2) {
    animation-delay: 0.5s;
}

.floating-card:nth-child(3) {
    animation-delay: 1s;
}

.floating-card i {
    color: var(--color-gold);
    font-size: 1.25rem;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

.hero-image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.hero-image img {
    border-radius: var(--radius-xl);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    animation: fadeInUp 1s ease-out;
}

/* ===================================
   Sections Common
   =================================== */
section {
    padding: 5rem 0;
}

.section-header {
    text-align: center;
    margin-bottom: 4rem;
}

.section-subtitle {
    display: inline-block;
    color: var(--color-gold);
    font-weight: 600;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 0.75rem;
}

.section-title {
    margin-bottom: 1rem;
}

.section-description {
    color: var(--text-secondary);
    font-size: 1.125rem;
    max-width: 600px;
    margin: 0 auto;
}

/* ===================================
   About Section
   =================================== */
.about {
    background: var(--bg-secondary);
}

.about-content {
    max-width: 900px;
    margin: 0 auto;
}

.about-text {
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
    text-align: center;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.stat-card {
    background: var(--card-bg);
    padding: 2.5rem 2rem;
    border-radius: var(--radius-lg);
    text-align: center;
    box-shadow: 0 4px 20px var(--shadow-color);
    transition: transform var(--transition-normal);
}

.stat-card:hover {
    transform: translateY(-5px);
}

.stat-number {
    font-size: 3rem;
    font-weight: 700;
    color: var(--color-gold);
    margin-bottom: 0.5rem;
}

.stat-label {
    color: var(--text-secondary);
    font-size: 1rem;
    font-weight: 500;
}

/* ===================================
   Menu Section
   =================================== */
.menu {
    background: var(--bg-primary);
}

.menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.menu-card {
    background: var(--card-bg);
    padding: 2.5rem 2rem;
    border-radius: var(--radius-lg);
    text-align: center;
    box-shadow: 0 4px 20px var(--shadow-color);
    transition: all var(--transition-normal);
    position: relative;
    border: 2px solid transparent;
}

.menu-card:hover {
    transform: translateY(-10px);
    border-color: var(--color-gold);
    box-shadow: 0 8px 30px var(--shadow-color);
}

.menu-card.featured {
    border-color: var(--color-gold);
}

.menu-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: var(--color-gold);
    color: var(--color-chocolate);
    padding: 0.375rem 1rem;
    border-radius: var(--radius-md);
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
}

.menu-icon {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, var(--color-gold), #d4a84a);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 2rem;
    color: var(--color-chocolate);
}

.menu-name {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
}

.menu-description {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
}

.menu-price {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-gold);
    margin-bottom: 1.5rem;
}

/* ===================================
   Differentials Section
   =================================== */
.differentials {
    background: linear-gradient(135deg, var(--color-chocolate) 0%, var(--color-brown) 100%);
    position: relative;
}

.differentials .section-subtitle {
    color: var(--color-gold);
}

.differentials .section-title {
    color: var(--color-white);
}

.differentials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.differential-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2.5rem 2rem;
    border-radius: var(--radius-lg);
    text-align: center;
    transition: all var(--transition-normal);
    opacity: 0;
    transform: translateY(30px);
}

.differential-card.visible {
    opacity: 1;
    transform: translateY(0);
}

.differential-card:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
}

.differential-icon {
    width: 80px;
    height: 80px;
    background: var(--color-gold);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 2rem;
    color: var(--color-chocolate);
}

.differential-card h3 {
    color: var(--color-white);
    margin-bottom: 1rem;
    font-size: 1.25rem;
}

.differential-card p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.7;
}

/* ===================================
   Reviews Section
   =================================== */
.reviews {
    background: var(--bg-secondary);
    overflow: hidden;
}

.reviews-carousel {
    position: relative;
    overflow: hidden;
}

.reviews-track {
    display: flex;
    gap: 2rem;
    animation: scroll 30s linear infinite;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-50%);
    }
}

.review-card {
    min-width: 350px;
    background: var(--card-bg);
    padding: 2.5rem;
    border-radius: var(--radius-lg);
    box-shadow: 0 4px 20px var(--shadow-color);
    flex-shrink: 0;
}

.review-stars {
    display: flex;
    gap: 0.25rem;
    margin-bottom: 1.5rem;
}

.review-stars i {
    color: var(--color-gold);
    font-size: 1.25rem;
}

.review-text {
    font-size: 1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-style: italic;
}

.review-author {
    border-top: 1px solid var(--border-color);
    padding-top: 1rem;
}

.review-author strong {
    display: block;
    color: var(--text-primary);
    font-size: 1rem;
    margin-bottom: 0.25rem;
}

.review-author span {
    color: var(--text-secondary);
    font-size: 0.875rem;
}

/* ===================================
   FAQ Section
   =================================== */
.faq {
    background: var(--bg-primary);
}

.faq-list {
    max-width: 800px;
    margin: 0 auto;
}

.faq-item {
    background: var(--card-bg);
    border-radius: var(--radius-md);
    margin-bottom: 1rem;
    box-shadow: 0 2px 10px var(--shadow-color);
    overflow: hidden;
}

.faq-question {
    width: 100%;
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    font-size: 1.125rem;
    font-weight: 500;
    color: var(--text-primary);
    transition: all var(--transition-normal);
}

.faq-question:hover {
    background: var(--bg-secondary);
}

.faq-question i {
    transition: transform var(--transition-normal);
    color: var(--color-gold);
}

.faq-item.active .faq-question i {
    transform: rotate(180deg);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height var(--transition-slow);
}

.faq-item.active .faq-answer {
    max-height: 500px;
}

.faq-answer p {
    padding: 0 2rem 1.5rem;
    line-height: 1.8;
}

/* ===================================
   Contact Section
   =================================== */
.contact {
    background: var(--bg-secondary);
}

.contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.contact-card {
    background: var(--card-bg);
    padding: 2.5rem 2rem;
    border-radius: var(--radius-lg);
    text-align: center;
    box-shadow: 0 4px 20px var(--shadow-color);
    transition: transform var(--transition-normal);
}

.contact-card:hover {
    transform: translateY(-5px);
}

.contact-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, var(--color-gold), #d4a84a);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 1.75rem;
    color: var(--color-chocolate);
}

.contact-card h3 {
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
}

.contact-card p {
    font-size: 0.95rem;
}

.contact-cta {
    text-align: center;
}

/* ===================================
   Final CTA Section
   =================================== */
.final-cta {
    background: linear-gradient(135deg, var(--color-chocolate) 0%, var(--color-brown) 100%);
    text-align: center;
    padding: 5rem 0;
}

.cta-content {
    max-width: 700px;
    margin: 0 auto;
}

.cta-title {
    color: var(--color-white);
    margin-bottom: 1.5rem;
    font-size: clamp(1.5rem, 4vw, 2.25rem);
}

.cta-text {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.125rem;
    margin-bottom: 2.5rem;
    line-height: 1.8;
}

/* ===================================
   Footer
   =================================== */
.footer {
    background: var(--color-chocolate);
    color: var(--color-white);
    padding: 4rem 0 2rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 3rem;
    margin-bottom: 3rem;
}

.footer-section h4 {
    color: var(--color-gold);
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
}

.footer-logo {
    color: var(--color-gold);
    font-size: 1.75rem;
    margin-bottom: 1rem;
}

.footer-description {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.7;
}

.footer-links {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.footer-links a {
    color: rgba(255, 255, 255, 0.8);
    transition: color var(--transition-normal);
}

.footer-links a:hover {
    color: var(--color-gold);
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-links a {
    width: 45px;
    height: 45px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    color: var(--color-white);
    transition: all var(--transition-normal);
}

.social-links a:hover {
    background: var(--color-gold);
    color: var(--color-chocolate);
    transform: translateY(-3px);
}

.footer-hours {
    color: rgba(255, 255, 255, 0.8);
}

.footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 2rem;
    text-align: center;
}

.footer-bottom p {
    color: rgba(255, 255, 255, 0.6);
}

/* ===================================
   Back to Top Button
   =================================== */
.back-to-top {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: var(--color-gold);
    color: var(--color-chocolate);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    box-shadow: 0 4px 15px rgba(199, 154, 59, 0.4);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-normal);
    z-index: 999;
}

.back-to-top.visible {
    opacity: 1;
    visibility: visible;
}

.back-to-top:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(199, 154, 59, 0.5);
}

/* ===================================
   Animations
   =================================== */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

/* ===================================
   Responsive Design
   =================================== */
@media (max-width: 968px) {
    .hero-content {
        grid-template-columns: 1fr;
        gap: 3rem;
        text-align: center;
    }
    
    .hero-text {
        order: 2;
    }
    
    .hero-image {
        order: 1;
    }
    
    .hero-buttons {
        justify-content: center;
    }
    
    .floating-cards {
        justify-content: center;
    }
    
    .hero-title {
        justify-content: center;
    }
}

@media (max-width: 768px) {
    :root {
        --spacing-md: 1.5rem;
        --spacing-lg: 2rem;
        --spacing-xl: 3rem;
    }
    
    /* Mobile Menu */
    .menu-toggle {
        display: flex;
    }
    
    .nav-menu {
        position: fixed;
        top: 0;
        right: -100%;
        width: 80%;
        max-width: 350px;
        height: 100vh;
        background: var(--bg-primary);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        transition: right var(--transition-normal);
        box-shadow: -5px 0 20px var(--shadow-color);
    }
    
    .nav-menu.active {
        right: 0;
    }
    
    .nav-link {
        font-size: 1.25rem;
    }
    
    /* Hero */
    .hero {
        padding: 6rem 0 4rem;
    }
    
    .hero-title {
        min-height: 100px;
    }
    
    .floating-cards {
        flex-direction: column;
    }
    
    .floating-card {
        justify-content: center;
    }
    
    /* Sections */
    section {
        padding: 3rem 0;
    }
    
    .section-header {
        margin-bottom: 2.5rem;
    }
    
    /* Stats */
    .stats-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    /* Menu */
    .menu-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    /* Differentials */
    .differentials-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    /* Reviews */
    .review-card {
        min-width: 280px;
    }
    
    /* Contact */
    .contact-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    /* Footer */
    .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
    }
    
    .social-links {
        justify-content: center;
    }
    
    /* Back to top */
    .back-to-top {
        bottom: 1.5rem;
        right: 1.5rem;
        width: 45px;
        height: 45px;
    }
}

@media (max-width: 480px) {
    .hero-buttons {
        flex-direction: column;
    }
    
    .btn {
        width: 100%;
    }
    
    .hero-description {
        font-size: 1rem;
    }
    
    .menu-card,
    .differential-card,
    .contact-card {
        padding: 2rem 1.5rem;
    }
}

/* ===================================
   Accessibility
   =================================== */
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}

:focus-visible {
    outline: 2px solid var(--color-gold);
    outline-offset: 2px;
}

/* Skip to content link for keyboard users */
.skip-link {
    position: absolute;
    top: -100px;
    left: 0;
    background: var(--color-gold);
    color: var(--color-chocolate);
    padding: 1rem;
    z-index: 9999;
    transition: top var(--transition-normal);
}

.skip-link:focus {
    top: 0;
}
