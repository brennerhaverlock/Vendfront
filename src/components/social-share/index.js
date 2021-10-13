import {Container} from "react-bootstrap";
import PropTypes from "prop-types";
import SocialLink from "@components/social-link";

const SocialShare = ({content, url}) => {
    return (
        <div className="container-indent wrapper-social-icon">
            <Container>
                <ul className="tt-social-icon justify-content-center">
                    <li>
                        <SocialLink
                            url={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
                        >
                            <i className="icon-g-64"/>
                        </SocialLink>
                    </li>

                    <li>
                        <SocialLink
                            url={`https://twitter.com/intent/tweet?url=${url}&text=${content}`}
                        >
                            <i className="icon-h-58"/>
                        </SocialLink>
                    </li>

                    <li>
                        <SocialLink
                            url={`https://pinterest.com/pin/create/button/?url=${url}&media=&description=${content}`}
                        >
                            <i className="icon-g-70"/>
                        </SocialLink>
                    </li>

                    <li>
                        <SocialLink
                            url={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=&summary=${content}&source=`}
                        >
                            <i className="icon-g-68"/>
                        </SocialLink>
                    </li>
                </ul>
            </Container>
        </div>
    );
};

SocialShare.propTypes = {
    url: PropTypes.string.isRequired,
    content: PropTypes.string
}

export default SocialShare;