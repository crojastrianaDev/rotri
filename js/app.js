(function ($) {
  $(function () {
    $(".sidenav").sidenav();
    $(".parallax").parallax();
    $(".tabs").tabs();
    $(".materialboxed").materialbox();
    $(".dropdown-trigger").dropdown();
    // $(".modal").modal();
    $(".sidenav").open();
  });
})(jQuery);
$(document).ready(function () {
  $("select").formSelect();
});

$(document).ready(function () {
  $(".carousel").carousel({
    indicators: true,
    //dist:-60,
    numVisible: 6,
    onCycleTo: true,
  });
});

// MODAL AL CARGAR
document.addEventListener("DOMContentLoaded", function () {
  var Modalelem = document.querySelector(".modal");
  var instance = M.Modal.init(Modalelem);
  instance.open();
});
