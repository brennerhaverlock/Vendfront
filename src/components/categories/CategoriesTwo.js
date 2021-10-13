import {Col, Container, Row} from "react-bootstrap";
import {PromoOne as Promo} from "@components/promo";
import {CategoryOne as Category} from "@components/category";

const CategoriesTwo = ({className}) => {
    return (
        <div className={`container-indent0 ${className ? className : ''}`}>
            <Container>
                <Row className="flex-sm-row-reverse tt-layout-promo-box">
                    <Col md={6}>
                        <Row>
                            <Col sm={6}>
                                <Category
                                    category="Women"
                                    thumb="/assets/images/promo/index04-promo-img-02.jpg"
                                />
                            </Col>

                            <Col sm={6}>
                                <Category
                                    category="Men"
                                    thumb="/assets/images/promo/index04-promo-img-03.jpg"
                                />
                            </Col>

                            <Col>
                                <Promo
                                    title="READY TO"
                                    heading="USE UNIQUE DEMOS"
                                    thumb="/assets/images/promo/index04-promo-img-04.jpg"
                                    link="/shop"
                                />
                            </Col>
                        </Row>
                    </Col>

                    <Col md={6}>
                        <Promo
                            title="MULTI-PURPOSE"
                            heading="REACT TEMPLATE"
                            thumb="/assets/images/promo/index04-promo-img-01.jpg"
                            link="/shop"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CategoriesTwo;