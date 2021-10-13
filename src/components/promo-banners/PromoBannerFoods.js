import PropTypes from "prop-types";
import {Col, Container, Row} from "react-bootstrap";

const PromoBannerFoods = ({className}) => {
    return (
        <div className={`container-indent ${className ? className : className}`}>
            <Container fluid={true}>
                <Row noGutters>
                    <Col xs={12}>
                        <div className="tt-promo-fullwidth">
                            <img src="/assets/images/skins/foods/promo-img-01.jpg" alt="wokiee-food"/>
                            <div className="tt-description tt-point-h-l">
                                <div className="tt-description-wrapper text-left">
                                    <div className="tt-title-large">
                                        <span className="tt-base-color">THE BEST BURGER<br/>DELIVERY!</span>
                                    </div>
                                    <p className="tt-white-color">
                                        A great about us block helps builds trust between you and your<br/>
                                        customers. The more content you provide about you and your business,<br/>
                                        the more confident people will be when purchasing from your store.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

PromoBannerFoods.propTypes = {
    className: PropTypes.string
}

export default PromoBannerFoods;