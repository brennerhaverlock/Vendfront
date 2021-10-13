import PropTypes from "prop-types";
import {Container} from "react-bootstrap";
import Masonry from "react-masonry-component";
import SectionTitle from "@components/ui/section-title";
import {ProductFour as Product} from "@components/product";

const ProductsMasonry = ({products, className, containerFluid}) => {
    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <Container fluid={containerFluid} className={containerFluid ? 'container-fluid-custom container-fluid-custom-mobile-padding' : ''}>
                <SectionTitle
                    title="Collection"
                />

                <div className="tt-product-listing-masonry">
                    <Masonry className="tt-product-init tt-add-item">
                        {products.map((product, idx) => (
                            <div className={`element-item ${idx+1 === 3 || idx+1 === 6 ? 'double-size':''}`} key={product.id}>
                                <Product product={product} showPrice={true}/>
                            </div>
                        ))}
                    </Masonry>
                </div>
            </Container>
        </div>
    );
};

ProductsMasonry.propTypes = {
    products: PropTypes.array.isRequired,
    className: PropTypes.string,
    containerFluid: PropTypes.bool
}

export default ProductsMasonry;