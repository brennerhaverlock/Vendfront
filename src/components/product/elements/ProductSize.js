import PropTypes from "prop-types";

const ProductSize = ({product, productColor, productSize, productSizeHandler, className}) => {

    const {variations} = product;

    return (
        <ul className={`tt-options-swatch size-switch ${className ? className : ''}`}>
            {variations.map((variation) => (
                variation?.color?.name === productColor && (
                    variation.sizes.map((size, i) => (
                        <li className={size?.name === productSize ? "active" : ""} key={i}>
                            <a href="/" data-size={size?.name} onClick={(event => productSizeHandler(event))}>
                                {size?.name.toUpperCase()}
                            </a>
                        </li>
                    ))
                )
            ))}
        </ul>
    );
};

ProductSize.propTypes = {
    product: PropTypes.object.isRequired,
    productColor: PropTypes.string.isRequired,
    productSize: PropTypes.string.isRequired,
    productSizeHandler: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default ProductSize;