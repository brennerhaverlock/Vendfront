import PropTypes from "prop-types";
import {useContext} from "react";
import Slider from 'react-slick';
import Tooltip from "@components/ui/tooltip";
import {useProduct} from "@hooks";
import {CURRENCY} from "@utils/constant";
import {CartContext} from "@global/CartContext";
import {toCapitalize} from "@utils/toCapitalize";
import {getCartProductQuantity} from "@utils/product";
import {Col, Modal, ModalBody, Row} from "react-bootstrap";
import ProductRatings from "@components/product/elements/ProductRatings";

const QuickView = ({product, modalShow, modalOnHide}) => {
    const {
        productSize,
        productPrice,
        productColor,
        productStock,
        productMaterial,
        productQuantity,
        setProductQuantity,
        productSizeHandler,
        productColorHandler,
        productMaterialHandler,
        productQuantityIncrement,
        productQuantityDecrement
    } = useProduct(product);

    const {sku, name, previewImages, ratings, excerpt, variations} = product;
    const {shoppingCart, addToCart} = useContext(CartContext);
    const cartProductQuantity = getCartProductQuantity(shoppingCart, product, productColor, productSize);

    const sliderSettings = {
        infinite: false
    }

    return (
        <Modal show={modalShow} onHide={modalOnHide} size="lg">
            <button type="button" className="close" onClick={modalOnHide}>
                <span className="icon icon-clear"/>
            </button>

            <ModalBody className="tt-modal-quickview-wrapper">
                <div className="tt-modal-quickview desktop">
                    <Row>
                        <Col md={5} lg={6}>
                            <Slider {...sliderSettings} className="tt-mobile-product-slider arrow-location-center">
                                {previewImages.map((image, i) => (
                                    <div className="slide-item" key={i}>
                                        <img src={image} width="100%" alt={name}/>
                                    </div>
                                ))}
                            </Slider>
                        </Col>

                        <Col md={7} lg={6}>
                            <div className="tt-product-single-info">
                                <div className="tt-add-info">
                                    <ul>
                                        <li><span>SKU:</span> {sku}</li>
                                        <li>
                                            <span>
                                                Availability: {productStock === cartProductQuantity ? 'Out of Stock' : `${productStock - cartProductQuantity} in Stock`}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <h2 className="tt-title">{name}</h2>
                                <div className="tt-price">
                                    <span className="new-price">{CURRENCY + productPrice.toFixed(2)}</span>
                                    <span className="old-price"/>
                                </div>

                                <div className="tt-review">
                                    <ProductRatings ratings={ratings}/>
                                </div>

                                <div className="tt-wrapper">
                                    {excerpt}
                                </div>
                                {variations &&(
                                    <form className="form-default">
                                        <div className="tt-swatches-container">
                                            <div className="tt-wrapper">
                                                <div className="tt-title-options">COLOR</div>
                                                <div className="form-group">
                                                    <select
                                                        className="form-control"
                                                        defaultValue={productColor}
                                                        onChange={(event => productColorHandler(event))}
                                                    >
                                                        {variations.map((variation, i) => (
                                                            <option
                                                                key={i}
                                                                value={variation?.color?.name}
                                                            >
                                                                {toCapitalize(variation?.color?.name)}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="tt-wrapper">
                                                <div className="tt-title-options">SIZE</div>
                                                <div className="form-group">
                                                    <select
                                                        className="form-control"
                                                        defaultValue={productSize}
                                                        onChange={(event => productSizeHandler(event))}
                                                    >
                                                        {variations.map(variation => (
                                                            variation?.color?.name === productColor && (
                                                                variation.sizes.map((size, i) => (
                                                                    <option
                                                                        key={i}
                                                                        value={size.name}
                                                                    >
                                                                        {size.name.toUpperCase()}
                                                                    </option>
                                                                ))
                                                            )
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="tt-wrapper">
                                                <div className="tt-title-options">
                                                    MATERIALS:
                                                    <span className="current_option_name">
                                                        {toCapitalize(productMaterial)}
                                                    </span>
                                                </div>
                                                <ul className="tt-options-swatch options-large mt-1">
                                                    {variations.map(variation => (
                                                        variation?.color?.name === productColor && (
                                                            variation?.materials.map((material, i) => (
                                                                <Tooltip content={material?.name} key={i}>
                                                                    <li className={material?.slug === productMaterial ? 'active' : null}>
                                                                        <a
                                                                            className="options-color" href="/"
                                                                            data-materialname={material?.slug}
                                                                            onClick={(event => productMaterialHandler(event))}
                                                                        >
                                                                            <span className="swatch-img">
                                                                                <img
                                                                                    src={material?.thumb}
                                                                                    alt={material?.name}
                                                                                />
                                                                            </span>
                                                                            <span className="swatch-label color-black"/>
                                                                        </a>
                                                                    </li>
                                                                </Tooltip>
                                                            ))
                                                        )
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </form>
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
                                                onClick={() => {
                                                    addToCart({
                                                        ...product,
                                                        price: productPrice,
                                                        color: productColor,
                                                        size: productSize,
                                                        material: productMaterial,
                                                        quantity: productQuantity
                                                    });
                                                    setProductQuantity(1);
                                                }}
                                            >
                                                {productStock === cartProductQuantity ? "SOLD OUT" : (
                                                    <><i className="icon-f-39"/> ADD TO CART</>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </ModalBody>
        </Modal>
    );
};

QuickView.propTypes = {
    product: PropTypes.object.isRequired,
    modalOnHide: PropTypes.func.isRequired
}

export default QuickView;