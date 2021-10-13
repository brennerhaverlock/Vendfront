import Slider from "react-slick";
import {Container} from "react-bootstrap";

const ServicesThree = () => {
    const sliderOptions = {
        autoplay: true,
        infinite: false,
        arrows: false,
        cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },{
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    }

    return (
        <div className="tt-line-info">
            <Container>
                <Slider
                    {...sliderOptions}
                >
                    <div className="tt-item">
                        <span className="tt-icon icon-f-44"/>
                        <span className="tt-text">FREE delivery available</span>
                    </div>
                    <div className="tt-item">
                        <span className="tt-icon icon-f-38"/>
                        <span className="tt-text">1 YEAR Guarantee</span>
                    </div>
                    <div className="tt-item">
                        <span className="tt-icon icon-e-09"/>
                        <span className="tt-text">30 DAYS returns</span>
                    </div>
                    <div className="tt-item">
                        <span className="tt-icon icon-n-05"/>
                        <span className="tt-text">4.5/5 on Reviews</span>
                    </div>
                </Slider>
            </Container>
        </div>
    );
};

export default ServicesThree;