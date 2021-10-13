 import cogoToast from "cogo-toast";
import {CartContext} from "@global/CartContext";
import {useState, useEffect, useContext} from "react";
import {CompareContext} from "@global/CompareContext";
import {WishlistContext} from "@global/WishlistContext";
import {getCartProductQuantity, getDiscountPrice, getWishCompareProduct} from "@utils/product";

const useProduct = (product) => {
    const {name, discount, variations} = product;

    const [productSize, setProductSize] = useState("");
    const [productStock, setProductStock] = useState(0);
    const [productPrice, setProductPrice] = useState(0);
    const [productColor, setProductColor] = useState("");
    const [productQuantity, setProductQuantity] = useState(1);
    const [productMaterial, setProductMaterial] = useState("");
    const [productColorImage, setProductColorImage] = useState("");
    const [modalQuickView, setModalQuickView] = useState(false);
    const [modalCartAdded, setModalCartNotification] = useState(false);

    const {shoppingCart} = useContext(CartContext);
    const {compareList, addToCompare, removeFromCompare} = useContext(CompareContext);
    const {wishlist, addToWishlist, removeFromWishlist} = useContext(WishlistContext);

    const isInWishlist = getWishCompareProduct(wishlist, product);
    const isInCompareList = getWishCompareProduct(compareList, product);
    const cartProductQuantity = getCartProductQuantity(shoppingCart, product, productColor, productSize);

    const slug = `/product/${name.toLowerCase().split(' ').join('-')}`;
    const discountedPrice = getDiscountPrice(productPrice, discount);

    const productColorHandler = (e) => {
        e.preventDefault();
        const color = e.target.dataset.colorname ? e.target.dataset.colorname : e.target.value;
        setProductColor(color);

        const image = e.target.dataset.colorthumb;
        setProductColorImage(image);

        const sizes = variations && variations.filter(item => item.color.name === color)[0].sizes;
        setProductSize(sizes[0].name);
        setProductStock(sizes[0].stock);

        const materials = variations && variations.filter(item => item.color.name === color)[0].materials;
        setProductMaterial(materials[0].slug);
        setProductPrice(materials[0].price);
        setProductQuantity(1);
    };

    const productSizeHandler = (e) => {
        e.preventDefault();
        const size = e.target.dataset.size ? e.target.dataset.size : e.target.value;
        setProductSize(size);

        const sizes = variations && variations.filter(item => item.color.name === productColor)[0].sizes;
        const stock = sizes.filter(item => item.name === size)[0].stock;
        setProductStock(stock);
        setProductQuantity(1);
    };

    const productMaterialHandler = (e) => {
        e.preventDefault();
        const material = e.target.dataset.materialname ? e.target.dataset.materialname : e.target.value;
        setProductMaterial(material);

        const materials = variations && variations.filter(item => item.color.name === productColor)[0].materials;
        const price = materials.filter(item => item.slug === material)[0].price;
        setProductPrice(price);
    };

    const productColorImageChange = (e) => {
        e.preventDefault();
        const image = e.target.colorthumb;
        setProductColorImage(image);
    }

    const wishlistHandler = (event) => {
        event.preventDefault();
        !isInWishlist ? addToWishlist(product) : removeFromWishlist(product);
        !isInWishlist ? cogoToast.success(`"${name}" is successfully added.`, {
            position: "bottom-right",
            heading: "Added to Wishlist!",
            hideAfter: 2
        }) : cogoToast.warn(`"${name}" is Remove From Wishlist.`, {
            position: "bottom-right",
            heading: "Remove From Wishlist!",
            hideAfter: 2
        });
    }

    const compareHandler = (event) => {
        event.preventDefault();
        !isInCompareList ? addToCompare(product) : removeFromCompare(product);
        !isInCompareList ? cogoToast.success(`"${name}" is successfully added.`, {
            position: "bottom-right",
            heading: "Added to Compare!",
            hideAfter: 2
        }) : cogoToast.warn(`"${name}" is Remove from Compare List.`, {
            position: "bottom-right",
            heading: "Remove From Compare!",
            hideAfter: 2
        });
    }

    const modalCartAddedHandler = () => setModalCartNotification(prevState => !prevState);
    const modalQuickViewHandler = () => setModalQuickView(prevState => !prevState);
    const productQuantityIncrement = () => setProductQuantity(prevState => prevState < (productStock - cartProductQuantity) ? prevState += 1 : prevState);
    const productQuantityDecrement = () => setProductQuantity(prevState => prevState > 1 ? prevState -= 1 : 1);

    useEffect(() => {
        setProductColor(variations && variations[0]?.color?.name);
        setProductSize(variations && variations[0]?.sizes[0]?.name);
        setProductStock(variations ? variations[0]?.sizes[0]?.stock : product.stock);
        setProductMaterial(variations && variations[0]?.materials[0]?.slug);
        setProductPrice(variations ? variations[0]?.materials[0]?.price : product.price);
    }, []);

    return {
        slug,
        productSize,
        productStock,
        productPrice,
        productColor,
        modalCartAdded,
        modalQuickView,
        discountedPrice,
        productQuantity,
        productMaterial,
        productColorImage,
        setProductQuantity,
        compareHandler,
        wishlistHandler,
        productSizeHandler,
        productColorHandler,
        modalCartAddedHandler,
        modalQuickViewHandler,
        productMaterialHandler,
        productColorImageChange,
        productQuantityDecrement,
        productQuantityIncrement
    };
};

export default useProduct