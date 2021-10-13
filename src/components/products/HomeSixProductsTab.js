import {useState} from "react";
import PropTypes from "prop-types";
import {getProducts} from "@utils/product";
import {ProductOne as Product} from "@components/product";
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";

const HomeSixProductsTab = ({className, products}) => {
    const [key, setKey] = useState('new_arrivals');
    const productShow = 8;

    const tabData = [
        {key: "new_arrivals", title: "NEW ARRIVALS"},
        {key: "specials", title: "SPECIALS"},
        {key: "best_seller", title: "BEST SELLER"},
        {key: "tending", title: "MOST VIEWED"},
        {key: "featured", title: "FEATURED"}
    ]

    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <Container className="container-fluid-custom-mobile-padding">
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
                                            {products.slice(0, 8).map(product => (
                                                <Col sm={6} md={4} lg={3} key={product.id}>
                                                    <Product
                                                        page="home"
                                                        product={product}
                                                        showVariant={true}
                                                    />
                                                </Col>
                                            ))}
                                        </Row>
                                    ) : (
                                        <Row className="tt-layout-product-item">
                                            {getProducts(products, key, productShow).map(product => (
                                                <Col sm={6} md={4} lg={3} key={product.id}>
                                                    <Product
                                                        page="home"
                                                        product={product}
                                                        showVariant={true}
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
            </Container>
        </div>
    );
};

HomeSixProductsTab.propTypes = {
    products: PropTypes.array.isRequired,
    className: PropTypes.string
}

export default HomeSixProductsTab;