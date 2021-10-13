import {createContext} from "react"
import products from "@data/products";

export const ProductsContext = createContext([]);

const ProductsContextProvider = ({children}) => {

    return (
        <ProductsContext.Provider value={{products: [...products]}}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;