import {useContext} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {ProductsContext} from "@global/ProductsContext";
import {getProductsUniqueCategories} from "@utils/product";
import {CategoryThree as Category} from "@components/category";
import {arrSortByCharacter} from "@utils/method";

const CategoriesTen = ({className}) => {
    const {products} = useContext(ProductsContext);
    const cats = getProductsUniqueCategories(products, 10);
    const categories = arrSortByCharacter(cats);

    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <Container>
                <div className="tt-btn-img-list">
                    <Row>
                        {categories.map((category, idx) => (
                            <Col key={idx} xs={6} sm={4} className="col-5-inrow-lg">
                                <Category
                                    catName={category}
                                    className="tt-layout-01"
                                    thumb={`/assets/images/custom/btn-img${(idx + 1).toString().padStart(2, '0')}.jpg`}
                                />
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default CategoriesTen;