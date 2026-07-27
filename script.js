ScrollReveal({
    reset: false,
    distance: '60px',
    duration: 1000,
    easing: 'ease',
    opacity: 0,
    interval: 150
});

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const progressFill = document.querySelector(".progress-fill");
    const progressNumber = document.getElementById("progress-number");

    let progress = 0;

    const interval = setInterval(() => {
        progress++;

        progressFill.style.width = progress + "%";
        progressNumber.textContent = progress;

        if (progress >= 100) {
            clearInterval(interval);

            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 600);
        }
    }, 20);
});



ScrollReveal().reveal('.hero-text', {
    origin: 'left',
    distance: '60px',
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.hero-image', {
    origin: 'right',
    distance: '60px',
    duration: 1000,
    delay: 300
});

ScrollReveal().reveal('.section-heading', {
    origin: 'bottom',
    distance: '40px',
    duration: 800
});

ScrollReveal().reveal('.project-card', {
    origin: 'bottom',
    distance: '50px',
    duration: 800,
    interval: 200
});

ScrollReveal().reveal('.detail-card', {
    origin: 'bottom',
    distance: '50px',
    duration: 800,
    interval: 150
});

ScrollReveal().reveal('.process-card', {
    origin: 'bottom',
    distance: '50px',
    duration: 800,
    interval: 150
});

ScrollReveal().reveal('.contact-content', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000
});

ScrollReveal().reveal('.footer-content', {
    origin: 'bottom',
    distance: '40px',
    duration: 1000
});

ScrollReveal().reveal('.hero-text', { origin: 'left' });

ScrollReveal().reveal('.hero-image', { origin: 'right' });

ScrollReveal().reveal('.project-card', {
    origin: 'bottom'
});

ScrollReveal().reveal('.process-card', {
    origin: 'bottom'
});