import {useState} from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import {Col, Container, Nav, Tab} from "react-bootstrap";
import {ProductOne as Product} from "@components/product";
import {getProductsByCategory, getProducts} from "@utils/product";

const CategoryTypeWiseOne = ({products, className, productClass, category, containerFluid}) => {
    const [key, setKey] = useState('new_arrivals');

    const categoryProducts = getProductsByCategory(products, category);

    const tabData = [
        {key: "new_arrivals", title: "NEW ARRIVALS"},
        {key: "specials", title: "SPECIALS"},
        {key: "best_seller", title: "BEST SELLER"},
        {key: "tending", title: "MOST VIEWED"},
        {key: "featured", title: "FEATURED"}
    ]

    const sliderOptions = {
        slidesToShow: containerFluid ? 6 : 4,
        adaptiveHeight: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }

    return (
        <div className={`container-indent1 ${className ? className : ''}`}>
            <Container fluid={containerFluid} className="container-fluid-custom-mobile-padding">
                <div className="tt-block-title text-left">
                    <h2 className="tt-title">{`${category.toUpperCase()}’S`}</h2>
                </div>

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
                                        <Slider
                                            {...sliderOptions}
                                            className="row tt-carousel-products arrow-location-tab tt-alignment-img tt-layout-product-item"
                                        >
                                            {categoryProducts.map(product => (
                                                <Col xs={12} key={product.id}>
                                                    <Product
                                                        page="home"
                                                        product={product}
                                                        showVariant={true}
                                                        className={productClass}
                                                    />
                                                </Col>
                                            ))}
                                        </Slider>
                                    ) : (
                                        <Slider
                                            {...sliderOptions}
                                            className="row tt-carousel-products arrow-location-tab tt-alignment-img tt-layout-product-item"
                                        >
                                            {getProducts(categoryProducts, key, 5).map(product => (
                                                <Col xs={12} key={product.id}>
                                                    <Product
                                                        page="home"
                                                        product={product}
                                                        showVariant={true}
                                                        className={productClass}
                                                    />
                                                </Col>
                                            ))}
                                        </Slider>
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

CategoryTypeWiseOne.propTypes = {
    category: PropTypes.string.isRequired,
    products: PropTypes.array.isRequired,
    className: PropTypes.string,
    productClass: PropTypes.string,
}

export default CategoryTypeWiseOne;