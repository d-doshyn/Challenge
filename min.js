$('.owl-carousel').owlCarousel({
  loop: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 3
    },
  }
})