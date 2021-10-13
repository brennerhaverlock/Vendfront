import PropTypes from "prop-types";
import HeaderLayout from "@components/header/layouts";
import {DesktopHeaderSix as DesktopHeader} from "@components/header/desktop";

const HeaderEight = ({logo, navData}) => {
    return (
        <HeaderLayout
            logo={logo}
            navData={navData}
            hoverStyleClass="tt-hover-03"
        >
            <DesktopHeader
                logo={logo}
                navData={navData}
            />
        </HeaderLayout>
    );
};

HeaderEight.propTypes = {
    logo: PropTypes.string.isRequired,
    navData: PropTypes.array.isRequired
}

export default HeaderEight;