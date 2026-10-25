// Année du copyright toujours à jour (aussi après un changement de langue)
const updateCopyrightYear = () => {
  const year = new Date().getFullYear();
  document.querySelectorAll("footer").forEach((footer) => {
    const walker = document.createTreeWalker(footer, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      const updated = node.nodeValue.replace(/©(\s?)20\d{2}/g, `©$1${year}`);
      if (updated !== node.nodeValue) node.nodeValue = updated;
    }
  });
};
updateCopyrightYear();
document.querySelectorAll("footer").forEach((footer) => {
  new MutationObserver(updateCopyrightYear).observe(footer, { childList: true, subtree: true, characterData: true });
});

// // MENUS HEADER
// // Ouverture ou Fermeture du menu principal
// document.getElementById('menu-toggle').addEventListener('click', function() {
//     document.getElementById('menu').classList.toggle('open');
// });

// // Ouverture ou Fermeture des sous-menus
// document.querySelectorAll('.sousMenu > a').forEach(link => {
//     link.addEventListener('click', function(e) {
        
//         const sousMenuContent = this.nextElementSibling;

//         // Vérifie si le sous-menu est déjà ouvert
//         if (sousMenuContent.style.display === "flex") {
//             sousMenuContent.style.display = "none";
//         } else {
//             // Ferme tous les sous-menus avant d'ouvrir 
//             document.querySelectorAll('.sousMenu-content').forEach(menu => menu.style.display = "none");
//             sousMenuContent.style.display = "flex";
//         }
//     });
// });


// // CHOIX & CHARGEMENT DE LA LANGUE
// document.addEventListener("DOMContentLoaded", function () {
//     const langButton = document.getElementById("lang-button");
//     const langList = document.getElementById("lang-list");
//     const langOptions = { fr: document.getElementById("lang-fr"), en: document.getElementById("lang-en") };

//     // Map des liens CV (au cas où tu en changes plus tard)
//     const cvLinks = {
//         fr: "cv/CV_Thomas_Houdard.pdf",
//         en: "cv/Resume_Thomas_Houdard.pdf"
//     };

//     // Fonction pour charger les traductions
// // Fonction pour charger les traductions (gère aussi les attributs : placeholder, title, aria-label, value…)
// function loadTranslations(lang) {
//   fetch("/translation.json")
//     .then(response => response.json())
//     .then(data => {
//       document.querySelectorAll("[data-key]").forEach(el => {
//         const key = el.getAttribute("data-key");
//         let val = data?.[key]?.[lang] ?? data?.[key]?.fr;
//         if (val == null) return;

//         const targetAttr = el.getAttribute("data-i18n-attr"); // ex: placeholder, title, value
//         // compat rétro : tu peux toujours forcer en ajoutant data-i18n-html="1"
//         const asHTML = el.getAttribute("data-i18n-html") === "1";

//         // 1) Détecter si la chaîne "ressemble" à du HTML (balises)
//         const looksLikeHTML = /<\/?[a-z][\s\S]*>/i.test(val);

//         // 2) Si ton JSON stocke des entités (&lt;strong&gt;...), on les décode
//         //    pour retrouver de "vraies" balises avant d'injecter.
//         if (looksLikeHTML && /&lt;|&gt;|&amp;/.test(val)) {
//           const ta = document.createElement("textarea");
//           ta.innerHTML = val;
//           val = ta.value; // conserve les balises sous forme de texte "<strong>..</strong>"
//         }

//         if (targetAttr) {
//           if (targetAttr === "value") el.value = val;
//           else el.setAttribute(targetAttr, val);
//         } else {
//           // 3) Rendu : HTML si explicitement demandé OU si on détecte des balises
//           if (asHTML || looksLikeHTML) {
//             el.innerHTML = val;  // <strong> sera bien rendu en gras
//           } else {
//             el.textContent = val;
//           }
//         }
//       });
//     })
//     .catch(console.error);
// }



