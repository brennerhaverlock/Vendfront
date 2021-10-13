import Link from "next/link";
import Parallax, {Layer} from 'react-parallax-scroll';

const PromoBannerBabySkin = ({className, bgImage}) => {
    return (<div className={`container-indent ${className ? className : ''}`}>
            <Parallax>
                <Layer style={{backgroundImage: `url(${bgImage})`}} settings={{speed: 0.2, type: 'backgroundY'}}>

                    <div className="tt-promo-fullwidth tt-promo-parallax">
                        <div className="tt-description">
                            <div className="tt-description-wrapper">
                                <div className="tt-title-small">
                                    <span className="tt-base-color">Safe baby products <br/> that actually work</span>
                                </div>
                                <p>
                                    A great about us block helps builds trust between you and your<br/> customers. The more
                                    content you provide about you and your business,<br/> the more confident people will
                                    be when purchasing from your store.
                                </p>
                                <Link href="/shop"><a className="btn">Shop Now!</a></Link>
                            </div>
                        </div>
                    </div>
                </Layer>
            </Parallax>
        </div>
    );
};

PromoBannerBabySkin.defaultProps = {
    bgImage: "/assets/images/skins/baby/promo/promo-img-01.jpg"
}

export default PromoBannerBabySkin;