import {Col, Row} from "react-bootstrap";

const ContactForm = ({className}) => {
    return (
        <div className={`contact-form form-default ${className ? className : ''}`}>
            <form
                method="post"
                action="/"
            >
                <Row>
                    <Col md={6}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Your Name (required)"
                                required={true}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Your Email (required)"
                                required={true}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                name="subject"
                                className="form-control"
                                placeholder="Subject"
                                required={false}
                            />
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className="form-group">
                        <textarea
                            name="message"
                            className="form-control"
                            rows="7"
                            placeholder="Your Message"
                            required
                        />
                        </div>
                    </Col>
                </Row>
                <div className="text-center">
                    <button type="submit" className="btn">SEND MESSAGE</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;