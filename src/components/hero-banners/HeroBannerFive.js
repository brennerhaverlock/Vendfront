import Link from "next/link";
import {Col, Container, Row} from "react-bootstrap";
import CategoriesMenu from "@components/categories-menu";

const HeroBannerFive = ({className}) => {
    return (
        <div className={`${className ? className : ''} container-indent`}>
            <Container>
                <Row>
                    <Col md={3} className="tt-hidden-mobile">
                        <CategoriesMenu
                            initialVisibility={true}
                            className="categories-btn-nobtn categories-btn-align tt-categories-size-large"
                        />
                    </Col>

                    <Col md={8} lg={6}>
                        <div className="tt-promo-fullwidth tt-layout-size-02">
                            <img src="/assets/images/promo/index20-promo-img-06.jpg" alt="wokiee"/>
                            <div className="tt-description tt-point-h-l">
                                <div className="tt-description-wrapper text-left">
                                    <div className="tt-title-small">SUMMER 2021</div>
                                    <div className="tt-title-large">NEW ARRIVALS</div>
                                    <Link href="/shop">
                                        <a className="btn btn-xl">DISCOVER NOW</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <div className="divider-sm d-block d-md-none"/>

                    <Col sm={6} md={4} lg={3} className="text-center">
                        <Link href="/shop">
                            <a className="tt-promo-box hover-type-2 nomargin">
                                <img src="/assets/images/promo/index20-promo-img-05.jpg" alt="wokiee"/>
                                <div className="tt-description tt-point-v-b">
                                    <div className="tt-description-wrapper">
                                        <div className="tt-background"/>
                                        <div className="tt-title-small">TOP VIEW IN THIS WEEK</div>
                                        <div className="tt-title-large">TRENDING</div>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HeroBannerFive;