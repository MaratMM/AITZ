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

});