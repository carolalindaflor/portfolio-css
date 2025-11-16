// script.js - CÓDIGO UNIFICADO E CORRIGIDO
// ----------------------------------------------------
// 1. DECLARAÇÃO DE VARIÁVEIS GLOBAIS
// ----------------------------------------------------
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let themeIcon = document.querySelector('#theme-icon'); // Ícone Sol/Lua
const savedTheme = localStorage.getItem('theme'); // Tema salvo no navegador

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


// ----------------------------------------------------
// 2. MODO CLARO/ESCURO (Theme Toggle) - Executa ao carregar a página
// ----------------------------------------------------

// A. Aplica o tema salvo (se existir)
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    themeIcon.classList.remove('bx-sun');
    themeIcon.classList.add('bx-moon'); 
} else {
    // Garante que o ícone inicial seja o Sol (para o modo escuro padrão)
    themeIcon.classList.remove('bx-moon');
    themeIcon.classList.add('bx-sun');
}

// B. Função para alternar o tema ao clicar no ícone
themeIcon.onclick = () => {
    document.body.classList.toggle('light-mode');
    
    // Alterna o ícone e salva a preferência
    if (document.body.classList.contains('light-mode')) {
        themeIcon.classList.remove('bx-sun');
        themeIcon.classList.add('bx-moon');
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.classList.remove('bx-moon');
        themeIcon.classList.add('bx-sun');
        localStorage.setItem('theme', 'dark');
    }
};


// ----------------------------------------------------
// 3. EVENTO DE ROLAGEM (Scroll Event)
// ----------------------------------------------------

window.onscroll = () => {
    // a) SELEÇÃO DE LINK ATIVO
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
    
    // b) EFEITO DE 'STICKY' (FIXO) NO HEADER
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // c) FECHAR MENU AO ROLAR (Mobile)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// ----------------------------------------------------
// 4. MENU RESPONSIVO (Toggle Navbar)
// ----------------------------------------------------

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// ----------------------------------------------------
// 5. ANIMAÇÃO DE TEXTO (Type Effect) - Usa Typed.js
// ----------------------------------------------------

var typed = new Typed('.multiple-text', {
    strings: ['Desenvolvedora Front-end', 'Criadora de Soluções', 'UX Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
