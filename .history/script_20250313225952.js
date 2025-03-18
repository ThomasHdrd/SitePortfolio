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

    // Récupérer la langue actuelle
    let currentLang = this.getAttribute('data-lang');

    // Masquer la langue sélectionnée
    document.getElementById('lang-fr').style.display = (currentLang === 'fr') ? 'none' : 'flex';
    document.getElementById('lang-en').style.display = (currentLang === 'en') ? 'none' : 'flex';
});

// Fonction pour changer la langue
function switchLanguage(lang, flag, text) {
    // Sauvegarde la langue choisie
    localStorage.setItem('selectedLanguage', lang);

    // Met à jour le bouton avec la nouvelle langue sélectionnée
    let langButton = document.getElementById('lang-button');
    langButton.setAttribute('data-lang', lang);
    document.getElementById('current-lang-img').src = flag;
    document.getElementById('current-lang-text').innerText = text;

    // Cache le menu après sélection
    document.getElementById('lang-list').style.display = 'none';

    // Masquer la langue sélectionnée dans la liste
    document.getElementById('lang-fr').style.display = (lang === 'fr') ? 'none' : 'flex';
    document.getElementById('lang-en').style.display = (lang === 'en') ? 'none' : 'flex';

    // Mise à jour du texte du site
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

// Appliquer la langue enregistrée au chargement de la page
document.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem('selectedLanguage') || 'fr';
    switchLanguage(savedLang, 
        savedLang === 'fr' ? 'images/langSelect_FR.png' : 'images/langSelect_EN.png', 
        savedLang === 'fr' ? 'FR' : 'EN'
    );
});
