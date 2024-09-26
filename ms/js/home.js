function showSlides () {
  $('.slide').show();
  $('.slides').slides({
    preload: true,
    play: 3000,
    pause: 3000,
    hoverPause: true
  });
}

showSlides()
