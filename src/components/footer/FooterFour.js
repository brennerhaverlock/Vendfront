import {NewsletterTwo as Newsletter} from "@components/newsletter";
import {CopyrightThree as Copyright} from "@components/footer/elements/copyright";

const FooterFour = ({className, dark, newsletter}) => {
    return (
        <footer id="tt-footer" className={`${className ? className : ''} ${dark ? 'f-mobile-dark' : ''}`}>
            {newsletter && <Newsletter className="tt-color-scheme-01" dark={dark}
            />}
            <Copyright dark={dark}/>
        </footer>
    );
};

FooterFour.defaultProps = {
    newsletter: true
}

export default FooterFour;