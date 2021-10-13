import Slider from "react-slick";
import {Container} from "react-bootstrap";
import SlideContent from "@components/slider/elements/SlideContent";

const SliderTwo = ({className, data, arrows, dots, sliderWrapper}) => {
    const settings = {
        dots: dots,
        arrows: arrows,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className={`${className ? className : ''} container-indent`}>
            <div className={`slider-wrapper ${sliderWrapper ? sliderWrapper : ''}`}>
                <Container>
                    <Slider {...settings}>
                        {data.map(slide => (
                            <div key={slide.id}>
                                <div className="slide-item" style={{backgroundImage: `url(${slide.bgImage})`}}>
                                    <div className="slide-content text-center w-100">
                                        <div className="slide-content-inner">
                                            <SlideContent data={slide}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </div>
        </div>
    );
};

SliderTwo.defaultProps = {
    arrows: true,
    dots: true,
    data: []
}

export default SliderTwo;