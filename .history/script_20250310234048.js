// Gestion du clic pour ouvrir/fermer le menu hamburger
document.querySelector('nav').addEventListener('click', function(e) {
    this.classList.toggle('active');
});

// Gestion du clic sur l'élément parent (.sousMenu)
document.querySelectorAll('.sousMenu > a').forEach(menu => {
    menu.addEventListener('click', function(e) {
        e.preventDefault(); // empêche le lien de rediriger
        e.stopPropagation(); // empêche de fermer le menu parent
        this.parentElement.classList.toggle('active');
    });
});
