document.getElementById('themeToggle').addEventListener('click', function() {
    const currentTheme = document.body.className;
    document.body.className = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', document.body.className);
});

// Set the initial theme
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.className = savedTheme;
});
