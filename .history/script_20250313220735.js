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


document.getElementById('lang-toggle').addEventListener('click', function () {
    document.getElementById('lang-list').style.display =
        document.getElementById('lang-list').style.display === 'block' ? 'none' : 'block';
});

document.getElementById('lang-fr').addEventListener('click', function () {
    switchLanguage('fr');
});

document.getElementById('lang-en').addEventListener('click', function () {
    switchLanguage('en');
});

function switchLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    document.querySelectorAll('.lang').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.lang.' + lang).forEach(el => el.style.display = 'block');

    document.getElementById('current-lang').innerText = lang === 'fr' ? 'Français' : 'English';
    document.getElementById('lang-list').style.display = 'none'; // Ferme le menu après sélection
}

// Charger la langue enregistrée
document.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem('selectedLanguage') || 'fr';
    switchLanguage(savedLang);
});

