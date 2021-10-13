import Masonry from "react-masonry-component";
import products from "@data/lookbook-products.json";
import ProductLookbook from "@components/product/ProductLookbook";

const LookbookProducts = ({className}) => {
    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <div className="container-fluid-custom container-fluid-custom-mobile-padding">
                <div className="tt-lookbook-masonry">
                    <Masonry className="tt-lookbook-init tt-grid-col-3 tt-add-item tt-show">
                        {products.map(product => (
                            <div key={product.id} className="element-item">
                                <ProductLookbook product={product}/>
                            </div>
                        ))}
                    </Masonry>
                </div>
            </div>
        </div>
    );
};

export default LookbookProducts;