import {useContext} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Masonry from "react-masonry-component";
import {ProductsContext} from "@global/ProductsContext";
import {getProductsUniqueCategories} from "@utils/product";
import {CategoryOne as Category} from "@components/category";

const CategoriesOne = ({className}) => {
    const {products} = useContext(ProductsContext);
    const categories = getProductsUniqueCategories(products, 6);
    const imagesLoadedOptions = { background: '.col-sm-6' }
    return (
        <div className={`container-indent0 ${className ? className : ''}`}>
            <Container fluid>
                <Masonry
                    className="row tt-layout-promo-box"
                    imagesLoadedOptions={imagesLoadedOptions}
                >
                    {categories.map((category, index) => (
                        <Col key={index} sm={6} lg={index + 1 === 6 ? 6 : 3}>
                            <Category
                                category={category.toUpperCase()}
                                thumb={`/assets/images/promo/index-promo-img-0${index + 1}.jpg`}
                            />
                        </Col>
                    ))}
                </Masonry>
            </Container>
        </div>
    );
};

export default CategoriesOne;