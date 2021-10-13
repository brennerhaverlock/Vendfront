import Link from "next/link";
import {useProduct} from "@hooks";
import PropTypes from "prop-types";
import ProductThumb from "./elements/ProductThumb";
import {CURRENCY} from "@utils/constant";
import {Fragment} from "react";

const ProductFour = ({product, showPrice, className}) => {
    const {name, thumbs, discount} = product;
    const {
        slug,
        productPrice,
        discountedPrice,
        productColorImage,
    } = useProduct(product);

    return (
        <div className={`tt-product thumbprod-center product-nohover ${className ? className : ''}`}>
            <div className="tt-image-box">
                <Link href={slug}>
                    <a>
                        <ProductThumb
                            thumbs={productColorImage ? [productColorImage, thumbs[1]] : thumbs}
                            productName={name}
                        />
                    </a>
                </Link>
            </div>

            <div className={`tt-description`}>
                <h2 className="tt-title">
                    <Link href={slug}>{name}</Link>
                </h2>

                {showPrice && (
                    <div className="tt-price mt-1">
                        {!discount ? (
                            CURRENCY + productPrice.toFixed(2)
                        ) : (
                            <Fragment>
                                <span className="new-price">
                                    {CURRENCY + discountedPrice.toFixed(2)}
                                </span>
                                <span className="old-price">
                                    {CURRENCY + productPrice.toFixed(2)}
                                </span>
                            </Fragment>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

ProductFour.propTypes = {
    product: PropTypes.object.isRequired,
    showPrice: PropTypes.bool
}

export default ProductFour;