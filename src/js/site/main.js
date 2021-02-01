$(window).on("load", function () {

  $(".js-hamburger").click(function() {
    $(this).toggleClass("is-active");
    $(".fries").toggleClass("show");
    $("body").toggleClass("modal-open");
    $("body").toggleClass("menu-open");
  })

  //end of parallax effects
});