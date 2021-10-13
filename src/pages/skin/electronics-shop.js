import Link from "next/link";
import Head from "next/head";
import Separator from "@components/ui/hr";
import offers from "@data/offers.json";
import {Fragment, useContext} from "react";
import {Products} from "@components/products";
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "@components/ui/section-title";
import {SliderOne as Slider} from "@components/slider";
import {FooterOne as Footer} from "@components/footer";
import {OfferItemOne as Offer} from "@components/offer";
import {ProductsContext} from "@global/ProductsContext";
import {BrandsThree as Brands} from "@components/brands";
import CategoriesMenu from "@components/categories-menu";
import {SkinTeaNavData as navContent} from "@data/navbar";
import {HeaderThirteen as Header} from "@components/header";
import sliderData from "@data/slider/skin-electronics.json";
import {getProducts, getProductsBySkin} from "@utils/product";
import {ContentWrapperOne as Wrapper} from "@components/wrapper";

const HomeSkinElectronics = () => {
    const {products} = useContext(ProductsContext);
    const filteredProducts = getProductsBySkin(products, 'electronics');
    const popularProducts = getProducts(filteredProducts, 'popular', -1);
    const tendingProducts = getProducts(filteredProducts, 'tending', -1);
    const bestSellProducts = getProducts(filteredProducts, 'best-seller', -1);
    const logo = "/assets/images/skins/electronics/logo.png";
    const categories = ['Appliances', 'TV & Home Theater', 'Computers & Tablets', 'Cameras & Camcorders', 'Cell Phones', 'Audio', 'Video Games', 'Wearable Technology', 'Smart Home']

    return (
        <Fragment>
            <Head>
                <title>Electronics Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-electronics">

                {/* Header */}
                <Header
                    logo={logo}
                    navbar={true}
                    navData={navContent}
                    navbarAlignment="left"
                    containerFluid={false}
                    notificationBar={true}
                />

                <Wrapper>
                    {/* Slider Area */}
                    <div className="container-indent tt-offset-desktop-20">
                        <Container>
                            <Row>
                                <Col lg={3} className="tt-hidden-mobile">
                                    <CategoriesMenu
                                        initialVisibility={true}
                                        className="categories-btn-nobtn categories-btn-align tt-categories-size-large"
                                    />
                                </Col>

                                <Col lg={9}>
                                    <Slider
                                        arrows={false}
                                        data={sliderData}
                                        sliderWrapper="slider-style-7"
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <Brands/>

                    {/* Offers Area */}
                    <div className="container-indent">
                        <Container>
                            <SectionTitle
                                title="Our featured offers"
                            />

                            <Row className="tt-layout-promo02">
                                {offers.map(offer => (
                                    <Col
                                        sm={6}
                                        md={4}
                                        key={offer.id}
                                        className="col-12-440width"
                                    >
                                        <Offer data={offer}/>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>

                    <Separator/>

                    <Products
                        layout="slider"
                        products={popularProducts}
                        sectionTitle="Most-viewed items"
                        productClass="product-nohover text-left"
                    />

                    <Separator/>

                    <Products
                        layout="slider"
                        products={tendingProducts}
                        sectionTitle="Trending products"
                        productClass="product-nohover text-left"
                    />

                    <Separator/>

                    <Products
                        layout="slider"
                        products={bestSellProducts}
                        sectionTitle="Best Seller"
                        productClass="product-nohover text-left"
                    />

                    <Separator/>

                    {/* Categories Area */}
                    <div className="container-indent">
                        <Container>
                            <SectionTitle
                                title="Explore by Categories"
                            />

                            <div className="tt-btn-img-list">
                                <Row>
                                    {categories.map((category, idx) => (
                                        <Col
                                            sm={4}
                                            xs={6}
                                            key={idx}
                                            className="col-5-inrow-sm col-7-inrow-md col-9-inrow-lg"
                                        >

                                            <Link href="/">
                                                <a className="tt-btn-img tt-layout-02">
                                                    <div className="tt-img">
                                                        <img
                                                            alt={category}
                                                            src={`/assets/images/skins/electronics/btn-img0${idx + 1}.svg`}
                                                        />
                                                    </div>
                                                    <div className="tt-title">{category}&nbsp;›</div>
                                                </a>
                                            </Link>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Container>
                    </div>
                </Wrapper>

                <Footer
                    logo={logo}
                    dark={false}
                    className="only-copyright"
                />
            </div>
        </Fragment>
    );
};

export default HomeSkinElectronics