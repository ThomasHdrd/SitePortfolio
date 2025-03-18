// Hamburger : ouvrir/fermer le menu via .menu-toggle
document.querySelector('.menu-toggle').addEventListener('click', function(e) {
    document.querySelector('nav').classList.toggle('active');
});

// Empêche la fermeture du menu lorsqu'on clique à l'intérieur
document.querySelector('.menu').addEventListener('click', function(e){
    e.stopPropagation();
});

// Ouvrir/fermer le sous-menu sans fermer le menu général
document.querySelectorAll('.sousMenu > a').forEach(menu => {
    menu.addEventListener('click', function(e) {
        e.preventDefault(); // empêche la redirection
        this.parentElement.classList.toggle('active');
    });
});
