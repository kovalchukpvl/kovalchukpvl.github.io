//------------------------------------------------------------------------- slider <

document.getElementById('slider-left').onclick = sliderRight;
autoSlider();
var left = 192;
var timer;
var timerTime = 1000; // час таймера 

function autoSlider() {
    timer = setTimeout(sliderLeft, timerTime)
}

function sliderLeft() {
    clearTimeout(timer);
    var polosa = document.getElementById('polosa');
    left = left - 192;
    if (left < -1015) {
        left = 0;
        // clearTimeout(timer);
    }
    polosa.style.left = left + 'px';
    // autoSlider();
}

document.getElementById('slider-right').onclick = sliderLeft;

function sliderRight() {
    clearTimeout(timer);
    var polosa = document.getElementById('polosa');
    left = left + 192;
    if (left > 0) {
        left = 0;
    }
    polosa.style.left = left + 'px';
}
//------------------------------------------------------------------------->


$(document).ready(function () {

    // $(".menu").animated("bounceInRight");
    $(".CTA .container").animated("bounceInLeft", "bounceOut");
    // $(".left-cta").animated("bounceInLeft", "bounceOut");
    $(".right-cta").animated("bounceInRight", "bounceOut");

    $(".two-screen-h").animated("bounceInRight", "bounceOut");

    // $(".sol-item").animated("bounceInLeft", "bounceOut");
    // grup-element

    $("#solutions").animated("bounceInLeft", "fadeOut");
    // $("#solutions").animated("fadeIn", "fadeOut");
    // $("#solutions").animated("zoomInUp", "bounceOut");
    // $(".sol-item").animated("zoomInUp", "bounceOutUp");

    // $(".stElem").animated("fadeIn", "fadeOut");

    $(".three-screen h1, .four-screen h1, .OurStandarts-h").animated("bounceInRight", "bounceOut");
    $(".three-screen-grup").animated("fadeIn", "fadeOut");
    $(".slider-elem").animated("slideInDown", "bounceOut");
    $("#slider-btn").animated("slideInUp", "bounceOut");
    $("footer").animated("slideInUp");


})



// if ($('.stElem').visible(true)) {
//     console.log('видно')

//         $('.stImg').css('-webkit-transform','rotate(60deg)'); 

// } else {
//     console.log('не видно')
// }

// $.fn.isInViewport = function() {
//     var elementTop = $(this).offset().top;
//     var elementBottom = elementTop + $(this).outerHeight();

//     var viewportTop = $(window).scrollTop();
//     var viewportBottom = viewportTop + $(window).height();

//     return elementBottom > viewportTop && elementTop < viewportBottom;
// };

// $(window).on('resize scroll', function() {
//     if ($('.stElem').isInViewport()) {

//     } else {
//         $('.stImg').css('-webkit-transform','rotate(60deg)');
//     }
// });

var element_position = $(".stElem").offset().top;
var scroll_position = $(window).scrollTop();
var viewport_height = $(window).height();



var num = 20;
var CurrentScroll = 0;
$(window).scroll(function (event) {

    var NextScroll = $(this).scrollTop();

    if ((NextScroll + viewport_height) > element_position) {
        if (NextScroll > CurrentScroll) {
            console.log('вверх');
            
            $('.stImg').css('-webkit-transform', 'rotate(' + num-- + 'deg)');
        } else {
            console.log('вниз');
            $('.stImg').css('-webkit-transform', 'rotate(' + num++ + 'deg)');
        }
        $('.stImg').mouseover( function(){
            $(this).css('-webkit-transform', 'rotate(60deg)')
            console.log('hover');
        }).mouseout( function(){
            $(this).css('-webkit-transform', 'rotate(0deg)')
            console.log('hoverOut');
        })
    }
    CurrentScroll = NextScroll;
});
