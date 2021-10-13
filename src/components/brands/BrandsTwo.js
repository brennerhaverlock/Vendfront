import brandData from "@data/brand";
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "@components/ui/section-title";
import {BrandTwo as Brand} from "@components/brand";

const BrandsTwo = () => {
    return (
        <div className="container-indent">
            <Container className="container-fluid-custom-mobile-padding">
                <SectionTitle
                    title="POPULAR"
                    content="CLOTHING BRANDS"
                />

                <Row className="tt-layout-promo-box">
                    {brandData.map(brand => (
                        <Col xs={6} sm={4} md={3} key={brand.id}>
                            <Brand
                                logo={brand.logo}
                                link={brand.link}
                                thumb={brand.thumb}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default BrandsTwo;