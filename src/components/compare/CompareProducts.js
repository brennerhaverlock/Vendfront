import Slider from "react-slick";
import {useContext} from "react";
import {CompareContext} from "@global/CompareContext";
import CompareProduct from "@components/compare/CompareProduct";

const CompareProducts = () => {

    const {compareList} = useContext(CompareContext);

    const sliderOptions = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToScroll: 1,
        adaptiveHeight: true,
        drag: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 790,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }

    return (
        <div className="tt-col-item">
            <Slider
                {...sliderOptions}
                slidesToShow={compareList.length < 3 ? compareList.length : 3}
                className="compare-init-slider"
            >
                {compareList.map(product => (
                    <CompareProduct
                        key={product.id}
                        product={product}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default CompareProducts;