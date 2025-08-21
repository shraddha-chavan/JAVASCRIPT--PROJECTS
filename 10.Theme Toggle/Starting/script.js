let button = document.getElementById('theme-toggle')
let lightTheme = true;

button.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    lightTheme = !lightTheme
    button.textContent = lightTheme === true ? 'Dark Theme' : 'Light Theme';
})
