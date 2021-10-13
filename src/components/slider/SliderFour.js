import Slider from "react-slick";
import PropTypes from "prop-types";
import ProductSlide from "@components/slider/elements/ProductSlide";

const SliderFour = ({className, dots, arrows, data}) => {
    const settings = {
        dots: dots,
        arrows: arrows,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <div className="mainSlider-layout">
                <Slider
                    {...settings}
                    className="mainSliderSlick mainSlider-layout-custom arrow-slick-main"
                >
                    {data.map(slide => (
                        <ProductSlide
                            key={slide.id}
                            title={slide.title}
                            content={slide.content}
                            bgImage={slide.bgImage}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

SliderFour.propTypes = {
    className: PropTypes.string,
    dots: PropTypes.bool,
    arrows: PropTypes.bool,
    data: PropTypes.array.isRequired
}

export default SliderFour;