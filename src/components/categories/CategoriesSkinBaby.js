import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "@components/ui/section-title";
import {PromoOne as Category} from "@components/promo";

const CategoriesSkinBaby = () => {
    return (
        <div className="container-indent">
            <Container className="container-fluid-custom-mobile-padding">
                <SectionTitle
                    title="Honest<br>baby Products"
                />

                <Row>
                    <Col md={6}>
                        <Category
                            link="/shop"
                            heading=""
                            title="Personal Care"
                            thumb="/assets/images/skins/baby/promo/promo-img-02.jpg"
                        />
                    </Col>

                    <Col md={6}>
                        <Category
                            link="/shop"
                            heading=""
                            title="Diapers"
                            thumb="/assets/images/skins/baby/promo/promo-img-03.jpg"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CategoriesSkinBaby;