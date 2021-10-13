import Head from "next/head";
import Link from "next/link";
import {getBlogPosts} from "@utils/blog";
import makesData from "@data/makes.json";
import LatestBlog from "@components/blog";
import {Fragment, useContext} from "react";
import FeaturedMakes from "@components/makes";
import {getProductsBySkin} from "@utils/product";
import {Col, Container, Row} from "react-bootstrap";
import sliderData from "@data/slider/skin-car.json";
import {SliderOne as Slider} from "@components/slider";
import {ProductsContext} from "@global/ProductsContext";
import {FooterThree as Footer} from "@components/footer";
import CategoriesMenu from "@components/categories-menu";
import {HeaderSeven as Header} from "@components/header";
import {SkinTeaNavData as navContent} from "@data/navbar";
import {ServicesOne as Services} from "@components/services";
import {CategoryThree as Category} from "@components/category";
import {PromoOne as Promo, PromoThree} from "@components/promo";
import {CategoryTypeWiseTwo as Products} from "@components/products";
import {TestimonialOne as Testimonial} from "@components/testimonials";
import {ContentWrapperOne as Wrapper} from "@components/wrapper";

const HomeSkinCar = ({blogs}) => {
    const {products} = useContext(ProductsContext);
    const carProducts = getProductsBySkin(products, 'car');
    const logo = "/assets/images/skins/car/logo.png";
    const categories = ['INTERIOR', 'EXTERIOR', 'PERFORMANCE', 'LIGHTING', 'WHEELS & TIRES', 'REPAIR', 'BODY PARTS', 'AUDIO'];

    return (
        <Fragment>
            <Head>
                <title>Car Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-carshop">
                <Header
                    logo={logo}
                    navbar={true}
                    navData={navContent}
                    containerFluid={true}
                    navbarAlignment="left"
                />

                <Wrapper>
                    {/* Slider Area */}
                    <div className="tt-offset-20 container-indent">
                        <Container>
                            <Row>
                                <Col md={3} className="tt-hidden-mobile">
                                    <CategoriesMenu
                                        initialVisibility={true}
                                        className="categories-btn-nobtn categories-btn-align tt-categories-size-large"
                                    />
                                </Col>

                                <Col md={8} lg={6}>
                                    <Slider
                                        arrows={true}
                                        data={sliderData}
                                        sliderWrapper="slider-style-7"
                                    />
                                </Col>

                                <Col sm={6} md={4} lg={3} className="text-center d-none d-md-block">
                                    <PromoThree
                                        subtitle="<div class='tt-title-small tt-color-white'>TRENDING</div>"
                                        title="<div class='tt-title-large tt-color-white'>PERFORMANCE PARTS</div>"
                                        thumb="/assets/images/skins/car/promo/skin-carsshop-img01.jpg"
                                        className="tt-promo-box tt-one-child hover-type-2 nomargin"
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    {/* Categories Area */}
                    <div className="container-indent">
                        <Container>
                            <div className="tt-btn-img-list">
                                <Row>
                                    {categories.map((category, idx) => (
                                        <Col xs={6} sm={4} md={3} className="col-8-inrow-lg" key={idx}>
                                            <Category
                                                catName={category}
                                                className="tt-layout-02"
                                                thumb={`/assets/images/skins/car/btn-img0${idx + 1}.png`}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Container>
                    </div>

                    {/* Category Products */}
                    <Products
                        products={carProducts}
                        category="interior"
                        productClass="product-nohover text-left"
                        heading="<span class='tt-white-color'>NEW ARRIVALS</span>"
                        headingThumb="/assets/images/skins/car/promo/skin-carsshop-img02.jpg"
                    />

                    {/* Category Products */}
                    <Products
                        products={carProducts}
                        category="power-adders"
                        productClass="product-nohover text-left"
                        heading="<span class='tt-white-color'>NEW ARRIVALS</span>"
                        headingThumb="/assets/images/skins/car/promo/skin-carsshop-img03.jpg"
                    />

                    {/* Categories Area */}
                    <div className="container-indent">
                        <Container>
                            <Row className="tt-list-sm-shift tt-layout-promo-box">
                                <Col md={3}>
                                    <Row>
                                        <Col xs={12} className="col-12-575width">
                                            <Promo
                                                btn={false}
                                                link="/product/category/cars"
                                                className="tt-one-child hover-type-4"
                                                title="<span class='tt-white-color'>SEATS</span>"
                                                thumb="/assets/images/skins/car/promo/skin-carsshop-img04.png"
                                            />
                                        </Col>
                                        <Col xs={12} className="col-12-575width">
                                            <Promo
                                                btn={false}
                                                link="/product/category/cars"
                                                className="tt-one-child hover-type-4"
                                                title="<span class='tt-white-color'>TRUCK SHOP</span>"
                                                thumb="/assets/images/skins/car/promo/skin-carsshop-img05.png"
                                            />
                                        </Col>
                                    </Row>
                                </Col>

                                <Col sm={6} className="col-12-575width">
                                    <Promo
                                        btn={false}
                                        link="/product/category/cars"
                                        className="tt-one-child hover-type-4"
                                        title="<span class='tt-white-color'>CUSTOM WHEELS</span>"
                                        thumb="/assets/images/skins/car/promo/skin-carsshop-img06.png"
                                    />
                                </Col>

                                <Col md={3} className="col-12-575width">
                                    <Row>
                                        <Col xs={12} className="col-12-575width">
                                            <Promo
                                                btn={false}
                                                link="/product/category/cars"
                                                className="tt-one-child hover-type-4"
                                                title="<span class='tt-white-color'>JEEP SHOP</span>"
                                                thumb="/assets/images/skins/car/promo/skin-carsshop-img07.png"
                                            />
                                        </Col>
                                        <Col xs={12} className="col-12-575width">
                                            <Promo
                                                btn={false}
                                                link="/product/category/cars"
                                                className="tt-one-child hover-type-4"
                                                thumb="/assets/images/skins/car/promo/skin-carsshop-img08.png"
                                                title="<span class='tt-white-color'>RUNNING<br>BOARDS GUID</span>"
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <FeaturedMakes data={makesData}/>

                    {/* Banner Area */}
                    <div className="container-indent">
                        <Container>
                            <Row noGutters>
                                <Col>
                                    <div className="tt-promo-fullwidth">
                                        <img
                                            alt="wokiee-car"
                                            src="/assets/images/skins/car/promo/skin-carsshop-img09.jpg"
                                        />
                                        <div className="tt-description">
                                            <div className="tt-description-wrapper">
                                                <div className="tt-title-small">
                                                    <span className="tt-white-color">OUR EXPERT</span>
                                                </div>
                                                <div className="tt-title-large">
                                                    <span
                                                        className="tt-white-color">REVIEWS AND<br/>INSTALLATIONS</span>
                                                </div>
                                                <Link href="/about">
                                                    <a className="btn">READ MORE ABOUT US</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    {/* Testimonial Area */}
                    <Testimonial
                        className="container-inner tt-custom-box01"
                    />

                    {/* Blog Area */}
                    <LatestBlog blogs={blogs}/>

                    {/* Service Area */}
                    <Services
                        className="wrapper-custom-01 container-inner"
                    />
                </Wrapper>

                <Footer
                    logo={logo}
                    dark={true}
                    className="nomargin"
                />
            </div>
        </Fragment>
    );
};

export async function getStaticProps() {
    const blogs = getBlogPosts([
        'title',
        'excerpt',
        'date',
        'author',
        'thumb',
        'slug',
        'categories'
    ], 3);

    return {
        props: {
            blogs: blogs
        }
    }
}

export default HomeSkinCar;