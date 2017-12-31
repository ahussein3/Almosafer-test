/*global $, jQuery */
$(document).ready(function() {

    'use strict';

    /* ======= Preloader ======= */
    $(window).load(function() {
        $('.loader').delay(500).fadeOut('slow');
    });
  
    /* ======= Scroll Down Arrow in main banner ======= */
    $('a.to-down-arrow').on('click', function(){
        $('html, body').animate({scrollTop:900},600);
    });

    /* ======= Toggle button menu in mobile ======= */
    $('.navbar-inverse .navbar-toggle').on('click', function(){
        $(this).find('.icon').toggleClass('fa-align-justify fa-close');
    });

    /* ======= Visit Top Description Slider ======= */
    $('.destination-slider-hotels').slick({
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1
          }
        }
      ]
    });
    
    /* ======= Dropdown Selection List ======= */
    var dropdowns = $(".dropdown-selection");
    // Onclick on a dropdown, toggle visibility
    dropdowns.find("dt").click(function(){
    	dropdowns.find("dd ul").hide();
    	$(this).next().children().toggle();
    });
    // Clic handler for dropdown
    dropdowns.find("dd ul li a").click(function(){
    	var leSpan = $(this).parents(".dropdown-selection").find("dt a span");
    	// Remove selected class
    	$(this).parents(".dropdown-selection").find('dd a').each(function(){
        $(this).removeClass('selected');
      });
    	// Update selected value
    	leSpan.html($(this).html());
    	// If back to default, remove selected class else addclass on right element
    	if($(this).hasClass('default')){
        leSpan.removeClass('selected')
      }
    	else{
    		leSpan.addClass('selected');
    		$(this).addClass('selected');
    	}
    	// Close dropdown
    	$(this).parents("ul").hide();
    });
    // Close all dropdown onclick on another element
    $(document).bind('click', function(e){
    	if (! $(e.target).parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
    });
});
