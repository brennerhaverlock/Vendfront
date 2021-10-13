import Link from "next/link";
import Proptypes from "prop-types";
import {toCapitalize} from "@utils/toCapitalize";

const CategoryFour = ({category, thumb, className}) => {
    return (
        <div className={`tt-promo02 ${className ? className : ''}`}>
            <Link href={`/product/category/${category}`}>
                <a className="image-box">
                    <img src={thumb} alt={toCapitalize(category)}/>
                </a>
            </Link>
            <div className="tt-description">
                <Link href={`/product/category/${category}`}>
                    <a className="tt-title">
                        <div className="tt-title-small">{category.replace('-',' ').toUpperCase()}</div>
                    </a>
                </Link>
            </div>
        </div>

    );
};

CategoryFour.propTypes = {
    category: Proptypes.string.isRequired,
    thumb: Proptypes.string.isRequired,
    className: Proptypes.string
};

export default CategoryFour;