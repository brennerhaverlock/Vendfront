import Link from "next/link";
import Head from "next/head";
import {getBlogPosts} from "@utils/blog";
import makesData from "@data/makes.json"
import LatestBlog from "@components/blog";
import {Fragment, useContext} from "react";
import FeaturedMakes from "@components/makes";
import {toCapitalize} from "@utils/toCapitalize";
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "@components/ui/section-title";
import sliderData from "@data/slider/skin-tools.json";
import {PromoThree as Promo} from "@components/promo";
import {SliderTwo as Slider} from "@components/slider";
import {ProductsContext} from "@global/ProductsContext";
import {HeaderSeven as Header} from "@components/header";
import {FooterSeven as Footer} from "@components/footer";
import CategoriesMenu from "@components/categories-menu";
import {SkinTeaNavData as navContent} from "@data/navbar";
import {MostPopular as Products} from "@components/products";
import {ContentWrapperOne as Wrapper} from "@components/wrapper";
import {getProductsBySkin, getProductsUniqueCategories} from "@utils/product";

const HomeSkinTools = ({blogs}) => {
    const {products} = useContext(ProductsContext);
    const toolsProducts = getProductsBySkin(products, 'tools');
    const logo = "/assets/images/skins/tools/logo.png";
    const categories = getProductsUniqueCategories(toolsProducts, -1);

    return (
        <Fragment>
            <Head>
                <title>Tools Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-tools">
                <Header
                    logo={logo}
                    navbar={true}
                    navData={navContent}
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

                    {/* Shop by Categories Area */}
                    <div className="container-indent">
                        <SectionTitle
                            title="SHOP BY CATEGORY"
                        />

                        <Container>
                            <div className="tt-btn-img-list">
                                <Row>
                                    {categories.slice(1, 5).map((category, index) => (
                                        <Col sm={6} lg={3} className="col-12-440width" key={index}>
                                            <Link href={`/product/category/${category}`}>
                                                <a className="tt-btn-img tt-layout-02">
                                                    <div
                                                        className="tt-img"
                                                        style={{backgroundImage: `url(/assets/images/skins/tools/btn-img0${index + 1}.jpg)`}}
                                                    />
                                                    <div className="tt-title">
                                                        {toCapitalize(category.replace('-', ' '))}
                                                    </div>
                                                </a>
                                            </Link>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Container>
                    </div>

                    {/* Featured Makes Area */}
                    <FeaturedMakes data={makesData}/>

                    {/* Product Area */}
                    <Products
                        limit={7}
                        layout="slider"
                        showMoreBtn={false}
                        containerFluid={false}
                        products={toolsProducts}
                        productClass="product-nohover"
                    />

                    {/* Popular Categories */}
                    <div className="container-indent">
                        <Container>
                            <SectionTitle
                                title="POPULAR CATEGORIES"
                            />

                            <Row className="tt-list-sm-shift">
                                <Col md={3}>
                                    <Row>
                                        <Col sm={6} md={12} className="col-12-575width">
                                            <Promo
                                                subtitle="Drills"
                                                className="tt-one-child hover-type-4"
                                                thumb="/assets/images/skins/tools/promo/promo-img-01.jpg"
                                            />
                                        </Col>

                                        <Col sm={6} md={12} className="col-12-575width">
                                            <Promo
                                                subtitle="Multi Tools"
                                                className="tt-one-child hover-type-4"
                                                thumb="/assets/images/skins/tools/promo/promo-img-02.jpg"
                                            />
                                        </Col>
                                    </Row>
                                </Col>

                                <Col md={6} className="col-12-575width">
                                    <Promo
                                        subtitle="Hammer<br>Driver-Drills"
                                        className="tt-one-child hover-type-4"
                                        thumb="/assets/images/skins/tools/promo/promo-img-03.jpg"
                                    />
                                </Col>

                                <Col md={3} className="col-12-575width">
                                    <Row>
                                        <Col sm={6} md={12} className="col-12-575width">
                                            <Promo
                                                subtitle="Circular<br> Saws"
                                                className="tt-one-child hover-type-4"
                                                thumb="/assets/images/skins/tools/promo/promo-img-04.jpg"
                                            />
                                        </Col>

                                        <Col sm={6} md={12} className="col-12-575width">
                                            <Promo
                                                subtitle="Multi Cutters"
                                                className="tt-one-child hover-type-4"
                                                thumb="/assets/images/skins/tools/promo/promo-img-05.jpg"
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                        </Container>
                    </div>

                    {/* About Area */}
                    <div className="container-indent">
                        <div className="layout-wrapper-01 container-inner">
                            <Container>
                                <Row className="tt-layout-box01 align-items-center">
                                    <Col md={6} className="col-img">
                                        <img
                                            alt="wokiee"
                                            className="w-100"
                                            src="/assets/images/skins/tools/img-01.jpg"
                                        />
                                    </Col>

                                    <Col md={6} className="col-description pl-lg-5">
                                        <h6 className="tt-title">About Store</h6>
                                        <p>A great about us block helps builds trust between you and your customers.
                                            The more content you provide about you and your business, the more confident
                                            people will be when purchasing from your store.</p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>

                    {/* Blog Area */}
                    <LatestBlog blogs={blogs}/>
                </Wrapper>

                <Footer
                    logo={logo}
                    dark={false}
                />
            </div>
        </Fragment>
    );
};

export async function getStaticProps({req}) {
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

export default HomeSkinTools;