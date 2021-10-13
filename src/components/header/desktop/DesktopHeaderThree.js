import PropTypes from "prop-types";
import Logo from "@components/logo";
import Navbar from "@components/navbar";
import {Container} from "react-bootstrap";
import CategoriesMenu from "@components/categories-menu";
import HeaderAction from "@components/header/action/HeaderAction";

const DesktopHeaderThree = ({navbarAlignment, logo, navData}) => {
    return (
        <div className="tt-desktop-header headerunderline">
            <Container>
                <div className="tt-header-holder">
                    <div className="tt-col-obj tt-obj-logo">
                        <Logo src={logo} width={95} height={20}/>
                    </div>

                    <div className="tt-col-obj tt-obj-search-type2">
                        <div className="tt-search-type2">
                            <form action="/" method="get" role="search">
                                <i className="icon-f-85"/>
                                <input
                                    type="search"
                                    className="tt-search-input"
                                    placeholder="SEARCH PRODUCTS..."
                                    autoComplete="off"
                                />
                                <button type="submit" className="tt-btn-search">SEARCH</button>
                            </form>
                        </div>
                    </div>

                    <div className="tt-col-obj obj-move-right">
                        <div className="header-tel-info d-flex align-items-center">
                            <i className="icon-f-93 mr-1"/>
                            <span>777 2345 7885; +777 2345 7886</span>
                        </div>
                    </div>
                </div>
            </Container>

            <Container className="small-header">
                <div className="tt-header-holder">
                    <div className="tt-col-obj tt-obj-menu-categories tt-desktop-parent-menu-categories">
                        <CategoriesMenu/>
                    </div>

                    <div
                        className={`tt-col-obj tt-obj-menu obj-alignment-${navbarAlignment ? navbarAlignment : 'left'}`}>
                        <Navbar
                            hoverStyleClass="tt-hover-03"
                            navData={navData}
                        />
                    </div>

                    <div className="tt-col-obj tt-obj-options">
                        <HeaderAction
                            className="obj-move-right"
                            search={true}
                            cart={true}
                            account={true}
                            settings={true}
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

DesktopHeaderThree.propTypes = {
    navbarAlignment: PropTypes.string,
    logo: PropTypes.string.isRequired,
    navData: PropTypes.array.isRequired
}

export default DesktopHeaderThree;