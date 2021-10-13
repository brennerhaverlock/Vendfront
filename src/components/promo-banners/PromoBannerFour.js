import {PromoOne as Promo} from "@components/promo";
import {Row, Col, Container} from "react-bootstrap";
import banners from "@data/promo-banners/home-02.json";

const thumb1 = "/assets/images/promo/index05-promo-img-04.jpg";
const thumb2 = "/assets/images/promo/index05-promo-img-05.jpg"

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

const PromoBannerFour = () => {
    return (
        <div className="container-indent">
            <Container fluid>
                <Row className="tt-layout-promo-box">
                    {data.map(banner => (
                        <Col md={6} key={banner.id}>
                            <Promo
                                link={banner.link}
                                thumb={banner.thumb}
                                title={banner.title}
                                heading={banner.heading}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default PromoBannerFour;