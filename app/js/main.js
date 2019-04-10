




(function ($) {
	$(window).resize(function () {
		if ($(this).width() > 1190) {
			click = 1;
			$('.review-btn__list2').click(function () {
				if (click) {
					$('.review-content').mCustomScrollbar("destroy");
					click = 0;
				} else {
					$(".review-content").mCustomScrollbar();
					click = 1;
				}
			});
		} else {
			click = 0;
			$(".review-content").mCustomScrollbar("destroy"); //destroy scrollbar 
		}
	}).trigger("resize");
})(jQuery);


$('.review-popup_last__close').click(function () {
	$('.review-popup_last').removeClass('review-popup_hide');

});

$('.review-btn__list').click(function () {
	$('.review-content').toggleClass('review-scroll');
	$(this).toggleClass('review-btn__list-after');
	$(this).text($(this).text() == 'Больше отзывов' ? 'свернуть отзывы' : 'Больше отзывов');
});
$('.star1').click(function () {
	$('.add_star-current').css("width", "20%");
});
$('.star2').click(function () {
	$('.add_star-current').css("width", "40%");
});
$('.star3').click(function () {
	$('.add_star-current').css("width", "60%");
});
$('.star4').click(function () {
	$('.add_star-current').css("width", "80%");
});
$('.star5').click(function () {
	$('.add_star-current').css("width", "100%");
});
$('.review-btn__leave').click(function () {
	$('.review-popup').addClass('review-popup_hide');
});
$('.add-review__close').click(function () {
	$('.review-popup').removeClass('review-popup_hide');
});




$(document).ready(function () {
	$('.tel').bind("change keyup input click", function () {
		if (this.value.match(/[^0-9]/g)) {
			this.value = this.value.replace(/[^0-9]/g, '');
		}
	})
});


var reviewInput1 = $('.input__val-1');
var reviewInput2 = $('.input__val-2');
var reviewInput3 = $('.input__val-3');

$('.add-review__btn').click(function () {
	var reviewInput1 = $('.input__val-1').val().length,
		reviewInput2 = $('.input__val-2').val().length,
		reviewInput3 = $('.input__val-3').val().length;
	if (reviewInput1 !== 0 && reviewInput2 !== 0 && reviewInput3 !== 0) {
		$('.input__val-1').val("");
		$('.input__val-2').val("");
		$('.input__val-3').val("");
		$('.review-popup_last').addClass('review-popup_hide');
		$(".review-popup").removeClass('review-popup_hide');

	} else {
		alert('Заполните поля');
	}

});