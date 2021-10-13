import {Container} from "react-bootstrap";
import data from "@data/hero-banners/home-two.json";
import SlideContent from "@components/slider/elements/SlideContent";

const HeroBannerOne = ({className}) => {
    return (
        <div className={`tt-offset-20 container-indent ${className ? className : ''}`}>
            <Container>
                <div className="slider-wrapper slider-style-2">
                    <div
                        className="slide-item"
                        style={{backgroundImage: `url(${data?.bgImage})`}}
                    >
                        <div className="tt-promo-fullwidth w-100">
                            <div className="tt-description tt-point-h-l position-relative">
                                <div className="tt-description-wrapper">
                                    <SlideContent data={data}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HeroBannerOne;