import {Container} from "react-bootstrap";
import Widget from "@components/widget";
import NewsletterForm from "@components/newsletter/elements/Form";
import SocialIcons from "@components/newsletter/elements/Icons";

const NewsletterTwo = ({className, dark}) => {
    return (
        <div className={`tt-footer-center ${className ? className : ''} ${dark ? 'tt-color-scheme-03' : ''}`}>
            <Container>
                <div className="tt-row">
                    <div className="tt-newsletter">
                        <Widget title="NEWSLETTER SIGNUP">
                            <p>Sign up for our e-mail and be the first who know our special offers! Furthermore, we
                                will give a 15% discount on the next order after you sign up.</p>
                            <NewsletterForm/>
                        </Widget>
                    </div>

                    <SocialIcons/>
                </div>
            </Container>
        </div>
    );
};

export default NewsletterTwo;