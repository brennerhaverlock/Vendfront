import Link from "next/link";
import {useContext} from "react";
import PropTypes from "prop-types";
import {CURRENCY} from "@utils/constant";
import {CartContext} from "@global/CartContext";
import {Col, Modal, ModalBody, Row} from "react-bootstrap";
import {getCartTotalPrice, getCartProductTotalPrice} from "@utils/product";

const CartNotification = ({product, modalShow, modalOnHide}) => {
    const {shoppingCart} = useContext(CartContext);
    const {color, name, thumbs, variations, quantity} = product;

    return (
        <Modal show={modalShow} onHide={modalOnHide} id="modalAddToCartProduct">
            <button type="button" className="close" onClick={modalOnHide}>
                <span className="icon icon-clear"/>
            </button>

            <ModalBody>
                <div className="tt-modal-addtocart mobile">
                    <div className="tt-modal-messages">
                        <i className="icon-f-68"/> Added to cart successfully!
                    </div>
                    <Link href="/"><a className="btn-link btn-close-popup">CONTINUE SHOPPING</a></Link>
                    <Link href="/cart"><a className="btn-link">VIEW CART</a></Link>
                    <Link href="/checkout"><a className="btn-link">PROCEED TO CHECKOUT</a></Link>
                </div>

                <div className="tt-modal-addtocart desktop">
                    <Row>
                        <Col lg={6}>
                            <div className="tt-modal-messages">
                                <i className="icon-f-68"/> Added to cart successfully!
                            </div>
                            <div className="tt-modal-product">
                                <div className="tt-img">
                                    {variations ? (
                                        variations.map((variation, i) => (
                                            variation.color.name === color && (
                                                <img
                                                    key={i}
                                                    src={variation.color.thumb}
                                                    alt={name}
                                                />
                                            )
                                        ))
                                    ) : (
                                        <img
                                            src={thumbs[0]}
                                            alt={name}
                                        />
                                    )}
                                </div>
                                <h2 className="tt-title">
                                    <Link href="/">{name}</Link>
                                </h2>
                                <div className="tt-qty">
                                    QTY: <span>{quantity}</span>
                                </div>
                            </div>
                            <div className="tt-product-total">
                                <div className="tt-total">
                                    TOTAL:
                                    <span className="tt-price ml-1">
                                        {CURRENCY + getCartProductTotalPrice(shoppingCart, product).toFixed(2)}
                                    </span>
                                </div>
                            </div>
                        </Col>

                        <Col lg={6}>
                            <Link href="/">
                                <a className="tt-cart-total">
                                    There are {shoppingCart && shoppingCart.length} items in your cart
                                    <div className="tt-total">
                                        TOTAL: <span
                                        className="tt-price">{CURRENCY + getCartTotalPrice(shoppingCart).toFixed(2)}</span>
                                    </div>
                                </a>
                            </Link>

                            <Link href="/shop">
                                <a className="btn btn-border btn-close-popup">CONTINUE SHOPPING</a>
                            </Link>
                            <Link href="/cart"><a className="btn btn-border">VIEW CART</a></Link>
                            <Link href="/checkout"><a className="btn">PROCEED TO CHECKOUT</a></Link>
                        </Col>
                    </Row>
                </div>
            </ModalBody>
        </Modal>
    );
};

CartNotification.propTypes = {
    product: PropTypes.object.isRequired,
    modalShow: PropTypes.bool.isRequired,
    modalOnHide: PropTypes.func.isRequired
}

export default CartNotification;