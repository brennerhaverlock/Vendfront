import {Col, Container, Row} from "react-bootstrap";
import parse from "react-html-parser";

const AboutSix = ({className, reverse, thumb, content}) => {
    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <Container>
                <Row className={`tt-layout-box01 classnoactions ${reverse ? 'flex-row-reverse' : ''}`}>
                    <Col md={7} className="col-img">
                        <img src={thumb} alt="wokiee-handmade"/>
                    </Col>

                    <Col md={5} className="col-description text-left">
                        <p>{parse(content)}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutSix;