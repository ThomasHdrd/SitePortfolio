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
    const langList = document.getElementById("lang-list");
    const langFr = document.getElementById("lang-fr");
    const langEn = document.getElementById("lang-en");

    // Fonction pour charger les traductions
    function loadTranslations(lang) {
        fetch("translations.json")
            .then(response => response.json())
            .then(data => {
                document.querySelectorAll("[data-key]").forEach(element => {
                    const key = element.getAttribute("data-key");
                    if (data[key] && data[key][lang]) {
                        element.innerText = data[key][lang]; 
                    }
                });
            })
            .catch(error => console.error("Erreur de chargement des traductions:", error));
    }

    // Fonction pour changer la langue
    function switchLanguage(lang) {
        localStorage.setItem("selectedLanguage", lang);

        // Mise à jour du bouton de langue
        document.getElementById("current-lang-img").src = `images/langSelect_${lang.toUpperCase()}.png`;
        document.getElementById("current-lang-text").innerText = lang.toUpperCase();

        // Charger les traductions dynamiquement
        loadTranslations(lang);
    }

    // Gestion du choix de langue
    langFr.addEventListener("click", () => switchLanguage("fr"));
    langEn.addEventListener("click", () => switchLanguage("en"));

    // Charger la langue enregistrée et appliquer la traduction
    const savedLang = localStorage.getItem("selectedLanguage") || "fr";
    switchLanguage(savedLang);
});


function loadTranslations(lang) {
    fetch("translations.json")
        .then(response => response.json())
        .then(data => {
            console.log("Traductions chargées :", data); // Vérifier que les traductions sont bien récupérées
            
            document.querySelectorAll("[data-key]").forEach(element => {
                const key = element.getAttribute("data-key");
                if (data[key] && data[key][lang]) {
                    element.innerText = data[key][lang];
                } else {
                    console.error(`Clé de traduction manquante : ${key}`);
                }
            });
        })
        .catch(error => console.error("Erreur de chargement des traductions :", error));
}




