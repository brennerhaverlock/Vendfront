import PropTypes from "prop-types";
import {Container} from "react-bootstrap";
import Masonry from "react-masonry-component";
import {LightgalleryProvider} from "react-lightgallery";
import GalleryItem from "@components/gallery/GalleryItem";

const GalleryOne = ({className, galleryData}) => {
    return (
        <div className={`container-indent ${className ? className : ''}`}>
            <Container>
                <div className="tt-portfolio-masonry tt-no-gutter">
                    <Masonry className="tt-portfolio-content layout-default tt-grid-col-5 tt-show">
                        <LightgalleryProvider>
                            {galleryData && (
                                galleryData.map(gallery=>(
                                    <GalleryItem
                                        key={gallery.id}
                                        group="gallery-baby"
                                        thumb={gallery.thumb}
                                        image={gallery.image}
                                    />
                                ))
                            )}
                        </LightgalleryProvider>
                    </Masonry>
                </div>
            </Container>
        </div>
    );
};

GalleryOne.propTypes = {
    galleryData: PropTypes.array.isRequired
}

export default GalleryOne;