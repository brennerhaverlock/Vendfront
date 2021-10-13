 import {useContext} from "react";
import cogoToast from "cogo-toast";
import propType from "prop-types";
import {CartContext} from "@global/CartContext";

const Quantity = ({product}) => {
    const {variations, color, size, quantity} = product;
    const stock = variations ? variations.filter(variation => variation.color.name === color)[0].sizes.filter(item => item.name === size)[0].stock : product.stock;
    const {increment, decrement} = useContext(CartContext);

    return (
        <div className="tt-input-counter style-01">
            <span
                className="minus-btn"
                style={{pointerEvents: quantity === 1 ? "none" : "visible"}}
                onClick={() => {
                    decrement({
                        cartId: product.cartId
                    })
                    cogoToast.warn('Product Quantity Decrement Successfully!', {
                        position: 'bottom-right',
                        hideAfter: 1
                    })
                }}
            />
            <input
                type="text"
                value={quantity}
                size={stock}
                readOnly
            />
            <span
                className="plus-btn"
                style={{pointerEvents: quantity === stock ? "none" : "visible"}}
                onClick={() => {
                    increment({
                        cartId: product.cartId
                    })
                    cogoToast.success('Product Quantity Increment Successfully!', {
                        position: 'bottom-right',
                        hideAfter: 1
                    })
                }}
            />
        </div>
    );
};

Quantity.propTypes = {
    product: propType.object.isRequired
}

export default Quantity;