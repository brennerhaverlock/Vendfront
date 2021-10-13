import {Col, Row} from "react-bootstrap";
import {PromoOne as Promo} from "@components/promo";

const PromoBannerFurniture = ({className}) => {
    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <div className="container-fluid-custom">
                <Row className="tt-layout-promo-box">
                    <Col md={6}>
                        <Promo
                            link="/product/category/furniture"
                            title="FALL-WINTER CLEARANCE SALES"
                            heading="GET UP TO 50% OFF"
                            className="tt-one-child hover-type-4"
                            thumb="/assets/images/skins/furniture/promo/index-promo-img-05.jpg"
                        />
                    </Col>

                    <Col md={6}>
                        <Promo
                            link="/product/category/furniture"
                            title="CHAIRS"
                            heading="NEW ARRIVALS"
                            className="tt-one-child hover-type-4"
                            thumb="/assets/images/skins/furniture/promo/index-promo-img-06.jpg"
                        />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default PromoBannerFurniture;