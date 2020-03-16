$(window).scroll(function() {
  $(window).scrollTop() > 30 ? $("#totop").addClass("show") : $("#totop").removeClass("show");
});
$("#totop").click(function() {
  $("html, body").animate({
      scrollTop: 0
  }, 500, function() {
      $("#totop").removeClass("show");
  });
  return false;
});
