import PropTypes from "prop-types";
import HeaderLayout from "@components/header/layouts";
import {DesktopHeaderFour as DesktopHeader} from "@components/header/desktop";
import {NotificationBarTwo as NotificationBar} from "@components/notification-bar";

const HeaderFour = ({navbarAlignment, logoAlignment, showNotificationBar, dark, containerFluid, logo, navData}) => {
    return (
        <HeaderLayout
            logo={logo}
            navData={navData}
            hoverStyleClass="tt-hover-03"
        >
            {showNotificationBar && <NotificationBar dark={dark} containerFluid={containerFluid}/>}

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

HeaderFour.defaultProps = {
    showNotificationBar: true
}

HeaderFour.propTypes = {
    navbarAlignment: PropTypes.string,
    logoAlignment: PropTypes.string,
    showNotificationBar: PropTypes.bool,
    dark: PropTypes.bool,
    containerFluid: PropTypes.bool,
    logo: PropTypes.string.isRequired,
    navData: PropTypes.array.isRequired,
}

export default HeaderFour;