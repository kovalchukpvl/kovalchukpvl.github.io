

$(document).ready(function () {


	// load page start animation
	setTimeout(function () {
		if ($('.about').hasClass('about-animation')) {
			$('.about').removeClass('about-animation');
		} else {
			$('.about').addClass('about-animation');
		}

		if ($('.skils').hasClass('skils-animation')) {
			$('.skils').removeClass('skils-animation');
		} else {
			$('.skils').addClass('skils-animation');
		}
	}, 1000)



	//skil hover animation
	const ANIMATEDCLASSNAME = "animated";
	const ELEMENTS = document.querySelectorAll(".skil");
	const ELEMENTS_SPAN = [];
	ELEMENTS.forEach((element, index) => {
		let addAnimation = false;
		// Elements that contain the "FLASH" class, add a listener to remove
		// animation-class when the animation ends
		if (element.classList[1] == "FLASH") {
			element.addEventListener("animationend", e => {
				element.classList.remove(ANIMATEDCLASSNAME);
			});
			addAnimation = true;
		}

		// If The span element for this element does not exist in the array, add it.
		if (!ELEMENTS_SPAN[index])
			ELEMENTS_SPAN[index] = element.querySelector("span");

		element.addEventListener("mouseover", e => {
			ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
			ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";

			// Add an animation-class to animate via CSS.
			if (addAnimation) element.classList.add(ANIMATEDCLASSNAME);
		});

		element.addEventListener("mouseout", e => {
			ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
			ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
		});
	});



})



