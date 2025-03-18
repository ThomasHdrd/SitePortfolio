document.querySelectorAll('.sousMenu > a').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le comportement par défaut
        item.parentElement.classList.toggle('active'); // affiche/masque le sous-menu
    });
});
