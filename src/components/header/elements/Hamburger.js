import PropTypes from "prop-types";

const Hamburger = ({className, mobileNavbarHandler}) => {
    return (
        <div className={"tt-dropdown-obj " + className}>
            <button className="tt-menu-toggle" onClick={mobileNavbarHandler}>
                <i className="icon-03"/>
            </button>
        </div>
    );
};

Hamburger.propTypes = {
    mobileNavbarHandler: PropTypes.func
}

export default Hamburger;