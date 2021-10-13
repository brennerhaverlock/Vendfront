import {flatDeep} from "@utils/method";

/***
 *  Get Quantity of Product from Cart
 * @param shoppingCart
 * @param product
 * @param color
 * @param size
 * @returns {number|*}
 */
export const getCartProductQuantity = (shoppingCart, product, color, size) => {
    const cartProduct = shoppingCart.filter(item => item.id === product.id && (item.color === color) && (item.size === size));
    if (cartProduct.length > 0 && shoppingCart.length > 0) {
        return shoppingCart.filter(item => item.id === product.id)[0].quantity;
    } else {
        return 0
    }
}

/***
 * Get Total Quantity of Products from Cart
 * @param shoppingCart
 * @returns {number}
 */
export const getCartTotalQuantity = (shoppingCart) => {
    return shoppingCart.reduce((total, product) => total + product.quantity, 0);
}

/***
 * Get Total Price of Product from Cart
 * @param shoppingCart
 * @param product
 * @returns {number}
 */
export const getCartProductTotalPrice = (shoppingCart, product) => {
    const cartProduct = shoppingCart.filter(item => item.id === product.id && (item.color === product.color) && (item.size === product.size));
    if (cartProduct.length > 0 && shoppingCart.length > 0) {
        return cartProduct[0].quantity * cartProduct[0].price;
    } else {
        return 0
    }
}

/***
 * Get Total Price of Products From Cart
 * @param shoppingCart
 * @returns {number}
 */
export const getCartTotalPrice = (shoppingCart) => {
    return shoppingCart.reduce((total, product) => total + product.price * product.quantity, 0);
}

/***
 * Get Discount Price of Product
 * @param price
 * @param discount
 * @returns {number|*}
 */
export const getDiscountPrice = (price, discount) => {
    return discount && discount > 0 ? price - price * (discount / 100) : price;
};

/***
 * Get Product From Cart
 * @param shoppingCart
 * @param product
 * @param color
 * @param size
 * @param material
 * @returns {*}
 */
export const getCartProduct = (shoppingCart, product, color, size, material) => {
    return shoppingCart.find(item => (item.id === product.id) && (item.color === color) && (item.size === size) && (item.material === material));
}

/***
 * Get Product from Compare & Wishlist
 * @param products
 * @param product
 * @returns {*}
 */
export const getWishCompareProduct = (products, product) => {
    return products.find(item => item.id === product.id);
}

/***
 * Get Type Wise Products
 * @param products
 * @param type
 * @param limit
 * @returns {*}
 */
export const getProducts = (products, type, limit) => {
    const nonFilteredProducts = [...products];
    if (type === "featured" || type === "tending" || type === "specials") {
        const filteredProducts = products.map(product => {
            return {
                ...product,
                type: product.type.filter(item => item === type)
            }
        }).filter(el => el.type.length);

        return filteredProducts.slice(0, limit < 0 ? filteredProducts.length : limit ? limit : filteredProducts.length);

    } else if (type === "top-rated") {
        const filteredProducts = nonFilteredProducts.sort((a, b) => b.ratings - a.ratings);

        return filteredProducts.slice(0, limit < 0 ? filteredProducts.length : limit ? limit : filteredProducts.length);

    } else if (type === "best-seller" || type === "best_seller" || type === "popular") {
        const filteredProducts = nonFilteredProducts.sort((a, b) => b.totalSale - a.totalSale);

        return filteredProducts.slice(0, limit < 0 ? filteredProducts.length : limit ? limit : filteredProducts.length);

    } else if (type === "sale" || type === "deal" || type === 'discount') {
        const filteredProducts = nonFilteredProducts.filter(product => product.discount !== null || false || undefined || product.discount > 0);

        return filteredProducts.slice(0, limit < 0 ? filteredProducts.length : limit ? limit : filteredProducts.length);

    } else {
        return nonFilteredProducts.slice(0, limit < 0 ? nonFilteredProducts.length : limit ? limit : nonFilteredProducts.length);
    }
}

/***
 * Get Products by Skin
 * @param products
 * @param skin
 * @returns {array}
 */
export const getProductsBySkin = (products, skin) => {
    return products.filter(product => product.skin === skin);
}

/***
 * Get Products, filtered by Category
 * @param products
 * @param category
 * @param limit
 * @returns {*}
 */
export const getProductsByCategory = (products, category, limit) => {
    const filteredProducts = products.map(product => ({
        ...product,
        category: product.categories.find(cat => cat === category)
    })).filter(item => item.category);

    return filteredProducts.slice(0, limit < 0 ? filteredProducts.length : limit ? limit : filteredProducts.length);
}
/***
 * Get Products by Tag
 * @param products
 * @param tag
 * @param limit
 * @returns {*}
 */
export const getProductsByTag = (products, tag, limit) => {
    const filteredProducts = products.map(product => ({
        ...product,
        tag: product.tags.find(item => item === tag)
    })).filter(item => item.tag);

    return filteredProducts.slice(0, limit < 0 ? filteredProducts.length : limit ? limit : filteredProducts.length);
}

/***
 * Get Related Products
 * @param categories
 * @param tags
 * @param products
 * @param limit
 * @returns {*[]}
 */
