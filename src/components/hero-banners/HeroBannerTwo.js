import {Container} from "react-bootstrap";
import data from "@data/hero-banners/home-three.json";
import SlideContent from "@components/slider/elements/SlideContent";

const HeroBannerTwo = () => {
    return (
        <div className="container-indent nomargin">
            <div className="slider-wrapper slider-style-3">
                <div className="slide-item" style={{backgroundImage: `url(${data.bgImage})`}}>
                    <Container fluid>
                        <div className="tt-promo-fullwidth">
                            <div className="tt-description position-relative">
                                <div className="tt-description-wrapper">
                                    <SlideContent data={data}/>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default HeroBannerTwo;