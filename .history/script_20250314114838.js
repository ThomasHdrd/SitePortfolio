// MENUS HEADER
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


// CHOIX & CHARGEMENT DE LA LANGUE
document.addEventListener("DOMContentLoaded", function () {
    const langButton = document.getElementById("lang-button");
    const langList = document.getElementById("lang-list");
    const langOptions = { fr: document.getElementById("lang-fr"), en: document.getElementById("lang-en") };
    const cvLink = document.querySelector(".moncv");

    // Lien des CV
    const cvLinks = {
        fr: "cv/CV_Thomas_Houdard_FR.pdf",
        en: "cv/CV_Thomas_Houdard_EN.pdf"
    };

    //Fonction pour charger les traductions
    function loadTranslations(lang) {
        fetch("translation.json")
            .then(response => response.json())
            .then(data => {
                document.querySelectorAll("[data-key]").forEach(el => {
                    const key = el.getAttribute("data-key");
                    if (data[key]?.[lang]) el.innerText = data[key][lang];
                });
            })
            .catch(console.error);
    }

    //Fonction pour changer la langue
    function switchLanguage(lang) {
        localStorage.setItem("selectedLanguage", lang);
        document.getElementById("current-lang-img").src = `images/langSelect_${lang.toUpperCase()}.png`;
        document.getElementById("current-lang-text").innerText = lang.toUpperCase();
        
        // Masquer la langue actuelle et afficher l'autre
        Object.entries(langOptions).forEach(([key, el]) => el.style.display = key === lang ? "none" : "flex");

        // Mettre à jour le lien du CV
        cvLink.setAttribute("href", cvLinks[lang]);

        loadTranslations(lang);
        langList.style.display = "none"; // Fermer le menu après sélection
    }

    // Ouvrir ou fermer le menu au clic
    langButton.addEventListener("click", (e) => {
        langList.style.display = langList.style.display === "block" ? "none" : "block";
        e.stopPropagation();
    });


    //Clic en dehors du menu pour le fermer
    document.addEventListener("click", () => langList.style.display = "none");

    //Gestion du choix de langue
    Object.entries(langOptions).forEach(([lang, el]) => el.addEventListener("click", () => switchLanguage(lang)));
    
    //Charger la langue enregistrée
    switchLanguage(localStorage.getItem("selectedLanguage") || "fr");
});