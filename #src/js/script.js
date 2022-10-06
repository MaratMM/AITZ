//добавление других js  к общему файлу/////////////////


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
    window.addEventListener("resize", participantsImgInjection => {
        if (window.screen.width <= 768) {
            for (let k = 0; k < document.querySelectorAll('.participants__item').length; k++) {
                document.querySelectorAll('.participants__item__about-who')[k].append(document.querySelectorAll('.participants__item__img')[k]);
            }
        } else {
            for (let k = 0; k < document.querySelectorAll('.participants__item').length; k++) {
                document.querySelectorAll('.participants__item__about')[k].before(document.querySelectorAll('.participants__item__img')[k]);
            }
        }
    });
    

    /////////////подключение слайдера//////////////////////////
    if (this.document.querySelector('.swiper-association-slider')) {
        @@include('swiper-association-slider.js');
    }

    ///////////////////правильное офрмление выпадающего списка в инпутах ЛК + изменение булетов////////////////////
    if (this.document.querySelector('.personal-page')) {
        @@include('select-navigation.js');
    }

    if (this.document.querySelector('.bullets-for-news')) {
        let bulletBack = this.document.querySelector('.bullets-for-news__back');
        let bulletNext = this.document.querySelector('.bullets-for-news__next');
        let bulletsOfInput = this.document.querySelectorAll('.bullets-for-news__numbers>div');
        bulletNext.addEventListener('click', () => {
            bulletsOfInput.forEach(bulletOfInput => {
                bulletOfInput.textContent = Number(bulletOfInput.textContent) + 1;
            })
        })
        bulletBack.addEventListener('click', () => {
            if (Number(bulletsOfInput[0].textContent) > 1) {
                bulletsOfInput.forEach(bulletOfInput => {
                    bulletOfInput.textContent = Number(bulletOfInput.textContent) - 1;
                })
            };
        })
        bulletsOfInput.forEach(bulletOfInput => {
            bulletOfInput.addEventListener('click', () => {
                bulletsOfInput.forEach(bulletOfInput => {
                    bulletOfInput.classList.remove('active');
                })
                bulletOfInput.classList.add('active');
            })
        });
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
    document.querySelector('.open-close-menu-button')?.addEventListener("click", () => {
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
        this.document.querySelector('.popravka-input-search-special1').classList.toggle('active');
    })

    let orderBySerch = () => {
        if (this.document.querySelector('.popravka-input-search-special1') && this.window.screen.width <= 425) {
            this.document.querySelector('.header-main__input-search').classList.add('active');
            this.document.querySelector('.header-main').append(this.document.querySelector('.popravka-input-search-special1'));
        } else {
            this.document.querySelector('.header-main__input-search').classList.remove('active');
            this.document.querySelector('.header-main__icon_authorization').before(this.document.querySelector('.popravka-input-search-special1'));
        }
    }
    orderBySerch();
    window.addEventListener("resize", orderBySerch);


    /////////////////////////кнопка авторизации///////////////////////////////
    document.querySelector('.popup-authorization__password-show')?.addEventListener('click', () => {
        if (document.getElementById('password-input-authorization').getAttribute('type') == 'password') {
            document.getElementById('password-input-authorization').setAttribute('type', 'text');
        } else {
            document.getElementById('password-input-authorization').setAttribute('type', 'password');
        }
    })
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


