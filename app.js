$(document).ready(function () {
  var $grid = $('.item').isotope();
  $('#menu').on('click', 'a', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });
});