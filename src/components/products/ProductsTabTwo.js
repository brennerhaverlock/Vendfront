import Link from "next/link";
import {useState} from "react";
import PropTypes from "prop-types";
import {getProducts} from "@utils/product";
import {ProductOne as Product} from "@components/product";
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";

const ProductsTabTwo = ({products, limit, className, productClass, containerFluid, showMoreBtn, columnWidth}) => {
    const [key, setKey] = useState('new_arrivals');

    const tabData = [
        {key: "new_arrivals", title: "NEW ARRIVALS"},
        {key: "specials", title: "SPECIALS"},
        {key: "best_seller", title: "BEST SELLER"},
        {key: "tending", title: "MOST VIEWED"},
        {key: "featured", title: "FEATURED"}
    ]


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
                                            {products.slice(0, limit).map(product => (
                                                <Col sm={6} md={4} lg={columnWidth} key={product.id}>
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
                                            {getProducts(products, key, -1).slice(0, limit).map(product => (
                                                <Col sm={6} md={4} lg={columnWidth} key={product.id}>
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
                        <Link href="/shop">
                            <a className="btn">Shop the latest release →</a>
                        </Link>
                    </div>
                )}
            </Container>
        </div>
    );
};

ProductsTabTwo.defaultProps = {
    limit: 8,
    showMoreBtn: true,
    columnWidth: 2
}

ProductsTabTwo.propTypes = {
    limit: PropTypes.number,
    showMoreBtn: PropTypes.bool,
    className: PropTypes.string,
    productClass: PropTypes.string,
    columnWidth: PropTypes.number,
    products: PropTypes.array.isRequired,
}

export default ProductsTabTwo;