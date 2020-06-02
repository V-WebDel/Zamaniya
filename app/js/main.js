$(function() {

	// Mask phone
	$('input[name="Lead[phone]"]').mask('8 (999) 999 - 99 - 99');
	$('input[name="Lead[date]"]').mask('99 99 9999');

	// Variants open
	$('.variants__table').hide();

	$('.variants__detailed').on("click", function () {
    $(this).siblings('.variants__table').slideToggle(600);

    var textBtn = $(this).text();
    if (textBtn == 'Подробнее') {
      $(this).text('Свернуть');
    } else {
      $(this).text('Подробнее');
    }
		return false;
	});

	//Animation Scroll
	$(window).scroll(function(){
		var st = $(this).scrollTop();
		
		$(".top__zigzag_1").css({"transform" : "translate(" + st/1.5 + "%," + st/2 + "%)" + "rotate("+ -st/2 + "deg)"}); 
		$(".top__zigzag_2").css({"transform" : "translate(" + st/2 + "%," + -st/2 + "%)" + "rotate("+ st/1 + "deg)"}); 
		$(".top__zigzag_3").css({"transform" : "translate(" + -st/1.5 + "%," + st/1 + "%)"+ "rotate(90deg)"}); 
		$(".top__zigzag_4").css({"transform" : "translate(" + st/1.5 + "%," + 0 + "%)" + "rotate("+ st/1 + "deg)"}); 
		$(".top__zigzag_5").css({"transform" : "translate(" + -st/1.5 + "%," + st/2 + "%)" + "rotate("+ st/1 + "deg)"}); 
		
		$(".top__star_1").css({"transform" : "translate(0," + st/1 + "%)"}); 
		$(".top__star_2").css({"transform" : "translate(0," + st/1 + "%)"}); 
		$(".top__star_3").css({"transform" : "translate(0," + st/1 + "%)"}); 
		$(".top__star_4").css({"transform" : "translate(0," + st/1 + "%)"}); 
		$(".top__star_5").css({"transform" : "translate(0," + st/1 + "%)"+ "rotate("+ st/2 + "deg)"}); 
		$(".top__star_6").css({"transform" : "translate(0," + st/1 + "%)"});  
		$(".top__star_7").css({"transform" : "translate(0," + st/4 + "%)" + "rotate("+ st/1 + "deg)"});  
		$(".top__star_8").css({"transform" : "translate(0," + -st/2 + "%)" + "rotate("+ st/1 + "deg)"}); 
		
	});


	// Section modal
	$(".btn-modal").click(function(evt){
		evt.preventDefault();
		var data_holiday = $(this).attr("data-holiday");

		$('input.holiday').val(data_holiday);

		$(".modal").removeClass("hidden");
        $(".overlay").removeClass("hidden");
    
	});
	$(".overlay, .modal__close").click(function(){
		$(".modal").addClass("hidden");
		$(".overlay").addClass("hidden");
    });
    $(document).keyup(function(e) {
      if (e.keyCode === 27) { 
        $(".modal").addClass("hidden");
        $(".overlay").addClass("hidden");
      }
    });

	// WOW
	var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       80,
			mobile:       false,
			live:         true,
			callback:     function(box) {

			},
			scrollContainer: null 
		}
	);
	wow.init();
	
	// Animate.css
	$('.promo__title, .bottom__title').addClass('animated heartBeat');
	$('.form__btn, .advantages__btn').addClass('animated heartBeat');
	$('.variants__item').addClass('animated fadeInUp');
	$('.advantages__item').addClass('animated zoomIn');
	$('.advantages__number').addClass('animated flash');

});

// Swiper slider
var swiper1 = new Swiper('.swiper-parks', {
	speed: 800,
	spaceBetween: 50,
	centeredSlides: false,
	slidesPerView: 2,
	breakpointsInverse: false,
	loop: true,

	autoplay: {
		delay: 3000,
	},
	
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	
	breakpoints: {

		992: { 
			slidesPerView: 2,
			spaceBetween: 40,
		}, 
		768: { 
			slidesPerView: 1,
		}, 
		576: { 
			spaceBetween: 15,
			slidesPerView: 1,
		}, 
	},
});