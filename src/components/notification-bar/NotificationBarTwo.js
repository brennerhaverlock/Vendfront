import Link from "next/link";
import {Container} from "react-bootstrap";
import SocialIcons from "@components/newsletter/elements/Icons";

const NotificationBarTwo = ({className, containerFluid, dark}) => {
    return (
        <div className={`${dark ? 'tt-color-scheme-01' : ''} ${className ? className : ''}`}>
            <Container fluid={containerFluid}>
                <div className="tt-header-row tt-top-row">
                    <div className="tt-col-left">
                        <div className="tt-box-info">
                            <ul>
                                <li>
                                    <i className="icon-f-93"/>
                                    <Link href="tel:+77723457885">+777 2345 7885</Link>; <Link href="tel:+77723457886">+777 2345 7886</Link>
                                </li>

                                <li>
                                    <i className="icon-f-92"/>
                                    7 DAYS A WEEK FROM 10 AM TO 6 PM
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

NotificationBarTwo.defaultProps = {
    dark: true
}

export default NotificationBarTwo;