//     // Fonction pour changer la langue
//     function switchLanguage(lang) {
//         localStorage.setItem("selectedLanguage", lang);
//         document.getElementById("current-lang-img").src = `/images/langSelect_${lang.toUpperCase()}.png`;
//         document.getElementById("current-lang-text").innerText = lang.toUpperCase();

//         // Masquer la langue actuelle dans le menu et afficher l'autre
//         Object.entries(langOptions).forEach(([key, el]) => {
//             el.style.display = key === lang ? "none" : "flex";
//         });

//         // ➜ Afficher UNIQUEMENT le bouton CV de la langue choisie
//         document.querySelectorAll(".cv-link").forEach(link => {
//             const isCurrentLang = link.dataset.lang === lang;
//             link.style.display = isCurrentLang ? "inline-block" : "none";
//         });

//         // (Optionnel) mettre à jour le href du bouton visible selon la map ci-dessus
//         const currentCvLink = document.querySelector(`.cv-link[data-lang="${lang}"]`);
//         if (currentCvLink && cvLinks[lang]) currentCvLink.href = cvLinks[lang];

//         loadTranslations(lang);
//         langList.style.display = "none"; // Fermer le menu après sélection
//     }

//     // Ouvrir/fermer le menu
//     if (langButton) {
//         langButton.addEventListener("click", (e) => {
//             langList.style.display = langList.style.display === "block" ? "none" : "block";
//             e.stopPropagation();
//         });
//     }

//     // Clic en dehors pour fermer
//     document.addEventListener("click", () => langList.style.display = "none");

//     // Choix de langue dans le menu
//     Object.entries(langOptions).forEach(([lang, el]) => {
//         if (el) el.addEventListener("click", () => switchLanguage(lang));
//     });

//     // Charger la langue enregistrée (ou FR par défaut)
//     switchLanguage(localStorage.getItem("selectedLanguage") || "fr");
    
// });



// /* ESTIMATEUR DE PRIX */
// document.addEventListener("DOMContentLoaded", () => {
//   const FORMSPREE_URL = "https://formspree.io/f/mqayadbr";

//   const params = new URLSearchParams(window.location.search);
//   let BASE_PRICE = parseInt(params.get("base"), 10);
//   if (isNaN(BASE_PRICE)) BASE_PRICE = 150;

//   const totalEl      = document.getElementById("total");
//   const qtyInput     = document.getElementById("qty");
//   const checkboxes   = document.querySelectorAll(".opt");

//   const form         = document.getElementById("devis-form");
//   const hiddenDetail = document.getElementById("estimation_detail");
//   const hiddenTotal  = document.getElementById("estimation_total");
//   const subjectInput = document.querySelector("input[name='_subject']");

//   const nameInput    = document.getElementById("clientName");
//   const emailInput   = document.getElementById("clientEmail");
//   const msgInput     = document.getElementById("clientMessage");

//   // --- Utils ---
//   const formatEuro = n => new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(n) + "€";
//   const getUnit = () => {
//     // fallback à 50 si pas de data-unit (pack dev)
//     const raw = qtyInput?.dataset.unit ?? "50";
//     const v = parseInt(raw, 10);
//     return isNaN(v) ? 50 : v;
//   };

//   // Mettre à jour le label "x XX€" une fois au chargement
//   const unitEl = document.getElementById("section-unit");
//   if (unitEl && qtyInput) unitEl.textContent = "x " + getUnit() + "€";

//   function getOptionLabel(cb){
//     if (cb.dataset.label) return cb.dataset.label.trim();
//     const wrap = cb.closest(".estimation-container")?.querySelector(".estimation-option");
//     return (wrap?.textContent || "Option").trim();
//   }

//   function getSelectionsLines(){
//     const lines = [];
//     checkboxes.forEach(cb => {
//       if (cb.checked){
//         const label = getOptionLabel(cb);
//         const price = parseInt(cb.dataset.price || "0", 10);
//         lines.push(`- ${label} (+${price}€)`);
//       }
//     });

