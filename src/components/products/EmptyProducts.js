const EmptyProducts = ({className}) => {
    return (
        <div className={`tt-empty-search w-100 ${className}`}>
            <span className="tt-icon icon-g-84"/>
            <h2 className="tt-title">EMPTY</h2>
            <p>There are no products found!</p>
        </div>
    );
};

export default EmptyProducts;