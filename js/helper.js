function size() {
  var height = $(window).height();
  var width = $(window).width();
  $(".portrait").css("height", height - 40);

  $(window).load(function() {
    if (width > 450) {
      var portraitWidth = $(".portrait").width();
      var margins = (width - portraitWidth) / 2;
      $(".portrait").css("margin-top", 40);
      $(".portrait").css("margin-left", margins);
      $(".portrait").css("margin-right", margins);
      $(".overlay-full").css("width", portraitWidth-80);
      $(".overlay-full").css("margin-left", margins);
      $(".overlay-full").css("margin-right", margins);
    } else {
      $(".portrait").css("margin-top", 40);
      $(".portrait").css("margin-left", "0");
      $(".portrait").css("margin-right", "0");
      $(".overlay-full").css("height", height);
      $(".overlay-full").css("margin-left", "0");
      $(".overlay-full").css("margin-right", "0");
    }
  });

  $(window).resize(function() {
    var height = $(window).height();
    var width = $(window).width();
    if (width > 450) {
      $(".portrait").css("height", height-40);
      var portraitWidth = $(".portrait").width();
      var margins = (width - portraitWidth) / 2;
      $(".portrait").css("margin-top", 40);
      $(".portrait").css("margin-left", margins);
      $(".portrait").css("margin-right", margins);
      $(".overlay-full").css("width", portraitWidth-80);
      $(".overlay-full").css("margin-left", margins);
      $(".overlay-full").css("margin-right", margins);
    } else {
      $(".portrait").css("height", height-40);
      $(".portrait").css("margin-top", 40);
      $(".portrait").css("margin-left", "0");
      $(".portrait").css("margin-right", "0");
      $(".overlay-full").css("height", height);
      $(".overlay-full").css("margin-left", "0");
      $(".overlay-full").css("margin-right", "0");
    }
  });
}

function initPortraitOverlay() {
  $(".portrait").mouseenter(function(){
    $(".overlay-full").css("opacity", 0.9);
  });
  $(".portrait").mouseout(function(){
    $(".overlay-full").css("opacity", 0.01);
  });
}
