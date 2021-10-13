import PropTypes from "prop-types";
import Slider from "react-slick";
import {getProducts} from "@utils/product";
import sliderConfig from "@utils/sliderConfig";
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "@components/ui/section-title";
import {ProductOne as Product} from "@components/product";

const TendingProducts = ({products, layout, containerFluid}) => {
    const tendingProducts = getProducts(products, 'tending', 8);

    const sliderOptions = {
        ...sliderConfig,
        slidesToShow: containerFluid ? 6 : 4
    }

    return (
        <div className="container-indent">
            <Container fluid={containerFluid} className="container-fluid-custom-mobile-padding">
                <SectionTitle
                    title="TENDING"
                    content="TOP VIEW IN THIS WEEK"
                />

                {layout === "grid" && (
                    <Row className="tt-layout-product-item">
                        {tendingProducts.map(product => (
                            <Col key={product.id} sm={6} md={4} lg={3}>
                                <Product
                                    page="home"
                                    product={product}
                                    showVariant={true}
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
                        {tendingProducts.map(product => (
                            <Col key={product.id}>
                                <Product
                                    page="home"
                                    product={product}
                                    showVariant={true}
                                />
                            </Col>
                        ))}
                    </Slider>
                )}
            </Container>
        </div>
    );
};

TendingProducts.propTypes = {
    products: PropTypes.array.isRequired
}

TendingProducts.defaultProps = {
    layout: "grid",
    containerFluid: false
}

export default TendingProducts;