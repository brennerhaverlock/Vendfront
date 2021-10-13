import PropTypes from "prop-types";
import HeaderLayout from "@components/header/layouts";
import {DesktopHeaderFive as DesktopHeader} from "@components/header/desktop";
import {NotificationBarFour as NotificationBar} from "@components/notification-bar";

const HeaderThirteen = ({containerFluid, navbarAlignment, logo, navData, notificationBar}) => {
    return (
        <HeaderLayout
            logo={logo}
            navData={navData}
            hoverStyleClass="tt-hover-03"
            containerFluid={containerFluid}
            className="headertype3 headertype3-bottom"
        >
            {notificationBar && <NotificationBar containerFluid={containerFluid}/>}
            <DesktopHeader
                logo={logo}
                navData={navData}
                navbarAlignment={navbarAlignment}
            />
        </HeaderLayout>
    );
};

HeaderThirteen.propTypes = {
    containerFluid: PropTypes.bool,
    notificationBar: PropTypes.bool,
    navbarAlignment: PropTypes.string,
    logo: PropTypes.string.isRequired,
    navData: PropTypes.array.isRequired,
}

export default HeaderThirteen;