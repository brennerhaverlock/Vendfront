import Link from "next/link";
import Head from "next/head";
import {getBlogPosts} from "@utils/blog";
import makesData from "@data/makes.json";
import LatestBlog from "@components/blog";
import {Fragment, useContext} from "react";
import FeaturedMakes from "@components/makes";
import {getProductsBySkin} from "@utils/product";
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "@components/ui/section-title";
import {SliderOne as Slider} from "@components/slider";
import sliderData from "@data/slider/skin-bicycle.json";
import {ProductsContext} from "@global/ProductsContext";
import {FooterThree as Footer} from "@components/footer";
import CategoriesMenu from "@components/categories-menu";
import {HeaderSeven as Header} from "@components/header";
import {SkinTeaNavData as navContent} from "@data/navbar";
import {ServicesTwo as Services} from "@components/services";
import {CategoryThree as Category} from "@components/category";
import {PromoOne as Promo, PromoThree} from "@components/promo";
import {CategoryTypeWiseTwo as Products} from "@components/products";
import {TestimonialOne as Testimonial} from "@components/testimonials";
import {ContentWrapperOne as Wrapper} from "@components/wrapper";

const HomeSkinBicycle = ({blogs}) => {
    const {products} = useContext(ProductsContext);
    const bicycleProducts = getProductsBySkin(products, 'bicycle');
    const logo = "/assets/images/skins/bicycle/logo.png";
    const categories = ['BIKE', 'HELMETS', 'EQUIPMENT', 'WHEELS', 'SEATS', 'CLOTHING']

    return (
        <Fragment>
            <Head>
                <title>Bicycle Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-bicycle">
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
                                        arrows={false}
                                        data={sliderData}
                                        sliderWrapper="slider-style-7"
                                    />
                                </Col>

                                <Col sm={6} md={4} lg={3} className="text-center d-none d-md-block">
                                    <PromoThree
                                        subtitle="LARGE SELECTION"
                                        title="SHOES<br>ON SALE"
                                        buttons={[
                                            {text: "SHOW NOW", link: "/shop"}
                                        ]}
                                        thumb="/assets/images/skins/bicycle/promo/promo-img-01.jpg"
                                        className="tt-one-child hover-type-4 tt-promo-layout02 nomargin"
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
                                        <Col xs={6} sm={4} lg={2} key={idx}>
                                            <Category
                                                catName={category}
                                                className="tt-layout-02"
                                                thumb={`/assets/images/skins/bicycle/btn-img0${idx + 1}.jpg`}
                                            />
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Container>
                    </div>

                    {/* Featured Masks */}
                    <FeaturedMakes
                        data={makesData}
                        className="tt-layout-03"
                    />

                    {/* Bike Category Products */}
                    <Products
                        category="bike"
                        products={bicycleProducts}
                        heading="<span class='tt-base-color'>NEW ARRIVALS</span>"
                        headingThumb="/assets/images/skins/bicycle/promo/promo-img-02.jpg"
                    />

                    {/* Equipment Category Products */}
                    <Products
                        category="equipment"
                        products={bicycleProducts}
                        heading="<span class='tt-white-color'>NEW ARRIVALS</span>"
                        headingThumb="/assets/images/skins/bicycle/promo/promo-img-03.jpg"
                    />

                    {/* Categories Area */}
                    <div className="container-indent">
                        <Container>
                            <SectionTitle
                                title="POPULAR CATEGORIES"
                            />

                            <Row className="tt-list-sm-shift tt-layout-promo-box">
                                <Col md={3}>
                                    <Row>
                                        <Col xs={12} className="col-12-575width">
                                            <Promo
                                                btn={false}
                                                link="/product/category/bicycle"
                                                className="tt-one-child hover-type-4"
                                                thumb="/assets/images/skins/bicycle/promo/promo-img-05.png"
                                                title="<span class='tt-white-color'>ELECTRIC BIKES</span>"
                                            />
                                        </Col>
                                        <Col xs={12} className="col-12-575width">
                                            <Promo
                                                btn={false}
                                                link="/product/category/bicycle"
                                                className="tt-one-child hover-type-4"
                                                thumb="/assets/images/skins/bicycle/promo/promo-img-06.png"
                                                title="<span class='tt-white-color'>NEW ARRIVALS</span>"
                                            />
                                        </Col>
                                    </Row>
                                </Col>

                                <Col sm={6} className="col-12-575width">
                                    <Promo
                                        btn={false}
                                        link="/product/category/bicycle"
                                        className="tt-one-child hover-type-4"
                                        title="<span class='tt-white-color'>MOUNTAIN BIKES</span>"
                                        thumb="/assets/images/skins/bicycle/promo/promo-img-07.png"
                                    />
                                </Col>

                                <Col md={3} className="col-12-575width">
                                    <Row>
                                        <Col xs={12} className="col-12-575width">
                                            <Promo
                                                btn={false}
                                                link="/product/category/bicycle"
                                                className="tt-one-child hover-type-4"
                                                title="<span class='tt-white-color'>ROAD BIKES</span>"
                                                thumb="/assets/images/skins/bicycle/promo/promo-img-08.png"
                                            />
                                        </Col>
                                        <Col xs={12} className="col-12-575width">
                                            <Promo
                                                btn={false}
                                                link="/product/category/bicycle"
                                                className="tt-one-child hover-type-4"
                                                title="<span class='tt-white-color'>BMX BIKES</span>"
                                                thumb="/assets/images/skins/bicycle/promo/promo-img-09.png"
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    {/* Banner Area */}
                    <div className="container-indent">
                        <Container>
                            <Row noGutters>
                                <Col>
                                    <div className="tt-promo-fullwidth">
                                        <img
                                            src="/assets/images/skins/bicycle/promo/promo-img-11.jpg"
                                            alt="wokiee-bicycle"
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
                        className="container-inner container-custom-bg01"
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

export default HomeSkinBicycle;