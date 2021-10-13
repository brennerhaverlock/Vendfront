import Link from "next/link";
import Slider from "react-slick";
import PropTypes from "prop-types";
import {getProducts} from "@utils/product";
import sliderConfig from "@utils/sliderConfig";
import {Container, Col, Row} from "react-bootstrap";
import SectionTitle from "@components/ui/section-title";
import {ProductOne as Product} from "@components/product";

const MostPopular = ({products, layout, containerFluid, limit, productClass, showMoreBtn}) => {
    const mostPopularProducts = getProducts(products, 'popular', limit);

    const sliderOptions = {
        ...sliderConfig,
        slidesToShow: !containerFluid ? 4 : 5
    }

    return (
        <div className="container-indent">
            <Container fluid={containerFluid}>
                <SectionTitle
                    title="Most Popular"
                />

                {layout === "grid" && (
                    <Row className={`tt-layout-product-item`}>
                        {mostPopularProducts.map(product => (
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
                        className="tt-carousel-products row arrow-location-tab arrow-location-tab01 tt-alignment-img tt-layout-product-item slick-animated-show-js"
                    >
                        {mostPopularProducts.map(product => (
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
                {showMoreBtn && (
                    <div className="text-center">
                        <Link href="/shop">
                            <a className="btn btn-top custom-btn">View all products →</a>
                        </Link>
                    </div>
                )}
            </Container>
        </div>
    );
};

MostPopular.propTypes = {
    containerFluid: PropTypes.bool.isRequired,
    products: PropTypes.array.isRequired,
    productClass: PropTypes.string,
    layout: PropTypes.string,
    showMoreBtn: PropTypes.bool
}

MostPopular.defaultProps = {
    layout: "grid",
    limit: 7
}

export default MostPopular;