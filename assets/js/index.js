// swiper intialization
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




 /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

// swipe to the previousslide on clicking on the previous button
  on('click', '.prevbtn', function(e) {
    swiper.slidePrev();
  })

// swipe to the nextSlide on clicking on the next button

  on('click', '.nextbtn', function(e) {
    swiper.slideNext();
  })