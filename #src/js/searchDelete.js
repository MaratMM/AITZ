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