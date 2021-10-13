import Link from "next/link";
import PropTypes from "prop-types";
import HTMLParser from "react-html-parser";

const PromoThree = ({className, thumb, subtitle, title, buttons}) => {
    return (
        <div className={`tt-promo-box ${className ? className : ''}`}>
            <img src={thumb} alt={title}/>
            <div className="tt-description tt-point-v-t">
                <div className="tt-description-wrapper">
                    {subtitle && <div className="tt-title-small">{HTMLParser(subtitle)}</div>}
                    {title && <div className="tt-title-large">{HTMLParser(title)}</div>}
                </div>
            </div>

            {buttons && (
                <div className="tt-description tt-point-v-b">
                    <div className="tt-description-wrapper">
                        <div className="custom-buttons">
                            {buttons.map((btn, idx) => (
                                <Link key={idx} href={btn.link}>
                                    <a className="btn btn-white btn-transparent">{btn.text}</a>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

PromoThree.propTypes = {
    buttons: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.bool
    ]),
    className: PropTypes.string,
    title: PropTypes.string,
    thumb: PropTypes.string,
    subtitle: PropTypes.string
}

export default PromoThree;