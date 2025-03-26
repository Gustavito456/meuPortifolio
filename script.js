const toggleThemeButton = document.getElementById('toggle-theme');
const body = document.body;
const sectionTitles = document.querySelectorAll('section h2');

let clickCount = 0;

toggleThemeButton.addEventListener('click', () => {
    clickCount++;
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        toggleThemeButton.textContent = 'Trocar para modo claro';
    } else {
        toggleThemeButton.textContent = 'Trocar para modo escuro';
    }
    if (clickCount === 15) {
        window.open('https://www.youtube.com/@desenhandoamatematica4772', '_blank');
    }
});

sectionTitles.forEach((title) => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});