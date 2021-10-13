import {Col, Container, Row} from "react-bootstrap";
import NewsletterForm from "@components/newsletter/elements/Form";

const NewsletterThree = ({className}) => {
    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <Container>
                <Row className="justify-content-center">
                    <Col md={10} lg={8} xl={6}>
                        <div className="tt-layout-newsletter02">
                            <h5 className="tt-title">Keep in Touch</h5>
                            <div className="tt-title-description">
                                Enjoy 15% off your first order when<br/>you join our mailing list.
                            </div>
                            <NewsletterForm/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewsletterThree;