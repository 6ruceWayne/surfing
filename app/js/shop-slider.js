$(window).on('load', function () {

    const shopSlider = $("#shopSlider");

    console.log(1);

    shopSlider.owlCarousel({
        loop: true,
        dots: false,
        margin: 2,
        smartSpeed: 1000,
        responsive: {
            0 : {
                items: 1,
            },
            1254 : {
                items: 3,
            }
        }
    });

    $('#shopSliderLeft').click(function () {
        shopSlider.trigger('prev.owl.carousel');
    });
    $('#shopSliderRight').click(function () {
        shopSlider.trigger('next.owl.carousel');
    });


});