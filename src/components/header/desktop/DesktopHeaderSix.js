import Logo from "@components/logo";
import PropTypes from "prop-types";
import Navbar from "@components/navbar";
import {Container} from "react-bootstrap";
import HeaderAction from "@components/header/action/HeaderAction";

const DesktopHeaderSix = ({logo, navData}) => {
    return (
        <div className="tt-desktop-header">
            <Container>
                <div className="tt-header-holder">
                    <div className="tt-col-obj tt-obj-logo">
                        <Logo src={logo} width={110} height={25}/>
                    </div>

                    <div className="tt-col-obj tt-obj-menu">
                        <Navbar
                            navData={navData}
                            hoverStyleClass="tt-hover-03"
                        />
                    </div>

                    <div className="tt-col-obj tt-obj-options obj-move-right">
                        <div className="tt-parent-box tt-obj-search-type2">
                            <div className="tt-search-type2">
                                <form action="/" method="get" role="search">
                                    <i className="icon-h-04"/>
                                    <input
                                        className="tt-search-input"
                                        type="search"
                                        placeholder="Search products"
                                    />
                                    <button type="submit" className="tt-btn-search">SEARCH</button>
                                </form>
                            </div>
                        </div>

                        <HeaderAction
                            cart={true}
                            account={true}
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

DesktopHeaderSix.propTypes = {
    logo: PropTypes.string.isRequired,
    navData: PropTypes.array.isRequired
}

export default DesktopHeaderSix;