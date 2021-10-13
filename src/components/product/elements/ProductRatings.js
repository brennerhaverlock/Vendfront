import PropTypes from "prop-types";
import {isFloat} from "@utils/isFloat";

const ProductRatings = ({ratings, className}) => {

    return (
        <div className={`tt-rating ${className ? className : ''}`}>
            {/* Full Star */}
            {Array.from({length: ratings}, (_, i) => (
                <i key={i} className="icon-star"/>
            ))}

            {/* Half Star */}
            {isFloat(ratings) && <i className="icon-star-half"/>}

            {/* Empty Star */}
            {Array.from({length: 5 - ratings}, (_, i) => (
                <i key={i} className="icon-star-empty"/>
            ))}
        </div>
    );
};

ProductRatings.propTypes = {
    ratings: PropTypes.number.isRequired,
    className: PropTypes.string
};

export default ProductRatings;