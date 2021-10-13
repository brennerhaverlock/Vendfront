import PropTypes from "prop-types";
import Navbar from "@components/navbar";
import {Container} from "react-bootstrap";
import {useState, useEffect} from "react";
import HeaderAction from "@components/header/action/HeaderAction";

const StickyHeader = ({hoverStyleClass, mobileNavbarHandler, containerFluid, navData}) => {
    const [scroll, setScroll] = useState(0);

    const onScrollChange = () => {
        setScroll(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScrollChange);

        return () => {
            window.removeEventListener('scroll', onScrollChange);
        }
    }, [])

    return (
        <div className={`tt-stuck-nav ${scroll >= 100 ? 'stuck' : ''}`}
             style={{display: scroll >= 100 ? "block" : "none"}}
        >
            <Container fluid={containerFluid}>
                <div className="tt-header-row">
                    <div className="tt-stuck-parent-menu d-none d-lg-block">
                        <Navbar
                            navData={navData}
                            hoverStyleClass={hoverStyleClass}
                            logo="/assets/images/no-placeholder/logo.png"
                        />
                    </div>

                    <HeaderAction
                        hamburger={true}
                        search={true}
                        cart={true}
                        account={true}
                        settings={true}
                        mobileNavbarHandler={mobileNavbarHandler}
                    />
                </div>
            </Container>
        </div>
    );
};

StickyHeader.propTypes = {
    navData: PropTypes.array.isRequired
}

export default StickyHeader;