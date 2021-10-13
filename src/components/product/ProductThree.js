import {useProduct} from "@hooks";
import PropTypes from "prop-types";
import {CURRENCY} from "@utils/constant";
import {Fragment, useContext} from "react";
import {CartContext} from "@global/CartContext";
import {CartNotification, QuickView} from "@components/modal";
import ProductSize from "@components/product/elements/ProductSize";
import ProductColor from "@components/product/elements/ProductColor";
import ProductThumb from "@components/product/elements/ProductThumb";
import {getCartProductQuantity, getCartProduct} from "@utils/product";
import ProductAction from "@components/product/elements/ProductAction";
import ProductRatings from "@components/product/elements/ProductRatings";
import ProductMaterial from "@components/product/elements/ProductMaterial";
import ProductSaleCountdown from "@components/product/elements/ProductSaleCountdown";

const ProductThree = ({product, showVariant}) => {
    const {categories, discount, discountDuration, name, ratings, sku, thumbs, variations, vendor} = product;

    const {
        slug,
        productSize,
        productColor,
        productPrice,
        discountedPrice,
        productStock,
        modalCartAdded,
        modalQuickView,
        productMaterial,
        productQuantity,
        productSizeHandler,
        productColorHandler,
        modalQuickViewHandler,
        modalCartAddedHandler,
        productMaterialHandler
    } = useProduct(product);

    const {shoppingCart, addToCart} = useContext(CartContext);
    const isInCart = getCartProduct(shoppingCart, product, productColor, productSize, productMaterial);
    const cartProductQuantity = getCartProductQuantity(shoppingCart, product, productColor, productSize);

    return (
        <Fragment>
            <div className="tt-product-design02 thumbprod-center">
                <div className="tt-image-box">
                    <a href={slug}>
                        <ProductThumb
                            thumbs={[thumbs[0]]}
                            productName={name}
                        />
                    </a>

                    {showVariant && discount && discountDuration && (
                        <div className="tt-countdown_box">
                            <ProductSaleCountdown date={discountDuration}/>
                        </div>
                    )}

                </div>
                <div className="tt-description">
                    {showVariant && (
                        <div className="tt-row">
                            {/* --== Product Meta ==-- */}
                            <ul className="tt-add-info">
                                <li>SKU: {sku}</li>
                                <li><a href="/">{vendor}</a></li>
                                <li>
                                    {categories.map((cat, i) => (
                                        <a key={i} href="/">
                                            {cat.toUpperCase()}
                                            {categories.length !== i + 1 && ', '}
                                        </a>
                                    ))}
                                </li>
                            </ul>

                            {/* --== Product Ratings ==-- */}
                            <ProductRatings ratings={ratings}/>
                        </div>
                    )}
                    <h2 className="tt-title my-1"><a href={slug}>{name}</a></h2>
                    <div className="tt-price">
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

                    {showVariant && (
                        <div className="tt-option-block mt-0">
                            {variations && (
                                <Fragment>
                                    <ProductSize
                                        className="mt-1"
                                        product={product}
                                        productColor={productColor}
                                        productSize={productSize}
                                        productSizeHandler={productSizeHandler}
                                    />

                                    <ProductColor
                                        product={product}
                                        productColor={productColor}
                                        productColorHandler={productColorHandler}
                                    />

                                    <ProductMaterial
                                        className="mt-2"
                                        product={product}
                                        productColor={productColor}
                                        productMaterial={productMaterial}
                                        productMaterialHandler={productMaterialHandler}
                                    />
                                </Fragment>
                            )}
                        </div>
                    )}

                    <div className="tt-product-inside-hover">
                        <div className="tt-row-btn">
                            <button
                                className={`tt-btn-addtocart thumbprod-button-bg ${productStock === cartProductQuantity ? 'disable' : ''}`}
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
                                {productStock === cartProductQuantity ? "SOLD OUT" : "ADD TO CART"}
                            </button>

                        </div>

                        <a href={slug} className="tt-btn-link"/>
                    </div>
                </div>

                {showVariant && (
                    <ProductAction
                        product={product}
                        modalQuickViewHandler={modalQuickViewHandler}
                    />
                )}
            </div>

            {modalQuickView && (
                <QuickView
                    product={product}
                    modalShow={modalQuickView}
                    modalOnHide={modalQuickViewHandler}
                />
            )}

            {modalCartAdded && (
                <CartNotification
                    product={isInCart}
                    modalShow={modalCartAdded}
                    modalOnHide={modalCartAddedHandler}
                />
            )}
        </Fragment>
    )
}

ProductThree.propTypes = {
    product: PropTypes.object.isRequired,
    showVariant: PropTypes.bool
}

ProductThree.defaultProps = {
    showVariant: true
}

export default ProductThree

