function imageError(source){
  source.src = '/images/missing.jpg';
  return true;
}

var root = null;
var useHash = true; // Defaults to: false
var hash = '#!'; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);
// asyncrhonously fetch the html template partial from the file directory,
// then set its contents to the html of the parent element
function loadHTML(url, cb) {
  req = new XMLHttpRequest();
  req.open('GET', url);
  req.send();
  req.onload = function () {
    $('#content').html(req.responseText)
		if (cb) cb()
  };
}

function filterByTag (tag, data) {
  return tag ? R.filter(
    R.compose(
      R.contains(tag),
      R.propOr([], 'tags')
    )
  )(data) : data
}

var data = []
$.getJSON('products.json', function (d) {
  data = R.sortBy(R.prop('name'), d)
})

function renderProducts  (params) {
  var tag = params && params.tag
  loadHTML('/products.html', function () {
    var source = document.getElementById("product-template").innerHTML;
    var template = Handlebars.compile(source);
    var filteredData = filterByTag(tag, data)
    var html = template(filteredData)
    $("div#products").html(html)
    if (tag) {
      $("li#"+tag).attr("class", "active")
    }
  });
}

router.on({
  '/contact.html': function () { loadHTML('./contact.html'); },
  '/corporate.html': function () { loadHTML('./corporate.html'); },
  '/:tag/products.html': renderProducts,
  '/products.html': renderProducts
});

function showSlides () {
  $('.slide').show();
  $('.slides').slides({
    preload: true,
    play: 5000,
    pause: 2500,
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

$('.navbar-collapse a').click(function () {
  $('.navbar-collapse').collapse('hide');
});

router.on(function showHome () {
  loadHTML('./home.html', showSlides);
})

router.notFound(function (query) { $('#content').innerHTML = '<h3>Couldn\'t find the page you\'re looking for...</h3>'; });

router.resolve();
