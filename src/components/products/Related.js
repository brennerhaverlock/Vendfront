import {useContext} from "react";
import Slider from "react-slick";
import {Col, Container} from "react-bootstrap";
import {getRelatedProducts} from "@utils/product";
import SectionTitle from "@components/ui/section-title";
import {ProductsContext} from "@global/ProductsContext";
import {ProductOne as Product} from "@components/product";

const RelatedProducts = ({categories, tags}) => {
    const {products} = useContext(ProductsContext);
    const relatedProducts = getRelatedProducts(categories, tags, products);

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
        relatedProducts.length && (
            <div className="container-indent">
                <Container className="container-fluid-custom-mobile-padding">
                    <SectionTitle
                        title="RELATED PRODUCTS"
                        className="text-left"
                        titleClass="tt-title-small"
                    />

                    <Slider
                        {...sliderOptions}
                        className="row tt-carousel-products arrow-location-right-top tt-alignment-img tt-layout-product-item"
                    >
                        {relatedProducts.map(product => (
                            <Col xs={12} key={product.id}>
                                <Product
                                    page="details"
                                    product={product}
                                    showVariant={true}
                                />
                            </Col>
                        ))}
                    </Slider>
                </Container>
            </div>
        )
    );
};

export default RelatedProducts;