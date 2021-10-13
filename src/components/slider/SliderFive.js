import Link from "next/link";
import Slider from "react-slick";
import PropTypes from "prop-types";
import parse from "react-html-parser";
import {Container} from "react-bootstrap";

const SliderFive = ({className, sliderWrapper, data, dots, arrows}) => {
    const settings = {
        dots: dots,
        arrows: arrows,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <div className={`slider-wrapper ${sliderWrapper ? sliderWrapper : ''}`}>
                <Slider {...settings}>
                    {data && (
                        data.map(slide => (
                            <div key={slide.id}>
                                <div className="slide-item" style={{backgroundImage: `url(${slide?.bgImage})`}}>
                                    <Container>
                                        <div className={`slide-content`}>
                                            <div className="slide-content-inner">
                                                <div className={`tp-caption tp-caption-cookware ${slide.extraClass}`}>
                                                    {slide.title && <div className="tp-caption-cookware-wd01">{parse(slide.title)}</div>}
                                                    {slide.content && <div className="tp-caption-cookware-wd02">{parse(slide.content)}</div>}
                                                    {slide.btn && (
                                                        <div className="tp-caption-cookware-wd03">
                                                            <Link href="/product/category/cookware">
                                                                <a className="btn">SHOP NOW!</a>
                                                            </Link>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </Container>
                                </div>
                            </div>
                        ))
                    )}
                </Slider>
            </div>
        </div>
    );
};

SliderFive.propTypes = {
    className: PropTypes.string,
    sliderWrapper: PropTypes.string,
    data: PropTypes.array.isRequired,
    dots: PropTypes.bool,
    arrows: PropTypes.bool
}

export default SliderFive;