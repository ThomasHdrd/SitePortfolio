<script>
    // Création du bouton hamburger via JS pour conserver le HTML intact
    document.addEventListener("DOMContentLoaded", function() {
        const nav = document.querySelector('nav');
        
        const menuToggle = document.createElement('div');
        menuToggle.classList.add('menu-toggle');
        menuToggle.innerHTML = '<span></span><span></span><span></span>';
        
        nav.appendChild(menuToggle);

        const menu = document.querySelector('.menu');

        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    });
</script>
