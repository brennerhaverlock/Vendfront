import {v4 as uuid} from "uuid";

export const CartReducer = (state, action) => {
    const shoppingCart = state;
    const product = action.payload;

    switch (action.type) {
        case "ADD_TO_CART":
            const productInCart = shoppingCart.find(item => item.id === product.id && item.color === product.color && item.size === product.size && item.material === product.material);

            if (productInCart) {
                const cartProductIndex = shoppingCart.findIndex(item => item.id === product.id);
                shoppingCart[cartProductIndex].quantity = shoppingCart[cartProductIndex].quantity + product.quantity;
                return [...shoppingCart];
            } else {
                product['cartId'] = uuid();
                return [product, ...shoppingCart];
            }

        case "REMOVE_PRODUCT":
            return shoppingCart.filter(item => item.cartId !== product.cartId);

        case "INCREMENT":
            const incrementProduct = shoppingCart.find(item => item.cartId === product.cartId);

            if (incrementProduct) {
                const incrementProductIndex = shoppingCart.findIndex(item => item.cartId === product.cartId);
                shoppingCart[incrementProductIndex].quantity += 1;

                return [...shoppingCart];
            } else {
                return state;
            }

        case "DECREMENT":
            const decrementProduct = shoppingCart.find(item => item.cartId === product.cartId);

            if (decrementProduct) {
                const decrementProductIndex = shoppingCart.findIndex(item => item.cartId === product.cartId);
                shoppingCart[decrementProductIndex].quantity -= 1;

                return [...shoppingCart];
            } else {
                return state;
            }

        case "CLEAR":
            return [];

        default:
            return state;
    }
}