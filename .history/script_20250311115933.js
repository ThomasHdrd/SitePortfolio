// Ouverture/Fermeture du menu principal
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('open');
});

// Ouverture/Fermeture des sous-menus au clic
document.querySelectorAll('.sousMenu > a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const parent = this.parentElement;

        // Bascule l'état du sous-menu actif/inactif
        parent.classList.toggle('active');

        // Fermer tous les autres sous-menus sauf celui cliqué
        document.querySelectorAll('.sousMenu').forEach(item => {
            if (item !== parent) {
                item.classList.remove('active');
            }
        });
    });
});
