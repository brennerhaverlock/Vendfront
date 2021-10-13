import PropTypes from "prop-types";
import Account from "../elements/Account";
import Settings from "../elements/Settings";
import MiniCart from "../elements/MiniCart";
import Hamburger from "../elements/Hamburger";
import {useState, Fragment, memo} from "react";
import SearchBox from "../elements/SearchBoxOne";

const HeaderAction = ({hamburger, search, cart, account, settings, mobileNavbarHandler}) => {
    const [isHidden, setIsHidden] = useState({
        searchBox: true,
        miniCart: true,
        account: true,
        settings: true
    });

    const [isSearchBoxHidden, setIsSearchBoxHidden] = useState(true);

    const onSearchBoxHandler = () => setIsSearchBoxHidden(prev => !prev);

    const openHandler = (e) => {
        setIsHidden(prev => {
            return {
                searchBox: true,
                account: true,
                settings: true,
                miniCart: true,
                [e.target.dataset.id]: !prev[e.target.dataset.id]
            }
        });
    };

    const closeHandler = (e) => {
        e.preventDefault();
        setIsHidden(prev => {
            return {
                ...prev,
                [e.target.dataset.id]: !prev[e.target.dataset.id]
            }
        });
    }

    return (
        <Fragment>
            {hamburger && (
                <Hamburger
                    className="tt-mobile-parent-menu d-lg-none"
                    mobileNavbarHandler={mobileNavbarHandler}
                />
            )}

            {search && (
                <SearchBox
                    isHidden={isSearchBoxHidden}
                    onHandler={onSearchBoxHandler}
                    className="tt-desktop-parent-search"
                />
            )}

            {cart && (
                <MiniCart
                    isHidden={isHidden.miniCart}
                    openHandler={openHandler}
                    closeHandler={closeHandler}
                    className="tt-desktop-parent-cart"
                />
            )}

            {account && (
                <Account
                    isHidden={isHidden.account}
                    openHandler={openHandler}
                    closeHandler={closeHandler}
                    className="tt-desktop-parent-account"
                />
            )}

            {settings && (
                <Settings
                    isHidden={isHidden.settings}
                    openHandler={openHandler}
                    closeHandler={closeHandler}
                    className="tt-desktop-parent-multi"
                />
            )}
        </Fragment>
    );
};

HeaderAction.propTypes = {
    mobileNavbarHandler: PropTypes.func,
    hamburger: PropTypes.bool,
    search: PropTypes.bool,
    cart: PropTypes.bool,
    account: PropTypes.bool,
    settings: PropTypes.bool
}

export default memo(HeaderAction);
