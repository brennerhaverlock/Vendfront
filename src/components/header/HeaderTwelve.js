import {useState} from "react";
import PropTypes from "prop-types";
import Logo from "@components/logo";
import Navbar from "@components/navbar";
import {Container} from "react-bootstrap";
import {MobileNav} from "@components/nav";
import HeaderAction from "@components/header/action/HeaderAction";
import MobileHeader from "@components/header/mobile";

const HeaderTwelve = ({navData, containerFluid, logo}) => {
    const [showMobileNavbar, setShowMobileNavbar] = useState(false);

    const mobileNavbarHandler = () => {
        setShowMobileNavbar(prevState => !prevState);
    }

    return (
        <header id="tt-header">
            {/* Mobile Nav */}
            <MobileNav
                navData={navData}
                showMobileNavbar={showMobileNavbar}
                mobileNavbarHandler={mobileNavbarHandler}
            />

            {/* Mobile Header */}
            <MobileHeader
                logo={logo}
                mobileNavbarHandler={mobileNavbarHandler}
            />

            <div className="tt-desktop-header">
                <Container fluid={containerFluid}>
                    <div className="tt-header-holder">
                        {/* Logo Start */}
                        <div className="tt-obj-logo obj-alignment-center">
                            <Logo src={logo}/>
                        </div>
                        {/* /Logo End */}

                        <div className="tt-obj-options obj-move-right tt-position-absolute">
                            {/* tt-search */}
                            <div className="tt-parent-box tt-obj-search-type2">
                                <div className="tt-search-type2">
                                    <form action="/" role="search">
                                        <i className="icon-f-85"/>
                                        <input
                                            autoComplete="off"
                                            className="tt-search-input"
                                            type="search" placeholder="Search..."
                                        />
                                        <button type="submit" className="tt-btn-search">SEARCH</button>
                                    </form>
                                </div>
                            </div>
                            {/*  /tt-search  */}

                            <HeaderAction
                                cart={true}
                                account={true}
                                mobileNavbarHandler={mobileNavbarHandler}
                            />
                        </div>
                    </div>
                </Container>

                <Container>
                    <div className="tt-header-holder">
                        {/* Navbar */}
                        <div className="tt-obj-menu obj-alignment-center">
                            <Navbar
                                navData={navData}
                                hoverStyleClass="tt-menu-small"
                            />
                        </div>
                        {/* /Navbar */}
                    </div>
                </Container>
            </div>
        </header>
    );
};

HeaderTwelve.propTypes = {
    navData: PropTypes.array.isRequired,
    logo: PropTypes.string.isRequired,
    containerFluid: PropTypes.bool
}

export default HeaderTwelve;