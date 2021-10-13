import Logo from "@components/logo";
import PropTypes from "prop-types";
import {Row, Container} from "react-bootstrap";
import HeaderAction from "@components/header/action/HeaderAction";

const MobileHeader = ({className, mobileNavbarHandler, logo}) => {
    return (
        <div className={`tt-mobile-header ${className ? className : null}`}>
            <Container fluid>
                <div className="tt-header-row">
                    <HeaderAction
                        hamburger={true}
                        search={true}
                        cart={true}
                        account={true}
                        settings={true}
                        mobileNavbarHandler={mobileNavbarHandler}
                    />
                </div>
            </Container>

            <Container fluid className="tt-top-line">
                <Row>
                    <div className="tt-logo-container">
                        <Logo
                            src={logo}
                            width={95}
                            height={20}
                        />
                    </div>
                </Row>
            </Container>
        </div>
    );
};

MobileHeader.propTypes = {
    mobileNavbarHandler: PropTypes.func.isRequired,
    logo: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default MobileHeader;