const toggleThemeButton = document.getElementById('toggle-theme');
const sections = document.querySelectorAll('section');
const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    updateThemeIcon();
    updateFavicon();
}
const updateFavicon = () => {
    const isDarkMode = document.body.classList.contains('dark-mode');
    const favicon = document.querySelector("link[rel='icon']");
    const color = isDarkMode ? '81d4fa' : '007bff';

    favicon.href = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
        <style>
            .bg { fill: %23${color}; }
            .text { fill: %23fff; font-family: sans-serif; font-size: 50px; }
        </style>
        <rect class='bg' width='100' height='100' rx='15'/>
        <text class='text' x='50%' y='68%' text-anchor='middle'>JG</text>
    </svg>`;
};
let themeClicks = 0;

const updateThemeIcon = () => {
    const isDarkMode = document.body.classList.contains('dark-mode');
    toggleThemeButton.textContent = isDarkMode ? '🌙' : '☀️';
};

const handleThemeToggle = () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    themeClicks++;

    if (themeClicks === 5) {
        window.open('https://www.youtube.com/@desenhandoamatematica4772', '_blank');
        themeClicks = 0;
    }
    updateFavicon();
    updateThemeIcon();
};

const toggleSection = (section) => {
    const content = section.querySelector('.section-content');
    const arrow = section.querySelector('.arrow');
    content.classList.toggle('active');
    arrow.style.transform = content.classList.contains('active') ? 'rotate(90deg)' : 'rotate(0deg)';
};

document.addEventListener('DOMContentLoaded', () => {
    updateThemeIcon();
    initializeTheme();

    sections.forEach(section => {
        const title = section.querySelector('h2');
        title.innerHTML = `<span class="arrow">▹</span>${title.textContent}`;
        
        title.addEventListener('click', () => {
            toggleSection(section);
        });
    });
});

toggleThemeButton.addEventListener('click', handleThemeToggle);