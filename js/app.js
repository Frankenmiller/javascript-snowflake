// Function to drop preloader once content loads completely

window.addEventListener('load', () => {
    const preloader = document.querySelector('.preload');
    preloader.classList.add('preload-finish');
});