export const getRelatedProducts = (categories, tags, products, limit) => {
    const identityMap = {};

    if (tags.length === 0 && categories.length === 0) {
        return [];
    }

    const getID = (product) => {
        return product.id;
    }

    const addToMap = (product) => {
        const id = getID(product);
        if (!(id in identityMap)) {
            identityMap[id] = {
                product: product,
                points: 0,
            };
        }
    }

    const addCategoriesPoints = (product, categories) => {
        const point = 2;
        const id = getID(product);
        const prodCat = product.categories.map((cat) => cat);

        const compareToCat = categories.map((cat) => cat);
        prodCat.forEach((cat) => {
            if (compareToCat.includes(cat)) {
                identityMap[id].points += point;
            }
        });
    }

    const addTagsPoints = (product, tags) => {
        const point = 1;
        const id = getID(product);
        const prodTag = product.tags.map((tag) => tag);
        const compareToTag = tags.map((tag) => tag);
        prodTag.forEach((tag) => {
            if (compareToTag.includes(tag)) {
                identityMap[id].points += point;
            }
        });
    }

    const getIdentityMapAsArray = () => {
        return Object.keys(identityMap).map((id) => identityMap[id]);
    }

    for (const product of products) {
        addToMap(product);
        if (categories.length) addCategoriesPoints(product, categories);
        if (tags.length) addTagsPoints(product, tags);
    }

    const arrayIdentityMap = getIdentityMapAsArray();
    const similarProducts = arrayIdentityMap.filter((arr) => arr.points);
    similarProducts.sort((a, b) => b.points - a.points).shift();

    return similarProducts.slice(0, limit).map(item => item.product);
}

/***
 * Get unique categories of products
 * @param products
 * @param limit
 * @returns {any[]}
 */
export const getProductsUniqueCategories = (products, limit) => {
    const categories = products.map(product => product.categories);
    const filteredCategories = [...new Set(flatDeep(categories))];
    return filteredCategories.slice(0, limit < 0 ? filteredCategories.length : limit ? limit : filteredCategories.length);
}

/***
 * Get specific categories from products
 * @param products
 * @param cats
 * @returns {*[]}
 */
export const getSpecificCategories = (products, cats = []) => {
    const categories = getProductsUniqueCategories(products, -1);

    return cats.filter(field => categories.find(cat => cat === field));
}

/***
 * Get unique sizes of product
 * @param product
 * @returns {this}
 */
export const getProductUniqueSizes = (product) => {
    const {variations} = product;
    const lists = variations && variations.map(variation => variation.sizes);
    const sizes = variations && flatDeep(lists).map(size => size.name);

    return [...new Set(sizes)].sort();
}

/***
 * Get unique sizes of products
 * @param products
 * @returns {any[]}
 */
export const getProductsUniqueSizes = (products) => {
    const sizesArray = products.map(product => getProductUniqueSizes(product));
    const sizes = flatDeep(sizesArray);

    return [...new Set(sizes)];
}

/***
 * Get colors of product
 * @param product
 * @returns {*}
 */
export const getProductColors = (product) => {
    const {variations} = product;
    const colors = variations && variations.map(variation => {
        return {
            name: variation.color.name,
            code: variation.color.code
        }
    });

    return colors && colors.map(color => color);
}

/***
 * Get unique colors of products
 * @param products
 * @returns {any[]}
 */
export const getProductsUniqueColors = (products) => {
    const colors = products.map(product => getProductColors(product));
    let uniqueColors = [];
    flatDeep(colors).forEach((el) => {
        const isInArr = el && uniqueColors.findIndex((item) => el?.name === item?.name);
        if (isInArr < 0) {
            uniqueColors.push(el);
        }
    });

    return uniqueColors;
}

/***
 * Get unique materials of product
 * @param product
 * @returns {array}
 */
export const getProductUniqueMaterials = (product) => {
    const {variations} = product;
    const lists = variations && variations.map(variation => variation.materials);
    const materials = variations && flatDeep(lists).map(material => material.name);
    return [...new Set(materials)].sort();
}

/***
 * Get unique vendor all products
 * @param products
 * @returns {*}
 */
export const getProductsUniqueVendor = (products) => {
    return [...new Set(products.map(product => product.vendor))];
}

/***
 * Get unique tags of all products
 * @param products
 * @param limit
 * @returns {any[]}
 */
export const getProductsUniqueTags = (products, limit) => {
    const tags = products.map(product => product.tags);
    const filteredTags = [...new Set(flatDeep(tags))];

    return filteredTags.slice(0, limit < 0 ? filteredTags.length : limit ? limit : filteredTags.length);
}

/***
 * Get unique prices of product
 * @param product
 * @returns {any[]}
 */
export const getProductUniquePrices = (product) => {
    const {variations} = product;
    const lists = variations && variations.map(variation => variation.materials);
    const prices = variations ? flatDeep(lists).map(material => product.discount ? getDiscountPrice(material.price, product.discount) : material.price) : [product.discount ? getDiscountPrice(product.price, product.discount) : product.price];

    return [...new Set(prices)].sort();
}

/***
 * Get unique prices of all products
 * @param products
 * @returns {any[]}
 */
export const getProductsUniquePrices = (products) => {
    const prices = products.map(product => getProductUniquePrices(product));

    return [...new Set(flatDeep(prices))];
}