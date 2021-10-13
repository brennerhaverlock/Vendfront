import {useWindowSize} from "@hooks";
import {CURRENCY} from "@utils/constant";
import {getClosest} from "@utils/method";

const ProductLookbook = ({product}) => {

        const [windowSize] = useWindowSize();

        const onHotspotOpenHandler = (e) => {
            const target = e.target;
            const ttHotspot = getClosest(target, '.tt-hotspot');
            const top = ttHotspot.dataset.top;
            const left = ttHotspot.dataset.left;
            const ttBtn = ttHotspot.firstElementChild;
            target.nextSibling.classList.add('show');
            ttHotspot.classList.add('active');
            ttHotspot.style.cssText = `top:${windowSize < 790 ? 0 : top}; left:${windowSize < 790 ? 0 : left}`;
            ttBtn.style.cssText = `top:${windowSize < 790 ? top : 0}; left:${windowSize < 790 ? left : 0}`;
        }

        const onHotspotCloseHandler = (e) => {
            const target = e.target;
            const ttHotspot = getClosest(target, '.tt-hotspot');
            const top = ttHotspot.dataset.top;
            const left = ttHotspot.dataset.left;
            const ttBtn = ttHotspot.firstElementChild;
            target.nextSibling.classList.remove('show');
            ttHotspot.classList.remove('active');
            ttHotspot.style.cssText = `top:${top}; left:${left}`;
            ttBtn.style.cssText = `top:${0}; left:${0}`;
        }

        return (
            <div className="tt-lookbook">
                <img src={product.thumb} alt="lookbook-wokiee"/>
                {product.products.map((pro, i) => {
                    return (
                        <div
                            key={pro.id} className={`tt-hotspot`}
                            data-top={pro.position.top}
                            data-left={pro.position.left}
                            style={{top: pro.position.top, left: pro.position.left}}
                        >
                            <div className="tt-btn" onClick={event => onHotspotOpenHandler(event)}/>
                            <div className="tt-content-parent">
                                <div className="tt-hotspot-content">
                                    <button className="tt-btn-close" onClick={event => onHotspotCloseHandler(event)}/>
                                    <div className="tt-img">
                                        <a href="/"><img src={pro.thumb} alt={pro.name}/></a>
                                    </div>
                                    <div className="tt-description">
                                        <h2 className="tt-title"><a href="/">{pro.name}</a></h2>
                                        <div className="tt-price">{CURRENCY + pro.price}</div>
                                        <button className="btn">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
;

export default ProductLookbook;