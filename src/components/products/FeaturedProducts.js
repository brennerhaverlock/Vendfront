import Link from "next/link";
import Slider from "react-slick";
import PropTypes from "prop-types";
import {getProducts} from "@utils/product";
import sliderConfig from "@utils/sliderConfig";
import {Container, Col, Row} from "react-bootstrap";
import SectionTitle from "@components/ui/section-title";
import {ProductOne as Product} from "@components/product";

const FeaturedProducts = ({products, layout, containerFluid, limit = 8, showMoreBtn}) => {
    const featuredProducts = getProducts(products, 'featured', limit);

    const sliderOptions = {
        ...sliderConfig,
        slidesToShow: !containerFluid ? 4 : 5
    }

    return (
        <div className="container-indent">
            <Container fluid={containerFluid}>
                <SectionTitle
                    title="Featured Products"
                />

                {layout === "grid" && (
                    <Row className={`tt-layout-product-item`}>
                        {featuredProducts.map(product => (
                            <Col key={product.id} sm={6} md={4} lg={3}>
                                <Product
                                    page="home"
                                    product={product}
                                    showVariant={true}
                                    className="product-nohover"
                                />
                            </Col>
                        ))}
                    </Row>
                )}

                {layout === "slider" && (
                    <Slider
                        {...sliderOptions}
                        className="tt-carousel-products row arrow-location-tab arrow-location-tab01 tt-alignment-img tt-layout-product-item slick-animated-show-js"
                    >
                        {featuredProducts.map(product => (
                            <Col key={product.id}>
                                <Product
                                    page="home"
                                    product={product}
                                    showVariant={true}
                                    className="product-nohover"
                                />
                            </Col>

                        ))}
                    </Slider>
                )}
                {showMoreBtn && (
                    <div className="text-center">
                        <Link href="/product/category/coffee">
                            <a className="btn btn-top custom-btn">View all products →</a>
                        </Link>
                    </div>
                )}
            </Container>
        </div>
    );
};

FeaturedProducts.propTypes = {
    products: PropTypes.array.isRequired,
    containerFluid: PropTypes.bool.isRequired,
    layout: PropTypes.string,
    limit: PropTypes.number
}

FeaturedProducts.defaultProps = {
    layout: "grid"
}

export default FeaturedProducts;