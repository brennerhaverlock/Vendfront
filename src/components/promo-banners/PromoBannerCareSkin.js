import Link from "next/link";
import {Col, Container, Row} from "react-bootstrap";
import Parallax, {Layer} from 'react-parallax-scroll';

const PromoBannerCareSkin = ({className, bgImage}) => {
    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <Parallax>
                <Layer style={{backgroundImage: `url(${bgImage})`}} settings={{speed: 0.2, type: 'backgroundY'}}>
                    <Container>
                        <Row noGutters>
                            <Col xs={12}>
                                <div className="tt-promo-fullwidth tt-promo-parallax">
                                    <div className="tt-description tt-point-h-l p-0">
                                        <div className="tt-description-wrapper text-left">
                                            <div className="tt-title-small">
                                                <span className="tt-base-color">It's made in Japan</span>
                                            </div>
                                            <p>
                                                WOKIEE React Template is more than usual theme. It is a powerful design
                                                tool. WOKIEE is outstanding Premium Shopify theme. It will be perfect
                                                solution for your current or future webshop.
                                            </p>
                                            <Link href="/about">
                                                <a className="btn btn-xl btn-white">Read more about us →</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Layer>
            </Parallax>
        </div>
    );
};

PromoBannerCareSkin.defaultProps = {
    bgImage: "/assets/images/skins/baby/promo/promo-img-01.jpg"
}

export default PromoBannerCareSkin;