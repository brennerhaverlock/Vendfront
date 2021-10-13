import Slider from "react-slick";
import PropTypes from "prop-types";
import sliderConfig from "@utils/sliderConfig";
import {Container, Col, Row} from "react-bootstrap";
import SectionTitle from "@components/ui/section-title";
import {ProductOne as Product} from "@components/product";

const Products = (props) => {
    const {products, layout, sectionTitle, sectionTitleContent, containerFluid, productClass, slidesToShow} = props;

    const sliderOptions = {
        ...sliderConfig,
        slidesToShow: slidesToShow ? slidesToShow : 4
    }

    return (
        <div className="container-indent">
            <Container fluid={containerFluid}>
                <SectionTitle
                    title={sectionTitle}
                    content={sectionTitleContent}
                />

                {layout === "grid" && (
                    <Row className={`tt-layout-product-item`}>
                        {products.map(product => (
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
                        {products.map(product => (
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

Products.propTypes = {
    products: PropTypes.array.isRequired,
    slidesToShow: PropTypes.number
}

Products.defaultProps = {
    layout: "grid",
    slidesToShow: 4
}

export default Products;