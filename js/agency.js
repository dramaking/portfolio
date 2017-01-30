// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Hamburger Menu
    openMenuBtn();

    function openMenuBtn() {
        $(document).on("keyup", function(event) {
            if (event.keyCode == 27) {
                event.preventDefault();
                $("#menu-btn").trigger("click");
            }
        });

        $("#menu-btn").on("click", function(event) {
            event.preventDefault();
        });

        $("#menu-btn").on("click", function(event) {
        event.preventDefault();
        $(this).toggleClass("active");

        $("body").bind("mousewheel touchmove", function(event) {
            if ($("#menu-btn").hasClass("active")) {
                event.preventDefault();
            }
            else {
                 $(this).unbind(event);
            }
        });

        $("#overlay").toggleClass("open");
        $("#main-wrapper").toggleClass("blur");
      });

        $("#overlay ul li a").on("click", function() {
            $("#menu-btn").trigger("click");
        });
    }

})(jQuery); // End of use strict

