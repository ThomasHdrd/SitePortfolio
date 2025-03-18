// Ouverture du menu principal
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('open');
});

// Ouverture des sous-menus UNIQUEMENT au clic
document.querySelectorAll('.sousMenu > a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const parent = this.parentElement;
        parent.classList.toggle('active');
    });
});
