import PropTypes from "prop-types";
import {NewsletterTwo as Newsletter} from "@components/newsletter";
import {CopyrightThree as Copyright} from "@components/footer/elements/copyright";

const FooterFive = ({className, newsletter}) => {
    return (
        <footer className={className ? className : ''}>
            {newsletter && <Newsletter/>}
            <Copyright/>
        </footer>
    );
};

FooterFive.propTypes = {
    className: PropTypes.string,
    newsletter: PropTypes.bool
}

export default FooterFive;