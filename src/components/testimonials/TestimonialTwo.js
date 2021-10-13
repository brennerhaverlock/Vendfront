import Slider from "react-slick";
import data from "@data/testimonials";
import {Container} from "react-bootstrap";
import Parallax, {Layer} from "react-parallax-scroll";

const TestimonialTwo = ({className, bgImage}) => {
    return (
        <div className={`wrapper ${className ? className : ''}`}>
            <Parallax>
                <Layer
                    className="container-bg"
                    style={{backgroundImage: `url(${bgImage})`, backgroundAttachment: 'fixed'}}
                    settings={{speed: -0.3, type: 'backgroundY'}}
                >
                    <Container>
                        <Slider
                            className="tt-slider-fullwidth arrow-location-center-02"
                        >
                            {data.map(item => (
                                <div className="item" key={item?.id}>
                                    <div className="tt-content-info">
                                        <h2 className="tt-title">{`“${item?.quote}”`}</h2>

                                        <div className="tt-subscription">
                                            <div className="tt-text-small">by {item?.designation}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </Container>
                </Layer>
            </Parallax>
        </div>
    );
};

export default TestimonialTwo;