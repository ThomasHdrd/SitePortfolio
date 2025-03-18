// Ouverture/Fermeture du menu principal
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('open');
});

// Ouverture/Fermeture des sous-menus au clic
document.querySelectorAll('.sousMenu > a').forEach(link => {
    link.addEventListener('click', function(e) {
        
        const sousMenuContent = this.nextElementSibling; // Récupère le sous-menu associé

        // Vérifier si le sous-menu est déjà ouvert
        if (sousMenuContent.style.display === "flex") {
            sousMenuContent.style.display = "none"; // Ferme le sous-menu
        } else {
            // Fermer tous les sous-menus avant d'ouvrir celui-ci
            document.querySelectorAll('.sousMenu-content').forEach(menu => menu.style.display = "none");
            sousMenuContent.style.display = "flex"; // Ouvre le sous-menu
        }
    });
});
