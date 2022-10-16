$(function() {
  $('a').on('click', function () {
    gtag('event', 'link', {
      'href': $(this).attr('href'),
      'class': $(this).attr('class')
    });
  });
})
