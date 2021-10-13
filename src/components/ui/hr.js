import {Container} from "react-bootstrap";

const Separator = ({className, fluid, fullscreen}) => {
    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <Container fluid={fluid || fullscreen && true} className={fullscreen ? 'p-0' : ''}>
                <hr/>
            </Container>
        </div>
    );
};

export default Separator;