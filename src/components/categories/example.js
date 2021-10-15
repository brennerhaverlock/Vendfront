import {Col, Container, Row} from "react-bootstrap";
import {PromoOne as Promo} from "@components/promo";
import SectionTitle from "@components/ui/section-title";

const CategoriesSkinFurniture = ({className}) => {
    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <Container fluid>
                <Row className="flex-sm-row-reverse tt-layout-promo-box">
                    <Col md={6}>
                        <Row>
                            <Col sm={6}>
                                <Promo
                                    heading="LOUNGE"
                                    link="/product/category/furniture"
                                    className="tt-one-child hover-type-4"
                                    thumb="/assets/images/skins/furniture/promo/index-promo-img-03.jpg"
                                />
                            </Col>

                            <Col sm={6}>
                                <Promo
                                    heading="LIGHTING"
                                    link="/product/category/furniture"
                                    className="tt-one-child hover-type-4"
                                    thumb="/assets/images/skins/furniture/promo/index-promo-img-02.jpg"
                                />
                            </Col>

                            <Col>
                                <Promo
                                    heading="TABLES"
                                    link="/product/category/furniture"
                                    className="tt-one-child hover-type-4"
                                    thumb="/assets/images/skins/furniture/promo/index-promo-img-04.jpg"
                                />
                            </Col>
                        </Row>
                    </Col>

                    <Col md={6}>
                        <Promo
                            heading="CHAIRS"
                            link="/product/category/furniture"
                            className="tt-one-child hover-type-4"
                            thumb="/assets/images/skins/furniture/promo/index-promo-img-01.jpg"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CategoriesSkinFurniture;