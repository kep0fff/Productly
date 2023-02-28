$(function(){
    $('.marketing__cards').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dotsClass: 'header-dots',
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 852,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
            }
        ]
    });
});

const burgerMenu = document.querySelector('.header');
burgerMenu.addEventListener('click', function(){
    burgerMenu.classList.toggle('open');
})
