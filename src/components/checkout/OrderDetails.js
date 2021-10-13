import Link from "next/link";
import React, { useContext } from "react";
import { CartContext } from "@global/CartContext";
import { getCartProductTotalPrice, getCartTotalPrice } from "@utils/product";
import { CURRENCY } from "@utils/constant";

const OrderDetails = () => {
  const { shoppingCart } = useContext(CartContext);

  return (
    <div className="order-details-area-wrap checkout-item">
      <h4>Your Order</h4>
      <div className="order-details-table table-responsive">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th>Products</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {shoppingCart?.map((product) => (
              <tr className="cart-item">
                <td>
                  <span className="product-title">{product?.name}</span>
                  <span className="product-quantity">
                    × {product?.quantity}
                  </span>
                </td>
                <td>
                  {CURRENCY +
                    getCartProductTotalPrice(shoppingCart, product).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="cart-subtotal">
              <th>Subtotal</th>
              <td>{CURRENCY + getCartTotalPrice(shoppingCart)}</td>
            </tr>
            <tr className="shipping">
              <th>Shipping</th>
              <td>
                <ul className="shipping-method">
                  <li>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="flat_shipping"
                        name="shipping_method"
                        className="form-check-input"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flat_shipping"
                      >
                        Flat Rate : $10
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="free_shipping"
                        name="shipping_method"
                        className="form-check-input"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="free_shipping"
                      >
                        Free Shipping
                      </label>
                    </div>
                  </li>
                  <li>
                    <div className="form-check">
                      <input
                        type="radio"
                        id="cod_shipping"
                        name="shipping_method"
                        className="form-check-input"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="cod_shipping"
                      >
                        Cash on Delivery
                      </label>
                    </div>
                  </li>
                </ul>
              </td>
            </tr>
            <tr className="final-total">
              <th>Total</th>
              <td>
                <span className="total-amount">
                  {CURRENCY + getCartTotalPrice(shoppingCart)}
                </span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="order-details-footer">
        <p>
          Your personal data will be used to process your order in our
          <Link href="/">
            <a className="text-danger"> privacy policy.</a>
          </Link>
        </p>
        <div className="form-check mt-2">
          <input
            type="checkbox"
            id="privacy"
            className="form-check-input"
            required
          />
          <label htmlFor="privacy" className="form-check-label">
            I have read and agree to the website terms and conditions
          </label>
        </div>
        <button className="btn btn-full btn-black mt-3 mt-md-4">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
