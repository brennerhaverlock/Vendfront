import PropTypes from "prop-types";
import HeaderLayout from "@components/header/layouts";
import {DesktopHeaderThree as DesktopHeader} from "@components/header/desktop";
import {NotificationBarOne as NotificationBar} from "@components/notification-bar";

const HeaderThree = ({logo, navData, navbarAlignment, showNotificationBar}) => {
    return (
        <HeaderLayout
            logo={logo}
            navData={navData}
            hoverStyleClass="tt-hover-03"
        >
            {showNotificationBar && <NotificationBar/>}
            <DesktopHeader
                logo={logo}
                navData={navData}
                navbarAlignment={navbarAlignment}
            />
        </HeaderLayout>
    );
};

HeaderThree.defaultProps = {
    showNotificationBar: true
}

HeaderThree.propTypes = {
    logo: PropTypes.string.isRequired,
    navData: PropTypes.array.isRequired,
    navbarAlignment: PropTypes.string
}

export default HeaderThree;