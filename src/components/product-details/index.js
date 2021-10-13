import {useProduct} from "@hooks";
import cogoToast from "cogo-toast";
import PropTypes from "prop-types";
import {CURRENCY} from "@utils/constant";
import {Fragment, useContext} from "react";
import {CartContext} from "@global/CartContext";
import {toCapitalize} from "@utils/toCapitalize";
import {CartNotification} from "@components/modal";
import {CompareContext} from "@global/CompareContext";
import {WishlistContext} from "@global/WishlistContext";
import ProductSize from "@components/product/elements/ProductSize";
import {Accordion, Card, Col, Container, Row} from "react-bootstrap";
import ProductColor from "@components/product/elements/ProductColor";
import ProductRatings from "@components/product/elements/ProductRatings";
import ProductMaterial from "@components/product/elements/ProductMaterial";
import ProductDetailsThumbnail from "@components/product-details/Thumbnail";
import ProductSaleCountdown from "@components/product/elements/ProductSaleCountdown";
import {
    getCartProduct,
    getCartProductQuantity,
    getDiscountPrice,
    getProductUniqueSizes,
    getWishCompareProduct
} from "@utils/product";

const ProductDetails = ({product}) => {
    const {
        name,
        badge,
        description,
        discount,
        discountDuration,
        excerpt,
        previewImages,
        ratings,
        sku,
        variations
    } = product;

    const {
        productSize,
        productColor,
        productPrice,
        productStock,
        modalCartAdded,
        productMaterial,
        productQuantity,
        setProductQuantity,
        compareHandler,
        wishlistHandler,
        productSizeHandler,
        productColorHandler,
        modalCartAddedHandler,
        productMaterialHandler,
        productQuantityIncrement,
        productQuantityDecrement
    } = useProduct(product);

    const sizes = getProductUniqueSizes(product);

    const {wishlist} = useContext(WishlistContext);
    const {compareList} = useContext(CompareContext);
    const {shoppingCart, addToCart} = useContext(CartContext);

    const isInWishlist = getWishCompareProduct(wishlist, product);
    const isInCompareList = getWishCompareProduct(compareList, product);
    const discountedPrice = getDiscountPrice(productPrice, discount);
    const isInCart = getCartProduct(shoppingCart, product, productColor, productSize, productMaterial);
    const cartProductQuantity = getCartProductQuantity(shoppingCart, product, productColor, productSize);

    const addToCartHandler = () => {
        addToCart({
            ...product,
            price: productPrice,
            color: productColor,
            size: productSize,
            material: productMaterial,
            quantity: productQuantity
        });
        setProductQuantity(1);
        !isInCart ? modalCartAddedHandler() : cogoToast.success(
            `Your Item "${product.name}" already added.`, {
                position: "bottom-right",
                heading: "Added to Cart!",
                hideAfter: 2
            }
        );
    }

    return (
        <Fragment>
            <div className="container-indent">
                <Container className="container-fluid-mobile">
                    <Row>
                        <Col lg={6}>
                            <ProductDetailsThumbnail
                                productName={name}
                                thumbImages={previewImages}
                            />
                        </Col>

                        <Col lg={6}>
                            <div className="tt-product-single-info">
                                {badge || discount || productStock === cartProductQuantity ? (
                                    <div className="tt-wrapper">
                                        <div className="tt-label">
                                            {badge &&
                                            <div className={`tt-label tt-label-${badge.toLowerCase()}`}>{badge}</div>}
                                            {discount && <div className="tt-label tt-label-sale">Sale {discount}%</div>}
                                            {productStock === cartProductQuantity && (
                                                <span className={`tt-label tt-label-out-stock`}>Out Of Stock</span>
                                            )}
                                        </div>
                                    </div>
                                ) : null}
                                <div className="tt-add-info">
                                    <ul>
                                        <li><span>SKU:</span> {sku}</li>
                                        <li>
                                            <span>Availability:</span>
                                            {productStock === cartProductQuantity ? 'Out of Stock' : `${productStock - cartProductQuantity} in Stock`}
                                        </li>
                                    </ul>
                                </div>

                                <h1 className="tt-title">{name}</h1>
                                <div className="tt-price">
                                    {!discount ? (
                                        CURRENCY + productPrice.toFixed(2)
                                    ) : (
                                        <Fragment>
                                            <span className="sale-price mr-3">
                                                {CURRENCY + discountedPrice.toFixed(2)}
                                            </span>
                                            <span className="old-price">
                                                {CURRENCY + productPrice.toFixed(2)}
                                            </span>
                                        </Fragment>
                                    )}
                                </div>

                                <div className="tt-review">
                                    <ProductRatings ratings={ratings}/>
                                </div>
                                <div className="tt-wrapper">
                                    {excerpt}
                                </div>
                                <div className="tt-wrapper">
                                    <div className="tt-countdown_box_02">
                                        {discount && discountDuration &&
                                        <ProductSaleCountdown date={discountDuration}/>}
                                    </div>
                                </div>

                                {variations && (
                                    <div className="tt-swatches-container">
                                        <div className="tt-wrapper">
                                            <div className="tt-title-options">COLOR:</div>
                                            <ProductColor
                                                product={product}
                                                productColor={productColor}
                                                className="options-large mt-1"
                                                productColorHandler={productColorHandler}
                                            />
                                        </div>

                                        <div className="tt-wrapper">
                                            <div className="tt-title-options">SIZE:</div>
                                            <ProductSize
                                                className="options-large mt-1"
                                                product={product}
                                                productColor={productColor}
                                                productSize={productSize}
                                                productSizeHandler={productSizeHandler}
                                            />
                                        </div>

                                        <div className="tt-wrapper mt-3">
                                            <div className="tt-title-options">MATERIAL:</div>
                                            <ProductMaterial
                                                className="options-large mt-1"
                                                product={product}
                                                productColor={productColor}
                                                productMaterial={productMaterial}
                                                productMaterialHandler={productMaterialHandler}
                                            />
                                        </div>
                                    </div>
                                )}
                                <div className="tt-wrapper">
                                    <div className="tt-row-custom-01">
                                        <div className="col-item">
                                            <div className="tt-input-counter style-01">
                                                <span
                                                    className="minus-btn"
                                                    onClick={productQuantityDecrement}
                                                />
                                                <input
                                                    type="text"
                                                    value={productQuantity}
                                                    size={productStock}
                                                    readOnly
                                                />
                                                <span
                                                    className="plus-btn"
                                                    onClick={productQuantityIncrement}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-item">
                                            <button
                                                className={`btn btn-lg ${productStock === cartProductQuantity ? 'disable' : ''}`}
                                                onClick={addToCartHandler}
                                            >
                                                {productStock === cartProductQuantity ? "SOLD OUT" : (
                                                    <><i className="icon-f-39"/> ADD TO CART</>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="tt-wrapper">
                                    <ul className="tt-list-btn">
                                        <li>
                                            <a className="btn-link"
                                               href="/"
                                               onClick={(event) => wishlistHandler(event)}
                                            >
                                                <i className="icon-n-072"/>{!isInWishlist ? 'ADD TO WISHLIST' : 'REMOVE FROM WISHLIST'}
                                            </a>
                                        </li>
                                        <li>
                                            <a className="btn-link"
                                               href="/"
                                               onClick={(event) => compareHandler(event)}
                                            >
                                                <i className="icon-n-08"/> {!isInCompareList ? 'ADD TO COMPARE' : 'REMOVE FROM COMPARE'}
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="tt-wrapper">
                                    <div className="tt-promo-brand">
                                        <img
                                            src="/assets/images/no-placeholder/tt-promo-brand-desktop.png"
                                            className="visible-lg visible-md visible-sm visible-xl"
                                            alt="Payment Method"
                                        />
                                        <img
                                            src="/assets/images/no-placeholder/tt-promo-brand-mobile.png"
                                            className="visible-xs"
                                            alt="Payment Method"
                                        />
                                    </div>
                                </div>

                                <div className="tt-collapse-block mt-3">
                                    <Accordion>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                                DESCRIPTION
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>{description}</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>

                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                                ADDITIONAL INFORMATION
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body>
                                                    <table className="tt-table-03">
                                                        <tbody>
                                                        <tr>
                                                            {variations && (
                                                                <>
                                                                    <td>Colors:</td>
                                                                    <td>
                                                                        {variations && variations.map((variation, i) => (
                                                                            <span key={variation.title}>
                                                                                {toCapitalize(variation.color.name)}{variations.length !== i + 1 && ', '}
                                                                            </span>
                                                                        ))}
                                                                    </td>
                                                                </>
                                                            )}
                                                        </tr>
                                                        <tr>
                                                            {variations && (
                                                                <>
                                                                    <td>Sizes:</td>
                                                                    <td>
                                                                        {sizes.map((size, i) => (
                                                                            <span key={i}>
                                                                              {size.toUpperCase()}{sizes.length !== i + 1 && ', '}
                                                                            </span>
                                                                        ))}
                                                                    </td>
                                                                </>
                                                            )}
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
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
};

ProductDetails.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductDetails;