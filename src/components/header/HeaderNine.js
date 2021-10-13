import PropTypes from "prop-types";
import HeaderLayout from "@components/header/layouts";
import {DesktopHeaderOne as DesktopHeader} from "@components/header/desktop";
import {NotificationBarThree as NotificationBar} from "@components/notification-bar";

const HeaderNine = ({navbarAlignment, logoAlignment, containerFluid, logo, navbar, navData}) => {
    return (
        <HeaderLayout
            logo={logo}
            navData={navData}
            hoverClass="tt-hover-03"
            containerFluid={containerFluid}
        >
            <NotificationBar
                containerFluid={containerFluid}
            />
            <DesktopHeader
                logo={logo}
                navbar={navbar}
                navData={navData}
                logoAlignment={logoAlignment}
                containerFluid={containerFluid}
                navbarAlignment={navbarAlignment}
                className="tt-header-static"
            />
        </HeaderLayout>
    );
};

HeaderNine.propTypes = {
    navbarAlignment: PropTypes.string,
    logoAlignment: PropTypes.string,
    containerFluid: PropTypes.bool,
    logo: PropTypes.string.isRequired,
    navbar: PropTypes.bool.isRequired,
    navData: PropTypes.array.isRequired,
}

export default HeaderNine;