import PropTypes from "prop-types";
import {getProducts} from "@utils/product";
import {ProductThree} from "@components/product";
import {Col, Container, Row} from "react-bootstrap";

const FeaturedProductsTwo = ({className, products, limit}) => {
    const featuredProducts = getProducts(products, "featured", limit);

    return (
        <div className={`container-indent02 ${className}`}>
            <Container className="container-fluid-custom-mobile-padding">
                <div className="tt-block-title text-left block-title-large">
                    <h2 className="tt-title">More from<br/>the Wokiee Editors</h2>
                    <div className="tt-description">Featured comic books.</div>
                </div>

                <Row className="tt-layout-product-item">
                    {featuredProducts && (
                        featuredProducts.map(product => (
                            <Col sm={6} lg={4} key={product.id}>
                                <ProductThree
                                    product={product}
                                    showVariant={false}
                                />
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
        </div>
    );
};

FeaturedProductsTwo.propTypes = {
    products: PropTypes.array.isRequired,
    limit: PropTypes.number,
    className: PropTypes.string
}

export default FeaturedProductsTwo;