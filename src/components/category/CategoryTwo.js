import Link from "next/link";
import {toCapitalize} from "@utils/toCapitalize";
import {getProductsByCategory} from "@utils/product";

const CategoryTwo = ({products, thumb, catName, className}) => {
    const categoryProducts = getProductsByCategory(products, catName, -1);

    return (
        <Link href={`/product/category/${catName}`}>
            <a className={`tt-collection-item ${className ? className : ''}`}>
                <div className="tt-image-box">
                    <img src={thumb} alt={catName}/>
                </div>
                <div className="tt-description">
                    <h2 className="tt-title">{toCapitalize(catName)}</h2>
                    <ul className="tt-add-info">
                        <li>{categoryProducts.length} PRODUCT{categoryProducts.length > 1 ? 'S' : ''}</li>
                    </ul>
                </div>
            </a>
        </Link>
    );
};

export default CategoryTwo;