//     const qty  = parseInt(qtyInput?.value || "0", 10);
//     const unit = getUnit();

//     if (!isNaN(qty) && qty > 0 && unit > 0) {
//       lines.push(`- Sections supplémentaires : ${qty} × ${unit}€`);
//     }
//     return lines;
//   }

//   function computeTotal(){
//     let total = BASE_PRICE;

//     checkboxes.forEach(cb => {
//       if (cb.checked) total += parseInt(cb.dataset.price || "0", 10);
//     });

//     const qty  = parseInt(qtyInput?.value || "0", 10);
//     const unit = getUnit();

//     if (!isNaN(qty) && qty > 0 && unit > 0) {
//       total += qty * unit;
//     }
//     return total;
//   }

//   function refreshUI(){
//     const total = computeTotal();
//     if (totalEl) totalEl.textContent = formatEuro(total);
//   }

//   function updateHiddenFields(){
//     const total = computeTotal();
//     const lines = getSelectionsLines();

//     const name = (nameInput?.value || "(non précisé)").trim();
//     const email = (emailInput?.value || "(non précisé)").trim();
//     const msg   = (msgInput?.value || "").trim();

//     const summary = [
//       `Nom du client : ${name}`,
//       `Email : ${email}`,
//       "",
//       "Options choisies :",
//       ...(lines.length ? lines : ["- Aucune"]),
//       "",
//       `Base : ${formatEuro(BASE_PRICE)}`,
//       `Total estimé : ${formatEuro(total)}`,
//       "",
//       (msg ? "Message du client :\n" + msg : "")
//     ].join("\n");

//     if (hiddenDetail) hiddenDetail.value = summary;
//     if (hiddenTotal)  hiddenTotal.value  = formatEuro(total);
//     if (subjectInput) subjectInput.value = `Demande de devis — ${name} — ${formatEuro(total)}`;
//   }

//   checkboxes.forEach(cb => cb.addEventListener("change", () => { refreshUI(); updateHiddenFields(); }));
//   [qtyInput, nameInput, emailInput, msgInput].forEach(el => {
//     if (el) el.addEventListener("input", () => { refreshUI(); updateHiddenFields(); });
//   });

//   if (form){
//     form.addEventListener("submit", async (e) => {
//       e.preventDefault();
//       updateHiddenFields();

//       if (!nameInput.value.trim() || !emailInput.value.trim()){
//         alert("Merci de renseigner votre nom et votre email.");
//         return;
//       }

//       try {
//         const data = new FormData(form);
//         const res = await fetch(FORMSPREE_URL, {
//           method: "POST",
//           headers: { "Accept": "application/json" },
//           body: data
//         });

//         if (res.ok) {
//           window.location.href = "https://thomashoudard.com/merci.html";
//         } else {
//           const j = await res.json().catch(()=>({}));
//           console.error("Formspree error:", j);
//           alert("Oups, envoi impossible pour le moment. Réessayez plus tard ou contactez-moi par email.");
//         }
//       } catch (err){
//         console.error(err);
//         alert("Erreur réseau. Vérifiez votre connexion et réessayez.");
//       }
//     });
//   }

//   refreshUI();
//   updateHiddenFields();
// });


// /* AVIS CLIENTS */
// document.addEventListener("DOMContentLoaded", function () {
//   const STORAGE_KEY = "reviews";
//   const PAGE_SIZE = 6;

//   // --- Utils
//   const escapeHTML = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
//   const fmtDate = d => new Date(d).toLocaleDateString(undefined, { year:'numeric', month:'short', day:'numeric' });
//   const starLine = n => "★★★★★".slice(0, n) + "☆☆☆☆☆".slice(0, 5 - n);

//   // --- Elements (IDs must match your HTML)
//   const form   = document.getElementById("review-form");
//   const nameIn = document.getElementById("reviewerName");
//   const msgIn  = document.getElementById("reviewMessage");
//   const listEl = document.getElementById("reviews-list");
//   const avgEl  = document.getElementById("reviews-average");
//   const cntEl  = document.getElementById("reviews-count");
//   const avgSt  = document.getElementById("reviews-average-stars");
//   const pag    = document.getElementById("reviews-pagination");
//   const prevBt = document.getElementById("reviews-prev");
//   const nextBt = document.getElementById("reviews-next");

