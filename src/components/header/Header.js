import PropTypes from "prop-types";
import HeaderLayout from "@components/header/layouts";
import {DesktopHeaderFour as DesktopHeader} from "@components/header/desktop";
import {NotificationBarThree as NotificationBar} from "@components/notification-bar";

const HeaderSix = ({navbarAlignment, logoAlignment, containerFluid, logo, navData}) => {
    return (
        <HeaderLayout
            logo={logo}
            navData={navData}
            hoverStyleClass="tt-hover-03"
            containerFluid={containerFluid}
        >
            <NotificationBar
                containerFluid={containerFluid}
            />
            <DesktopHeader
                logo={logo}
                navData={navData}
                logoAlignment={logoAlignment}
                containerFluid={containerFluid}
                navbarAlignment={navbarAlignment}
            />
        </HeaderLayout>
    );
};

HeaderSix.propTypes = {
    navbarAlignment: PropTypes.string,
    logoAlignment: PropTypes.string,
    containerFluid: PropTypes.bool,
    logo: PropTypes.string.isRequired,
    navData: PropTypes.array.isRequired,
}

export default HeaderSix;