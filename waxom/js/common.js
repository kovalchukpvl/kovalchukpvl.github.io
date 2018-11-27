$('.wallper').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000,
  dots: true,
  easing: "ease",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true
      }
    }
  ]
});

$('.recent-posts-container').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });



  function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var niceCheckbox = document.getElementById("niceCheckbox");
    var headermenu = document.getElementById("headermenu");

    if (checkBox.checked == true){
      niceCheckbox.style.backgroundImage = "url(img/menu-mobile-hover.png)";
      headermenu.style.display = "grid";
    } else {
      niceCheckbox.style.backgroundImage = "url(img/menu-mobile.png)";
      headermenu.style.display = "none";
    }

  }



