import Link from "next/link";
import PropTypes from "prop-types";
import {Col, Container, Row} from "react-bootstrap";
import {ProductFour as Product} from "@components/product";

const CakeShopProducts = ({className, products, limit = 9, showMoreBtn = false}) => {
    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <Container className="container-fluid-custom-mobile-padding">
                <Row className="tt-layout-product-item">
                    {products.slice(0, limit).map(product => (
                        <Col sm={6} lg={4} key={product.id}>
                            <Product product={product}/>
                        </Col>
                    ))}
                </Row>
                {showMoreBtn && (
                    <div className="text-center tt_product_showmore">
                        <Link href="/product/category/cake"><a className="btn">View all</a></Link>
                    </div>
                )}
            </Container>
        </div>
    );
};

CakeShopProducts.propTypes = {
    products: PropTypes.array.isRequired,
    className: PropTypes.string,
    limit: PropTypes.number
}

export default CakeShopProducts;