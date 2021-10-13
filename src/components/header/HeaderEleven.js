import {useState} from "react";
import PropTypes from "prop-types";
import Logo from "@components/logo";
import Navbar from "@components/navbar";
import {MobileNav} from "@components/nav";
import StickyHeader from "@components/header/sticky";
import MobileHeader from "@components/header/mobile";
import HeaderAction from "@components/header/action/HeaderAction";

const HeaderEleven = ({navData, logo}) => {
    const [showMobileNavbar, setShowMobileNavbar] = useState(false);

    const mobileNavbarHandler = () => {
        setShowMobileNavbar(prevState => !prevState);
    }

    return (
        <header id="tt-header">
            {/* tt-top-panel */}
            <div className="tt-top-panel">
                <div className="container">
                    <div className="tt-row">
                        <div className="tt-description">
                            Sign up for our mailing list and get 5% off – Free shipping on all US orders over $299
                        </div>
                    </div>
                </div>
            </div>
            {/* tt-top-panel */}

            {/* Mobile Nav */}
            <MobileNav
                navData={navData}
                showMobileNavbar={showMobileNavbar}
                mobileNavbarHandler={mobileNavbarHandler}
            />

            {/* Mobile Header */}
            <MobileHeader
                logo={logo}
                mobileNavbarHandler={mobileNavbarHandler}
            />

            {/* Desktop Header */}
            <div className="tt-desktop-header">
                <div className="container-fluid">
                    <div className="tt-header-holder">
                        <div className="tt-col-obj tt-obj-logo">
                            <Logo
                                src={logo}
                            />
                        </div>
                        <div className="tt-col-obj tt-obj-menu">
                            {/* tt-menu */}
                            <Navbar
                                navData={navData}
                            />
                            {/* /tt-menu */}
                        </div>
                        <div className="tt-col-obj tt-obj-options obj-move-right">
                            {/* tt-search */}
                            <div className="tt-parent-box tt-obj-search-type2">
                                <div className="tt-search-type2">
                                    <form action="/" method="get" role="search">
                                        <i className="icon-h-04"/>
                                        <input
                                            className="tt-search-input"
                                            type="search"
                                            placeholder="Search..."
                                            autoComplete="off"
                                        />
                                        <button type="submit" className="tt-btn-search">SEARCH</button>
                                    </form>
                                </div>
                            </div>
                            {/* /tt-search */}

                            <HeaderAction
                                cart={true}
                                account={true}
                                mobileNavbarHandler={mobileNavbarHandler}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Header */}
            <StickyHeader
                navData={navData}
                mobileNavbarHandler={mobileNavbarHandler}
            />
        </header>
    );
};

HeaderEleven.propTypes = {
    navData: PropTypes.array.isRequired,
    logo: PropTypes.string.isRequired
}

export default HeaderEleven;