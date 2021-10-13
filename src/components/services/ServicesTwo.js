import Service from "@components/service";
import {Container, Col, Row} from "react-bootstrap";

const ServicesTwo = ({className}) => {
    return (
        <div className={`${className ? className : ''} container-indent`}>
            <Container>
                <Row className="tt-services-listing tt-services-listing-alignment">
                    <Col md={6}>
                        <Service
                            icon="icon-f-43"
                            title="Free Shipping"
                            content="Free shipping on all US order or order above $49"
                        />
                    </Col>

                    <Col md={6}>
                        <Service
                            icon="icon-e-54"
                            title="Payment"
                            content="Credit Card: Visa, MasterCard, Maestro, American Express."
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServicesTwo;