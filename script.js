// ================================================================
// 1. CARDÁPIO (SABORES CORRETOS)
// ================================================================

const cardapio = [
    { id: 1, nome: 'Ninho', desc: 'Cremoso recheio de leite Ninho, o queridinho de todo mundo.', preco: 10.00 },
    { id: 2, nome: 'Ninho + KitKat', desc: 'Leite Ninho cremoso com pedaços crocantes de KitKat.', preco: 11.00 },
    { id: 3, nome: 'Nutella', desc: 'Nutella derretida em cada mordida. Perfeito para os amantes de chocolate.', preco: 13.00 },
    { id: 4, nome: 'Ninho + Nutella', desc: 'A combinação perfeita: Ninho cremoso com Nutella por cima.', preco: 15.00 }
];

const mensagemWhatsApp = 'Olá, gostaria de conhecer os brownies GV';
const numeroWhatsApp = '5511959183946';

const cardapioGrid = document.getElementById('cardapioGrid');

cardapio.forEach(item => {
    const card = document.createElement('div');
    card.className = 'cardapio-card';
    card.innerHTML = `
        <span class="icon">🍫</span>
        <h4>${item.nome}</h4>
        <p>${item.desc}</p>
        <span class="preco">R$ ${item.preco.toFixed(2).replace('.', ',')}</span>
        <a href="https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagemWhatsApp)}" class="btn btn-primary btn-sm">Pedir</a>
    `;
    cardapioGrid.appendChild(card);
});

// ================================================================
// 2. AVALIAÇÕES
// ================================================================

const avaliacoes = [
    { nome: 'Mariana S.', comentario: 'Melhor brownie que já comi! O de Ninho é simplesmente perfeito.', estrelas: 5 },
    { nome: 'Carlos M.', comentario: 'Chegou quentinho e com muito recheio. Já pedi de novo!', estrelas: 5 },
    { nome: 'Ana P.', comentario: 'Brownie artesanal de verdade. A casquinha crocante é o melhor.', estrelas: 5 },
    { nome: 'Rafael L.', comentario: 'Atendimento excelente e o brownie é maravilhoso. Recomendo demais!', estrelas: 5 },
    { nome: 'Juliana R.', comentario: 'Comprei para uma festa e todo mundo amou. O de Nutella é divino.', estrelas: 5 },
    { nome: 'Felipe A.', comentario: 'Entrega rápida e produto de alta qualidade. Já sou fã!', estrelas: 5 }
];

const carrossel = document.getElementById('carrossel');
let currentSlide = 0;
let autoSlideInterval;

avaliacoes.forEach(item => {
    const estrelas = '★'.repeat(item.estrelas) + '☆'.repeat(5 - item.estrelas);
    const div = document.createElement('div');
    div.className = 'avaliacao-card';
    div.innerHTML = `
        <div class="estrelas">${estrelas}</div>
        <p class="comentario">"${item.comentario}"</p>
        <span class="nome">${item.nome}</span>
    `;
    carrossel.appendChild(div);
});

function goToSlide(index) {
    const total = avaliacoes.length;
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    currentSlide = index;
    carrossel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

document.getElementById('carrosselNext').addEventListener('click', () => { nextSlide(); resetAutoSlide(); });
document.getElementById('carrosselPrev').addEventListener('click', () => { prevSlide(); resetAutoSlide(); });

function startAutoSlide() { autoSlideInterval = setInterval(nextSlide, 5000); }
function resetAutoSlide() { clearInterval(autoSlideInterval); startAutoSlide(); }
startAutoSlide();

// ================================================================
// 3. FAQ
// ================================================================

document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !expanded);
        const answer = this.nextElementSibling;
        answer.classList.toggle('open');
    });
});

// ================================================================
// 4. NAVBAR
// ================================================================

const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 60;
    navbar.classList.toggle('scrolled', scrolled);
    backToTop.classList.toggle('visible', window.scrollY > 400);
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ================================================================
// 5. HAMBURGER
// ================================================================

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// ================================================================
// 6. TEMA
// ================================================================

const themeToggle = document.getElementById('themeToggle');
let isDark = localStorage.getItem('gv_sweet_theme') === 'dark';

if (isDark) {
    document.body.classList.add('dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isNowDark = document.body.classList.contains('dark');
    themeToggle.innerHTML = isNowDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('gv_sweet_theme', isNowDark ? 'dark' : 'light');
});

// ================================================================
// 7. ANIMAÇÕES (Intersection Observer)
// ================================================================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.dif-card').forEach(el => observer.observe(el));

// ================================================================
// 8. EFEITO DE DIGITAÇÃO
// ================================================================

const heroTitle = document.getElementById('heroTitle');
const originalText = heroTitle.textContent;
heroTitle.textContent = '';

function typeWriter(text, element, speed = 50) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

setTimeout(() => { typeWriter(originalText, heroTitle); }, 400);

// ================================================================
// 9. NAVEGAÇÃO SUAVE
// ================================================================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ================================================================
// 10. SEÇÃO ATIVA NA NAVBAR
// ================================================================

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop - 150;
        if (window.scrollY >= top) {
            current = section.getAttribute('id');
        }
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
});

console.log('🍫 GV Sweet · Site carregado com sucesso!');
console.log('📱 Instagram: @g.v.sweet');
console.log('💬 WhatsApp: (11) 95918-3946');