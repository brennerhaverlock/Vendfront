import {useContext} from "react";
import {Col, Container} from "react-bootstrap";
import Masonry from "react-masonry-component";
import {ProductsContext} from "@global/ProductsContext";
import {getSpecificCategories} from "@utils/product";
import {CategoryOne as Category} from "@components/category";

const CategoriesThree = () => {
    const {products} = useContext(ProductsContext);
    const categories = getSpecificCategories(products, ['women', 'men', 'shoe']);


    return (
        <div className="container-indent0">
            <Container fluid>
                <Masonry className="row tt-layout-promo-box">
                    {categories.map((category, index) => (
                        <Col key={index} sm={6}>
                            <Category
                                category={category.toUpperCase()}
                                thumb={`/assets/images/promo/index05-promo-img-0${index + 1}.jpg`}
                            />
                        </Col>
                    ))}
                </Masonry>
            </Container>
        </div>
    );
};

export default CategoriesThree;