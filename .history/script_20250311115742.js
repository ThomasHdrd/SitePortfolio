// Ouverture/Fermeture du menu principal
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('open');
});

// Ouverture/Fermeture des sous-menus au clic
document.querySelectorAll('.sousMenu > a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const parent = this.parentElement;
        
        // Vérifier si le sous-menu est déjà ouvert
        if (parent.classList.contains('active')) {
            parent.classList.remove('active'); // Ferme le sous-menu
        } else {
            // Fermer tous les autres sous-menus avant d'ouvrir celui-ci
            document.querySelectorAll('.sousMenu').forEach(item => item.classList.remove('active'));
            parent.classList.add('active'); // Ouvre le sous-menu
        }
    });
});
