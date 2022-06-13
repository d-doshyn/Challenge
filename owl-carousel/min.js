$('.owl-carousel').owlCarousel({
  loop: true,
  nav: false,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },

    425: {
      items: 2
    },

    768: {
      items: 3
    },
  }
})