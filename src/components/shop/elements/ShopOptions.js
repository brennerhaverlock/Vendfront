import {Fragment} from "react";
import {useWindowSize} from "@hooks";
import SortBy from "@components/shop/elements/SortBy";
import ProductPerPage from "@components/shop/elements/ProductPerPage";

const ShopOptions = (props) => {
    const {
        sidebar,
        layout,
        pageTitle,
        getLayout,
        productLength,
        onSortHandler,
        productPerPage,
        filterPanelHandler,
        onProductPerPageHandler
    } = props;

    const [windowSize] = useWindowSize();

    return (
        <div className={`tt-filters-options ${!sidebar ? 'desktop-no-sidebar' : ''}`}>
            <h1 className="tt-title">
                {pageTitle ? pageTitle : "Products"} <span className="tt-title-total">({productLength})</span>
            </h1>
            <div className="tt-btn-toggle">
                <a
                    href="/"
                    onClick={(event => {
                        event.preventDefault();
                        filterPanelHandler()
                    })}
                >
                    FILTER
                </a>
            </div>
            <div className="tt-sort d-none d-lg-flex">
                <div className="sorting">
                    <label className="m-0">SORT BY:</label>
                    <SortBy onSortHandler={onSortHandler}/>
                </div>

                <div className="show_per_Page">
                    <label className="m-0">SHOW:</label>
                    <ProductPerPage
                        productPerPage={productPerPage}
                        onProductPerPageHandler={onProductPerPageHandler}
                    />
                </div>
            </div>
            <div className="tt-quantity">
                {windowSize <= 790 && (
                    <button
                        className={`tt-col-one tt-show ${layout === 'tt-col-one' ? 'active' : ''}`}
                        onClick={() => getLayout('tt-col-one')}
                    />
                )}

                {windowSize <= 1024 && (
                    <button
                        className={`tt-col-two tt-show ${layout === 'tt-col-two' ? 'active' : ''}`}
                        onClick={() => getLayout('tt-col-two')}
                    />
                )}

                {windowSize > 1024 && sidebar && (
                    <button
                        className={`tt-col-two tt-show ${layout === 'tt-col-two' ? 'active' : ''}`}
                        onClick={() => getLayout('tt-col-two')}
                    />
                )}

                {windowSize > 790 && (
                    <button
                        className={`tt-col-three tt-show ${layout === 'tt-col-three' ? 'active' : ''}`}
                        onClick={() => getLayout('tt-col-three')}
                    />
                )}

                {windowSize > 1024 && (
                    <Fragment>
                        <button
                            className={`tt-col-four tt-show ${layout === 'tt-col-four' ? 'active' : ''}`}
                            onClick={() => getLayout('tt-col-four')}
                        />
                        {!sidebar && (
                            <button
                                className={`tt-col-six tt-show ${layout === 'tt-col-six' ? 'active' : ''}`}
                                onClick={() => getLayout('tt-col-six')}
                            />
                        )}
                    </Fragment>
                )}
            </div>
        </div>
    );
};

export default ShopOptions;