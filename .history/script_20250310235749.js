// Gestion ouverture/fermeture hamburger
document.querySelector('.menu-toggle').addEventListener('click', function(e) {
    document.querySelector('nav').classList.toggle('active');
});

// Gestion clic sur les menus pour afficher les sous-menus
document.querySelectorAll('.sousMenu > a').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.parentElement.classList.toggle('active');
    });
});

// Évite la fermeture accidentelle du menu principal
document.querySelector('.menu').addEventListener('click', function(e) {
    e.stopPropagation();
});
