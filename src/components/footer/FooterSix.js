import {Container} from "react-bootstrap";
import SocialIcons from "@components/newsletter/elements/Icons";
import {CopyrightThree as Copyright} from "@components/footer/elements/copyright";

const FooterSix = ({className}) => {
    return (
        <footer id="tt-footer" className={`${className ? className : ''}`}>
            <div className="tt-footer-center">
                <Container>
                    <div className="tt-row text-center">
                        <address className="tt-address-01">
                            7895 Piermont Dr NE Albuquerque, NM 198866, United States of America
                        </address>
                        <address className="tt-address-02">
                            P: +566 4774 9930
                        </address>

                        <SocialIcons/>
                    </div>
                </Container>
            </div>
            <Copyright/>
        </footer>
    );
};

export default FooterSix;