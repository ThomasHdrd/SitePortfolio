// Récupérer le bouton hamburger et le menu
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');  // Ça doit être bon, mais vérifie que c'est bien l'élément que tu veux

// Ajouter l'événement de clic pour ouvrir/fermer le menu
menuToggle.addEventListener('click', function() {
    menu.classList.toggle('open'); // Ajouter ou retirer la classe 'open'
});