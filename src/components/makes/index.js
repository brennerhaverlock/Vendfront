import PropTypes from "prop-types";
import Make from "@components/character";
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "@components/ui/section-title";

const FeaturedMakes = ({className, data}) => {
    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <Container>
                <SectionTitle
                    title="Featured Makes"
                />

                <div className="tt-btn-img-list">
                    <Row>
                        {data && (
                            data.map(make => (
                                <Col key={make.id} xs={6} sm={4} lg={2}>
                                    <Make
                                        url={make.url}
                                        title={make.title}
                                    />
                                </Col>
                            ))
                        )}
                    </Row>
                </div>
            </Container>
        </div>
    );
};

FeaturedMakes.propTypes = {
    data: PropTypes.array.isRequired,
    className: PropTypes.string
}

export default FeaturedMakes;