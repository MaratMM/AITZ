//добавление других js  к общему файлу

//необходимая часть , не удалять!!!!!!!!!!
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

//основной скрипт

window.addEventListener('DOMContentLoaded', function () {
if (this.document.querySelector('.swiper-association-slider')) {
    @@include('swiper-association-slider.js');
}
    
    //////////////функция вывода размеров   console.log(salePrice[i].getBoundingClientRect().width);
    /////автоматический маргин-топ для main и скролл для наверх для правильного отображения//////////////
    const marginTop = () => {
        document.querySelector('main').style.marginTop = document.querySelector('header').getBoundingClientRect().height + 0 + 'px';
    }
    marginTop();
    window.scrollTo({
        top: 0,
        left: 0
    });
    window.addEventListener("resize", marginTop);

    this.document.querySelector('.button-close-message-info')?.addEventListener('click', () => {
        document.querySelector('.message-info').style.display = 'none';
        marginTop();
    })

    //////кнопка меню бургера//////////////
    document.querySelector('.open-close-menu-button__item')?.addEventListener("click", () => {
        document.querySelector('.open-close-menu-button__item').classList.toggle('active');
        document.querySelector('.header-navigation').classList.toggle('active');
        document.querySelector('body').classList.toggle('active');
    });

    //////////////смена языка RU и EN///////////////////
    for (let i = 0; i < document.querySelectorAll('.header-main__language-item').length; i++) {
        document.querySelectorAll('.header-main__language-item')[i].addEventListener("click", () => {
            if (document.querySelectorAll('.header-main__language-item')[i].classList.contains('active')) { } else {
                for (let k = 0; k < document.querySelectorAll('.header-main__language-item').length; k++) {
                    document.querySelectorAll('.header-main__language-item')[k].classList.toggle('active');
                }
            }
        })
    }

    ////////////////для красивого появления поиска////////////////////
    this.document.querySelector('.header-main__icon_search')?.addEventListener('click', () => {
        this.document.querySelector('.header-main__icon_search').classList.toggle('active');
        this.document.querySelector('.header-main__input-search').classList.toggle('active');
        this.document.querySelector('.popravka-input').classList.toggle('active');
    })

    ////////////////////////////////////////////////////////
    document.querySelector('.header-main__icon_authorization')?.addEventListener('click', () => {
        document.querySelector('.popup-authorization-wrapper').classList.add('visually');
        document.querySelector('.popup-authorization').classList.add('visually');
        if (document.querySelector('.popup-authorization-wrapper').classList.contains('visually')) {
            document.querySelector('.close-popup-authorization')?.addEventListener('click', () => {
                document.querySelector('.popup-authorization-wrapper').classList.remove('visually');
            })
            document.querySelector('.popup-authorization-frame')?.addEventListener('click', () => {
                document.querySelector('.popup-authorization-wrapper').classList.remove('visually');
            })
        };

    })

});


