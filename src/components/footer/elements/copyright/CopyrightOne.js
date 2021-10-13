import PropTypes from "prop-types";
import Logo from "@components/logo";
import {Container} from "react-bootstrap";

const CopyrightOne = ({className, logo, dark}) => {
    return (
        <div className={`tt-footer-custom ${className ? className : ''} ${dark ? 'tt-color-scheme-04' : ''}`}>
            <Container>
                <div className="tt-row">
                    <div className="tt-col-left">
                        <div className="tt-col-item tt-logo-col">
                            <Logo src={logo}/>
                        </div>
                        <div className="tt-col-item">
                            <div className="tt-box-copyright ht-copy">
                                &copy; Wokiee {new Date().getFullYear()}. Made with <i
                                className="text-danger icon-h-37"/> by <a
                                href="https://hasthemes.com" target="_blank" rel="noopener noreferrer">HasThemes</a>.
                            </div>
                        </div>
                    </div>
                    <div className="tt-col-right">
                        <div className="tt-col-item">
                            {!dark ? (
                                <img src="/assets/images/no-placeholder/payment.jpg" alt="payment"/>
                            ) : (
                                <img src="/assets/images/no-placeholder/payment-without-bg.png" alt="payment"/>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

CopyrightOne.propTypes = {
    className: PropTypes.string,
    logo: PropTypes.string.isRequired
}

export default CopyrightOne;