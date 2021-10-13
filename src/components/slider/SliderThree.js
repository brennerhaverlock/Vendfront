import {Col, Container, Row} from "react-bootstrap";
import Slider from "react-slick";
import SlideContent from "@components/slider/elements/SlideContent";

const SliderThree = ({className, dots, arrows, data, sliderWrapper, contentAlign}) => {
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
                                <div className="slide-item">
                                    <Container>
                                        <Row>
                                            <Col md={{span:7, order:"first"}} xs={{span:12, order: "last"}}>
                                                <div className={`slide-content slide-content-${contentAlign} text-${contentAlign} ${slide?.extraClass}`}>
                                                    <div className="slide-content-inner">
                                                        <SlideContent data={slide}/>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={{span:5, order:"last"}} xs={{span:12, order:"first"}}>
                                                <div className="slide-thumb">
                                                    <img src={slide.thumb} alt="wokiee-books"/>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </div>
        </div>
    );
};

SliderThree.defaultProps = {
    arrows: true,
    dots: true,
    data: [],
    contentAlign: "center"
}

export default SliderThree;