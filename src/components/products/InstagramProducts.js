import {useRef, useEffect} from "react";
import {Container, Row} from "react-bootstrap";

const InstagramProducts = ({className}) => {

    const instaShop = useRef(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://snapppt.com/widgets/widget_loader/270ad337-910e-4686-944d-404397429c10/grid.js ";
        script.async = true;
        instaShop.current.appendChild(script);
    }, [])

    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <Container fluid={true}>
                <Row>
                    <div className="tt-promo-fullwidth-02">
                        <img src="/assets/images/promo/index15-promo-img-01.jpg" alt="wokiee instagram shop"/>
                        <div className="tt-description">
                            <div className="tt-description-wrapper">
                                <div className="tt-title-large">
                                    <span className="tt-base-color">Home Instagram Shop</span>
                                </div>
                                <p>Make your Instagram shop</p>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>

            {/* Instagram shop snapppt.com script */}
            <Container fluid={true} className="container-fluid-custom container-fluid-custom-mobile-padding">
                <div className="insta-shop" ref={instaShop}/>
            </Container>
        </div>
    );
};

export default InstagramProducts;