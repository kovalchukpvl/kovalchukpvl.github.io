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


//-------------------------------------------------------------------------header img <
var headerImg = document.getElementById('left-figures');
var solutions = document.getElementById('solutions');

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    // console.log(scroll )
    if(scroll > 0 ) {
        headerImg.style.height = 0;
    } else {
        headerImg.style.height = "460px";
    }
    // Do something
});
//------------------------------------------------------------------------->

$(document).ready(function(){

    $(".menu").animated("bounceInRight");
    $(".left-cta").animated("bounceInLeft", "bounceOut");
    $(".right-cta").animated("bounceInRight", "bounceOut");
    $(".two-screen").animated("bounceInRight", "bounceOut");
    // $(".sol-item").animated("bounceInLeft", "bounceOut");
    // grup-element
    $("#solutions").animated("zoomInUp", "bounceOut");
    // $(".sol-item").animated("zoomInUp", "bounceOutUp");
    $(".three-screen h1, .four-screen h1").animated("bounceInRight", "bounceOut");
    $(".three-screen-grup").animated("zoomInUp", "bounceOut");
    $(".slider-elem").animated("slideInDown", "bounceOut");
    $("#slider-btn").animated("slideInUp", "bounceOut");
    $("footer").animated("slideInUp");
    
})



