import PropTypes from "prop-types";
import {getProducts} from "@utils/product";
import {Container, Row, Col} from "react-bootstrap";
import {ProductTwo as Product} from "@components/product";

const TypeWiseVertical = ({products}) => {
    const specialProducts = getProducts(products, 'specials', 3);
    const featuredProducts = getProducts(products, 'featured', 3);

    return (
        <div className="container-indent">
            <Container>
                <Row>
                    <Col md={4} sm={6}>
                        <h6 className="tt-title-sub">NEW PRODUCTS</h6>
                        <div className="tt-layout-vertical-listing">
                            {products.length <= 0 ? (
                                <h6 className="text-black-50">No Products Found!</h6>
                            ) : (
                                products.slice(0, 3).map(product => (
                                    <Product product={product} key={product.id}/>
                                ))
                            )}
                        </div>
                    </Col>
                    <div className="divider visible-xs"/>
                    <Col md={4} sm={6}>
                        <h6 className="tt-title-sub">SPECIAL PRODUCTS</h6>
                        <div className="tt-layout-vertical-listing">
                            {specialProducts.length <= 0 ? (
                                <h6 className="text-black-50">No Products Found!</h6>
                            ) : (
                                specialProducts.map(product => (
                                    <Product product={product} key={product.id}/>
                                ))
                            )}
                        </div>
                    </Col>
                    <div className="divider visible-sm visible-xs"/>
                    <Col md={4} sm={6}>
                        <h6 className="tt-title-sub">FEATURED PRODUCTS</h6>
                        <div className="tt-layout-vertical-listing">
                            {featuredProducts.length <= 0 ? (
                                <h6 className="text-black-50">No Products Found!</h6>
                            ) : (
                                featuredProducts.map(product => (
                                    <Product product={product} key={product.id}/>
                                ))
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

TypeWiseVertical.propTypes = {
    products: PropTypes.array.isRequired
}

export default TypeWiseVertical;