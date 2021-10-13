import {Row, Col} from "react-bootstrap";
import {PromoThree as Promo} from "@components/promo";
import banners from "@data/promo-banners/home-19.json";

const PromoBannerFive = ({className}) => {
    return (
        <div className={`${className ? className : ''} container-indent`}>
            <div className="container-fluid-custom">
                <Row>
                    {banners.map(banner => (
                        <Col md={6} key={banner.id}>
                            <Promo
                                title={banner.title}
                                thumb={banner.thumb}
                                buttons={banner.buttons}
                                subtitle={banner.subtitle}
                                className="tt-one-child hover-type-4 tt-promo-layout02"
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default PromoBannerFive;