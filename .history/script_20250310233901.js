// Gestion du clic sur le hamburger
document.querySelector('nav').addEventListener('click', function(e) {
    if (e.target === this || e.target === this.querySelector('nav::after')) {
        this.classList.toggle('active');
    }
});

// Gestion du clic sur les éléments avec sous-menu
document.querySelectorAll('.sousMenu').forEach(menu => {
    menu.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
    });
});
