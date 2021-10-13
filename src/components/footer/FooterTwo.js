import PropTypes from "prop-types";
import {NewsletterTwo as Newsletter} from "@components/newsletter";
import {CopyrightTwo as Copyright} from "@components/footer/elements/copyright";

const FooterTwo = ({className, dark, newsletter, logo}) => {
    return (
        <footer id="tt-footer" className={`${className ? className : ''} ${dark ? 'f-mobile-dark' : ''}`}>
            {newsletter && <Newsletter className="tt-color-scheme-01" dark={dark}/>}
            <Copyright dark={dark} logo={logo}/>
        </footer>
    );
};

FooterTwo.defaultProps = {
    newsletter: true,
}

FooterTwo.propTypes = {
    dark: PropTypes.bool,
    newsletter: PropTypes.bool,
    className: PropTypes.string,
    logo: PropTypes.string.isRequired,
}

export default FooterTwo;