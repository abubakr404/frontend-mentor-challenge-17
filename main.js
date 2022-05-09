let dropdownMenus = document.querySelectorAll('.dropdown');
let menuToggle = document.querySelector('.menu-toggle');
let overlay = document.createElement('div');

dropdownMenus.forEach (function (menu) {
    menu.querySelector('button').addEventListener('click', function(){
        menu.querySelector('button').querySelector('img').src =
            /images\/icon-arrow-down.svg/.test(
                menu.querySelector('button').querySelector('img').src
            )
            ? 'images/icon-arrow-up.svg' :
            'images/icon-arrow-down.svg';
        menu.querySelector('ul').classList.toggle('active');
    })
})
menuToggle.addEventListener('click', function(){
    menuToggle.querySelector('img').src =
        /images\/icon-menu.svg/.test(
            menuToggle.querySelector('img').src
        )
        ? 'images/icon-close-menu.svg' :
        'images/icon-menu.svg';
    document.querySelector('.header-container').classList.toggle('active');
    if (document.querySelector('.header-container').classList.contains('active')) {
        menuToggle.parentElement.appendChild(overlay).classList.add('overlay');
    }
    else if (document.querySelector('.overlay') !== null) {
        document.querySelector('.overlay').remove();
    }
})