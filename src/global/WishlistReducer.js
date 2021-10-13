export const WishlistReducer = (state, action) => {
    const wishlist = state;
    const product = action.payload;

    switch (action.type) {
        case "ADD_TO_WISHLIST":
            const productInWishlist = wishlist.find(item => item.id === product.id);
            if (productInWishlist) {
                return state;
            } else {
                return [product, ...wishlist];
            }

        case "REMOVE_FROM_WISHLIST":
            return wishlist.filter(item => item.id !== product.id);

        default:
            return state;
    }
}