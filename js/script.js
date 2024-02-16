window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navbar-container'),
    menuItem = document.querySelectorAll('.navbar__menu-items_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('navbar-container_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('navbar-container_active');
        })
    })
})