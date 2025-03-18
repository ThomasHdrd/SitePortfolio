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



document.addEventListener("DOMContentLoaded", function () {
    const langButton = document.getElementById("lang-button");
    const langList = document.getElementById("lang-list");
    const langFr = document.getElementById("lang-fr");
    const langEn = document.getElementById("lang-en");
    
    // Fonction pour changer la langue
    function switchLanguage(lang, flag, text) {
        localStorage.setItem("selectedLanguage", lang);
        langButton.setAttribute("data-lang", lang);
        document.getElementById("current-lang-img").src = flag;
        document.getElementById("current-lang-text").innerText = text;
        langList.style.display = "none";

        // Masquer la langue sélectionnée
        langFr.style.display = lang === "fr" ? "none" : "flex";
        langEn.style.display = lang === "en" ? "none" : "flex";

        // Mise à jour du contenu du site
        document.querySelectorAll(".lang").forEach(el => el.style.display = "none");
        document.querySelectorAll(`.lang.${lang}`).forEach(el => el.style.display = "block");
    }

    // Gestion du clic sur le bouton de langue
    langButton.addEventListener("click", function () {
        langList.style.display = langList.style.display === "block" ? "none" : "block";
    });

    // Gestion du choix de langue
    langFr.addEventListener("click", () => switchLanguage("fr", "images/langSelect_FR.png", "FR"));
    langEn.addEventListener("click", () => switchLanguage("en", "images/langSelect_EN.png", "EN"));

    // Charger la langue enregistrée
    const savedLang = localStorage.getItem("selectedLanguage") || "fr";
    switchLanguage(savedLang, `images/langSelect_${savedLang.toUpperCase()}.png`, savedLang.toUpperCase());
});



