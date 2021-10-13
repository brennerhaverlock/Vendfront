import PropTypes from "prop-types";
import Character from "@components/character";
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "@components/ui/section-title";

const Characters = ({className, data}) => {
    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <Container>
                <SectionTitle
                    title="Character"
                    content="Select Section."
                />

                <div className="tt-btn-img-list">
                    <Row>
                        {data.map(character => (
                            <Col xs={6} md={3} className="col-5-inrow-lg" key={character.id}>
                                <Character
                                    url={character.url}
                                    title={character.title}
                                />
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
};

Characters.propTypes = {
    data: PropTypes.array.isRequired,
    className: PropTypes.string
}

export default Characters;