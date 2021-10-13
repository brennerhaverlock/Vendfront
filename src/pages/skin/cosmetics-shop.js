import Link from "next/link";
import Head from "next/head";
import {Fragment, useContext} from "react";
import {SliderOne} from "@components/slider";
import {Products} from "@components/products";
import {Col, Container, Row} from "react-bootstrap";
import {PromoOne as Promo} from "@components/promo";
import Parallax, {Layer} from "react-parallax-scroll";
import {ProductsContext} from "@global/ProductsContext";
import {HeaderNine as Header} from "@components/header";
import {FooterThree as Footer} from "@components/footer";
import {SkinTeaNavData as navContent} from "@data/navbar";
import sliderData from "@data/slider/skin-cosmetics.json";
import {getProducts, getProductsBySkin} from "@utils/product";
import {ContentWrapperOne as Wrapper} from "@components/wrapper";

const HomeSkinCosmeticsShop = () => {
    const {products} = useContext(ProductsContext);
    const skinFilteredProducts = getProductsBySkin(products, 'cosmetics');
    const bestSellProducts = getProducts(skinFilteredProducts, 'best-seller', -1);
    const discountProducts = getProducts(skinFilteredProducts, 'deal', -1);
    const categories = ['LIPS', 'FACE', 'EYES', 'SKIN CARE'];
    const logo = "/assets/images/skins/cosmetics/logo.png";

    return (
        <Fragment>
            <Head>
                <title>Cosmetics Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-cosmetics ">
                <Header
                    logo={logo}
                    navbar={true}
                    navData={navContent}
                    containerFluid={false}
                />

                <Wrapper>
                    <SliderOne
                        data={sliderData}
                        sliderWrapper="slider-style-8"
                    />

                    {/* Categories Area */}
                    <div className="nomargin container-indent">
                        <div className="container-fluid-custom">
                            <Row>
                                {categories.map((category, idx) => (
                                    <Col sm={6} key={idx}>
                                        <Promo
                                            title={category}
                                            className="tt-one-child"
                                            link="/product/category/bikes"
                                            thumb={`/assets/images/skins/cosmetics/promo/promo-img-0${idx + 1}.jpg`}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>

                    {/* New Release Products */}
                    <Products
                        layout="slider"
                        productClass="text-left"
                        sectionTitle="NEW ITEMS"
                        products={skinFilteredProducts}
                    />

                    {/* Best Seller Products */}
                    <Products
                        layout="slider"
                        productClass="text-left"
                        sectionTitle="BEST SELLERS"
                        products={bestSellProducts}
                    />

                    {/* Discount Products */}
                    <Products
                        layout="slider"
                        productClass="text-left"
                        sectionTitle="GIFTS AND DISCOUNTS"
                        products={discountProducts}
                    />

                    {/* Banner Area */}
                    <div className="container-indent">
                        <Container fluid className="p-0">
                            <Parallax>
                                <Layer
                                    style={{backgroundImage:`url(/assets/images/skins/cosmetics/promo/promo-img-05.jpg)`}}
                                    settings={{ speed: 0.2, type: 'backgroundY'}}
                                >
                                    <div className="tt-promo-fullwidth tt-promo-parallax bg-position-bottom">
                                        <div className="tt-description">
                                            <div className="tt-description-wrapper">
                                                <div className="tt-title-large">HOLIDAY LOOK BOOK</div>
                                                <div className="tt-title-small">Spreading holiday cheer, one makeup look
                                                    at a time.
                                                </div>
                                                <Link href="/shop">
                                                    <a className="btn">SHOP NOW!</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Layer>
                            </Parallax>
                        </Container>
                    </div>
                </Wrapper>

                <Footer
                    logo={logo}
                    newsletter={true}
                />
            </div>
        </Fragment>
    );
};

export default HomeSkinCosmeticsShop;