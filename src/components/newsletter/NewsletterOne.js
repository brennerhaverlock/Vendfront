import NewsletterForm from "./elements/Form";
import SocialIcons from "@components/newsletter/elements/Icons";

const NewsletterOne = () => {
    return (
        <div className="tt-footer-default tt-color-scheme-02">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-9">
                        <div className="tt-newsletter-layout-01">
                            <div className="tt-newsletter">
                                <div className="tt-mobile-collapse">
                                    <h4 className="tt-collapse-title">
                                        BE IN TOUCH WITH US:
                                    </h4>
                                    <div className="tt-collapse-content">
                                        <NewsletterForm/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-auto">
                        <SocialIcons/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterOne;