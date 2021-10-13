import {Container} from "react-bootstrap";

const HeroBannerSeven = () => {
    return (
        <div className="container-indent nomargin">
            <div className="slider-wrapper slider-style-3">
                <div className="slide-item" style={{backgroundImage: 'url(/assets/images/skins/coffee/coffee-01.jpg)'}}>
                    <Container fluid>
                        <div className="tt-promo-fullwidth">
                            <div className={`tt-description position-relative`}>
                                <div className="tt-description-wrapper">
                                    <div className="tp-caption-coffee-wd01">100%</div>
                                    <div className="tp-caption-coffee-wd02">Original Coffee</div>
                                    <div className="tp-caption-coffee-wd03">Welcome to Coffee Stores!</div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default HeroBannerSeven;