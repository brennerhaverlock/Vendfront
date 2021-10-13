import PropTypes from "prop-types";
import {LightgalleryItem} from 'react-lightgallery'

const Portfolio = ({title, thumb, slug, excerpt, group}) => {
    return (
        <div className="element-item">
            <LightgalleryItem group={group} src={thumb}>
                <figure>
                    <img src={thumb} alt={title}/>
                    <figcaption>
                        <h6 className="tt-title"><a href={slug}>{title}</a></h6>
                        <p>{excerpt}</p>
                        <button className="tt-btn-zomm" aria-label="zoom button"/>
                    </figcaption>
                </figure>
            </LightgalleryItem>
        </div>
    );
};

Portfolio.propTypes = {
    group: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
    excerpt: PropTypes.string,
    slug: PropTypes.string,
}

export default Portfolio;