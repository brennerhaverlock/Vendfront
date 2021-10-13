const sliderConfig = {
    slidesToShow: 4,
    slideToggle: 1,
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    infinite: false,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1
            }
        }
    ]
}

export default sliderConfig;