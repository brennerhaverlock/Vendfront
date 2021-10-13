import PropTypes from "prop-types";
import {Container} from "react-bootstrap";
import {getProducts} from "@utils/product";
import Masonry from "react-masonry-component";
import SectionTitle from "@components/ui/section-title";
import {ProductThree as Product} from "@components/product";

const HomeTwelveTending = ({products}) => {
    const tendingProducts = getProducts(products, 'tending', 10);

    return (
        <div className="container-indent">
            <Container fluid className="container-fluid-custom-mobile-padding">
                <SectionTitle
                    title="TENDING"
                    content="TOP VIEW IN THIS WEEK"
                />

                <div className="tt-product-listing-masonry">
                    <Masonry className="tt-product-init tt-add-item">
                        {tendingProducts.map((product, i) => (
                            <div key={product.id} className={`element-item ${i === 2 || i === 5 ? 'double-size' : ''}`}>
                                <Product
                                    page="home"
                                    product={product}
                                />
                            </div>
                        ))}
                    </Masonry>
                </div>
            </Container>
        </div>
    );
};

HomeTwelveTending.propTypes = {
    products: PropTypes.array.isRequired
}

export default HomeTwelveTending;