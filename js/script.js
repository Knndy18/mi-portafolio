//animacion AOS
AOS.init({
    duration: 1200, // Duración de las animaciones
});

  //
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    });
});


// Resaltar palabras clave en la sección "Sobre Mí"
document.querySelectorAll('.highlight').forEach(element => {
    element.addEventListener('mouseover', () => {
    element.style.backgroundColor = '#e3f2fd';
    element.style.transition = 'background-color 0.3s ease';
    });
    element.addEventListener('mouseout', () => {
    element.style.backgroundColor = 'transparent';
    });
});
//proyectos
    // Animación de zoom en las tarjetas de proyectos
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.10)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
    });


