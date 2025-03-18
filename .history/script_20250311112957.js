const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');  // Ã‡a doit Ãªtre bon, mais vÃ©rifie que c'est bien l'Ã©lÃ©ment que tu veux

menuToggle.addEventListener('click', function() {
    menu.classList.toggle('open'); 
});
