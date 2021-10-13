import {useRef} from "react";
import {Container} from "react-bootstrap";

const NotificationBarFour = ({className, containerFluid}) => {
    const notificationBar = useRef(null);
    return (
        <div className={`tt-top-panel tt-top-panel-largexl tt-color-02 ${className ? className : ''}`} ref={notificationBar}>
            <Container fluid={containerFluid}>
                <div className="tt-row">
                    <div className="tt-description">
                        <span className="tt-base-color02">10% back</span> in rewards on <span
                        className="tt-base-color02"> first day</span> of purchases!
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NotificationBarFour;