$(function() {
  $('a').on('click', function () {
    gtag('event', 'link', {
      'href': $(this).attr('href'),
      'class': $(this).attr('class')
    });
  });
})

function imageError(source){
  source.src = '/images/missing.jpg';
  return true;
}


