import {Col, Container, Row} from "react-bootstrap";
import {PromoOne as Promo} from "@components/promo";
import SectionTitle from "@components/ui/section-title";

const CategoriesSkinFlower = ({className}) => {
    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <Container>
                <SectionTitle
                    title="Shop for"
                />

                <Row className="flex-sm-row-reverse tt-layout-promo-box">
                    <Col md={6}>
                        <Row>
                            <Col sm={6}>
                                <Promo
                                    title="Thank You"
                                    link="/product/category/flower"
                                    thumb="/assets/images/skins/flowers/img-05.jpg"
                                />
                            </Col>

                            <Col sm={6}>
                                <Promo
                                    title="Congrats"
                                    link="/product/category/flower"
                                    thumb="/assets/images/skins/flowers/img-06.jpg"
                                />
                            </Col>

                            <Col>
                                <Promo
                                    title="With Love"
                                    link="/product/category/flower"
                                    thumb="/assets/images/skins/flowers/img-07.jpg"
                                />
                            </Col>
                        </Row>
                    </Col>

                    <Col md={6}>
                        <Promo
                            title="Birthday"
                            link="/product/category/flower"
                            thumb="/assets/images/skins/flowers/img-04.jpg"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CategoriesSkinFlower;