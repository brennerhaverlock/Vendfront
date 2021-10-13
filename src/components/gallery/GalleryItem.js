import {LightgalleryItem} from "react-lightgallery";

const GalleryItem = ({className, image, thumb, group}) => {
    return (
        <div className={`element-item ${className ? className : ''}`}>
            <LightgalleryItem group={group} src={image} thumb={thumb}>
                <figure>
                    <img src={image} alt="wokiee"/>
                    <figcaption>
                        <button className="tt-btn-zomm"/>
                    </figcaption>
                </figure>
            </LightgalleryItem>
        </div>
    );
};

export default GalleryItem;