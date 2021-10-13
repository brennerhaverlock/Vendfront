const LoadMore = ({className, onLoadMorHandler, productLength, productPerPage}) => {

    return (
        productLength >= productPerPage && (
            productLength !== productPerPage ? (
                <div className={`text-center tt_product_showmore ${className}`}>
                    <button className="btn btn-border" onClick={onLoadMorHandler}>LOAD MORE</button>
                </div>
            ) : (
                <div className={`text-center tt_product_showmore ${className}`}>
                    <button className="btn btn-border01">NO MORE ITEM TO SHOW</button>
                </div>
            )
        )
    );
};

export default LoadMore;