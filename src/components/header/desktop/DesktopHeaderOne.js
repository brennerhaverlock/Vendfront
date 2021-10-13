import PropTypes from "prop-types";
import Logo from "@components/logo";
import Navbar from "@components/navbar";
import {Container} from "react-bootstrap";
import HeaderAction from "@components/header/action/HeaderAction";

const DesktopHeaderOne = ({className, navbarAlignment, containerFluid, dark, logo, navbar, navData}) => {
    return (
        <div className={`tt-desktop-header ${className ? className : ''}`}>
            <div className={dark ? 'tt-color-scheme-01' : 'tt-header-light'}>
                <Container fluid={containerFluid}>
                    <div className="tt-header-holder">
                        <div className="tt-col-obj tt-obj-logo">
                            <Logo src={logo} width={95} height={20}/>
                        </div>

                        <div
                            className={`tt-col-obj tt-obj-menu obj-alignment-${navbarAlignment ? navbarAlignment : 'left'}`}>
                            {navbar && (
                                <Navbar
                                    navData={navData}
                                    hoverStyleClass="tt-hover-03"
                                />
                            )}
                        </div>

                        <div className="tt-col-obj tt-obj-options">
                            <HeaderAction
                                cart={true}
                                search={true}
                                account={true}
                                settings={true}
                                className="obj-move-right"
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

DesktopHeaderOne.propTypes = {
    className: PropTypes.string,
    navbarAlignment: PropTypes.string,
    containerFluid: PropTypes.bool,
    dark: PropTypes.bool,
    logo: PropTypes.string.isRequired,
    navbar: PropTypes.bool.isRequired,
    navData: PropTypes.array.isRequired
}

DesktopHeaderOne.defaultProps = {
    dark: false,
    navbar: true
}

export default DesktopHeaderOne;
