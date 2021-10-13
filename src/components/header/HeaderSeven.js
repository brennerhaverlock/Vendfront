import PropTypes from "prop-types";
import HeaderLayout from "@components/header/layouts";
import {DesktopHeaderFive as DesktopHeader} from "@components/header/desktop";

const HeaderSeven = ({containerFluid, navbarAlignment, logo, navData}) => {
    return (
        <HeaderLayout
            logo={logo}
            navData={navData}
            hoverStyleClass="tt-hover-03"
            containerFluid={containerFluid}
            className="headertype3 headertype3-bottom"
        >
            <DesktopHeader
                logo={logo}
                navData={navData}
                navbarAlignment={navbarAlignment}
            />
        </HeaderLayout>
    );
};

HeaderSeven.propTypes = {
    containerFluid: PropTypes.bool,
    navbarAlignment: PropTypes.string,
    logo: PropTypes.string.isRequired,
    navData: PropTypes.array.isRequired,
}

export default HeaderSeven;