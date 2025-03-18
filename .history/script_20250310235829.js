// Hamburger : ouvrir/fermer le menu
document.querySelector('nav').addEventListener('click', function(e) {
    // Vérifie que le clic est bien sur le nav ou l'icône hamburger, pas un sous-menu
    if (e.target === this || e.target === this.querySelector('nav::after')) {
        this.classList.toggle('active');
    }
});

// Ouvrir/fermer le sous-menu sans fermer le menu général
document.querySelectorAll('.sousMenu > a').forEach(menu => {
    menu.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation(); // empêche le clic d'atteindre le menu général
        this.parentElement.classList.toggle('active');
    });
});
