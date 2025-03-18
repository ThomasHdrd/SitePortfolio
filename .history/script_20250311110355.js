// Ouvrir/fermer menu principal
document.getElementById('menu-toggle').addEventListener('click', function(e){
    document.querySelector('.menu').classList.toggle('open');
});

// Ouvrir/fermer sous-menu (portfolio uniquement)
document.querySelectorAll('.sousMenu > a').forEach(menu => {
    menu.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.parentElement.classList.toggle('active');
    });
});

// Évite fermeture menu principal au clic dans sous-menu
document.querySelector('.menu').addEventListener('click', function(e){
    e.stopPropagation();
});

// Ferme tout quand clic extérieur au menu (optionnel mais pratique)
document.body.addEventListener('click', function() {
    document.querySelector('.menu').classList.remove('open');
    document.querySelectorAll('.sousMenu').forEach(menu => menu.classList.remove('active'));
});
