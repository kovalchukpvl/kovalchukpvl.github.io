

$(document).ready(function () {
    //------------------------------------------------------------------------- slider <
    // document.getElementById('slider-left').onclick = sliderRight;
    // autoSlider();
    // var left = 192;
    // var timer;
    // var timerTime = 1000; // час таймера 

    // function autoSlider() {
    //     timer = setTimeout(sliderLeft, timerTime)
    // }

    // function sliderLeft() {
    //     clearTimeout(timer);
    //     var polosa = document.getElementById('polosa');
    //     left = left - 192;
    //     if (left < -1015) {
    //         left = 0;
    //         // clearTimeout(timer);
    //     }
    //     polosa.style.left = left + 'px';
    //     // autoSlider();
    // }

    // document.getElementById('slider-right').onclick = sliderLeft;

    // function sliderRight() {
    //     clearTimeout(timer);
    //     var polosa = document.getElementById('polosa');
    //     left = left + 192;
    //     if (left > 0) {
    //         left = 0;
    //     }
    //     polosa.style.left = left + 'px';
    // }

    //------------------------------------------------------------------------->


    //-------------------------------------------------------------------- анімація появи <
    // $(".CTA .container").animated("bounceInLeft", "bounceOut");
    // $(".right-cta").animated("bounceInRight", "bounceOut");
    // $(".stElem").animated("fadeIn", "fadeOut");
    // $(".three-screen-grup").animated("fadeIn", "fadeOut");
    // $(".two-screen-h").animated("fadeIn", "fadeOut");
    // $(".three-screen h1, .four-screen h1, .OurStandarts-h").animated("fadeIn", "fadeOut");
    // $("#solutions").animated("fadeIn", "fadeOut");

    //------------------------------------------------------------------------->


    //-------------------------------------------------------------------- анімація кружків, скрол функція анімації шапки <
   
    var CurrentScroll = 0;
    $(window).scroll(function (event) {

        var NextScroll = $(this).scrollTop();


        // анімація шапки   (потрібно змінити розрахунок коли вискакує шапка - чисто 100)
        if (NextScroll > ($("header").offset().top + 100)) {
            $("header").css("position", "fixed").css('box-shadow', '0px 0px 2.500em rgba(0, 0, 0, 0.3)').css('animation-duration', '0.2s').animated("slideInDown");
            // console.log('не видно')
            console.log($("header").offset().top)
        } else if (NextScroll == 0) {
            $("header").css("position", "absolute").css('box-shadow', '0px 0px 2.500em rgba(0, 0, 0, 0.1)').removeClass('animated').removeClass("slideInDown");
            // console.log('вернулися назад')
        }
        CurrentScroll = NextScroll;
    });
    //------------------------------------------------------------------------->

    //------------------------------------------------------------------------- меню шапки <
    function SetEvents(dropN, dropdownN) { // меню шапки
        var tooggle = document.getElementsByClassName(dropN),
            dropdown_menu = document.getElementsByClassName(dropdownN);

        tooggle[0].onmouseover = function () {
            dropdown_menu[0].style.display = "inline-block";
        };
        tooggle[0].onmouseout = function () {
            dropdown_menu[0].style.display = "none";
        };
    }
    for (var i = 1; i < 5; i++) {
        SetEvents("drop" + i, "dropdown" + i);
    }
    //------------------------------------------------------------------------->   


    //-------------------------------------------------------------------------скрипт розміру екрану <   
    width();
    function width() {
        // console.log(document.body.clientWidth);
        var fontKof = 0.0083333333333333;
        var fontS = document.body.clientWidth * fontKof;
        console.log(fontS)

        $('body').css({
            'font-size': fontS + 'px'
        })

        return;
    }
    $(window).resize(function (){ width(); });
    //------------------------------------------------------------------------->   
    

})




