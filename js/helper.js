function size() {
  var height = $(window).height();
  var width = $(window).width();
  var imgWidth = $(".portrait").width();
  var imgHeight = $(".portrait").height();
  var ratio = imgWidth / imgHeight;

  $(window).load(function() {
    if (width > (height - 40) * ratio) {
      $(".portrait").css("height", height - 40);
      var portraitWidth = $(".portrait").width();
      var margins = (width - portraitWidth) / 2;
      $(".portrait").css("margin-top", 40);
      $(".portrait").css("margin-left", margins);
      $(".portrait").css("margin-right", margins);
      $(".overlay-full").css("width", portraitWidth - 80);
      $(".overlay-full").css("margin-left", margins);
      $(".overlay-full").css("margin-right", margins);
    } else {
      $(".portrait").css("width", width);
      $(".portrait").css("margin-top", 10);
      $(".portrait").css("margin-left", "0");
      $(".portrait").css("margin-right", "0");
      $(".overlay-full").css("width", width - 80);
      $(".overlay-full").css("margin-left", 0);
      $(".overlay-full").css("margin-right", 0);
    }
  });

  $(window).resize(function() {
    var height = $(window).height();
    var width = $(window).width();
    if (width > (height - 40) * ratio) {
      $(".portrait").css("height", height - 40);
      var portraitWidth = (height - 40) * ratio;
      $(".portrait").css("width", portraitWidth);
      var margins = (width - portraitWidth) / 2;
      $(".portrait").css("margin-top", 40);
      $(".portrait").css("margin-left", margins);
      $(".portrait").css("margin-right", margins);
      $(".overlay-full").css("width", portraitWidth - 80);
      $(".overlay-full").css("margin-left", margins);
      $(".overlay-full").css("margin-right", margins);
    } else {
      var portraitHeight = width / ratio;
      $(".portrait").css("height", portraitHeight);
      $(".portrait").css("width", width);
      $(".portrait").css("margin-top", 10);
      $(".portrait").css("margin-left", "0");
      $(".portrait").css("margin-right", "0");
      $(".overlay-full").css("width", width - 80);
      $(".overlay-full").css("margin-left", 0);
      $(".overlay-full").css("margin-right", 0);
    }
  });
}

function initPortraitOverlay() {
  $(".portrait").mouseenter(function(){
    if ($(window).width() > 585) {
      $(".overlay-full").css("opacity", 0.9);
    }
  });
  $(".portrait").mouseout(function(){
    if ($(window).width() > 585) {
      $(".overlay-full").css("opacity", 0.01);
    }
  });
}
