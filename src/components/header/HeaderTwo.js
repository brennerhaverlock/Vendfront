import PropTypes from "prop-types";
import HeaderLayout from "@components/header/layouts";
import {DesktopHeaderTwo as DesktopHeader} from "@components/header/desktop";
import {NotificationBarTwo as NotificationBar} from "@components/notification-bar";

const HeaderTwo = ({logo, navData, showNotificationBar, dark}) => {
    return (
        <HeaderLayout
            logo={logo}
            navData={navData}
            hoverStyleClass="tt-hover-02"
        >
            {showNotificationBar && <NotificationBar dark={dark} className="tt-color-scheme-02"/>}
            <DesktopHeader
                logo={logo}
                navData={navData}
            />
        </HeaderLayout>
    );
};

HeaderTwo.propTypes = {
    logo: PropTypes.string.isRequired,
    navData: PropTypes.array.isRequired
}

export default HeaderTwo;