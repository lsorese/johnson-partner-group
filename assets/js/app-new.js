jQuery(function() {

    jQuery('.lines').click(function() {
        $(this).children('.line').each(function() {
            if ($(this).attr('class').indexOf("line--small") >= 0) {
                $(this).removeClass('line--small');
            } else {
                $(this).addClass('line--small');
            }
        })
    })

    $('.sub:not(:first)').hide();
    $('.lines').click(function() {
        $('.sub').first().fadeOut(function() {
            $(this).next().fadeIn();
            $(this).appendTo('.subs__wrap');
        });
        return false;
    });



    var swiper = new Swiper('.base', {
        slidesPerView: 1,
        spaceBetween: 0,
        keyboardControl: true,
        mousewheelControl: true,
        effect: "scroll",
        direction: "vertical",
        onSlideChangeStart: function(swiper) {
            if (swiper.activeIndex !== 0) {
                $('.base__social').fadeIn();
                $('.base__social').addClass('active');
            } else {
                $('.base__social').fadeOut();
                $('.base__social').removeClass('active');

            }
        }
    })

    $('.home__scroll').on('click', function(e) {
        swiper.slideTo(1, 1000)
    });

    setTimeout(function() {
        $(".home__h2__rewrite").typed({
            strings: [
                "Video Conferencing.",
                "Cloud &amp; Web Solutions.",
                "Network and Infrastructure.",
                "Service Delivery.",
                "Quality Assurance.",
                "End User Experience.",
                "Organizational Transformation.",
                "Project Management.",
                "Branding.",
                "Marketing.",
                "Web Development."
            ],
            typeSpeed: 30,
            contentType: 'html'


        });
    }, 1000);

    $(".cd").logosDistort({
        effectWeight: 2,
        outerBuffer: 1.08,
        elementDepth: 200,
        perspectiveMulti: 2.5,
        enableSmoothing: true
    });



});
