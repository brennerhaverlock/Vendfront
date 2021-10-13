import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "@components/ui/section-title";
import {CategoryFour as Category} from "@components/category";

const CategoriesSkinCookware = ({className, categories}) => {
    return (
        <div className={`container-indent ${className}`}>
            <Container>
                <SectionTitle
                    title="Shop by Category"
                />

                <Row className="tt-layout-promo02">
                    {categories && (
                        categories.map((category, index) => (
                            <Col md={3} key={index}>
                                <Category
                                    category={category}
                                    className="text-center"
                                    thumb={`/assets/images/skins/cookware/category-0${index + 1}.jpg`}
                                />
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default CategoriesSkinCookware;