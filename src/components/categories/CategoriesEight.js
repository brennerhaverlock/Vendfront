import {useContext} from "react";
import {Col, Container} from "react-bootstrap";
import Masonry from "react-masonry-component";
import {ProductsContext} from "@global/ProductsContext";
import {getSpecificCategories} from "@utils/product";
import {CategoryOne as Category} from "@components/category";

const CategoriesEight = ({className}) => {
    const {products} = useContext(ProductsContext);
    const categories = getSpecificCategories(products, ['shirt','dresses', 'jacket', 'pants','shoe']);

    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <Container fluid>
                <Masonry className="row">
                    {categories.map((category, index) => (
                        <Col key={index} sm={6} lg={index + 1 === 2 ? 6 : 3}>
                            <Category
                                className="hover-type-3"
                                category={category.toUpperCase()}
                                thumb={`/assets/images/promo/index12-promo-img-0${index + 1}.jpg`}
                            />
                        </Col>
                    ))}
                </Masonry>
            </Container>
        </div>
    );
};

export default CategoriesEight;