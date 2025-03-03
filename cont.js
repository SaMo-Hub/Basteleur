const themeToggleButton = document.getElementById('theme-toggle');

themeToggleButton.addEventListener('click', () => {
    // Toggle la classe dark-mode sur le body
    document.body.classList.toggle('dark-mode');
    
    // Modifier le texte du bouton en fonction du mode actif
    if (document.body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = 'Light Mode';
    } else {
        themeToggleButton.textContent = 'Dark Mode';
    }
});