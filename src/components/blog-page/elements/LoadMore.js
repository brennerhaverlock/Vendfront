const BlogLoadMore = ({onLoadMoreHandler, disabled}) => {
    return (
        <div className="text-center isotop_showmore_js">
            {!disabled ? (
                <button className="btn btn-border" onClick={onLoadMoreHandler}>LOAD MORE</button>
            ) : (
                <button className="btn btn-border01">NO MORE ITEM TO SHOW</button>
            )}
        </div>
    );
};

export default BlogLoadMore;