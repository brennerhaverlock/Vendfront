import PropTypes from "prop-types";
import {WidgetsTwo as Widgets} from "@components/footer/elements/widgets";
import {CopyrightTwo as Copyright} from "@components/footer/elements/copyright";

const FooterThree = ({className, dark, colorScheme, logo}) => {
    return (
        <footer id="tt-footer" className={`${className ? className : ''} ${dark ? 'f-mobile-dark' : ''}`}>
            <Widgets dark={dark} colorScheme={colorScheme}/>
            <Copyright dark={dark} logo={logo}/>
        </footer>
    );
};

FooterThree.propTypes = {
    className: PropTypes.string,
    dark: PropTypes.bool,
    colorScheme: PropTypes.string,
    logo: PropTypes.string.isRequired
}

export default FooterThree;