//   let reviews = load();
//   let page = 0;

//   render();

//   // --- Submit handler with validation
//   if (form) {
//     form.addEventListener("submit", (e) => {
//       e.preventDefault(); // don't reload

//       const ratingEl = form.querySelector('input[name="rating"]:checked');
//       const rating = ratingEl ? Number(ratingEl.value) : 0;
//       const name = (nameIn?.value || "").trim();
//       const msg  = (msgIn?.value || "").trim();

//       if (!name) { alert("Merci d’indiquer votre nom."); return; }
//       if (!(rating >= 1 && rating <= 5)) { alert("Merci de choisir une note (1 à 5 étoiles)."); return; }
//       if (!msg) { alert("Merci d’écrire un court avis."); return; }

//       const review = {
//         name: escapeHTML(name),
//         rating,
//         message: escapeHTML(msg),
//         date: Date.now()
//       };
//       reviews.unshift(review);   // newest first
//       save(reviews);

//       form.reset();
//       page = 0;
//       render();
//     });
//   }

//   // --- Pagination buttons
//   prevBt?.addEventListener("click", () => { if (page > 0) { page--; render(); } });
//   nextBt?.addEventListener("click", () => { if ((page + 1) * PAGE_SIZE < reviews.length) { page++; render(); } });

//   // --- Functions
//   function load(){ try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); } catch { return []; } }
//   function save(d){ localStorage.setItem(STORAGE_KEY, JSON.stringify(d)); }

//   function render(){
//     // Average
//     const count = reviews.length;
//     const avg = count ? reviews.reduce((a,r)=>a+r.rating,0)/count : 0;
//     avgEl && (avgEl.textContent = avg.toFixed(1));
//     cntEl && (cntEl.textContent = count + ((localStorage.getItem("selectedLanguage")||"fr")==="fr" ? " avis" : " reviews"));
//     avgSt && (avgSt.textContent = starLine(Math.round(avg)));

//     // Page
//     const start = page * PAGE_SIZE;
//     const items = reviews.slice(start, start + PAGE_SIZE);
//     listEl.innerHTML = items.map(r => `
//       <article class="review-card">
//         <div class="review-head">
//           <div class="review-name">${r.name}</div>
//           <div class="review-stars" aria-label="${r.rating}/5">${starLine(r.rating)}</div>
//         </div>
//         <div class="review-date">${fmtDate(r.date)}</div>
//         <p class="review-text">${r.message}</p>
//       </article>
//     `).join("");

//     // Pagination state
//     const hasPrev = page > 0;
//     const hasNext = (page + 1) * PAGE_SIZE < reviews.length;
//     if (pag) pag.hidden = !(hasPrev || hasNext);
//     if (prevBt) prevBt.disabled = !hasPrev;
//     if (nextBt) nextBt.disabled = !hasNext;
//   }
// });

    // Burger
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");          // anime l’icône
    document.body.classList.toggle("menu-open"); // ouvre / ferme le menu
});

// Dropdown Portfolio (ouverture / fermeture en mobile)
const dropdown = document.querySelector(".dropdown");
const dropdownLink = document.querySelector(".dropdown > a");

dropdownLink.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    e.preventDefault(); // empêche la navigation / scroll
    dropdown.classList.toggle("open");
  }
});

