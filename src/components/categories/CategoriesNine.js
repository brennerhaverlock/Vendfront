import {useContext} from "react";
import Slider from "react-slick";
import {Col, Container} from "react-bootstrap";
import SectionTitle from "@components/ui/section-title";
import {ProductsContext} from "@global/ProductsContext";
import {getProductsUniqueCategories} from "@utils/product";
import {CategoryTwo as Category} from "@components/category";

const CategoriesNine = ({className}) => {
    const {products} = useContext(ProductsContext);
    const categories = getProductsUniqueCategories(products, 9);

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
        <div className={`container-indent ${className ? className : ''}`}>
            <Container className="container-fluid-custom-mobile-padding">
                <SectionTitle
                    title="OUR COLLECTIONS"
                    content="SUMMER 2021"
                />


                <Slider
                    {...sliderOptions}
                    className="tt-carousel-products row arrow-location-tab arrow-location-tab01 tt-alignment-img tt-collection-listing"
                >
                    {categories.map((category, index) => (
                        <Col key={index}>
                            <Category
                                products={products}
                                catName={category}
                                thumb={`/assets/images/product/product-0${index + 1}.jpg`}
                            />
                        </Col>
                    ))}
                </Slider>
            </Container>
        </div>
    );
};

export default CategoriesNine;