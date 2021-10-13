import {Container} from "react-bootstrap";
import data from "@data/hero-banners/home-eleven.json";
import SlideContent from "@components/slider/elements/SlideContent";

const HeroBannerThree = () => {
    return (
        <div className="container-indent nomargin">
            <div className="slider-wrapper slider-style-3">
                {data.map(item =>(
                    <div key={item.id} className="slide-item" style={{backgroundImage: `url(${item.bgImage})`}}>
                        <Container fluid>
                            <div className="tt-promo-fullwidth">
                                <div className={`tt-description position-relative ${item.extraClass}`}>
                                    <div className="tt-description-wrapper">
                                        <SlideContent data={item}/>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroBannerThree;