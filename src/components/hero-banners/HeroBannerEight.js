import {Col, Container, Row} from "react-bootstrap";

const HeroBannerEight = ({className}) => {
    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <div className="tt-mainpromo">
                <div className="tt-description">
                    <Container>
                        <div className="tt-bg-img">
                            <img
                                alt="wokiee-food"
                                className="tt-bg-img zoomIn animated"
                                src="/assets/images/skins/foods/mainpromo-img-01.png"
                            />
                        </div>

                        <div className="tt-layout-box hatch">
                            <div className="tt-text-large">BURGERS</div>
                            <div className="tt-text-small">IN NEW YORK CITY</div>
                        </div>

                        <div className="tt-layout-col">
                            <Row>
                                <Col md={4}>
                                    <h6 className="tt-title">Call Us</h6>
                                    <address>
                                        (267) 730-8765<br/>
                                        (267) 730-8754
                                    </address>
                                </Col>

                                <Col md={4}>
                                    <h6 className="tt-title">Hours</h6>
                                    <address>
                                        T-F: 7AM – 5PM<br/>
                                        S-SU: 8AM – 5PM
                                    </address>
                                </Col>

                                <Col md={4}>
                                    <h6 className="tt-title">Location</h6>
                                    <address>
                                        242 S 11TH ST.<br/>
                                        PHILLY, NYC 19107
                                    </address>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default HeroBannerEight;