import Link from "next/link";
import {Container} from "react-bootstrap";
import SocialIcons from "@components/newsletter/elements/Icons";

const NotificationBarOne = ({className}) => {
    return (
        <div className={`tt-color-scheme-01 ${className ? className : ''}`}>
            <Container>
                <div className="tt-header-row tt-top-row">
                    <div className="tt-col-left">
                        <div className="tt-box-info">
                            <ul>
                                <li>
                                    <i className="icon-f-44"/>
                                    FREE 2-DAYS STANDARD SHIPPING ON ORDERS $255+
                                    <Link href="/shop"><a className="tt-link-underline ml-1">MORE DETAILS</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="tt-col-right ml-auto">
                        <SocialIcons/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NotificationBarOne;