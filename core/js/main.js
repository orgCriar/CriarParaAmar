// arquivo js IEI+E
(function ReadJs(win,doc) {
    'use strict';

    const header = doc.querySelector("header");

    win.addEventListener ("scroll", function() {
        header.classList.toggle ("sticky", win.scrollY > 0);
    });

    let menu = doc.querySelector('#menu-icon');
    let navbar = doc.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
    };

    win.onscroll = () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('open');
    };

})(window, document);

