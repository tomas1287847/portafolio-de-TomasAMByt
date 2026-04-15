// 1. Cambio de Tema (Claro/Oscuro)
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
});

// 2. Contadores Animados
const counters = document.querySelectorAll('.counter');
const speed = 200;

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Activar contadores cuando sean visibles
window.addEventListener('scroll', () => {
    const section = document.querySelector('.stats-container');
    const position = section.getBoundingClientRect().top;
    if(position < window.innerHeight) startCounters();
}, { once: true });

// 3. Smooth Scroll ya está activo por el CSS (scroll-behavior)
