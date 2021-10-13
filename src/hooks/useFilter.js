import {useState, useEffect} from "react";
import {getProductColors, getProductUniquePrices, getProductUniqueSizes} from "@utils/product";

const useFilter = (products) => {
    const [allProducts, setAllProducts] = useState(products);
    const [filterPanelShow, setFilterPanelShow] = useState(false);
    const getFilterParam = (type, param) => {
        if (type === 'size') {
            const filteredProducts = products.map(product => ({
                ...product,
                sizes: getProductUniqueSizes(product)
            })).filter(item => item.sizes.find(size => size === param))

            setAllProducts(filteredProducts);
        }

        if (type === 'price') {
            const priceRange = param.replace(' - ', ',').split(',');
            const filteredProducts = products.map(product => ({
                ...product,
                prices: getProductUniquePrices(product)
            })).map(item => ({
                ...item,
                prices: item.prices.filter(price => price >= parseInt(priceRange[0], 10) && price <= parseInt(priceRange[1], 10))
            })).filter(el => el.prices.length > 0);

            setAllProducts(filteredProducts);
        }

        if (type === 'category') {
            const filteredProducts = products.filter(product => product.categories.find(cat => cat === param));

            setAllProducts(filteredProducts);
        }

        if (type === 'color') {
            const filteredProducts = products.map(product => {
                const colors =  getProductColors(product);
                return {
                    ...product,
                    colors: colors && colors.map(color => color.name)
                }
            }).filter(item => item.colors && item.colors.find(color => color === param));

            setAllProducts(filteredProducts);
        }

        if (type === 'vendor') {
            const filteredProducts = products.filter(product => product.vendor === param);

            setAllProducts(filteredProducts);
        }

        if (type === 'tag') {
            const filteredProducts = products.filter(product => product.tags.find(tag => tag === param));

            setAllProducts(filteredProducts);
        }
    }

    const filterPanelHandler = () => {
        setFilterPanelShow(prevState => !prevState);
    }

    useEffect(() => {
        setAllProducts(products);
    }, [products])

    return {allProducts, filterPanelShow, filterPanelHandler, getFilterParam}
};

export default useFilter;