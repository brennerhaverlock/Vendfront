import Tooltip from "@components/ui/tooltip";
import PropTypes from "prop-types";

const ProductMaterial = ({product, productColor, productMaterial, productMaterialHandler, className}) => {

    const {variations} = product;

    return (
        <ul className={`tt-options-swatch material-switch ${className ? className : ''}`}>
            {variations.map((variation) => (
                variation?.color?.name === productColor && (
                    variation.materials.map((material, i) => (
                        <Tooltip content={material?.name} key={i}>
                            <li className={material?.slug === productMaterial ? "active" : ""}>
                                <a href="/"
                                   className="options-color-img"
                                   data-materialname={material?.slug}
                                   style={{backgroundImage: `url(${material?.thumb})`}}
                                   onClick={(event => productMaterialHandler(event))}
                                />
                            </li>
                        </Tooltip>
                    ))
                )
            ))}
        </ul>
    );
};

ProductMaterial.propTypes = {
    product: PropTypes.object.isRequired,
    productColor: PropTypes.string.isRequired,
    productMaterial: PropTypes.string.isRequired,
    productMaterialHandler: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default ProductMaterial;