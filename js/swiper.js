const swiper = new Swiper(".swiper-container", {
  loop: true,
  effect: "fade", 
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 6000, 
    disableOnInteraction: false,
  },
  speed: 3000,
  /*ページネーション*/
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});