import PropTypes from "prop-types";
import Tooltip from "@components/ui/tooltip";
import {toCapitalize} from "@utils/toCapitalize";

const ProductColor = ({product, productColor, productColorHandler, className}) => {

    const {variations} = product;

    return (
        <ul className={`tt-options-swatch color-switch ${className ? className : ''}`}>
            {variations.map((variation, i) => (
                <Tooltip content={toCapitalize(variation?.color.name)} key={i}>
                    <li className={variation?.color?.name === productColor ? "active" : ""}>
                        <a href="/"
                           className="options-color-img"
                           data-colorname={variation?.color?.name}
                           data-colorthumb={variation?.color?.thumb}
                           style={{backgroundImage: `url(${variation?.color?.thumb})`}}
                           onClick={(event => productColorHandler(event))}
                        />
                    </li>
                </Tooltip>
            ))}
        </ul>
    );
};

ProductColor.propTypes = {
    product: PropTypes.object.isRequired,
    productColor: PropTypes.string.isRequired,
    productColorHandler: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default ProductColor;