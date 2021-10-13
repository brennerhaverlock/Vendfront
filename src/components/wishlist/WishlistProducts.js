import {useContext} from "react";
import {ProductOne as Product} from "@components/product";
import {Col, Container, Row} from "react-bootstrap";
import {WishlistContext} from "@global/WishlistContext";

const WishlistProducts = () => {
    const {wishlist} = useContext(WishlistContext);

    return (
        <Container className="container-fluid-custom-mobile-padding">
            <h1 className="tt-title-subpages noborder">WISHLIST</h1>
            <div className="tt-wishlist-box">
                <div className="tt-wishlist-list">
                    <Row className="tt-layout-product-item">
                        {wishlist.map(product => (
                            <Col key={product.id} sm={6} md={4} lg={3}>
                                <Product
                                    page="wishlist"
                                    product={product}
                                    showVariant={false}
                                />
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </Container>
    );
};

export default WishlistProducts;