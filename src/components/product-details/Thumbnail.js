import Slider from "react-slick";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";

const ProductDetailsThumbnail = ({thumbImages, productName}) => {

    const [gallerySlider, setGallerySlider] = useState(null);
    const [navSlider, setNavSlider] = useState(null);
    let gallerySliderRef = []
    let navSliderRef = []

    const navSliderOptions = {
        vertical: true,
        verticalSwiping: true,
        infinite: true,
        slidesToScroll: 1,
        focusOnSelect: true,
        swipeToSlide: true,
        asNavFor: gallerySlider
    }

    const gallerySliderOptions = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: navSlider
    }

    useEffect(() => {
        setGallerySlider(gallerySliderRef);
        setNavSlider(navSliderRef);
    }, [gallerySliderRef, navSliderRef]);

    return (
        <div className="tt-product-vertical-layout">
            <div className="tt-product-single-img">
                <Slider {...gallerySliderOptions} ref={slider => (gallerySliderRef = slider)}>
                    {thumbImages.map((image, i) => (
                        <img key={i} src={image} alt={productName.name}/>
                    ))}
                </Slider>
            </div>
            <div className="tt-product-single-carousel-vertical">
                <Slider
                    {...navSliderOptions}
                    slidesToShow={thumbImages.length < 4 ? thumbImages.length : 4}
                    ref={slider => (navSliderRef = slider)}
                    className="tt-slick-button-vertical"
                >
                    {thumbImages.map((image, i) => (
                        <img key={i} src={image} alt={productName.name}/>
                    ))}
                </Slider>
            </div>
        </div>
    );
};


ProductDetailsThumbnail.propTypes = {
    thumbImages: PropTypes.array.isRequired,
    productName: PropTypes.string.isRequired
}

export default ProductDetailsThumbnail;