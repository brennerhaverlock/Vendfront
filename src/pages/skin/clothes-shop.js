import Head from "next/head";
import Link from "next/link";
import makesData from "@data/makes.json";
import {Fragment, useContext} from "react";
import FeaturedMakes from "@components/makes";
import {getProductsBySkin} from "@utils/product";
import {Col, Container, Row} from "react-bootstrap";
import sliderData from "@data/slider/skin-clothes.json";
import {SliderOne as Slider} from "@components/slider";
import {ProductsContext} from "@global/ProductsContext";
import {FooterThree as Footer} from "@components/footer";
import CategoriesMenu from "@components/categories-menu";
import {HeaderFour as Header} from "@components/header";
import {SkinTeaNavData as navContent} from "@data/navbar";
import {ServicesOne as Services} from "@components/services";
import {CategoryTwo as Category} from "@components/category";
import {PromoOne as Promo, PromoThree} from "@components/promo";
import {FeaturedProducts as Products} from "@components/products";
import {TestimonialOne as Testimonial} from "@components/testimonials";
import {ContentWrapperOne as Wrapper} from "@components/wrapper";
import SectionTitle from "@components/ui/section-title";
import productSlideData from "@data/slider/productSlider.json";

const HomeSkinClothes = () => {
    const {products} = useContext(ProductsContext);
    const skinFilteredProducts = getProductsBySkin(products, 'clothes');
    const logo = "/assets/images/skins/clothes/logo.png";
    const categories = ['New In', 'Women', 'Men', 'Accessories'];

    return (
        <Fragment>
            <Head>
                <title>Clothes Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-clothes">
                <Header
                    logo={logo}
                    navbar={true}
                    navData={navContent}
                    containerFluid={false}
                    navbarAlignment="center"
                    showNotificationBar={false}
                />

                <Wrapper>
                    {/* Banner Area */}
                    <div className="container-indent minus20marg">
                        <Container>
                            <Promo
                                link="/shop"
                                heading="Minimal Collection"
                                title="Spring Layers to Wear Now"
                                thumb="/assets/images/skins/clothes/promo/promo-img-01.jpg"
                            />
                        </Container>
                    </div>

                    {/* Categories Area */}
                    <div className="container-indent">
                        <Container>
                            <SectionTitle
                                title="Shop by Category"
                            />
                            <Row className="tt-collection-listing">
                                {categories.map((category, idx) => (
                                    <Col xs={6} md={3} key={idx}>
                                        <Link href={`/product/category/${category.toLowerCase().replace(' ', '-')}`}>
                                            <a className="tt-collection-item hover-type-02">
                                                <div className="tt-image-box">
                                                    <img
                                                        alt="wokiee"
                                                        src={`/assets/images/skins/clothes/img-0${idx + 1}.jpg`}
                                                    />
                                                </div>
                                                <div className="tt-description">
                                                    <h2 className="tt-title">{category}</h2>
                                                </div>
                                            </a>
                                        </Link>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>

                    <Slider
                        dots={true}
                        arrows={false}
                        data={sliderData}
                        contentAlign="left"
                        sliderWrapper="slider-style-7"
                    />

                    {/* Products */}
                    <Products
                        limit={-1} // -1 means all products
                        layout="slider"
                        containerFluid={false}
                        productClass="product-nohover"
                        products={skinFilteredProducts}
                    />

                    {/* About Area */}
                    <div className="container-indent">
                        <Container>
                            <Row className="tt-layout-box01 align-items-center">
                                <Col md={6}>
                                    <div className="col-img">
                                        <img src="/assets/images/skins/clothes/img-05.jpg" className="w-100" alt="wokiee"/>
                                    </div>
                                </Col>
                                <Col md={6}>
                                    <div className="col-description p-lg-4 mt-4 mt-md-0">
                                        <p>A great about us block helps builds trust between you and your customers. The
                                            more content you provide about you and your business, the more confident people
                                            will be when purchasing from your store.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    {/* Service Area */}
                    <Services
                        className="wrapper-custom-01 container-inner"
                    />
                </Wrapper>

                <Footer
                    logo={logo}
                    dark={false}
                    className="nomargin"
                />
            </div>
        </Fragment>
);
};

export default HomeSkinClothes;