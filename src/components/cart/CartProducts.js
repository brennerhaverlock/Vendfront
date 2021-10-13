import Link from "next/link";
import {useContext} from "react";
import CartItem from "./CartItem";
import {CartContext} from "@global/CartContext";

const CartProducts = () => {

    const {shoppingCart, clearCart} = useContext(CartContext);

    return (
        <div className="tt-shopcart-table">
            <table>
                <tbody>
                {shoppingCart.length > 0 && shoppingCart.map(product => (
                    <CartItem key={product.cartId} product={product}/>
                ))}
                </tbody>
            </table>
            <div className="tt-shopcart-btn">
                <div className="col-left">
                    <Link href="/shop"><a className="btn-link"><i className="icon-e-19"/>CONTINUE SHOPPING</a></Link>
                </div>
                <div className="col-right">
                    <a className="btn-link" href="/"
                       onClick={(event => {
                           event.preventDefault();
                           clearCart();
                       })}
                    >
                        <i className="icon-h-02"/>CLEAR SHOPPING CART
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CartProducts;