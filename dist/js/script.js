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

    let participantsImgInjection = () => {
        if (window.screen.width <= 768) {
            for (let k = 0; k < document.querySelectorAll('.participants__item').length; k++) {
                document.querySelectorAll('.participants__item__about-who')[k].append(document.querySelectorAll('.participants__item__img')[k]);
            }
        } else {
            for (let k = 0; k < document.querySelectorAll('.participants__item').length; k++) {
                document.querySelectorAll('.participants__item__about')[k].before(document.querySelectorAll('.participants__item__img')[k]);
            }
        }
    }
    participantsImgInjection();
    window.addEventListener("resize", participantsImgInjection)


    /////////////подключение слайдера//////////////////////////
    if (this.document.querySelector('.swiper-association-slider')) {
        const swiper = new Swiper('.swiper-association-slider', {
  // Optional parameters
  loop: true,
  updateOnWindowResize: true,
  // Responsive breakpoints
  
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 4,
      spaceBetween: 0
    }
  },
  autoplay: {
    delay: 3000,
  }

});;
    }

    ///////////////////правильное офрмление выпадающего списка в инпутах ЛК + изменение булетов////////////////////
    if (this.document.querySelector('.personal-page')) {
        let injection = (arg1, arg2) => {
    return (`<${arg1} class="personal-page__navigation">
    <${arg2}>Библиотека</${arg2}>
    <${arg2}>Комитеты</${arg2}>
    <${arg2}>Комитет по коммуникациям</${arg2}>
    <${arg2}>Комитет по регуляторным вопросам</${arg2}>
    <${arg2}>Комитет по политике в области ответственного отношения к здоровью</${arg2}>
    <${arg2}>Комитет по этике</${arg2}>
</${arg1}>`);
}
let injectionFunc = () => {
    if (screen.width > 700) {
        document.querySelector('.personal-page').insertAdjacentHTML('afterbegin', injection("div", "div"));
    } else {
        document.querySelector('.personal-page__inputs').insertAdjacentHTML('beforebegin', injection("select", "option"));
    };
    
    const selectOptions = document.querySelectorAll('.personal-page__navigation>div');
    selectOptions.forEach(selectOption => {
        selectOption.addEventListener('click', () => {
            selectOptions.forEach(selectOption => {
                selectOption.classList.remove('active');
            });
            selectOption.classList.add('active');
        })
    });
}
injectionFunc();
window.addEventListener('resize', () => {
    if(document.querySelector('.personal-page__navigation')) {
        document.querySelector('.personal-page__navigation').remove();
    }
    injectionFunc();
});

;
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

    ////////////////для красивого появления поиска  поставь////////////////////
    
    this.document.querySelector('button.button-for-search').addEventListener('click', () => {
        this.document.querySelector('.important-header-serch').classList.toggle('active');
    })
    
    
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


