

$(document).ready(function () {
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
        polosa.style.left = (left/16) + 'em';
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
        polosa.style.left = (left/16) + 'em';
    }

    //------------------------------------------------------------------------->


    //-------------------------------------------------------------------- анімація появи <

    $(".block1 .container").animated("bounceInLeft", "bounceOut");
    $(".right-block1").animated("bounceInRight", "bounceOut");
    $(".block3-grup").animated("fadeIn", "fadeOut");
    $(".stElem").animated("fadeIn", "fadeOut");
    $(".block2 h1, .block3 h1, .block4 h1, .block5 h1").animated("fadeIn", "fadeOut");
    $("#solutions").animated("fadeIn", "fadeOut");
    //------------------------------------------------------------------------->


    //-------------------------------------------------------------------- анімація кружків, скрол функція анімації шапки <
    var element_position = $(".stElem").offset().top;
    var viewport_height = $(window).height();
    var num = 20;
    var CurrentScroll = 0;
    $(window).scroll(function (event) {

        var NextScroll = $(this).scrollTop();

        if ((NextScroll + viewport_height) > element_position) {
            if (NextScroll > CurrentScroll) {
                $('.stImg').css('-webkit-transform', 'rotate(' + num-- + 'deg)');
            } else {
                $('.stImg').css('-webkit-transform', 'rotate(' + num++ + 'deg)');
            }
        }

        // анімація шапки   (потрібно змінити розрахунок коли вискакує шапка - чисто 100)
        if (NextScroll > ($("header").offset().top + 100)) {
            $("header").css("position", "fixed").css('box-shadow', '0 0 2.500em rgba(0, 0, 0, 0.3)').css('animation-duration', '0.2s').animated("slideInDown");
            // console.log('не видно')
            console.log($("header").offset().top)
        } else if (NextScroll == 0) {
            $("header").css("position", "absolute").css('box-shadow', '0 0 2.500em rgba(0, 0, 0, 0.1)').removeClass('animated').removeClass("slideInDown");
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

        let DisplayWidth = document.body.clientWidth;
        var fontKof;

        if (DisplayWidth <= 1920 ) {
            fontKof = 0.0083333333333333;
        } else if (DisplayWidth >= 1920 & DisplayWidth <= 2240) {
            fontKof = 0.0073333333333333;
        } else if (DisplayWidth >= 2240) {
            fontKof = 0.0063333333333333;
        }

        var fontS = DisplayWidth * fontKof;
        console.log(fontS)

        if (DisplayWidth >= 1100) {
            $('body').css({
                'font-size': fontS + 'px'
            })

            $('.block1').css({
                'background-image': 'url("../img/left-figures.svg")'
            })

            $('.right-figures').css({
                'right': '1%',
                'top': '0'
            })

            $('.foot-left-figures').css({
                'opacity': '1'
            })

            $('.foot-right-figures').css({
                'opacity': '1'
            })



        } else if (DisplayWidth >= 480) {
            $('body').css({
                // 'font-size': (document.body.clientWidth *  0.0133) + 'px'
                'font-size': (fontS *  1.5) + 'px'
            })

            $('.block1').css({
                'background-image': 'none'
            })

            $('.right-figures').css({
                'right': '-9em',
                'top': '-0.5em'
            })





        } else {
            $('body').css({
                // 'font-size': (document.body.clientWidth *  0.0133) + 'px'
                'font-size': (fontS *  1.6) + 'px'
            })

            $('.block1').css({
                'background-image': 'none'
            })

            $('.right-figures').css({
                'right': '-9em',
                'top': '-0.5em'
            })

            $('.foot-left-figures').css({
                'opacity': '0'
            })

            $('.foot-right-figures').css({
                'opacity': '0'
            })
        }



        return;
    }
    $(window).resize(function (){ width(); });


  
})




