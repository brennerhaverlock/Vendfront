import PropTypes from "prop-types";
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "@components/ui/section-title";
import {PromoOne as PromoOffer} from "@components/promo";

const PromoBannerCookware = ({className, data}) => {
    return (
        <div className={`container-indent ${className ? className : className}`}>
            <Container>
                <SectionTitle
                    title="Our Featured Offers"
                />

                <Row className="tt-layout-promo-box">
                    {data && (
                        data.map(offer => (
                            <Col md={6} key={offer.id}>
                                <PromoOffer
                                    link={offer.link}
                                    title={offer.title}
                                    thumb={offer.thumb}
                                    heading={offer.heading}
                                    bgClass={offer.bgClass}
                                    className="tt-one-child"
                                />
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
        </div>
    );
};

PromoBannerCookware.propTypes = {
    className: PropTypes.string,
    data: PropTypes.array.isRequired
}

export default PromoBannerCookware;