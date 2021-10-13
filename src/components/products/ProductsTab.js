import Link from "next/link";
import {useState} from "react";
import PropTypes from "prop-types";
import {getProductsByCategory} from "@utils/product";
import {ProductOne as Product} from "@components/product";
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";

const ProductsTab = ({products, tabData, className, productClass, containerFluid, showMoreBtn}) => {
    const [key, setKey] = useState('new_arrivals');

    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <Container fluid={containerFluid} className="container-fluid-custom-mobile-padding">
                <div className="tt-tab-wrapper">
                    <Tab.Container
                        id="products-tab"
                        defaultActiveKey="new_arrivals"
                        onSelect={(k) => setKey(k)}
                    >
                        <ul className="nav nav-tabs tt-tabs-default">
                            {tabData.map(nav => (
                                <Nav.Item as="li" key={nav.key}>
                                    <Nav.Link
                                        eventKey={nav.key}
                                        className={key === nav.key ? 'active' : ''}
                                    >
                                        {nav.title}
                                    </Nav.Link>
                                </Nav.Item>
                            ))}
                        </ul>

                        <Tab.Content>
                            {tabData.map(nav => (
                                <Tab.Pane eventKey={nav.key} key={nav.key}>
                                    {nav.key === "new_arrivals" ? (
                                        <Row className="tt-layout-product-item">
                                            {products.map(product => (
                                                <Col md={4} lg={3} key={product.id}>
                                                    <Product
                                                        page="home"
                                                        product={product}
                                                        showVariant={false}
                                                        className={productClass}
                                                    />
                                                </Col>
                                            ))}
                                        </Row>
                                    ) : (
                                        <Row className="tt-layout-product-item">
                                            {getProductsByCategory(products, key, -1).map(product => (
                                                <Col md={4} lg={3} key={product.id}>
                                                    <Product
                                                        page="home"
                                                        product={product}
                                                        showVariant={false}
                                                        className={productClass}
                                                    />
                                                </Col>
                                            ))}
                                        </Row>
                                    )}
                                </Tab.Pane>
                            ))}
                        </Tab.Content>
                    </Tab.Container>
                </div>

                {showMoreBtn && (
                    <div className="text-center tt_product_showmore">
                        <Link href="/product/category/t-shirt">
                            <a className="btn">Shop the latest release →</a>
                        </Link>
                    </div>
                )}
            </Container>
        </div>
    );
};

ProductsTab.defaultProps = {
    showMoreBtn: true
}

ProductsTab.propTypes = {
    products: PropTypes.array.isRequired,
    tabData: PropTypes.array.isRequired,
    productClass: PropTypes.string,
    className: PropTypes.string,
    showMoreBtn: PropTypes.bool,
}

export default ProductsTab;