document.addEventListener('DOMContentLoaded', function() {
    var currentURL = window.location.href;

    var menuItems = document.querySelectorAll('.navbar__menu-items_item a');

    menuItems.forEach(function(item) {
        if (item.getAttribute('href') === currentURL) {
            item.classList.add('active');
        }
    });
});