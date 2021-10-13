import Head from "next/head";
import {getBlogPosts} from "@utils/blog";
import LatestBlog from "@components/blog";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import {PromoOne as Promo} from "@components/promo";
import {Col, Container, Row} from "react-bootstrap";
import SectionTitle from "@components/ui/section-title";
import {SliderOne as Slider} from "@components/slider";
import sliderData from "@data/slider/skin-t-shirt.json";
import {HeaderFive as Header} from "@components/header";
import {ProductsContext} from "@global/ProductsContext";
import {FooterThree as Footer} from "@components/footer";
import {SkinTShirtNavData as navContent} from "@data/navbar";
import {ProductsTab as Products} from "@components/products";
import {ContentWrapperOne as Wrapper} from "@components/wrapper";

const HomeSkinTshirt = ({blogs}) => {
    const {products} = useContext(ProductsContext);
    const tshirtProducts = getProductsBySkin(products, 't-shirt');
    const logo = "/assets/images/skins/t-shirts/logo.png";

    const tabData = [
        {key: "new_arrivals", title: "New Arrivals"},
        {key: "clearance", title: "Clearance"},
        {key: "men", title: "Men"},
        {key: "women", title: "Women"},
    ]

    return (
        <Fragment>
            <Head>
                <title>T-Shirt Shop </title>
            </Head>

            <div className="home-skin-t-shirt">
                <Header
                    logo={logo}
                    navbar={true}
                    navData={navContent}
                    containerFluid={false}
                    notificationBar={false}
                    navbarAlignment="center"
                    className="tt-header-static tt-bg-01"
                />

                <Wrapper>
                    {/* Slider Area */}
                    <Slider
                        data={sliderData}
                        className="nomargin"
                        sliderWrapper="slider-style-6"
                    />

                    {/* Product Area */}
                    <Products
                        tabData={tabData}
                        containerFluid={false}
                        products={tshirtProducts}
                    />

                    {/* About Area */}
                    <div className="container-indent t-shirt-about-area">
                        <div className="container-inner">
                            <Container>
                                <Row>
                                    <Col md={{span: 10, offset: 1}} lg={{span: 8, offset: 2}} className="text-center">
                                        <div className="tt-layout-box03">
                                            <h2 className="tt-title">About Store</h2>
                                            <p>A great about us block helps builds trust between you and your
                                                customers. The more content you provide about you and your business, the
                                                more confident people will be when purchasing from your store.</p>
                                            <figure className="mt-3">
                                                <img src="/assets/images/skins/t-shirts/img-01.jpg" alt="wokiee-about"/>
                                            </figure>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>

                    {/* Collection Area */}
                    <div className="container-indent">
                        <Container>
                            <SectionTitle
                                title="Collections"
                            />

                            <Row className="flex-sm-row-reverse tt-layout-promo-box">
                                <Col md={6}>
                                    <Row>
                                        <Col sm={6}>
                                            <Promo
                                                title="Mens→"
                                                btn={false}
                                                className="tt-one-child"
                                                link="/product/category/men"
                                                thumb="/assets/images/skins/t-shirts/promo/index-promo-img-02.jpg"
                                            />
                                        </Col>

                                        <Col sm={6}>
                                            <Promo
                                                title="Women→"
                                                btn={false}
                                                className="tt-one-child"
                                                link="/product/category/women"
                                                thumb="/assets/images/skins/t-shirts/promo/index-promo-img-03.jpg"
                                            />
                                        </Col>

                                        <Col sm={12}>
                                            <Promo
                                                title="Clearance→"
                                                btn={false}
                                                className="tt-one-child"
                                                link="/product/category/clearance"
                                                thumb="/assets/images/skins/t-shirts/promo/index-promo-img-04.jpg"
                                            />
                                        </Col>
                                    </Row>
                                </Col>

                                <Col md={6}>
                                    <Promo
                                        title="New Arrivals→"
                                        btn={false}
                                        className="tt-one-child"
                                        link="/shop"
                                        thumb="/assets/images/skins/t-shirts/promo/index-promo-img-01.jpg"
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    {/* Blog Area */}
                    <LatestBlog
                        blogs={blogs}
                        sectionTitle="Our Blog"
                    />
                </Wrapper>

                <Footer
                    dark={true}
                    logo={logo}
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

export default HomeSkinTshirt;