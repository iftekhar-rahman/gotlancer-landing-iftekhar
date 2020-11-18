jQuery(document).ready(function($){


    // perfectScrollbar
    $(".nice-select .list").perfectScrollbar();

    // JS for search box
    $(function() {
        $("#search-box-trigger").on("click", function(e) {
            $("#search-box-wrapper").toggleClass("active");
        });
        $(document).on("click", function(e) {
            if ($(e.target).is("#search-box-wrapper, #search-box-trigger") === false) {
                $("#search-box-wrapper").removeClass("active");
            }
        });
    });

    // mobile-menu
    $(".mobile-menu-trigger").on("click", function(){
        $(".header-area, .overlay").addClass("active");
    });
    $(".mobile-menu-close-trigger, .overlay").on("click", function(){
        $(".header-area, .overlay").removeClass("active");
    });

    // sidebar
    $(".sidebar-trigger").on("click", function(){
        $(".overlay, .sidebar").addClass("active");
    });
    $(".close-btn, .overlay").on("click", function(){
        $(".overlay, .sidebar").removeClass("active");
    });

    // Sticky Header with smooth animation
    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 300) {
            $('.header-area').addClass('fixed');
        } else {
            $('.header-area').removeClass('fixed');
        }
    })


    $('select').niceSelect();

    AOS.init({
        duration: 1000, // values from 0 to 3000, with step 50ms
    });

    
    // Hero slider
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        focusOnSelect: true,
        cssEase: 'linear',
        touchMove: true,
        prevArrow:'<button class="slick-prev"> < </button>',
        nextArrow:'<button class="slick-next"> > </button>',
    });
    var imgs = $('.slider img');
        imgs.each(function(){
        var item = $(this).closest('.item');
        item.css({
        });
    });

    // Scroll To Top starts
    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('.scrollTop').addClass('scrollBtn');
        } else {
            $('.scrollTop').removeClass('scrollBtn');
        }
    });
    $(".scrollTop").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    }); // click() scroll top ENDS


    // Profile trigger start
	$('#dropdownMenuButton').on('click', function () {
		$('.dropdown-menu').toggleClass('show');
	});
	$('.available-status button').on('click', function () {
        $(".available-status button").removeClass('active');
		$(this).addClass('active');
	});
	$(document).on('click', function (e) {
		var container = $('.dropdown-menu');
		if (!container.is(e.target) && e.target.className !== 'profile-image' && container.has(e.target).length === 0) {
			container.removeClass('show');
		}
	});
	//  Profile trigger end


    if ($(window).width() < 991) {
        /*-----------------------
        --> Off Canvas Menu
        -------------------------*/
        /*Variables*/
        var $offCanvasNav = $('.off-canvas-nav'),
            $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');

        /*Add Toggle Button With Off Canvas Sub Menu*/
        $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fas fa-chevron-down"></i></span>');

        /*Close Off Canvas Sub Menu*/
        $offCanvasNavSubMenu.slideUp('0');

        /*Category Sub Menu Toggle*/
        $offCanvasNav.on('click', 'li a, li .menu-expand', function(e) {
            var $this = $(this);
            if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
                e.preventDefault();
                if ($this.siblings('ul:visible').length) {
                    $this.parent('li').removeClass('active');
                    $this.siblings('ul').slideUp('0');
                } else {
                    $this.parent('li').addClass('active');
                    $this.closest('li').siblings('li').find('ul:visible').slideUp('0');
                    $this.siblings('ul').slideDown('0');
                }
            }
        });

    }
    else {
    }

        
    $(".heart-icon").on("click", function(){
        $(this).toggleClass("active");
    });

    
   
    

});