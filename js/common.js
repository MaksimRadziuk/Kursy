$(document).ready(function(){
	var clock = $('#downcounter').FlipClock(3600 * 24 * 14, {
		clockFace: 'DailyCounter',
		countdown: true,
		showSeconds: false,
		language:'ru-ru'
	});

	$('#author_trigger_one').click(function(){
		$('.author_block').removeClass('active');
		$(this).addClass('active');
		$('.author_description_block').removeClass('active');
		$('#author_tab_one').addClass('active');
	});
	$('#author_trigger_two').click(function(){
		$('.author_block').removeClass('active');
		$(this).addClass('active');
		$('.author_description_block').removeClass('active');
		$('#author_tab_two').addClass('active');
	});
	$('#author_trigger_three').click(function(){
		$('.author_block').removeClass('active');
		$(this).addClass('active');
		$('.author_description_block').removeClass('active');
		$('#author_tab_three').addClass('active');
	});
	$('#author_trigger_four').click(function(){
		$('.author_block').removeClass('active');
		$(this).addClass('active');
		$('.author_description_block').removeClass('active');
		$('#author_tab_four').addClass('active');
	});
	$('#author_trigger_five').click(function(){
		$('.author_block').removeClass('active');
		$(this).addClass('active');
		$('.author_description_block').removeClass('active');
		$('#author_tab_five').addClass('active');
	});
	$('#author_trigger_six').click(function(){
		$('.author_block').removeClass('active');
		$(this).addClass('active');
		$('.author_description_block').removeClass('active');
		$('#author_tab_six').addClass('active');
	});
	$('#author_trigger_seven').click(function(){
		$('.author_block').removeClass('active');
		$(this).addClass('active');
		$('.author_description_block').removeClass('active');
		$('#author_tab_seven').addClass('active');
	});
	$('#author_trigger_eight').click(function(){
		$('.author_block').removeClass('active');
		$(this).addClass('active');
		$('.author_description_block').removeClass('active');
		$('#author_tab_eight').addClass('active');
	});
	$('#author_trigger_nine').click(function(){
		$('.author_block').removeClass('active');
		$(this).addClass('active');
		$('.author_description_block').removeClass('active');
		$('#author_tab_nine').addClass('active');
	});


	$('.visible').click(function(){
		$(this).siblings('.hidden').slideToggle('fast');
		$(this).children('.arrow').toggleClass('active');
	});

	$(window).scroll(function() {
		if($(this).scrollTop() >= 400) {
			$('#toTop').addClass('active');
		} 
		else {
			$('#toTop').removeClass('active');
		}
	});

	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});

});

$(window).on("load", function() {
	
	var mySwiper = new Swiper ('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      spaceBetween: 100,
      speed:2000,
      autoplay:true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
	      el: '.swiper-pagination',
	      clickable: true,
	    }
    });
});
