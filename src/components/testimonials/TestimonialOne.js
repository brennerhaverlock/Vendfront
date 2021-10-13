import Slider from "react-slick";
import data from "@data/testimonials";
import {Container} from "react-bootstrap";
import SectionTitle from "@components/ui/section-title";

const TestimonialOne = ({className}) => {
    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <Container>
                <SectionTitle
                    title="WHAT THEY’RE SAYING"
                />

                <Slider
                    className="tt-slider-fullwidth arrow-location-center-02"
                >
                    {data.map(item => (
                        <div className="item" key={item?.id}>
                            <div className="tt-content-info">
                                <p>“{item?.quote}”</p>
                                <div className="tt-subscription">
                                    <div className="tt-text-large">{item?.client}</div>
                                    <div className="tt-text-small">{item?.designation}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </Container>
        </div>
    );
};

export default TestimonialOne;