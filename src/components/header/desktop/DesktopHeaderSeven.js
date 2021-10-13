import PropTypes from "prop-types";
import Logo from "@components/logo";
import Navbar from "@components/navbar";
import {Container} from "react-bootstrap";

const DesktopHeaderSeven = ({className, logo, navData, logoAlignment, navbarAlignment, containerFluid}) => {
    return (
        <div className={`tt-desktop-header ${className ? className : ''}`}>
            <Container fluid={containerFluid}>
                <div className="tt-header-holder">
                    <div className={`tt-col-obj obj-alignment-${logoAlignment}`}>
                        <Logo src={logo}/>
                    </div>
                </div>
            </Container>

            <Container fluid={containerFluid}>
                <div className="tt-header-holder">
                    <div className={`tt-obj-menu obj-alignment-${navbarAlignment}`}>
                        <Navbar
                            navData={navData}
                            hoverStyleClass="tt-hover-03"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

DesktopHeaderSeven.propTypes = {
    navbarAlignment: PropTypes.string,
    logoAlignment: PropTypes.string,
    containerFluid: PropTypes.bool,
    logo: PropTypes.string.isRequired,
    navData: PropTypes.array.isRequired,
}

export default DesktopHeaderSeven;