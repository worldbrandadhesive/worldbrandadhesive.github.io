function showSlides () {
  $('.slide').show();
  $('.slides').slides({
    preload: true,
    play: 3000,
    pause: 3000,
    hoverPause: true
  });

  $('a').on('click', function () {
    _gaq.push(['_trackEvent', 'Links', 'Click', $(this).attr('href')]);

  });

  $('#categories a').click(function (e) {
    e.preventDefault();
    $('#categories li.active').removeClass('active');
    $(this).closest('li').addClass('active');
    $.get($(this).attr('href'), function (data) {
      $('#products').html(data);
    });
  });
}

showSlides()
