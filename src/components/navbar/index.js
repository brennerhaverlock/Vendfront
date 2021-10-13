import PropTypes from "prop-types";
import {DesktopNav} from "@components/nav";

const Navbar = ({className, hoverStyleClass, navData}) => {
    return (
        <div className={`tt-desktop-parent-menu tt-parent-box ${className ? className : ''}`}>
            <div className={`tt-desktop-menu ${hoverStyleClass ? hoverStyleClass : ''}`}>
                <DesktopNav navData={navData}/>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    className: PropTypes.string,
    hoverStyleClass: PropTypes.string,
    navData: PropTypes.array.isRequired
}

export default Navbar;