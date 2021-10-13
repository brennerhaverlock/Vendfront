import PropTypes from "prop-types";
import {WidgetsOne as Widgets} from "./elements/widgets";
import {NewsletterOne as Newsletter} from "@components/newsletter";
import {CopyrightOne as Copyright} from "@components/footer/elements/copyright";

const FooterOne = ({className, newsletter, logo, dark}) => {
    return (
        <footer id="tt-footer" className={className ? className : ''}>
            {newsletter && <Newsletter />}
            <Widgets dark={dark}/>
            <Copyright logo={logo} dark={dark}/>
        </footer>
    );
};

FooterOne.defaultProps = {
    dark: false,
    newsletter: true
}

FooterOne.propTypes = {
    className: PropTypes.string,
    newsletter: PropTypes.bool,
    logo: PropTypes.string.isRequired
}

export default FooterOne;