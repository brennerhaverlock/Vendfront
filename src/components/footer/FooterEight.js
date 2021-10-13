import PropTypes from "prop-types";
import Widget from "@components/widget";
import {Col, Container, Row} from "react-bootstrap";
import SocialIcons from "@components/newsletter/elements/Icons";
import NewsletterForm from "@components/newsletter/elements/Form";
import {CopyrightOne as Copyright} from "@components/footer/elements/copyright";

const FooterEight = ({className, logo}) => {
    return (
        <footer className={`${className ? className : ''} f-mobile-dark`}>
            <div className="tt-footer-col tt-color-scheme-04">
                <Container>
                    <Row>
                        <Col md={6} lg={2} xl={3}>
                            <Widget title="Call Us">
                                <address>
                                    (267) 730-8765<br/>(267) 730-8754
                                </address>
                            </Widget>
                        </Col>

                        <Col md={6} lg={2} xl={3}>
                            <Widget title="HOURS">
                                <address>
                                    T-F: 7AM – 5PM<br/>S-SU: 8AM – 5PM
                                </address>
                            </Widget>
                        </Col>

                        <Col md={6} lg={2} xl={3}>
                            <Widget title="LOCATION">
                                <address>
                                    242 S 11th St.<br/>Philly, NYC 19107
                                </address>
                            </Widget>
                        </Col>

                        <Col md={6} lg={2} xl={3}>
                            <div className="tt-newsletter">
                                <Widget title="NEWSLETTER SIGNUP">
                                    <p>Sign up for our e-mail and be the first who know our special offers!</p>
                                    <NewsletterForm/>
                                </Widget>
                            </div>

                            <SocialIcons/>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Copyright logo={logo}/>
        </footer>
    );
};

FooterEight.propTypes = {
    logo: PropTypes.string.isRequired
}

export default FooterEight;