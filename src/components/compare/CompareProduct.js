import Link from "next/link";
import cogoToast from "cogo-toast";
import {CURRENCY} from "@utils/constant";
import {Fragment, useContext} from "react";
import {useProduct} from "@hooks";
import {CartContext} from "@global/CartContext";
import {toCapitalize} from "@utils/toCapitalize";
import {CompareContext} from "@global/CompareContext";
import ProductThumb from "@components/product/elements/ProductThumb";
import {getCartProduct, getDiscountPrice, getProductUniqueMaterials, getProductUniqueSizes} from "@utils/product";
import {CartNotification} from "@components/modal";

const CompareProduct = ({product}) => {
    const {discount, excerpt, name, thumbs, variations, vendor} = product;

    const {
        productSize,
        productColor,
        productPrice,
        modalCartAdded,
        productQuantity,
        productMaterial,
        modalCartAddedHandler
    } = useProduct(product);

    const {shoppingCart, addToCart} = useContext(CartContext);
    const {removeFromCompare} = useContext(CompareContext);

    const isInCart = getCartProduct(shoppingCart, product, productColor, productSize, productMaterial);
    const slug = `/product/${name.toLowerCase().split(' ').join('-')}`;
    const discountedPrice = getDiscountPrice(productPrice, discount);
    const materials = getProductUniqueMaterials(product);
    const sizes = getProductUniqueSizes(product);

    return (
        <Fragment>
            <div className="tt-item">
                <div className="tt-image-box compare_row compare_row_01">
                    <button
                        className="tt-remove-item js-remove-item"
                        onClick={() => removeFromCompare(product)}
                    />
                    <Link href={slug}>
                        <a><ProductThumb thumbs={[thumbs[0]]} productName={name}/></a>
                    </Link>
                    <h2 className="tt-title mt-3">
                        <Link href={slug}><a>{name}</a></Link>
                    </h2>
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
                </div>
                <div className="tt-value compare_row compare_row_02">
                    <p className="mt-0">{excerpt}</p>
                </div>
                <div className="tt-value compare_row compare_row_03">{vendor}</div>
                <div className="tt-value compare_row compare_row_04">
                    {variations ? variations.map((variation, i) => (
                        <span key={variation.title}>
                        {toCapitalize(variation.color.name)}{variations.length !== i + 1 && ', '}
                    </span>
                    )) : <span>X</span>}
                </div>
                <div className="tt-value compare_row compare_row_05">
                    {variations ? sizes.map((size, i) => (
                        <span key={size}>
                            {size.toUpperCase()}
                            {sizes.length !== i + 1 && ', '}
                        </span>
                    )): <span>X</span>}
                </div>
                <div className="tt-value compare_row compare_row_06">
                    {variations ? materials.map((material, i) => (
                        <span key={material}>
                            {material}
                            {materials.length !== i + 1 && ', '}
                        </span>
                    )): <span>X</span>}
                </div>
                <div className="tt-value compare_row compare_row_07">
                    <button
                        className="tt-btn-addtocart"
                        onClick={() => {
                            addToCart({
                                ...product,
                                price: discountedPrice ? discountedPrice : productPrice,
                                color: productColor,
                                size: productSize,
                                material: productMaterial,
                                quantity: productQuantity
                            });
                            !isInCart ? modalCartAddedHandler() : cogoToast.success(
                                `Your Item "${product.name}" already added.`, {
                                    position: "bottom-right",
                                    heading: "Added to Cart!",
                                    hideAfter: 4
                                }
                            );
                        }}
                    >
                        <i className="icon-f-39"/>ADD TO CART
                    </button>
                </div>
            </div>

            {modalCartAdded && (
                <CartNotification
                    product={isInCart}
                    modalShow={modalCartAdded}
                    modalOnHide={modalCartAddedHandler}
                />
            )}
        </Fragment>
    );
}

export default CompareProduct;