const NewsletterForm = ({className}) => {
    return (
        <form className={`form-inline form-default ${className ? className : ''}`} method="post" action="#">
            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Enter your e-mail"
                />
                <button type="submit" className="btn" style={{whiteSpace: 'nowrap'}}>JOIN US</button>
            </div>
        </form>
    );
};

export default NewsletterForm;