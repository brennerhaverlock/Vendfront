import lscache from "lscache";
import {PREFIX} from "@utils/constant";
import {WishlistReducer} from "@global/WishlistReducer";
import {createContext, useEffect, useReducer} from "react";

export const WishlistContext = createContext();

const WishlistContextProvider = ({children}) => {
    const [wishlist, dispatch] = useReducer(WishlistReducer, [], () => {
        const localState = lscache.get(PREFIX + "-wishlist");
        return localState ? localState : [];
    });

    const addToWishlist = payload => {
        dispatch({
            type: "ADD_TO_WISHLIST",
            payload
        })
    }

    const removeFromWishlist = payload => {
        dispatch({
            type: "REMOVE_FROM_WISHLIST",
            payload
        })
    }

    const contextValue = {
        wishlist,
        addToWishlist,
        removeFromWishlist
    }

    useEffect(() => {
        lscache.set(PREFIX + "-wishlist", wishlist);
    }, [wishlist]);

    return (
        <WishlistContext.Provider value={contextValue}>
            {children}
        </WishlistContext.Provider>
    );
};

export default WishlistContextProvider;
