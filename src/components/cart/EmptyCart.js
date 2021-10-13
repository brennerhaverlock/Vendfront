import Link from "next/link";

const EmptyCart = () => {
    return (
        <div className="container-indent nomargin">
            <div className="tt-empty-cart">
                <span className="tt-icon icon-f-39"/>
                <h1 className="tt-title">SHOPPING CART IS EMPTY</h1>
                <p>You have no items in your shopping cart.</p>
                <Link href="/shop"><a className="btn">CONTINUE SHOPPING</a></Link>
            </div>
        </div>
    );
};

export default EmptyCart;