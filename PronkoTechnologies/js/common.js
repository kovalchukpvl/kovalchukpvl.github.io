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
