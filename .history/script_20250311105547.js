// Ouverture/fermeture du menu hamburger
document.getElementById('menu-toggle').addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelector('nav').classList.toggle('active');
});

// Gestion du clic sur les menus avec sous-menu
document.querySelectorAll('.sousMenu > a').forEach(menu => {
    menu.addEventListener('click', function(e) {
        e.preventDefault(); // Empêche la redirection
        e.stopPropagation(); // Empêche la fermeture accidentelle du menu
        this.parentElement.classList.toggle('active');
    });
});

// Empêche la fermeture du menu quand on clique sur les sous-menus
document.querySelector('.menu').addEventListener('click', function(e){
    e.stopPropagation();
});

// Fermer le menu en cliquant ailleurs sur la page (optionnel mais conseillé)
document.body.addEventListener('click', function(){
    document.querySelector('nav').classList.remove('active');
    document.querySelectorAll('.sousMenu').forEach(menu => menu.classList.remove('active'));
});
