jQuery(function() {

    jQuery('.swiper-slide:nth-child(1)').addClass('active');

    var swiper = new Swiper('.swiper-container', {
        pagination: '.base__pagination .row',
        paginationClickable: true,
        slidesPerView: 1,
        spaceBetween: 0,
        keyboardControl: true,
        mousewheelControl: true,
        direction: 'vertical',
        onSlideChangeStart: function(swiper) {
            if (swiper.activeIndex !== 0) {
                $('.base__social').show();
                $('.base__social').addClass('active');
            } else {
                $('.base__social').hide();
                $('.base__social').removeClass('active');

            }

        }
    })

    $('.home__scroll').on('click', function(e) {
        swiper.slideTo(1, 1000);
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
            typeSpeed: 30
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
