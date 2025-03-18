// Ouverture ou Fermeture du menu principal
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('open');
});

// Ouverture ou Fermeture des sous-menus
document.querySelectorAll('.sousMenu > a').forEach(link => {
    link.addEventListener('click', function(e) {
        
        const sousMenuContent = this.nextElementSibling;

        // Vérifie si le sous-menu est déjà ouvert
        if (sousMenuContent.style.display === "flex") {
            sousMenuContent.style.display = "none";
        } else {
            // Ferme tous les sous-menus avant d'ouvrir 
            document.querySelectorAll('.sousMenu-content').forEach(menu => menu.style.display = "none");
            sousMenuContent.style.display = "flex";
        }
    });
});


document.getElementById('lang-button').addEventListener('click', function () {
    let langList = document.getElementById('lang-list');
    langList.style.display = (langList.style.display === 'block') ? 'none' : 'block';
});

// Fonction pour changer la langue
function switchLanguage(lang, flag, text) {
    // Sauvegarde la langue choisie
    localStorage.setItem('selectedLanguage', lang);

    // Mise à jour du bouton principal
    document.getElementById('current-lang-img').src = flag;
    document.getElementById('current-lang-text').innerText = text;

    // Cache le menu après sélection
    document.getElementById('lang-list').style.display = 'none';

    // Mise à jour du contenu du site
    document.querySelectorAll('.lang').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.lang.' + lang).forEach(el => el.style.display = 'block');
}

// Écouteurs pour le changement de langue
document.getElementById('lang-fr').addEventListener('click', function () {
    switchLanguage('fr', 'images/langSelect_FR.png', 'FR');
});

document.getElementById('lang-en').addEventListener('click', function () {
    switchLanguage('en', 'images/langSelect_EN.png', 'EN');
});

// Appliquer la langue enregistrée au chargement
document.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem('selectedLanguage') || 'fr';
    if (savedLang === 'en') {
        switchLanguage('en', 'images/langSelect_EN.png', 'EN');
    } else {
        switchLanguage('fr', 'images/langSelect_FR.png', 'FR');
    }
});



