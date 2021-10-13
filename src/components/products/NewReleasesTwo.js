import Slider from "react-slick";
import PropTypes from "prop-types";
import sliderConfig from "@utils/sliderConfig";
import {Container, Col} from "react-bootstrap";
import SectionTitle from "@components/ui/section-title";
import {ProductThree as Product} from "@components/product";

const NewReleasesTwo = ({products, containerFluid}) => {
    const sliderOptions = {
        ...sliderConfig,
        slidesToShow: containerFluid ? 6 : 4
    }

    return (
        <div className="container-indent">
            <Container fluid={containerFluid} className="container-fluid-custom-mobile-padding">
                <SectionTitle
                    title="NEW RELEASES"
                    content="IN THIS WEEK"
                />
                <Slider
                    {...sliderOptions}
                    className="tt-carousel-products row arrow-location-tab arrow-location-tab01 tt-alignment-img tt-layout-product-item"
                >
                    {products.map(product => (
                        <Col key={product.id}>
                            <Product
                                product={product}
                                showVariant={false}
                            />
                        </Col>

                    ))}
                </Slider>
            </Container>
        </div>
    );
};

NewReleasesTwo.propTypes = {
    products: PropTypes.array.isRequired,
    containerFluid: PropTypes.bool
}

export default NewReleasesTwo;