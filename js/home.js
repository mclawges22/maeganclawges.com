$(document).ready(function() {
  // Sizing the portrait based on initial size of window.
  var height = $(window).height();
  var width = $(window).width();
  $(".main").css("height", height - 40);
  $(".portrait").css("height", height - 40);
  
  // Mobile v. Desktop treatment
  if (width > 450) {
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
    $(".row").css("margin-left", "0");
    $(".row").css("margin-right", "0");
    $(".row").css("width", $(".portrait").width());
  }

  // When page width or height changes, adjust dimensions of page elements.
  $(window).resize(function() {
    var height = $(window).height();
    var width = $(window).width();

    if (width > 450) {
      $(".main").css("height", height - 40);
      $(".portrait").css("height", height - 40);

      var portraitWidth = $(".portrait").width();
      var margins = (width - portraitWidth) / 2;

      $(".portrait").css("padding-left", margins);
      $(".portrait").css("padding-right", margins);
      $(".row").css("margin-left", margins);
      $(".row").css("margin-right", margins);
      $(".row").css("width", portraitWidth);

    } else {
      $(".main").css("height", height-40);
      $(".portrait").css("height", height-40);
      $(".portrait").css("padding-left", "0");
      $(".portrait").css("padding-right", "0");
      $(".row").css("margin-left", "0");
      $(".row").css("margin-right", "0");
      $(".row").css("width", $(".portrait").width());
    }
  });

  // Timers for fading out the boxes in a seemingly chaotic order.
  setTimeout(function() {
    $("#22").fadeTo("slow", 0.01);
  }, 10);

  setTimeout(function() {
    $("#28").fadeTo("slow", 0.01);
  }, 100);

  setTimeout(function() {
    $("#34").fadeTo("slow", 0.01);
  }, 200);

  setTimeout(function() {
    $("#35").fadeTo("slow", 0.01);
  }, 350);

  setTimeout(function() {
    $("#29").fadeTo("slow", 0.01);
  }, 500);

  setTimeout(function() {
    $("#8").fadeTo("slow", 0.01);
  }, 650);

  setTimeout(function() {
    $("#16").fadeTo("slow", 0.01);
  }, 800);

  setTimeout(function() {
    $("#17").fadeTo("slow", 0.01);
  }, 1000);

  setTimeout(function() {
    $("#1").fadeTo("slow", 0.01);
  }, 1200);

  setTimeout(function() {
    $("#14").fadeTo("slow", 0.01);
  }, 1400);

  setTimeout(function() {
    $("#19").fadeTo("slow", 0.01);
  }, 1600);

  setTimeout(function() {
    $("#21").fadeTo("slow", 0.01);
  }, 1800);

  setTimeout(function() {
    $("#10").fadeTo("slow", 0.01);
  }, 2000);

  setTimeout(function() {
    $("#27").fadeTo("slow", 0.01);
  }, 2200);

  setTimeout(function() {
    $("#33").fadeTo("slow", 0.01);
  }, 2400);

  setTimeout(function() {
    $("#32").fadeTo("slow", 0.01);
  }, 2600);

  setTimeout(function() {
    $("#26").fadeTo("slow", 0.01);
  }, 3000);

  setTimeout(function() {
    $("#11").fadeTo("slow", 0.01);
  }, 3100);

  setTimeout(function() {
    $("#5").fadeTo("slow", 0.01);
  }, 3200);

  setTimeout(function() {
    $("#4").fadeTo("slow", 0.01);
  }, 3300);

  setTimeout(function() {
    $("#42").fadeTo("slow", 0.01);
  }, 3400);

  setTimeout(function() {
    $("#30").fadeTo("slow", 0.01);
  }, 3500);

  setTimeout(function() {
    $("#24").fadeTo("slow", 0.01);
  }, 3600);

  setTimeout(function() {
    $("#48").fadeTo("slow", 0.01);
  }, 3700);

  setTimeout(function() {
    $("#25").fadeTo("slow", 0.01);
  }, 3800);

  setTimeout(function() {
    $("#47").fadeTo("slow", 0.01);
  }, 3900);

  setTimeout(function() {
    $("#41").fadeTo("slow", 0.01);
  }, 4000);

  setTimeout(function() {
    $("#31").fadeTo("slow", 0.01);
  }, 4100);

  setTimeout(function() {
    $("#40").fadeTo("slow", 0.01);
  }, 4200);

  setTimeout(function() {
    $("#37").fadeTo("slow", 0.01);
  }, 4300);

  setTimeout(function() {
    $("#41").fadeTo("slow", 0.01);
  }, 4400);

  setTimeout(function() {
    $("#38").fadeTo("slow", 0.01);
  }, 4500);

  setTimeout(function() {
    $("#2").fadeTo("slow", 0.01);
  }, 4600);

  setTimeout(function() {
    $("#9").fadeTo("slow", 0.01);
  }, 4700);

  setTimeout(function() {
    $("#6").fadeTo("slow", 0.01);
  }, 4800);

  setTimeout(function() {
    $("#32").fadeTo("slow", 0.01);
  }, 4900);

  setTimeout(function() {
    $("#44").fadeTo("slow", 0.01);
  }, 5000);

  setTimeout(function() {
    $("#3").fadeTo("slow", 0.01);
  }, 7700);

  setTimeout(function() {
    $("#20").fadeTo("slow", 0.01);
  }, 7700);

  setTimeout(function() {
    $("#39").fadeTo("slow", 0.01);
  }, 5100);

  setTimeout(function() {
    $("#43").fadeTo("slow", 0.01);
  }, 5200);

  setTimeout(function() {
    $("#13").fadeTo("slow", 0.01);
  }, 5300);

  setTimeout(function() {
    $("#20").fadeTo("slow", 0.01);
  }, 5400);

  setTimeout(function() {
    $("#18").fadeTo("slow", 0.01);
  }, 5500);

  setTimeout(function() {
    $("#36").fadeTo("slow", 0.01);
  }, 5600);

  // Fade in yellow boxes with links to project pages.
  setTimeout(function() {
    $("#15").html('<a href="web"><h4 id="web">Web<br>Projects</h4></a>');
    $("#7").html('<a href="illustration"><h4 id="illustration">Illustration and<br>Branding</h4></a>');
    $("#23").html('<a href="motion"><h4 id="video">Motion<br>Graphics /<br>Videography</h4></a>');
    $("#12").html('<a href="web/pearlhacks.html"><h4 id="pearl-hacks">Pearl<br>Hacks</h4></a>');
    $("#pearl-hacks").fadeTo("slow", 1);
    $("#video").fadeTo("slow", 1);
    $("#illustration").fadeTo("slow", 1);
    $("#web").fadeTo("slow", 1);
  }, 5000);

  setTimeout(function() {
    $("#45").fadeTo("slow", 0.01);
  }, 5600);

  setTimeout(function() {
    $("#45").fadeTo("slow", 0.01);
  }, 5700);

  setTimeout(function() {
    $("#3").fadeTo("slow", 0.01);
  }, 5800);

  setTimeout(function() {
    $("#46").fadeTo("slow", 0.01);
  }, 5900);

  // Hover if non-touch device
  $(".v,.u,.w,.x,.y,.z").hover(
    function () {
      $(this).css("opacity",".8");
    },
    function () {
      // Make sure yellow boxes with links to pages never disappear.
      if (!(this.getAttribute('id') == 7 || this.getAttribute('id') == 15 || this.getAttribute('id') == 23 || this.getAttribute('id') == 12)) {
        $(this).fadeTo("slow", 0.01);
        $("#7").css("opacity",".9");
        $("#15").css("opacity",".9");
        $("#23").css("opacity",".9");
        $("#12").css("opacity",".9");
      } else {
        $(this).css("opacity",".9");
      }
    }
  );
});
