import {Row, Col, Container} from "react-bootstrap";
import {PromoOne as Promo} from "@components/promo";
import banners from "@data/promo-banners/home-02.json";

const PromoBannerTwo = () => {
    return (
        <div className="tt-offset-20 container-indent">
            <Container>
                <Row className="tt-layout-promo-box">
                    {banners.map(banner => (
                        <Col sm={6} key={banner.id}>
                            <Promo
                                title={banner.title}
                                heading={banner.heading}
                                thumb={banner.thumb}
                                link={"/shop"}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default PromoBannerTwo;