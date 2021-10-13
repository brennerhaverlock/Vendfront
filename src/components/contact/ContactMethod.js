import {Col, Row} from "react-bootstrap";

const ContactMethod = ({className}) => {
    return (
        <div className={className ? className : ''}>
            <div className="tt-contact02-col-list">
                <Row>
                    <Col md={4} className="ml-sm-auto mr-sm-auto mt-0">
                        <div className="tt-contact-info mt-5">
                            <i className="tt-icon icon-f-93"/>
                            <h6 className="tt-title">LET’S HAVE A CHAT!</h6>
                            <address>
                                +777 2345 7885:<br/>
                                +777 2345 7886
                            </address>
                        </div>
                    </Col>

                    <Col md={4} className="mt-0">
                        <div className="tt-contact-info mt-5">
                            <i className="tt-icon icon-f-24"/>
                            <h6 className="tt-title">VISIT OUR LOCATION</h6>
                            <address>
                                2548 Broaddus Maple Court Avenue,<br/>
                                Madisonville KY 4783,<br/>
                                United States of America
                            </address>
                        </div>
                    </Col>

                    <Col md={4} className="mt-0">
                        <div className="tt-contact-info mt-5">
                            <i className="tt-icon icon-f-92"/>
                            <h6 className="tt-title">WORK TIME</h6>
                            <address>
                                7 Days a week<br/>
                                from 10 AM to 6 PM
                            </address>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ContactMethod;