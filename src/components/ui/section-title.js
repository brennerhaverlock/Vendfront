import HTMLParser from "react-html-parser";

const SectionTitle = ({title, content, className, titleClass}) => {
    return (
        <div className={`tt-block-title ${className ? className : ''}`}>
            <h2 className={titleClass ? titleClass : 'tt-title'}>{HTMLParser(title)}</h2>
            {content && <div className="tt-description">{content}</div>}
        </div>
    );
};

export default SectionTitle;