import {Row, Col} from "react-bootstrap";
import {PromoOne as Promo} from "@components/promo";
import banners from "@data/promo-banners/home-01.json";

const PromoBannerOne = () => {
    return (
        <div className="container-indent">
            <div className="container-fluid-custom">
                <Row className="tt-layout-promo-box">
                    {banners.map(banner => (
                        <Col sm={6} md={4} key={banner.id}>
                            <Promo
                                title={banner.title}
                                heading={banner.heading}
                                thumb={banner.thumb}
                                link={banner.link}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
};

export default PromoBannerOne;