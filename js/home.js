$(document).ready(function() {
  // Sizing the portrait based on initial size of window.
  var height = $(window).height();
  var width = $(window).width();

  // Mobile v. Desktop treatment
  if (width > 450) {
    $(".main").css("height", height - 40);
    $(".portrait").css("height", height - 40);
    var portraitWidth = (height - 40) * .7466307277;
    var margins = (width - portraitWidth) / 2;

    $(".portrait").css("padding-left", margins);
    $(".portrait").css("padding-right", margins);
    $(".row").css("margin-left", margins);
    $(".row").css("margin-right", margins);
    $(".row").css("width", portraitWidth);

  } else {
    $(".portrait").css("padding-left", "0");
    $(".portrait").css("padding-right", "0");
    $(".portrait").css("width", width);
    $(".main").css("height", $(".portrait").height());
    $(".row").css("margin-left", "0");
    $(".row").css("margin-right", "0");
    $(".row").css("width", $(".portrait").width());
  }

  // When page width or height changes, adjust dimensions of page elements.
  $(window).resize(function() {
    var height = $(window).height();
    var width = $(window).width();

    if (width > (height - 40) * .7466307277) {
      $(".main").css("height", height - 40);
      $(".portrait").css("height", height - 40);
      var portraitHeight = height - 40;
      var portraitWidth = portraitHeight * .7466307277;
      var margins = (width - portraitWidth) / 2;

      $(".portrait").css("padding-left", margins);
      $(".portrait").css("padding-right", margins);
      $(".portrait").css("width", portraitWidth);
      $(".portrait").css("height", portraitHeight);
      $(".main").css("height", portraitHeight);
      $(".row").css("margin-left", margins);
      $(".row").css("margin-right", margins);
      $(".row").css("width", portraitWidth);

    } else {
      var portraitHeight = width / .7466307277;
      $(".portrait").css("padding-left", "0");
      $(".portrait").css("padding-right", "0");
      $(".portrait").css("width", width);
      $(".portrait").css("height", portraitHeight);
      $(".main").css("height", portraitHeight);
      $(".row").css("margin-left", "0");
      $(".row").css("margin-right", "0");
      $(".row").css("width", $(".portrait").width());
    }
  });

  // Timers for fading out the boxes in a seemingly chaotic order.
  setTimeout(function() {
    $("#28").fadeTo("slow", 0.01);
  }, 10);

  setTimeout(function() {
    $("#34").fadeTo("slow", 0.01);
  }, 90);

  setTimeout(function() {
    $("#35").fadeTo("slow", 0.01);
  }, 170);

  setTimeout(function() {
    $("#29").fadeTo("slow", 0.01);
  }, 250);
/*
  setTimeout(function() {
    $("#23").fadeTo("slow", 0.01);
  }, 330);
*/
  setTimeout(function() {
    $("#22").fadeTo("slow", 0.01);
  }, 410);

  setTimeout(function() {
    $("#21").fadeTo("slow", 0.01);
  }, 490);

  setTimeout(function() {
    $("#27").fadeTo("slow", 0.01);
  }, 570);

  setTimeout(function() {
    $("#33").fadeTo("slow", 0.01);
  }, 650);

  setTimeout(function() {
    $("#39").fadeTo("slow", 0.01);
  }, 730);

  setTimeout(function() {
    $("#40").fadeTo("slow", 0.01);
  }, 810);

  setTimeout(function() {
    $("#41").fadeTo("slow", 0.01);
  }, 890);

  setTimeout(function() {
    $("#42").fadeTo("slow", 0.01);
  }, 970);

  setTimeout(function() {
    $("#36").fadeTo("slow", 0.01);
  }, 1050);

  setTimeout(function() {
    $("#30").fadeTo("slow", 0.01);
  }, 1130);

  setTimeout(function() {
    $("#24").fadeTo("slow", 0.01);
  }, 1210);

  setTimeout(function() {
    $("#18").fadeTo("slow", 0.01);
  }, 1290);

  setTimeout(function() {
    $("#17").fadeTo("slow", 0.01);
  }, 1370);

  setTimeout(function() {
    $("#16").fadeTo("slow", 0.01);
  }, 1450);
/*
  setTimeout(function() {
    $("#15").fadeTo("slow", 0.01);
  }, 1530);
*/
  setTimeout(function() {
    $("#9").fadeTo("slow", 0.01);
  }, 1610);

  setTimeout(function() {
    $("#8").fadeTo("slow", 0.01);
  }, 1690);

  setTimeout(function() {
    $("#14").fadeTo("slow", 0.01);
  }, 1750);

  setTimeout(function() {
    $("#20").fadeTo("slow", 0.01);
  }, 1810);

  setTimeout(function() {
    $("#26").fadeTo("slow", 0.01);
  }, 1870);

  setTimeout(function() {
    $("#32").fadeTo("slow", 0.01);
  }, 1930);

  setTimeout(function() {
    $("#38").fadeTo("slow", 0.01);
  }, 1990);

  setTimeout(function() {
    $("#44").fadeTo("slow", 0.01);
  }, 2050);

  setTimeout(function() {
    $("#43").fadeTo("slow", 0.01);
  }, 2110);

  setTimeout(function() {
    $("#45").fadeTo("slow", 0.01);
  }, 2170);

  setTimeout(function() {
    $("#46").fadeTo("slow", 0.01);
  }, 2230);

  setTimeout(function() {
    $("#37").fadeTo("slow", 0.01);
  }, 2290);

  setTimeout(function() {
    $("#47").fadeTo("slow", 0.01);
  }, 2350);

  setTimeout(function() {
    $("#31").fadeTo("slow", 0.01);
  }, 2410);

  setTimeout(function() {
    $("#48").fadeTo("slow", 0.01);
  }, 2470);

  setTimeout(function() {
    $("#25").fadeTo("slow", 0.01);
  }, 2530);

  setTimeout(function() {
    $("#19").fadeTo("slow", 0.01);
  }, 2590);

  setTimeout(function() {
    $("#13").fadeTo("slow", 0.01);
  }, 2650);
/*
  setTimeout(function() {
    $("#7").fadeTo("slow", 0.01);
  }, 2710);
*/
  setTimeout(function() {
    $("#1").fadeTo("slow", 0.01);
  }, 2770);

  setTimeout(function() {
    $("#2").fadeTo("slow", 0.01);
  }, 2830);

  setTimeout(function() {
    $("#3").fadeTo("slow", 0.01);
  }, 2890);

  setTimeout(function() {
    $("#4").fadeTo("slow", 0.01);
  }, 2950);

  setTimeout(function() {
    $("#5").fadeTo("slow", 0.01);
  }, 3010);

  setTimeout(function() {
    $("#10").fadeTo("slow", 0.01);
  }, 3070);

  setTimeout(function() {
    $("#6").fadeTo("slow", 0.01);
  }, 3130);

  setTimeout(function() {
    $("#11").fadeTo("slow", 0.01);
  }, 3190);
/*
  setTimeout(function() {
    $("#12").fadeTo("slow", 0.01);
  }, 3250);
*/
  // Fade in yellow boxes with links to project pages.
  setTimeout(function() {
    $("#15").html('<a href="web"><h4 id="web">Web<br>Projects</h4></a>');
    $("#7").html('<a href="illustration"><h4 id="illustration">Art and<br>Branding</h4></a>');
    $("#23").html('<a href="motion"><h4 id="video">Motion and<br>Video</h4></a>');
    $("#12").html('<a href="web/pearlhacks.html"><h4 id="pearl-hacks">Pearl<br>Hacks</h4></a>');
    $("#pearl-hacks").fadeTo("slow", .7);
    $("#video").fadeTo("slow", .7);
    $("#illustration").fadeTo("slow", .7);
    $("#web").fadeTo("slow", .7);
  }, 3100);

  // Hover if non-touch device
  $(".v,.u,.w,.x,.y,.z").hover(
    function () {
      $(this).css("opacity",".8");
    },
    function () {
      // Make sure yellow boxes with links to pages never disappear.
      if (!(this.getAttribute('id') == 7 || this.getAttribute('id') == 15 || this.getAttribute('id') == 23 || this.getAttribute('id') == 12)) {
        $(this).fadeTo("slow", 0.01);
        $("#7").css("opacity",".7");
        $("#15").css("opacity",".7");
        $("#23").css("opacity",".7");
        $("#12").css("opacity",".7");
      } else {
        $(this).css("opacity",".7");
      }
    }
  );
});
