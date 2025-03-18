// Gestion ouverture/fermeture hamburger
document.getElementById('menu-toggle').addEventListener('click', function(e) {
    document.querySelector('nav').classList.toggle('active');
});

// Gestion clic sous-menu uniquement
document.querySelectorAll('.sousMenu > a').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.parentElement.classList.toggle('active');
    });
});

// Évite fermeture du menu principal lors du clic sur les liens du sous-menu
document.querySelector('.menu').addEventListener('click', function(e) {
    e.stopPropagation();
});
