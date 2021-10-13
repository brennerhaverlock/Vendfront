const ContentWrapperOne = ({children, className}) => {
    return (
        <div className={className ? className : ''} id="tt-pageContent">
            {children}
        </div>
    );
};

export default ContentWrapperOne;