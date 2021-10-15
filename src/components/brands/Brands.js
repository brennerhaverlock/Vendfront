import Link from "next/link";
import data from "@data/brand";
import Slider from "react-slick";
import {Container} from "react-bootstrap";

const BrandsThree = () => {
    const sliderOptions = {
        slidesToShow: 8,
        responsive: [
            {
                breakpoint: 1026,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    }

    return (
        <div className="container-indent">
            <Container>
                <Slider
                    className="tt-carousel-brands arrow-location-center-02 tt-arrow-hover"
                    {...sliderOptions}
                >
                    {data.map(brand => (
                        <Link href={brand?.link} key={brand.id}>
                            <a><img src={brand?.logo} alt="brand"/></a>
                        </Link>
                    ))}
                </Slider>
            </Container>
        </div>
    );
};

export default BrandsThree;