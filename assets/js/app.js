document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('mobile-menu-button');
    const sidebar = document.getElementById('mobile-menu');
    const icons = { close: document.getElementById('close'), open: document.getElementById('openmenu') };
    btn.addEventListener('click', () => {
        icons.close.classList.toggle('hidden');
        icons.open.classList.toggle('hidden');
        requestAnimationFrame(() => {
            sidebar.classList.toggle('open');
        });
    });
});
