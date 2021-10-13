import {Col, Container, Row} from "react-bootstrap";

const AboutFive = ({className}) => {
    return (
        <div className={`container-indent tt-section-wrapper-01 ${className ? className : ''}`}>
            <div className="container-inner">
                <Container>
                    <Row className="tt-layout-box04">
                        <Col md={6}>
                            <div className="col-title">
                                <h4 className="tt-title">
                                    About<br/> comic book <br/> store
                                </h4>
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className="col-description">
                                <p>Wokiee Shopify Theme is more than usual theme. It is a powerful design tool. Wokiee is
                                    outstanding Premium Shopify theme. It will be perfect solution for your current or
                                    future webshop.</p>
                                <p>It has all required tools and modules to create super fast responsive website with
                                    amazing UX. Great variety of numerous layouts and styles allows to create different
                                    structures and satisfies any specific requirements.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default AboutFive;