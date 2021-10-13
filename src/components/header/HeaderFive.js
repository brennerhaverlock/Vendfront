import PropTypes from "prop-types";
import HeaderLayout from "@components/header/layouts";
import {DesktopHeaderOne as DesktopHeader} from "@components/header/desktop";
import {NotificationBarTwo as NotificationBar} from "@components/notification-bar";

const HeaderFive = ({navbarAlignment, logoAlignment, containerFluid, logo, navbar, navData, notificationBar, className}) => {
    return (
        <HeaderLayout
            logo={logo}
            navData={navData}
            hoverClass="tt-hover-03"
            containerFluid={containerFluid}
        >
            {notificationBar && <NotificationBar containerFluid={containerFluid}/>}
            <DesktopHeader
                logo={logo}
                navbar={navbar}
                navData={navData}
                logoAlignment={logoAlignment}
                containerFluid={containerFluid}
                navbarAlignment={navbarAlignment}
                className={className}
            />
        </HeaderLayout>
    );
};

HeaderFive.defaultProps = {
    notificationBar: true,
    className: "tt-header-static tt-color-scheme-03 tt-bg-01"
}

HeaderFive.propTypes = {
    navbarAlignment: PropTypes.string,
    logoAlignment: PropTypes.string,
    containerFluid: PropTypes.bool,
    notificationBar: PropTypes.bool,
    logo: PropTypes.string.isRequired,
    navbar: PropTypes.bool.isRequired,
    navData: PropTypes.array.isRequired,
}

export default HeaderFive;