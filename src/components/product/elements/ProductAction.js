import PropTypes from 'prop-types';
import {useProduct} from "@hooks";
import Tooltip from "@components/ui/tooltip";
import {getWishCompareProduct} from "@utils/product";
import {CompareContext} from "@global/CompareContext";
import {WishlistContext} from "@global/WishlistContext";
import {Fragment, useContext, useEffect, useState} from "react";

const ProductAction = ({product, modalQuickViewHandler}) => {
    const [windowSize, setWindowSize] = useState(0);

    const {wishlist} = useContext(WishlistContext);
    const {compareList} = useContext(CompareContext);
    const isInWishlist = getWishCompareProduct(wishlist, product);
    const isInCompare = getWishCompareProduct(compareList, product);
    const {compareHandler, wishlistHandler} = useProduct(product);

    useEffect(() => {
        setWindowSize(window.innerWidth);
    }, [windowSize]);

    return (
        <Fragment>
            <Tooltip
                content="Quick View"
                position={windowSize <= 1024 ? 'top' : 'left'}
                className="tt-btn-quickview"
            >
                <span onClick={modalQuickViewHandler}/>
            </Tooltip>

            <Tooltip
                content={!isInCompare ? 'Add to Compare' : 'Remove From Compare'}
                position={windowSize <= 1024 ? 'top' : 'left'}
                className={`tt-btn-compare ${isInCompare ? 'active' : ''}`}
            >
                <span onClick={(event => compareHandler(event))}/>
            </Tooltip>

            <Tooltip
                content={!isInWishlist ? 'Add to Wishlist' : 'Remove From Wishlist'}
                position={windowSize <= 1024 ? 'top' : 'left'}
                className={`tt-btn-wishlist ${isInWishlist ? 'active' : ''}`}
            >
                <span onClick={(event => wishlistHandler(event))}/>
            </Tooltip>
        </Fragment>
    );
};

ProductAction.propTypes = {
    product: PropTypes.object.isRequired,
    modalQuickViewHandler: PropTypes.func.isRequired
};

export default ProductAction;