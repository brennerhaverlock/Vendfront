import {useContext} from "react";
import {Col} from "react-bootstrap";
import Masonry from "react-masonry-component";
import {getSpecificCategories} from "@utils/product";
import {ProductsContext} from "@global/ProductsContext";
import {CategoryOne as Category} from "@components/category";

const CategoriesSix = ({className}) => {
    const {products} = useContext(ProductsContext);
    const categories = getSpecificCategories(products, ['women', 'men', 'shoe']);

    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <div className="container-fluid-custom">
                <Masonry className="row tt-layout-promo-box">
                    {categories.map((category, index) => (
                        <Col key={index} sm={6}>
                            <Category
                                category={category.toUpperCase()}
                                thumb={`/assets/images/promo/index09-promo-img-0${index + 1}.jpg`}
                            />
                        </Col>
                    ))}
                </Masonry>
            </div>
        </div>
    );
};

export default CategoriesSix;