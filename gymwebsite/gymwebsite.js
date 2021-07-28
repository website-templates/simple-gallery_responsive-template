(Function($){
    "use strict";

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrolltop() > 200 {
            $('.back-to-top').FadeIn('slow');
        } else {
            $(',back-to-top').FadeOut('fast');
        }
    });
    $('.back-to-top').click(function () {
        $('html,body').animate({scrolltop: 0}, 1500, 'easeInOutExpo');
        return false;


    });
    

    

    
        