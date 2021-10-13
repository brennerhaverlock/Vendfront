import Slider from "react-slick";
import PropTypes from "prop-types";
import {getProducts} from "@utils/product";
import {Container, Col} from "react-bootstrap";
import sliderConfig from "@utils/sliderConfig";
import SectionTitle from "@components/ui/section-title";
import {ProductThree as Product} from "@components/product";

const BestSellingTwo = ({className, products, limit = 6, containerFluid}) => {
    const bestSellingProducts = getProducts(products, 'best-seller', limit);

    const sliderOptions = {
        ...sliderConfig,
        slidesToShow: containerFluid ? 6 : 4
    }

    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <Container fluid={containerFluid} className="container-fluid-custom-mobile-padding">
                <SectionTitle
                    title="Best sellers<br>in comic books"
                    content="Most read comic books."
                />

                <Slider
                    {...sliderOptions}
                    className="tt-carousel-products row arrow-location-tab arrow-location-tab01 tt-alignment-img tt-layout-product-item"
                >
                    {bestSellingProducts.map(product => (
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

BestSellingTwo.propTypes = {
    products: PropTypes.array.isRequired,
    className: PropTypes.string,
    limit: PropTypes.number,
    containerFluid: PropTypes.bool
}

export default BestSellingTwo;