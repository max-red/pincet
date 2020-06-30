'use strict';

document.querySelector('#link').onclick = function () {
    if (document.querySelector('.promo__links').style.display == 'block') {
        document.querySelector('.promo__links').style.display = 'none';
    } else {
        document.querySelector('.promo__links').style.display = 'block';
    }
};

document.querySelectorAll('.button').forEach(item => item.onclick = function () {
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('#order').style.display = 'block';
});

document.querySelector('#modal').onclick = function () {
    document.querySelector('#order').style.display = 'none';
    document.querySelector('#thanks').style.display = 'block';
};

document.querySelectorAll('.modal__close').forEach(item => item.onclick = function () {
    document.querySelector('#order').style.display = 'none';
    document.querySelector('#thanks').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';
});

document.querySelector('.header__map').onmouseover = function () {
    document.querySelector('.header__iframe').style.display = 'block';
};

document.querySelector('.header__map').onmouseout = function () {
    document.querySelector('.header__iframe').style.display = 'none';
};