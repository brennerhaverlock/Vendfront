import PropTypes from "prop-types";
import HeaderLayout from "@components/header/layouts";
import {DesktopHeaderOne as DesktopHeader} from "@components/header/desktop";

const HeaderOne = ({navbarAlignment, dark, logo, navbar, navData, containerFluid}) => {
    return (
        <HeaderLayout
            logo={logo}
            navData={navData}
            hoverStyleClass="tt-hover-03"
        >
            <DesktopHeader
                dark={dark}
                logo={logo}
                navbar={navbar}
                navData={navData}
                navbarAlignment={navbarAlignment}
                containerFluid={containerFluid}
            />
        </HeaderLayout>
    );
};

HeaderOne.propTypes = {
    navbarAlignment: PropTypes.string,
    dark: PropTypes.bool,
    containerFluid: PropTypes.bool,
    logo: PropTypes.string.isRequired,
    navbar: PropTypes.bool.isRequired,
    navData: PropTypes.array.isRequired
}

export default HeaderOne;