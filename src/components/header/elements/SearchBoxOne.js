import Link from "next/link";
import {useRouter} from "next/router";
import {useContext, useEffect, useState} from "react";
import {ProductsContext} from "@global/ProductsContext";

const SearchBoxOne = ({className, isHidden, onHandler}) => {
    const router = useRouter();
    const {products} = useContext(ProductsContext);
    const [param, setParam] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);

    const onSearchHandler = (e) => {
        e.preventDefault();

        if (e.key === 'Enter') {
            const q = e.currentTarget.value.toLowerCase();
            router.push(
                {
                    pathname: `/search`,
                    query: q ? {q} : {},
                },
                undefined,
                {shallow: true}
            );
            onHandler();

        } else if (e.type === "click") {
            const q = param.toLowerCase();
            router.push(
                {
                    pathname: `/search`,
                    query: q ? {q} : {},
                },
                undefined,
                {shallow: true}
            );
            onHandler();
        }
    }

    const onChange = (e) => {
        const target = e.target;
        const value = target.value;
        setParam(value);
        setFilteredProducts(products.filter((val) => {
            if (value === "") {
                return val;
            } else if (val.name.toLowerCase().includes(value.toLowerCase())) {
                return val;
            }
        }).slice(0, 6));
    }

    useEffect(() => {
        router.prefetch('/search');
    }, [router])

    return (
        <div className={`tt-parent-box ${className}`}>
            <div className={`tt-search tt-dropdown-obj ${!isHidden ? "active" : 'not-active'}`}>
                <button className="tt-dropdown-toggle" onClick={onHandler}>
                    <i className="icon-f-85"/>
                </button>

                <div className="tt-dropdown-menu">
                    <div className="container">
                        <div className="form">
                            <div className="tt-col">
                                <input
                                    type="text"
                                    defaultValue={param}
                                    className="tt-search-input"
                                    placeholder="Search Products..."
                                    onKeyUp={onSearchHandler}
                                    onChange={(e) => onChange(e)}
                                />

                                <button
                                    className="tt-btn-search"
                                    onClick={(event => onSearchHandler(event))}
                                />
                            </div>
                            <div className="tt-col">
                                <button className="tt-btn-close icon-g-80" onClick={onHandler}/>
                            </div>
                            <div className="tt-info-text">
                                What are you Looking for?
                            </div>

                            {filteredProducts.length > 0 && (
                                <div className="search-results">
                                    <ul>
                                        {filteredProducts.map(product => (
                                            <li key={product.id}>
                                                <a href={`/product/${product.name.toLowerCase().split(' ').join('-')}`}>
                                                    <div className="thumbnail">
                                                        <img src={product.thumbs[0]} alt={product.name}/>
                                                    </div>
                                                    <div className="tt-description">
                                                        <div className="tt-title">{product.name}</div>
                                                    </div>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        onClick={onSearchHandler}
                                        className="mt-lg-0 tt-view-all"
                                    >
                                        View all products
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBoxOne;
