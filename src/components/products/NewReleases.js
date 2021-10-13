import Slider from "react-slick";
import PropTypes from "prop-types";
import sliderConfig from "@utils/sliderConfig";
import {Container, Col, Row} from "react-bootstrap";
import SectionTitle from "@components/ui/section-title";
import {ProductOne as Product} from "@components/product";

const NewReleases = ({products, layout}) => {
    return (
        <div className="container-indent">
            <Container className="container-fluid-custom-mobile-padding">
                <SectionTitle
                    title="NEW RELEASES"
                    content="IN THIS WEEK"
                />

                {layout === "grid" && (
                    <Row className={`tt-layout-product-item`}>
                        {products.map(product => (
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
                        {...sliderConfig}
                        className="tt-carousel-products row arrow-location-tab arrow-location-tab01 tt-alignment-img tt-layout-product-item"
                    >
                        {products.map(product => (
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

NewReleases.propTypes = {
    products: PropTypes.array.isRequired
}

NewReleases.defaultProps = {
    layout: "grid"
}

export default NewReleases;