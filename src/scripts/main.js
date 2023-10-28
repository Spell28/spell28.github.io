document.addEventListener( 'DOMContentLoaded', function() {
  var sliderElement = document.querySelector('.splide')

  if (sliderElement) {
    var splide = new Splide('.splide', {
      height: 'calc(100vh - 123px)',
      perPage: 1,
      direction: 'ttb',
      paginationDirection: 'ttb',
      drag: false,
      arrows: false,
      wheel: true,
      wheelSleep: 1000,
      releaseWheel: true,
      keyboard: 'global',
    });
    splide.mount();
  }

  // function test() {
  //   console.log('1324214')
  //   splide.go('>');
  // }

  // document.addEventListener('scroll', test);

});
