export const CompareReducer = (state, action) => {
    const compareList = state;
    const product = action.payload;

    switch (action.type) {
        case "ADD_TO_COMPARE":
            const productInCompareList = compareList.find(item => item.id === product.id);
            if (productInCompareList) {
                return state;
            } else {
                return [product, ...compareList];
            }

        case "REMOVE_FROM_COMPARE":
            return compareList.filter(item => item.id !== product.id);

        default:
            return state;
    }
}