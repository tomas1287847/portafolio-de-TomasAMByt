// 1. Cambio de Tema
const btn = document.getElementById('theme-toggle');
btn.addEventListener('click', () => {
    const doc = document.documentElement;
    const current = doc.getAttribute('data-theme');
    doc.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
});

// 2. Animación de Contadores
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const speed = 150; 
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 15);
        } else {
            counter.innerText = target;
        }
    };
    updateCount();
});
