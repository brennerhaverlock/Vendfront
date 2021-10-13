import Link from "next/link";
import parse from "react-html-parser";
import {Container} from "react-bootstrap";

const ProductSlide = ({bgImage, title, content}) => {
    return (
        <div className="slide">
            <div className="img--holder" style={{backgroundImage: `url(${bgImage})`}}/>
            <div className="tt-layout-left slide-content">
                <Container>
                    <div className="tt-wrapper-layout">
                        {title && <div className="tp-caption-02-01">{parse(title)}</div>}
                        {content && <div className="tp-caption-02-02">{parse(content)}</div>}
                        <div className="tp-caption-btn">
                            <Link href="/shop"><a className="btn btn-xl">Shop Now!</a></Link>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default ProductSlide;