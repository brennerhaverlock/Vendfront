import Link from "next/link";
import PropTypes from "prop-types";
import parse from "react-html-parser";

const PromoOne = ({className, thumb, title, heading, link, btn, btnText, btnClass, bgClass}) => {
    return (
        <Link href={link}>
            <a className={`tt-promo-box ${className ? className : ''}`}>
                <img src={thumb} alt={title}/>
                <div className="tt-description">
                    <div className="tt-description-wrapper">
                        <div className={`tt-background ${bgClass ? bgClass : ''}`}/>
                        {title && <div className="tt-title-small">{parse(title)}</div>}
                        {heading && <div className="tt-title-large">{parse(heading)}</div>}
                        {btn && (
                            <Link href={link}>
                                <a className={`btn btn-xl ${btnClass ? btnClass : ''}`}>{btnText}</a>
                            </Link>
                        )}
                    </div>
                </div>
            </a>
        </Link>
    );
};

PromoOne.defaultProps = {
    btnText: "SHOP NOW!"
}

PromoOne.propTypes = {
    btn: PropTypes.bool,
    bgClass: PropTypes.string,
    btnClass: PropTypes.string,
    thumb: PropTypes.string,
    title: PropTypes.string,
    btnText: PropTypes.string,
    heading: PropTypes.string,
    className: PropTypes.string,
    link: PropTypes.string.isRequired
}

export default PromoOne;