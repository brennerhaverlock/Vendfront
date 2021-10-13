import Link from "next/link";
import Proptypes from "prop-types";

const CategoryOne = ({category, thumb, className, textPosition}) => {
    return (
        <Link href={`/product/category/${category.split(' ').join('-').toLowerCase()}`}>
            <a className={`tt-promo-box tt-one-child ${className ? className : 'hover-type-2'}`}>
                <img
                    src={thumb}
                    alt={category}
                    width="100%"
                />
                <div className={`tt-description ${textPosition ? textPosition : ''}`}>
                    <div className="tt-description-wrapper">
                        <div className="tt-background"/>
                        <div className="tt-title-small">{category}</div>
                    </div>
                </div>
            </a>
        </Link>

    );
};

CategoryOne.propTypes = {
    category: Proptypes.string.isRequired,
    thumb: Proptypes.string.isRequired
};

export default CategoryOne;