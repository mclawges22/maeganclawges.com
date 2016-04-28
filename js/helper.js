function size() {
  var height = $(window).height();
  var width = $(window).width();

  $(window).load(function(){
    if (width > 585) {
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
      $(".overlay-full").css("margin-left", "0");
      $(".overlay-full").css("margin-right", "0");
    }
  });

  $(window).resize(function() {
    var height = $(window).height();
    var width = $(window).width();

    if (width > 585) {
      document.getElementsByClassName('portrait')[0].style.removeProperty('width');
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
      document.getElementsByClassName('portrait')[0].style.removeProperty('height');
      $(".portrait").css("width", width);
      $(".portrait").css("margin-top", 10);
      $(".portrait").css("margin-left", "0");
      $(".portrait").css("margin-right", "0");
      document.getElementsByClassName('overlay-full')[0].style.removeProperty('width');
      document.getElementsByClassName('overlay-full')[0].style.removeProperty('opacity');
      $(".overlay-full").css("margin-left", "0");
      $(".overlay-full").css("margin-right", "0");
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

function amySize() {
  var height = $(window).height();
  var width = $(window).width();

  if (width > 585) {
    $(".portrait").css("width", width);
    $(".portrait").css("margin-top", 40);
    $(".portrait").css("margin-left", "0");
    $(".portrait").css("margin-right", "0");
    $(".overlay-full").css("width", width - 80);
    $(".overlay-full").css("margin-left", "0");
    $(".overlay-full").css("margin-right", "0");
  } else {
    $(".portrait").css("width", width);
    $(".portrait").css("margin-top", 10);
    $(".portrait").css("margin-left", "0");
    $(".portrait").css("margin-right", "0");
    $(".overlay-full").css("margin-left", "0");
    $(".overlay-full").css("margin-right", "0");
  }

  $(window).resize(function() {
    var width = $(window).width();
    if (width > 585) {
      $(".portrait").css("width", width);
      $(".portrait").css("margin-top", 40);
      $(".portrait").css("margin-left", "0");
      $(".portrait").css("margin-right", "0");
      $(".overlay-full").css("width", width - 80);
      $(".overlay-full").css("margin-left", "0");
      $(".overlay-full").css("margin-right", "0");
    } else {
      $(".portrait").css("width", width);
      $(".portrait").css("margin-top", 10);
      $(".portrait").css("margin-left", "0");
      $(".portrait").css("margin-right", "0");
      document.getElementsByClassName('overlay-full')[0].style.removeProperty('width');
      document.getElementsByClassName('overlay-full')[0].style.removeProperty('opacity');
      $(".overlay-full").css("margin-left", "0");
      $(".overlay-full").css("margin-right", "0");
    }
  });
}
