import {useRef} from "react";
import Link from "next/link";
import {slideUp} from "@utils/method";
import {Container} from "react-bootstrap";

const NotificationBarThree = ({className, containerFluid}) => {
    const notificationBar = useRef(null);
    return (
        <div className={`tt-top-panel ${className ? className : ''}`} ref={notificationBar}>
            <Container fluid={containerFluid}>
                <div className="tt-row">
                    <div className="tt-description">
                        [Input Welcome Message] <Link
                        href="/shop">DETAILS</Link>
                    </div>
                    <button
                        className="tt-btn-close" aria-label="close"
                        onClick={() => slideUp(notificationBar.current, 400)}
                    />
                </div>
            </Container>
        </div>
    );
};

export default NotificationBarThree;