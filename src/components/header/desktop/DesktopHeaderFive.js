import Link from "next/link";
import {useContext} from "react";
import PropTypes from "prop-types";
import Logo from "@components/logo";
import Navbar from "@components/navbar";
import {CartContext} from "@global/CartContext";
import {Col, Container, Row} from "react-bootstrap";
import {CompareContext} from "@global/CompareContext";
import {WishlistContext} from "@global/WishlistContext";
import CategoriesMenu from "@components/categories-menu";
import CompareIcon from "@assets/images/svg/compare.svg";
import WishlistIcon from "@assets/images/svg/wishlist.svg";

const DesktopHeaderFive = ({navbarAlignment, logoAlignment, containerFluid, logo, navData}) => {
    const {shoppingCart} = useContext(CartContext);
    const {wishlist} = useContext(WishlistContext);
    const {compareList} = useContext(CompareContext);

    return (
        <div className="tt-desktop-header">
            <div className="tt-wrapper-header">
                <Container fluid={containerFluid} className="tt-zindex5">
                    <div className="tt-header-holder">
                        <div className="tt-header-holder">
                            <div className={`tt-obj-menu obj-alignment-${navbarAlignment ? navbarAlignment : 'left'}`}>
                                <Navbar navData={navData}/>
                            </div>

                            <div className="tt-col-obj tt-obj-options obj-move-right header-inline-options-box">
                                {/* <!--========= visible only desktop ========= --> */}
                                <div className="tt-visible-onlydesktop h-account-details">
                                    <div className="tt-account-textlink">
                                        <Link href="/">Sign In</Link> or <Link href="/">Register</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>

                <Container fluid={containerFluid}>
                    <div className="tt-header-holder">
                        <div className={`tt-obj-logo obj-alignment-${logoAlignment ? logoAlignment : 'left'}`}>
                            <Logo src={logo} width={123} height={26}/>
                        </div>

                        <div className="tt-obj-options obj-move-right">
                            <div className="header-tel-info">
                                <p className="tt-title">Call Us: +777 2345 7885</p>
                                <p>From 8:00 to 21:00 (Mon-Sun) Free by United States</p>
                            </div>

                            <div className=" tt-parent-box">
                                <Link href="/compare">
                                    <a className="tt-obj-link tt-compare-wrapper"
                                       data-tooltip="Compare" data-tposition="bottom">
                                        <div className="tt-dropdown-toggle">
                                            <div className="tt-header-icon">
                                                <CompareIcon/>
                                            </div>
                                            <span className="tt-text">COMPARE</span>
                                            <span
                                                className="tt-badge-cart text-center">{compareList && compareList.length}</span>
                                        </div>
                                    </a>
                                </Link>
                            </div>

                            <div className=" tt-parent-box">
                                <Link href="/wishlist">
                                    <a className="tt-obj-link tt-compare-wrapper"
                                       data-tooltip="Compare" data-tposition="bottom">
                                        <div className="tt-dropdown-toggle">
                                            <div className="tt-header-icon">
                                                <WishlistIcon/>
                                            </div>
                                            <span className="tt-text">WISHLIST</span>
                                            <span className="tt-badge-cart text-center">{wishlist && wishlist.length}</span>
                                        </div>
                                    </a>
                                </Link>
                            </div>

                            <div className=" tt-parent-box">
                                <Link href="/cart">
                                    <a className="tt-obj-link tt-compare-wrapper"
                                       data-tooltip="Compare" data-tposition="bottom">
                                        <div className="tt-dropdown-toggle">
                                            <div className="tt-header-icon">
                                                <i className="icon-f-47"/>
                                            </div>
                                            <span className="tt-text">MY CART</span>
                                            <span
                                                className="tt-badge-cart text-center">{shoppingCart && shoppingCart.length}</span>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <Container className="tt-offset-14">
                <Row>
                    <Col lg={3}>
                        <div className="tt-col-obj tt-obj-menu-categories tt-desktop-parent-menu-categories">
                            <CategoriesMenu
                                className="tt-categories-size-large tt-categories-btn-full-width categories-btn-noclick"/>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className="tt-search-type2 size-large tt-full-width tt-no-btn">
                            <form method="get" role="search">
                                <i className="icon-f-85"/>
                                <input
                                    type="search"
                                    autoComplete="off"
                                    className="tt-search-input"
                                    placeholder="SEARCH PRODUCTS..."
                                />
                                <button type="submit" className="tt-btn-search">SEARCH</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

DesktopHeaderFive.propTypes = {
    navbarAlignment: PropTypes.string,
    logoAlignment: PropTypes.string,
    containerFluid: PropTypes.bool,
    logo: PropTypes.string.isRequired,
    navData: PropTypes.array.isRequired
}

export default DesktopHeaderFive;