// Quand on ferme le burger → on referme aussi le dropdown
burger.addEventListener("click", () => {
  if (!document.body.classList.contains("menu-open")) {
    dropdown.classList.remove("open");
  }
});


    const applyLang = (lang) => {
      document.querySelectorAll("[data-key]").forEach((el) => {
        const k = el.getAttribute("data-key");
        if (translations[lang][k]) el.innerHTML = translations[lang][k];
      });
      document.querySelectorAll(".lang-switch button").forEach((b) => {
        b.classList.toggle("active", b.dataset.lang === lang);
      });
      document.documentElement.lang = lang;
      localStorage.setItem("lang", lang);
    };

    const initLang = () => {
      const stored = localStorage.getItem("lang") || "fr";
      applyLang(stored);
    };

    document.getElementById("langSwitch").addEventListener("click", (e) => {
      if (e.target.matches("button[data-lang]")) applyLang(e.target.dataset.lang);
    });




    // Nav condense on scroll
    const navEl = document.querySelector("nav");
    const onNavScroll = () => navEl.classList.toggle("scrolled", window.scrollY > 40);
    window.addEventListener("scroll", onNavScroll, { passive: true });
    onNavScroll();

    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    // Prefetch CV
    ["cv/CV_Thomas_Houdard.pdf", "cv/Resume_Thomas_Houdard.pdf"].forEach((url) => {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = url;
      document.head.appendChild(link);
    });

    initLang();

    // Estimateur — pages commande-*.html (no-op si absent de la page)
    (function () {
      const form = document.getElementById("devis-form");
      if (!form) return;

      const totalEl = document.getElementById("total");
      const qtyInput = document.getElementById("qty");
      const checkboxes = document.querySelectorAll(".opt");
      const quoteBoxes = document.querySelectorAll(".opt-quote");
      const hiddenDetail = document.getElementById("estimation_detail");
      const hiddenTotal = document.getElementById("estimation_total");
      const subjectInput = form.querySelector('input[name="_subject"]');
      const nameInput = document.getElementById("clientName");
      const emailInput = document.getElementById("clientEmail");
      const msgInput = document.getElementById("clientMessage");

      const params = new URLSearchParams(window.location.search);
      let BASE_PRICE = parseInt(params.get("base"), 10);
      if (isNaN(BASE_PRICE)) BASE_PRICE = parseInt(form.dataset.basePrice || "0", 10) || 0;

      const formatEuro = (n) => new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(n) + "€";
      const getUnit = () => {
        const v = parseInt(qtyInput?.dataset.unit ?? "0", 10);
        return isNaN(v) ? 0 : v;
      };

      const unitEl = document.getElementById("section-unit");
      if (unitEl && qtyInput) {
        const unit = getUnit();
        unitEl.textContent = unit > 0 ? "x " + formatEuro(unit) : "";
      }

      // Parcourt chaque bloc .estimation-container et en tire une ligne de résumé,
      // quel que soit son contenu (case à cocher tarifée, quantité, select, cases
      // informatives ou champ texte libre) — permet de réutiliser la même logique
      // pour les estimateurs chiffrés (dev/design) et le questionnaire (complet).
      function getSelectionsLines() {
        const lines = [];
        document.querySelectorAll(".estimation-container").forEach((container) => {
          const priced = container.querySelector("input.opt");
          if (priced) {
            if (priced.checked) {
              const label = (priced.parentElement?.querySelector("span")?.textContent || "Option").trim();
              const price = parseInt(priced.dataset.price || "0", 10);
              lines.push("- " + label + (price ? " (+" + formatEuro(price) + ")" : ""));
            }
            return;
          }
          const quote = container.querySelector("input.opt-quote");
          if (quote) {
            if (quote.checked) {
              const label = (quote.parentElement?.querySelector("span")?.textContent || "Option").trim();
              lines.push("- " + label + " (sur estimation)");
            }
            return;
          }
          const qty = container.querySelector("#qty");
          if (qty) {
            const val = parseInt(qty.value || "0", 10);
            if (val > 0) {
              const label = (container.querySelector("label")?.textContent || "Quantité").trim();
              const unit = parseInt(qty.dataset.unit || "0", 10);
              lines.push("- " + label + " : " + val + (unit ? " × " + formatEuro(unit) : ""));
            }
            return;
          }
          const select = container.querySelector("select");
          if (select) {
            if (select.value) {
              const label = (container.querySelector("label")?.textContent || "Choix").trim();
              const choice = select.options[select.selectedIndex]?.textContent.trim() || select.value;
              lines.push("- " + label + " : " + choice);
            }
            return;
          }
          const infoBoxes = container.querySelectorAll("input.opt-info");
          if (infoBoxes.length) {
            const checked = [...infoBoxes]
              .filter((cb) => cb.checked)
              .map((cb) => (cb.nextElementSibling?.textContent || "").trim())
              .filter(Boolean);
            if (checked.length) {
              const groupLabel = (container.querySelector("span[data-key]")?.textContent || "Fonctionnalités").trim();
              lines.push("- " + groupLabel + " " + checked.join(", "));
            }
            return;
          }
          const textInput = container.querySelector('input[type="text"]:not(.qty-input)');
          if (textInput && textInput.value.trim()) {
            const label = (container.querySelector("label")?.textContent || "Précision").trim();
            lines.push("- " + label + " : " + textInput.value.trim());
          }
        });
        return lines;
      }

      function computeTotal() {
        let total = BASE_PRICE;
        checkboxes.forEach((cb) => { if (cb.checked) total += parseInt(cb.dataset.price || "0", 10); });
        const qty = parseInt(qtyInput?.value || "0", 10);
        const unit = getUnit();
        if (qty > 0) total += qty * unit;
        return total;
      }

      // Une case "sur estimation" cochée (fonctionnalité à charge de travail
      // trop variable pour un prix fixe) fait basculer l'affichage du total
      // en "À partir de X€ + estimation des fonctionnalités spécifiques"
      // plutôt que de donner un faux chiffre précis.
      function hasQuoteItems() {
        return [...quoteBoxes].some((cb) => cb.checked);
      }

      function displayTotal() {
        const amount = formatEuro(computeTotal());
        if (!hasQuoteItems()) return amount;
        const isEn = document.documentElement.lang === "en";
        return isEn
          ? "From " + amount + " + specific features on quote"
          : "À partir de " + amount + " + fonctionnalités spécifiques sur estimation";
      }

      function refreshUI() {
        if (totalEl) totalEl.textContent = displayTotal();
      }

      function updateHiddenFields() {
        const name = (nameInput?.value || "(non précisé)").trim();
        const email = (emailInput?.value || "(non précisé)").trim();
        const msg = (msgInput?.value || "").trim();
        const lines = getSelectionsLines();
        const totalLine = totalEl
          ? "Estimation indicative : " + displayTotal()
          : "Sur devis — projet à qualifier";

        const summary = [
          "Nom : " + name,
          "Email : " + email,
          "",
          "Détails :",
          ...(lines.length ? lines : ["- Aucune précision sélectionnée"]),
          "",
          totalEl ? "Base : " + formatEuro(BASE_PRICE) : "Base : sur devis",
          totalLine,
          "",
          msg ? "Message :\n" + msg : "",
        ].join("\n");

        if (hiddenDetail) hiddenDetail.value = summary;
        if (hiddenTotal) hiddenTotal.value = totalEl ? displayTotal() : "Sur devis";
        if (subjectInput) {
          subjectInput.value = totalEl
            ? "Demande — " + name + " — " + displayTotal()
            : "Demande d'estimation — " + name;
        }
      }

      checkboxes.forEach((cb) => cb.addEventListener("change", () => { refreshUI(); updateHiddenFields(); }));
      quoteBoxes.forEach((cb) => cb.addEventListener("change", () => { refreshUI(); updateHiddenFields(); }));
      document.querySelectorAll(".estimation-options input.opt-info, .estimation-options select").forEach((el) => {
        el.addEventListener("change", () => { refreshUI(); updateHiddenFields(); });
      });
      [qtyInput, nameInput, emailInput, msgInput, document.getElementById("q-budget")].forEach((el) => {
        if (el) el.addEventListener("input", () => { refreshUI(); updateHiddenFields(); });
      });

      refreshUI();
      updateHiddenFields();
    })();

