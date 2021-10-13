import Slider from "react-slick";
import PropTypes from "prop-types";
import {Col, Container} from "react-bootstrap";
import {getProductsByCategory} from "@utils/product";
import SectionTitle from "@components/ui/section-title";
import {ProductThree as Product} from "@components/product";

const CategoryTypeWiseThree = ({className, products, category, containerFluid}) => {
    const categoryProducts = getProductsByCategory(products, category);

    const sliderOptions = {
        slidesToShow: 4,
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
                breakpoint: 750,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    }

    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <Container fluid={containerFluid}>
                <SectionTitle
                    title={category.replace('-', ' ').toUpperCase()}
                />

                <Slider
                    {...sliderOptions}
                    className="tt-carousel-products row arrow-location-tab tt-alignment-img tt-collection-listing"
                >
                    {categoryProducts && (
                        categoryProducts.map(product => (
                            <Col xs={12} key={product.id}>
                                <Product
                                    product={product}
                                    showVariant={false}
                                />
                            </Col>
                        )))
                    }
                </Slider>
            </Container>
        </div>
    );
};

CategoryTypeWiseThree.propTypes = {
    products: PropTypes.array.isRequired,
    category: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default CategoryTypeWiseThree;