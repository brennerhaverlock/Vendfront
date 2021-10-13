import Link from "next/link";
import PropTypes from "prop-types";

const OfferItemOne = ({data, className}) => {
    return (
        <div className={`tt-promo02 ${className ? className : ''}`}>
            <div className="image-box">
                <Link href={data.btnLink}>
                    <img src={data.thumb} alt={data.title}/>
                </Link>
            </div>
            <div className="tt-description">
                <Link href={data.btnLink}>
                    <a className="tt-title">
                        <div className="tt-title-small">{data.subTitle}</div>
                        <div className="tt-title-large">{data.title}</div>
                    </a>
                </Link>

                <p>{data.content}</p>
                <Link href={data.btnLink}>
                    <a className="btn-link">{data.btnText}</a>
                </Link>
            </div>
        </div>
    );
};

OfferItemOne.propTypes = {
    data: PropTypes.object.isRequired
}

export default OfferItemOne;