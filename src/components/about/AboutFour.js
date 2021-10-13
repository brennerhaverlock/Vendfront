import {Col, Container, Row} from "react-bootstrap";

const AboutFour = ({className}) => {
    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <div className="tt-wrapper-layoutbox03">
                <Container>
                    <Row>
                        <Col md={10} lg={8}>
                            <div className="tt-layout-box03 text-left">
                                <h2 className="tt-title">About</h2>
                                <p>
                                    A great about us block helps builds trust between you and your customers. The more
                                    content you provide about you and your business, the more confident people will be
                                    when purchasing from your store.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default AboutFour;