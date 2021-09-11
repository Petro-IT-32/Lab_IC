document.addEventListener("DOMContentLoaded", () => {
    const $menuButton = document.querySelector('.menu-btn'),
        $hideMenu = document.querySelector('.hide-menu'),
        $hideMenuItem = document.querySelectorAll('.hide-menu__item');
    
    $menuButton.addEventListener('click', function () {
        $hideMenu.classList.toggle('active');
    });

    $hideMenuItem.forEach(el => {
        el.addEventListener('click', function () {
            $hideMenu.classList.remove('active');
        });
    });
});
