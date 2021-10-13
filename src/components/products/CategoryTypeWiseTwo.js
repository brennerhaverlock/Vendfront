import Slider from "react-slick";
import PropTypes from "prop-types";
import {Col, Container, Row} from "react-bootstrap";
import {getProductsByCategory} from "@utils/product";
import {ProductOne as Product} from "@components/product";
import parse from "react-html-parser";

const CategoryTypeWiseTwo = ({className, products, heading, headingThumb, category, containerFluid, productClass}) => {
    const categoryProducts = getProductsByCategory(products, category);

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
        <div className={`container-indent ${className ? className : ''}`}>
            <Container fluid={containerFluid}>
                <Row>
                    <Col sm={4} className="col-5-inrow-lg">
                        <div className="tt-tabs-imgbox tt-radius-left tt-layout-color01"
                             style={{backgroundImage: `url(${headingThumb})`}}
                        >
                            <div className="text-center">
                                {heading && <h3 className="tt-title-small">{parse(heading)}</h3>}
                                <h4 className="tt-title-large">{category.toUpperCase()}</h4>
                            </div>
                        </div>
                    </Col>
                    <div className="divider-sm d-block d-sm-none"/>
                    <Col sm={8} className="col-5_end-inrow-lg">
                        <Slider
                            {...sliderOptions}
                            className="tt-carousel-products row arrow-location-center-03 tt-alignment-img tt-product-listing slick-animated-show-js"
                        >
                            {categoryProducts && (
                                categoryProducts.map(product => (
                                    <Col xs={12} key={product.id}>
                                        <Product
                                            page="home"
                                            product={product}
                                            className={productClass}
                                        />
                                    </Col>
                                )))
                            }
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

CategoryTypeWiseTwo.propTypes = {
    products: PropTypes.array.isRequired,
    category: PropTypes.string.isRequired,
    heading: PropTypes.string,
    className: PropTypes.string
}

export default CategoryTypeWiseTwo;