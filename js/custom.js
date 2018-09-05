/* ========================================================================= */
/*	Preloader
/* ========================================================================= */

jQuery(window).load(function(){

	$("#preloader").fadeOut("slow");

});


$(document).ready(function(){

	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */

	jQuery('#nav').singlePageNav({
		offset: jQuery('#nav').outerHeight(),
		filter: ':not(.external)',
		speed: 1200,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function() {
			//console.log('begin scrolling');
		},
		onComplete: function() {
			//console.log('done scrolling');
		}
	});
	
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#navigation").css("background-color","rgba(0, 0, 0, 0.8)");
            $("#navigation .logo").css("transform","scale(0.8)");
        } else {
            $("#navigation").css("background-color","rgba(16, 22, 54, 0.2)");
            $("#navigation .logo").css("transform","scale(1)");
        }
    });
	
	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */	

	var slideHeight = $(window).height();
	
	$('#slitSlider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#slitSlider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);
	});


	/* ========================================================================= */
	/*	Memories and Experience Filtering
	/* ========================================================================= */	
	
    $(".memories-wrapper").mixItUp({
	    selectors: {
	    	filter: '.filter-memories'
	    }
    });
    $(".experience-wrapper").mixItUp({
		selectors: {
	    	filter: '.filter-works'
	    }
    });
	
	$(".fancybox").fancybox({
		padding: 0,

		openEffect : 'elastic',
		openSpeed  : 650,

		closeEffect : 'elastic',
		closeSpeed  : 550,

		closeClick : true,
	});
	
	/* ========================================================================= */
	/*	Home page Slider
	/* ========================================================================= */

	$(function() {

		var Page = (function() {

			var $navArrows = $( '#nav-arrows' ),
				$nav = $( '#nav-dots > span' ),
				slitslider = $( '#slitSlider' ).slitslider( {
				
				    speed : 1600,
				
					onBeforeChange : function( slide, pos ) {

						$nav.removeClass( 'nav-dot-current' );
						$nav.eq( pos ).addClass( 'nav-dot-current' );

					}
				} ),

				init = function() {
					initEvents();				
				},
				initEvents = function() {
					// add navigation events
					$navArrows.children( ':last' ).on( 'click', function() {
						slitslider.next();
						return false;
					} );

					$navArrows.children( ':first' ).on( 'click', function() {					
						slitslider.previous();
						return false;
					});

					$nav.each( function( i ) {				
						$( this ).on( 'click', function( event ) {						
							var $dot = $( this );						
							if( !slitslider.isActive() ) {
								$nav.removeClass( 'nav-dot-current' );
								$dot.addClass( 'nav-dot-current' );						
							}
							
							slitslider.jump( i + 1 );
							return false;
						
						});					
					});
				};
				return { init : init };

		})();

		Page.init();

	});

	/* ========================================================================= */
	/*	Parallax Sections
	/* ========================================================================= */


	"use strict";

	function parallaxInit() {
		$('#team-skills').parallax("50%", 0.3);
		$('#experience').parallax("50%", 0.2);
	}

	$(window).bind("load", function () {
	    parallaxInit()
	});
	
	/* ========================================================================= */
	/*	Timer count
	/* ========================================================================= */

	"use strict";
    $(".number-counters").appear(function () {
        $(".number-counters [data-to]").each(function () {
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 50,
                to: e,
                speed: 3e3,
                refreshInterval: 50
            })
        })
    });
	
	/* ========================================================================= */
	/*	Back to Top
	/* ========================================================================= */
	
	
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#back-top").fadeIn(200)
        } else {
            $("#back-top").fadeOut(200)
        }
    });
    $("#back-top").click(function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo")
    });
	
});


// ==========  START GOOGLE MAP ========== //
function initialize() {
    var myLatLng1 = new google.maps.LatLng(4.1156735, -72.9301367);
    var myLatLng2 = new google.maps.LatLng(-33.480287, -70.669683);
    var myCenterLatLng = new google.maps.LatLng(-13.9034183,-62.507871);

    var mapOptions = {
        zoom: 2,
        center: myCenterLatLng,
        disableDefaultUI: true,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: false,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
        }
    };

    var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatLng1,
        map: map,
        icon: 'img/location-icon.png',
        title: 'Bogotá/Fusagasugá',
    });

    var marker = new google.maps.Marker({
        position: myLatLng2,
        map: map,
        icon: 'img/location-icon.png',
        title: 'Santiago',
    });

}

google.maps.event.addDomListener(window, "load", initialize);
// ========== END GOOGLE MAP ========== //

// ==========  CHANGE LANGUAJE ========== //
function changeLanguage(target_lang) {
    if (internationalization[target_lang]) {
        $.each(internationalization[target_lang], function (index, value) {
            
            if(index != "#form-submit") {
            	$(index).text(value);
            } else {
            	$(index).val(value);
            }
        });
    }
}

$(document).ready(function () {
    changeLanguage("es");
    $(".english").click(function() { /*console.log("Languaje to: english");*/ changeLanguage('en'); });
    $(".spanish").click(function() { /*console.log("Languaje to: spanish");*/ changeLanguage('es'); });
});
// ==========  END CHANGE LANGUAJE ========== //

/* ========================================================================= */
/*	Skills TagCanvas
/* ========================================================================= */

$(document).ready(function() {
    if( ! $('#canvas-skills').tagcanvas({
        textColour: '#ffffff',
        outlineColour: '#2F6E92',
        textHeight: 20,
        outlineThickness : 0,
        maxSpeed : 0.15,
        depth : 0.5
    })) {
        // TagCanvas failed to load
        $('#canvas-skills-container').hide();
    }
});
