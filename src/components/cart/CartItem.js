import Link from "next/link";
import {useContext} from "react";
import propType from "prop-types";
import Quantity from "./Quantity";
import {CURRENCY} from "@utils/constant";
import {CartContext} from "@global/CartContext";
import {toCapitalize} from "@utils/toCapitalize";

const CartItem = ({product, className}) => {
    const {color, thumbs, material, name, price, size, variations, quantity} = product;
    const slug = `/product/${name.toLowerCase().split(' ').join('-')}`;
    const {removeProduct} = useContext(CartContext);

    return (
        <tr className={className}>
            <td>
                <span
                    className="tt-btn-close"
                    style={{cursor: 'pointer'}}
                    onClick={() => removeProduct({
                        cartId: product.cartId
                    })}
                />
            </td>
            <td>
                <div className="tt-product-img">
                    {variations ? (
                        variations.map((variation, i) => (
                            variation.color.name === color && (
                                <Link href={slug} key={i}>
                                    <a>
                                        <img
                                            src={variation.color.thumb}
                                            alt={product.name}
                                        />
                                    </a>
                                </Link>
                            )
                        ))
                    ) : (
                        <Link href={slug}>
                            <a>
                                <img
                                    src={thumbs[0]}
                                    alt={name}
                                />
                            </a>
                        </Link>
                    )}
                </div>
            </td>
            <td>
                <h2 className="tt-title">
                    <Link href={slug}>{name}</Link>
                    {variations && (
                        <ul className="tt-add-info">
                            <li>
                                {`
                                ${toCapitalize(color)},
                                ${size.toUpperCase()},
                                ${toCapitalize(material)}
                            `}
                            </li>
                        </ul>
                    )}
                </h2>
                <ul className="tt-list-parameters">
                    <li>
                        <div className="tt-price">
                            {CURRENCY + price.toFixed(2)}
                        </div>
                    </li>
                    <li>
                        <div className="detach-quantity-mobile">
                            <Quantity product={product}/>
                        </div>
                    </li>
                    <li>
                        <div className="tt-price subtotal">
                            {CURRENCY + (price * quantity).toFixed(2)}
                        </div>
                    </li>
                </ul>
            </td>
            <td>
                <div className="tt-price">
                    {CURRENCY + price.toFixed(2)}
                </div>
            </td>
            <td>
                <div className="detach-quantity-desktop">
                    <Quantity product={product}/>
                </div>
            </td>
            <td>
                <div className="tt-price subtotal">
                    {CURRENCY + (price * quantity).toFixed(2)}
                </div>
            </td>
        </tr>
    );
};

CartItem.propTypes = {
    product: propType.object.isRequired
}

export default CartItem;