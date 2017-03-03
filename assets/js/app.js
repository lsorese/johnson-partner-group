    jQuery(function() {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.base__pagination .row',
            paginationClickable: true,
            slidesPerView: 1,
            spaceBetween: 0,
            keyboardControl: true,
            mousewheelControl: true,
            direction: 'vertical',
            onSlideChangeEnd: function(swiper) {
                $('.bullet').removeClass('active');
                $('.bullet[data-index="' + swiper.activeIndex + '"]').addClass('active');
            },
            paginationBulletRender: function(swiper, index, className) {
                return '<div class="bullet" data-name="" data-index="' + index + '"><span class="bullet__one"></span><span class="bullet__name"></span><span class="bullet__two" data-name="name"></span></div>';
            }
        });

        $('.home__scroll').on('click', function(e) {
            swiper.slideTo(1, 1000);   
        });

        $(".home__h2__rewrite").typed({
            strings: ["This is the first sentence.", "We do some stuff and some more stuff.", "Lastly, we do a lot of very long stuff. Very, very long."],
            typeSpeed: 0
        });

$('.sub').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 6);
    var amountMovedY = (e.pageY * -1 / 6);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
});

$('.sub__bg2').mousemove(function(e){
    var amountMovedX = (e.pageX * -1 / 6);
    var amountMovedY = (e.pageY * -1 / 6);
    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
});



        /*

                $(".animsition").animsition({
                    inClass: 'fade-in-left',
                    outClass: 'fade-out-right',
                    inDuration: 800,
                    outDuration: 800,
                    linkElement: '.animsition-link',
                    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
                    loading: true,
                    loadingParentElement: 'body', //animsition wrapper element
                    loadingClass: 'animsition-loading',
                    loadingInner: '', // e.g '<img src="loading.svg" />'
                    timeout: false,
                    timeoutCountdown: 5000,
                    onLoadEvent: true,
                    browser: ['animation-duration', '-webkit-animation-duration'],
                    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
                    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
                    overlay: false,
                    overlayClass: 'animsition-overlay-slide',
                    overlayParentElement: 'body',
                    transition: function(url) { window.location.href = url; }
                }); */

    });
