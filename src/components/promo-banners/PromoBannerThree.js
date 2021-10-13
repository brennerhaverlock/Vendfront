import {PromoOne as Promo} from "@components/promo";
import {Row, Col, Container} from "react-bootstrap";
import banners from "@data/promo-banners/home-02.json";

const thumb1 = "/assets/images/promo/index04-promo-img-05.jpg";
const thumb2 = "/assets/images/promo/index04-promo-img-06.jpg"

const data = [
    {
        ...banners[0],
        thumb: thumb1
    },
    {
        ...banners[1],
        thumb: thumb2
    }
]

const PromoBannerThree = () => {
    return (
        <div className="container-indent">
            <Container>
                <Row className="tt-layout-promo-box">
                    {data.map(banner => (
                        <Col md={6} key={banner.id}>
                            <Promo
                                title={banner.title}
                                heading={banner.heading}
                                thumb={banner.thumb}
                                link={banner.link}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default PromoBannerThree;