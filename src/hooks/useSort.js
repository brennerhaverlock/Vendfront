import {getDiscountPrice} from "@utils/product";
import {useEffect, useState, useCallback} from "react";

const useSort = (products) => {
    const [sortType, setSortType] = useState('default');
    const [sortProducts, setSortProducts] = useState([]);

    const onSortHandler = (type) => {
        setSortType(type);
        getSortedProducts(type);
    }

    const getSortedProducts = useCallback((type) => {
        const copyProducts = [...products];
        const sortByPrice = (products, type) => {
            const getPrice = (item) => {
                return item.variations ? item.discount ? getDiscountPrice(item.variations[0].materials[0].price, item.discount) : item.variations[0].materials[0].price : item.discount ? getDiscountPrice(item.price, item.discount) : item.price;
            }

            return products.sort((a, b) => {
                return type === 'priceHigh2Low' ? (getPrice(b) - getPrice(a)) : (getPrice(a) - getPrice(b));
            })
        }

        const sortByName = (products, type) => {
            return products.sort((a, b) => {
                const nameA = a.name.toLowerCase();
                const nameB = b.name.toLowerCase();
                if (nameA < nameB) {
                    return type === 'nameA2Z' ? -1 : 1;
                } else if (nameA > nameB) {
                    return type === 'nameA2Z' ? 1 : -1;
                }
                return 0;
            });
        }

        if (type === 'default') {
            setSortProducts(copyProducts);
        } else if (type === 'priceHigh2Low' || type === 'priceLow2High') {
            const priceSort = sortByPrice(copyProducts, type)
            setSortProducts(priceSort);
        } else if (type === 'nameA2Z' || type === 'nameZ2A') {
            const nameSort = sortByName(copyProducts, type);
            setSortProducts(nameSort);
        }
    }, [products]);

    useEffect(() => {
        getSortedProducts(sortType);
    }, [sortType, products]);

    return {sortProducts, onSortHandler}
};

export default useSort;