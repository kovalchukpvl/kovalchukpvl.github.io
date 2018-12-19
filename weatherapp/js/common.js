 

$(document).ready(function () {

  var wd = $(document).width();
  var w;

  switch (true) {

    case wd <= 480:
      w = 60;
      break;

    case wd <= 768 && wd > 480:
      w = 100;
      break;

    case wd <= 992 && wd > 768:
      w = 150;
      break;

    default:
      w = 198;
      
  }

  console.log(w);


  var carousel = $("#carousel").waterwheelCarousel({

  flankingItems: 3,
  separation: w,

  

  movingToCenter: function ($item) {
    $('#callback-output').prepend('movingToCenter: ' + $item.attr('id') + '<br/>');
  },
  movedToCenter: function ($item) {
    $('#callback-output').prepend('movedToCenter: ' + $item.attr('id') + '<br/>');
  },
  movingFromCenter: function ($item) {
    $('#callback-output').prepend('movingFromCenter: ' + $item.attr('id') + '<br/>');
  },
  movedFromCenter: function ($item) {
    $('#callback-output').prepend('movedFromCenter: ' + $item.attr('id') + '<br/>');
  },
  clickedCenter: function ($item) {
    $('#callback-output').prepend('clickedCenter: ' + $item.attr('id') + '<br/>');
  }
  });

  $('#prev').bind('click', function () {
  carousel.prev();
  return false
  });

  $('#next').bind('click', function () {
  carousel.next();
  return false;
  });

  $('#reload').bind('click', function () {
  newOptions = eval("(" + $('#newoptions').val() + ")");
  carousel.reload(newOptions);
  return false;
  });

});






$(function () {
  $.fn.scrollToTop = function () {
    $(this).hide().removeAttr("href");
    if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
    var scrollDiv = $(this);
    $(window).scroll(function () {
      if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
      else $(scrollDiv).fadeIn("slow")
    });
    $(this).click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow")
    })
  }
});

$(function () {
  $("#Go_Top").scrollToTop();
});

$("#bottom").click(function () {
  $("html, body").animate({ scrollTop: $(document).height() },  "slow");
  return false;
});


$("a[href='#download'], #download").click(function () {
  $('html, body').animate({scrollTop: 6300});
  return false;
});

$("a[class='features-btn'], #feature").click(function () {
  $('html, body').animate({scrollTop: 900});
  return false;
});


$("a[class='reviews-btn']").click(function () {
  $('html, body').animate({scrollTop: 5600});
  return false;
});
