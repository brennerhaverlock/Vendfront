import services from "@data/services";
import Service from "@components/service";
import {Container, Col, Row} from "react-bootstrap";

const ServicesOne = ({className}) => {
    return (
        <div className={`${className ? className : ''} container-indent`}>
            <Container>
                <Row className="tt-services-listing">
                    {services.map(service => (
                        <Col sm={6} md={4} key={service.id}>
                            <Service
                                title={service.title}
                                icon={service.iconClass}
                                content={service.content}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ServicesOne;