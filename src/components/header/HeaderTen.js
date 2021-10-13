import PropTypes from "prop-types";
import HeaderLayout from "@components/header/layouts";
import {DesktopHeaderSeven as DesktopHeader} from "@components/header/desktop";

const HeaderTen = ({navbarAlignment, logoAlignment, containerFluid, logo, navData}) => {
    return (
        <HeaderLayout
            logo={logo}
            navData={navData}
            hoverClass="tt-hover-03"
            containerFluid={containerFluid}
        >
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

HeaderTen.propTypes = {
    navbarAlignment: PropTypes.string,
    logoAlignment: PropTypes.string,
    containerFluid: PropTypes.bool,
    logo: PropTypes.string.isRequired,
    navData: PropTypes.array.isRequired,
}

export default HeaderTen;