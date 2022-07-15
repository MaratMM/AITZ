//добавление других js  к общему файлу


//необходимая часть , не удалять!!!!!!!!!!
// function testWebP(callback) {
//     var webP = new Image();
//     webP.onload = webP.onerror = function () {
//         callback(webP.height == 2);
//     };
//     webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// }
// testWebP(function (support) {
//     if (support == true) {
//         document.querySelector('body').classList.add('webp');
//     } else {
//         document.querySelector('body').classList.add('no-webp');
//     }
// });

//основной скрипт

window.addEventListener('DOMContentLoaded', function () {
    //////////////функция вывода размеров   console.log(salePrice[i].getBoundingClientRect().width);
/////автоматический маргин-топ для main//////////////
window.addEventListener("resize", ()=> {
    document.querySelector('main').style.marginTop = document.querySelector('header').getBoundingClientRect().height + 20 + 'px';
});
    

    //////кнопка меню бургера//////////////
    document.querySelector('.open-close-menu-button__item').addEventListener("click", () => {
        document.querySelector('.open-close-menu-button__item').classList.toggle('active');
        document.querySelector('.header-navigation').classList.toggle('active');
        document.querySelector('body').classList.toggle('active');
    });
});


