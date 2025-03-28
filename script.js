const toggleThemeButton = document.getElementById('toggle-theme');
const sections = document.querySelectorAll('section');
let themeClicks = 0;

const updateThemeIcon = () => {
    const isDarkMode = document.body.classList.contains('dark-mode');
    toggleThemeButton.textContent = isDarkMode ? '🌙' : '☀️';
};

const handleThemeToggle = () => {
    document.body.classList.toggle('dark-mode');
    themeClicks++;
    updateThemeIcon();

    if (themeClicks === 5) {
        window.open('https://www.youtube.com/@desenhandoamatematica4772', '_blank');
        themeClicks = 0;
    }
};

const toggleSection = (section) => {
    const content = section.querySelector('.section-content');
    const arrow = section.querySelector('.arrow');
    content.classList.toggle('active');
    arrow.style.transform = content.classList.contains('active') ? 'rotate(90deg)' : 'rotate(0deg)';
};

document.addEventListener('DOMContentLoaded', () => {
    updateThemeIcon();

    sections.forEach(section => {
        const title = section.querySelector('h2');
        title.innerHTML = `<span class="arrow">▹</span>${title.textContent}`;
        
        title.addEventListener('click', () => {
            toggleSection(section);
        });
    });
});

toggleThemeButton.addEventListener('click', handleThemeToggle);