new Swiper('.swiper', {
    loop: true,
    loopedSlides: 3,
    
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    simulateTouch: false,

    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
    },

    slidesPerView: 5,
    spaceBetween: 129,
    watchOverflow: true,
    centeredSlides: true,
    initialSlide: 4,
});