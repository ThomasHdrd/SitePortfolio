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



// CHOIX DE LANGUE
document.addEventListener("DOMContentLoaded", function () {
    const langButton = document.getElementById("lang-button");
    const langFr = document.getElementById("lang-fr");
    const langEn = document.getElementById("lang-en");

    // Fonction pour charger les traductions
    function loadTranslations(lang) {
        fetch("./translations.json") // Assurez-vous que le fichier JSON est bien accessible
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erreur de chargement du fichier translations.json");
                }
                return response.json();
            })
            .then(data => {
                document.querySelectorAll("[data-key]").forEach(element => {
                    const key = element.getAttribute("data-key");
                    if (data[key] && data[key][lang]) {
                        element.innerText = data[key][lang];
                    } else {
                        console.warn(`Clé de traduction manquante : ${key}`);
                    }
                });
            })
            .catch(error => console.error("Erreur de chargement des traductions :", error));
    }

    // Fonction pour changer la langue
    function switchLanguage(lang) {
        localStorage.setItem("selectedLanguage", lang); // Sauvegarde la langue dans le stockage local
        document.getElementById("current-lang-img").src = `images/langSelect_${lang.toUpperCase()}.png`;
        document.getElementById("current-lang-text").innerText = lang.toUpperCase();
        loadTranslations(lang);
    }

    // Gestion du choix de langue
    langFr.addEventListener("click", () => switchLanguage("fr"));
    langEn.addEventListener("click", () => switchLanguage("en"));

    // Charger la langue enregistrée et appliquer la traduction au démarrage
    const savedLang = localStorage.getItem("selectedLanguage") || "fr";
    switchLanguage(savedLang);
});




