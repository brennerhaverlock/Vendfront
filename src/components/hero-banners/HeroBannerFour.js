import Link from "next/link";
import {Container} from "react-bootstrap";

const HeroBannerFour = () => {
    return (
        <div className="container-indent nomargin">
            <div className="slider-wrapper slider-style-4">
                <div className="slide-item" style={{backgroundImage: 'url(/assets/images/slides/19/slide-01.jpg)'}}>
                    <Container fluid>
                        <div className="tt-promo-fullwidth">
                            <div className={`tt-description position-relative`}>
                                <div className="tt-description-wrapper">
                                    <div className="tp-caption3-wd-1">Special Offer</div>
                                    <div className="tp-caption3-wd-2">Final Clearance<br/> Up to 80% Off</div>
                                    <div className="tp-caption1-wd-4 tp-caption-list-btn">
                                        <Link href="/product/category/women">
                                            <a className="btn btn-xl btn-white">SHOP WOMEN</a>
                                        </Link>

                                        <Link href="/product/category/men">
                                            <a className="btn btn-xl btn-white mt-lg-0">SHOP MEN</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default HeroBannerFour;