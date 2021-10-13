import Link from "next/link";
import { useContext } from "react";
import { CURRENCY } from "@utils/constant";
import { CartContext } from "@global/CartContext";
import { getCartTotalPrice } from "@utils/product";

const CalculateShipping = () => {
  const { shoppingCart } = useContext(CartContext);
  const subTotalPrice = getCartTotalPrice(shoppingCart);

  return (
    <div className="tt-shopcart-wrapper">
      <div className="tt-shopcart-box">
        <h4 className="tt-title">ESTIMATE SHIPPING AND TAX</h4>
        <p>Enter your destination to get a shipping estimate.</p>
        <form className="form-default">
          <div className="form-group">
            <label htmlFor="address_country">
              COUNTRY <sup>*</sup>
            </label>
            <select id="address_country" className="form-control">
              <option>Austria</option>
              <option>Belgium</option>
              <option>Cyprus</option>
              <option>Croatia</option>
              <option>Czech Republic</option>
              <option>Denmark</option>
              <option>Finland</option>
              <option>France</option>
              <option>Germany</option>
              <option>Greece</option>
              <option>Hungary</option>
              <option>Ireland</option>
              <option>France</option>
              <option>Italy</option>
              <option>Luxembourg</option>
              <option>Netherlands</option>
              <option>Poland</option>
              <option>Portugal</option>
              <option>Slovakia</option>
              <option>Slovenia</option>
              <option>Spain</option>
              <option>United Kingdom</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="address_province">
              STATE/PROVINCE <sup>*</sup>
            </label>
            <select id="address_province" className="form-control">
              <option>State/Province</option>
              <option>Dhaka</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="address_zip">
              ZIP/POSTAL CODE <sup>*</sup>
            </label>
            <input
              type="text"
              id="address_zip"
              name="name"
              className="form-control"
              placeholder="Zip/Postal Code"
            />
          </div>
          <Link href="/shop">
            <a className="btn btn-border">CALCULATE SHIPPING</a>
          </Link>
          <p>
            There is one shipping rate available for Alabama, Tanzania, United
            Republic Of.
          </p>
          <ul className="tt-list-dot list-dot-large">
            <li>International Shipping at $20.00</li>
          </ul>
        </form>
      </div>

      <div className="tt-shopcart-box">
        <h4 className="tt-title">NOTE</h4>
        <p>Add special instructions for your order...</p>
        <form className="form-default">
          <textarea className="form-control" rows="5" />
        </form>
      </div>

      <div className="tt-shopcart-box tt-boredr-large">
        <table className="tt-shopcart-table01">
          <tbody>
            <tr>
              <th>SUBTOTAL</th>
              <td>{CURRENCY + subTotalPrice.toFixed(2)}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>GRAND TOTAL</th>
              <td>{CURRENCY + subTotalPrice.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
        <Link href="/checkout">
          <a className="btn btn-lg">
            <span className="icon icon-check_circle" />
            PROCEED TO CHECKOUT
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CalculateShipping;
