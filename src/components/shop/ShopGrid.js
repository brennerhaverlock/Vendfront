import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {Container, Col, Row} from "react-bootstrap";
import {useSort, useFilter, useWindowSize} from "@hooks";
import LoadMore from "@components/shop/elements/LoadMore";
import ShopProducts from "@components/shop/elements/ShopProducts";
import ShopOptions from "@components/shop/elements/ShopOptions";
import ShopFilters from "@components/shop/elements/ShopFilters";

const ShopGrid = ({products, pageTitle, sidebar, sidebarPosition, containerFluid}) => {
    const [windowSize] = useWindowSize();
    const [productPerPage, setProductPerPage] = useState(containerFluid ? 12 : 8);
    const [layout, setLayout] = useState(sidebar ? 'tt-col-three' : 'tt-col-four');
    const {allProducts, filterPanelShow, filterPanelHandler, getFilterParam} = useFilter(products);
    const {onSortHandler, sortProducts} = useSort(allProducts);

    const getLayout = (col) => {
        setLayout(col)
    }

    const onProductPerPageHandler = (e) => {
        const value = parseInt(e.target.value, 10);
        setProductPerPage(value);
    }

    const onLoadMorHandler = () => {
        const productShowPerPage = (prevValue) => prevValue < allProducts.length ? allProducts.length - prevValue > 4 ? prevValue += 4 : prevValue += allProducts.length - prevValue : prevValue;
        setProductPerPage(prevState => productShowPerPage(prevState));
    }

    useEffect(() => {
        // Window Viewport specific product grid
        if (!sidebar) {
            if (!containerFluid) {
                windowSize <= 499 && setLayout('tt-col-one') || windowSize > 499 && windowSize <= 799 && setLayout('tt-col-two') || windowSize > 800 && windowSize <= 1024 && setLayout('tt-col-three') || windowSize >= 1025 && setLayout('tt-col-four');
            } else {
                windowSize <= 499 && setLayout('tt-col-one') || windowSize > 499 && windowSize <= 799 && setLayout('tt-col-two') || windowSize > 800 && windowSize <= 1024 && setLayout('tt-col-three') || windowSize >= 1025 && setLayout('tt-col-six');
            }
        } else {
            windowSize <= 499 && setLayout('tt-col-one') || windowSize > 499 && windowSize <= 799 && setLayout('tt-col-two') || windowSize > 800 && setLayout('tt-col-three');
        }
    }, [windowSize]);

    return (
        <div className="content-indent shop-no-sidebar">
            <Container fluid={containerFluid} className="container-fluid-custom-mobile-padding">
                <Row className={sidebar && sidebarPosition === "right" ? 'flex-sm-row-reverse' : ''}>
                    <Col
                        md={4} lg={3}
                        className={`leftColumn ${sidebar && sidebarPosition === 'right' ? 'rightColumn' : ''} aside ${!sidebar ? 'desktop-no-sidebar' : ''} ${filterPanelShow ? 'column-open' : 'column-close'}`}
                    >
                        <ShopFilters
                            sidebar={sidebar}
                            onSortHandler={onSortHandler}
                            getFilterParam={getFilterParam}
                            productPerPage={productPerPage}
                            filterPanelHandler={filterPanelHandler}
                            onProductPerPageHandler={onProductPerPageHandler}
                        />
                    </Col>

                    <Col xs={12} lg={sidebar ? 9 : 12}>
                        <div className="content-indent container-fluid-custom-mobile-padding-02">
                            <ShopOptions
                                layout={layout}
                                sidebar={sidebar}
                                pageTitle={pageTitle}
                                getLayout={getLayout}
                                onSortHandler={onSortHandler}
                                productPerPage={productPerPage}
                                productLength={allProducts.length}
                                filterPanelHandler={filterPanelHandler}
                                onProductPerPageHandler={onProductPerPageHandler}
                            />
                            <ShopProducts
                                layout={layout}
                                products={sortProducts}
                                productPerPage={productPerPage}
                            />

                            <LoadMore
                                className="mt-5"
                                onLoadMorHandler={onLoadMorHandler}
                                productLength={allProducts.length}
                                productPerPage={productPerPage}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

ShopGrid.propTypes = {
    products: PropTypes.array.isRequired
}

export default ShopGrid;