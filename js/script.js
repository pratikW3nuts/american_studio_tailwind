// sticky header
$(document).ready(function(){
    $(window).scroll(function(){
        var sticky = $('.main-header'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 1) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
});

// mobile menu
	jQuery(".pc_hamburger").on('click', function(e){
		e.preventDefault();
		jQuery('body').toggleClass("is_menu_active");
        jQuery("body").toggleClass("scrolldesable");
	});