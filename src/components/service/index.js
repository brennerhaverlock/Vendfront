import PropTypes from "prop-types";

const Service = ({className, title, content, icon}) => {
    return (
        <div className={`tt-services-block ${className}`}>
            <div className="tt-col-icon">
                <i className={icon}/>
            </div>
            <div className="tt-col-description">
                <h4 className="tt-title">{title}</h4>
                <p>{content}</p>
            </div>
        </div>
    );
};

Service.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    icon: PropTypes.string
}

export default Service;