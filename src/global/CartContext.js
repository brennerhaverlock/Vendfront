import lscache from "lscache";
import {PREFIX} from "@utils/constant";
import {CartReducer} from "@global/CartReducer";
import {createContext, useEffect, useReducer} from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, dispatch] = useReducer(CartReducer, [], () => {
        const localState = lscache.get(PREFIX + "-cart");
        return localState ? localState : [];
    });

    const addToCart = payload => {
        dispatch({type: "ADD_TO_CART", payload});
    }

    const increment = payload => {
        dispatch({type: "INCREMENT", payload});
    }

    const decrement = payload => {
        dispatch({type: "DECREMENT", payload});
    }

    const removeProduct = payload => {
        dispatch({type: "REMOVE_PRODUCT", payload});
    }

    const clearCart = () => {
        dispatch({type: 'CLEAR'})
    }

    const contextValues = {
        addToCart,
        removeProduct,
        increment,
        decrement,
        clearCart,
        shoppingCart: cart
    }

    useEffect(() => {
        lscache.set(PREFIX + "-cart", cart);
    }, [cart]);

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;