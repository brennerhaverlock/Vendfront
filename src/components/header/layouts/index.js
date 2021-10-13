import {useState} from "react";
import PropTypes from "prop-types";
import {MobileNav} from "@components/nav";
import MobileHeader from "@components/header/mobile";
import StickyHeader from "@components/header/sticky";

const HeaderLayout = ({className, hoverStyleClass, children, containerFluid, navData, logo}) => {
    const [showMobileNavbar, setShowMobileNavbar] = useState(false);

    const mobileNavbarHandler = () => {
        setShowMobileNavbar(prevState => !prevState);
    }

    return (
        <header className={`tt-header ${className ? className : ''}`}>
            {children}
            <MobileNav
                navData={navData}
                showMobileNavbar={showMobileNavbar}
                mobileNavbarHandler={mobileNavbarHandler}
            />
            <MobileHeader
                logo={logo}
                mobileNavbarHandler={mobileNavbarHandler}
            />
            <StickyHeader
                navData={navData}
                hoverStyleClass={hoverStyleClass}
                containerFluid={containerFluid}
                mobileNavbarHandler={mobileNavbarHandler}
            />
        </header>
    );
};

HeaderLayout.propTypes = {
    navData: PropTypes.array.isRequired,
    logo: PropTypes.string.isRequired,
    className: PropTypes.string,
    hoverStyleClass: PropTypes.string,
    containerFluid: PropTypes.bool,
}

export default HeaderLayout;