import Link from "next/link";
import {Fragment} from "react";
import {useProduct} from "@hooks";
import {CURRENCY} from "@utils/constant";

const ProductTwo = ({product}) => {

    const {discount, name, thumbs, variations, vendor} = product;
    const {discountedPrice, productPrice, slug} = useProduct(product);

    return (
        <div className="tt-item">
            <div className="tt-layout-vertical">
                <div className="tt-img">
                    <Link href={slug}>
                        <a>
                            <figure className="tt-img-default">
                                <img src={thumbs[0]} alt={name}/>
                            </figure>
                            <figure className="tt-img-roll-over">
                                <img src={thumbs[1]} alt={name}/>
                            </figure>
                        </a>
                    </Link>
                </div>

                <div className="tt-description">
                    <ul className="tt-add-info">
                        <li><Link href={slug}>{vendor}</Link></li>
                    </ul>
                    <h6 className="tt-title"><Link href={slug}>{name}</Link></h6>
                    <div className="tt-price mt-1">
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
                    <div className="tt-option-block">
                        <ul className="tt-options-swatch">
                            {variations && (
                                variations.map((variation, idx) => (
                                    <li key={idx}>
                                        <a
                                            href="/"
                                            className="options-color"
                                            style={{backgroundColor: variation.color.code}}
                                            onClick={(event => event.preventDefault())}
                                        />
                                    </li>
                                ))
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductTwo;