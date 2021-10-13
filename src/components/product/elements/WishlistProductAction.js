import {useContext, useEffect, useState} from "react";
import PropTypes from 'prop-types';
import cogoToast from "cogo-toast";
import Tooltip from "@components/ui/tooltip";
import {WishlistContext} from "@global/WishlistContext";

const WishlistProductAction = ({product}) => {
    const [windowSize, setWindowSize] = useState(0);
    const {removeFromWishlist} = useContext(WishlistContext);

    useEffect(() => {
        setWindowSize(window.innerWidth);
    }, [windowSize]);

    return (
        <Tooltip
            content="Remove From Wishlist"
            position={windowSize <= 1024 ? 'top' : 'left'}
            className="tt-btn-rmv-wishlist active"
        >
            <span onClick={() => {
                removeFromWishlist(product);
                cogoToast.warn(`"${product.name}" is Remove From Wishlist.`, {
                    position: "bottom-right",
                    heading: "Remove From Wishlist!",
                    hideAfter: 2
                })
            }}/>
        </Tooltip>
    );
};

WishlistProductAction.propTypes = {
    product: PropTypes.object.isRequired
};

export default WishlistProductAction;