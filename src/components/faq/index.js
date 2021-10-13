const FAQItem = ({title, children}) => {
    return (
        <div className="tt-box-faq">
            <h6 className="tt-title">{title}</h6>
            {children}
        </div>
    );
};

export default FAQItem;