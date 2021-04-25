// recommended_productd TOP아티클 

var swiper = new Swiper('.sw1', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop:true,
  });

// recommended_productd bottom left아티클

  var swiper = new Swiper('.sw2', {
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop:true,
  });

// recommended_productd bottom right아티클
  var swiper = new Swiper('.sw3', {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });