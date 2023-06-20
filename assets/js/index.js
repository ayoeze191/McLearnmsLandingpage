const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    loopedSlides: 4,
    breakpoints: {
        320: {
          slidesPerView: 1.06,
          spaceBetween: 16
        },
  
        1200: {
          slidesPerView: 2,
          spaceBetween: 96
        }
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    loop: true,

    // navigator
  });


  const prevbtn = document.querySelector('.prevbtn');
  const nextbtn = document.querySelector('.nextbtn');

    nextbtn.addEventListener("click", function (e) {
    console.log("clicked");
    swiper.slideNext();
  })
    prevbtn.addEventListener("click", function (e) {
      console.log(e)
      console.log("clicked");
      swiper.slidePrev();
  })

swiper.on('transitionEnd', function() {
  const lastIndex = swiper.slides.length - 1;
  if (swiper.activeIndex === lastIndex) {
    prevbtn.click();

  }
});
