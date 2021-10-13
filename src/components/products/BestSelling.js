import Slider from "react-slick";
import PropTypes from "prop-types";
import {getProducts} from "@utils/product";
import sliderConfig from "@utils/sliderConfig";
import {Container, Col, Row} from "react-bootstrap";
import SectionTitle from "@components/ui/section-title";
import {ProductOne as Product} from "@components/product";

const BestSelling = ({products, layout, containerFluid, productClass, className}) => {
    const bestSellingProducts = getProducts(products, 'best-seller', 8);
    const sliderOptions = {
        ...sliderConfig,
        slidesToShow: containerFluid ? 6 : 4
    }

    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <Container fluid={containerFluid} className="container-fluid-custom-mobile-padding">
                <SectionTitle
                    title="BEST SELLER"
                    content="TOP VIEW IN THIS WEEK"
                />

                {layout === "grid" && (
                    <Row className={`tt-layout-product-item`}>
                        {bestSellingProducts.map(product => (
                            <Col key={product.id} sm={6} md={4} lg={3}>
                                <Product
                                    page="home"
                                    product={product}
                                    showVariant={true}
                                    className={productClass}
                                />
                            </Col>
                        ))}
                    </Row>
                )}

                {layout === "slider" && (
                    <Slider
                        {...sliderOptions}
                        className="tt-carousel-products row arrow-location-tab arrow-location-tab01 tt-alignment-img tt-layout-product-item"
                    >
                        {bestSellingProducts.map(product => (
                            <Col key={product.id}>
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

            </Container>
        </div>
    );
};

BestSelling.propTypes = {
    layout: PropTypes.string,
    productClass: PropTypes.string,
    className: PropTypes.string,
    containerFluid: PropTypes.bool,
    products: PropTypes.array.isRequired
}

BestSelling.defaultProps = {
    layout: "grid",
    containerFluid: false
}

export default BestSelling;