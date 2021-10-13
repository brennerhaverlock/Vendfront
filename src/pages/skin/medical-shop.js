import Head from "next/head";
import {getBlogPosts} from "@utils/blog";
import {Col, Row} from "react-bootstrap";
import LatestBlog from "@components/blog";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import {AboutTwo as About} from "@components/about";
import {FooterOne as Footer} from "@components/footer";
import {HeaderTwo as Header} from "@components/header";
import {ProductsContext} from "@global/ProductsContext";
import {HomePagesNavData as navContent} from "@data/navbar";
import categories from "@data/categories/skin-kids-toys.json";
import {ProductsTabTwo as Products} from "@components/products";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";
import {PromoOne as Promo, PromoTwo as Banner} from "@components/promo";

const HomeSkinMedical = ({blogs}) => {
    const logo = "/assets/images/skins/medical/logo.png";

    const {products} = useContext(ProductsContext);
    const filteredProducts = getProductsBySkin(products, "medical");

    return (
        <Fragment>
            <Head>
                <title>Medical Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-medical tt-boxed">
                <Header
                    logo={logo}
                    dark={false}
                    navData={navContent}
                    showNotificationBar={true}
                />

                <ContentWrapper>
                    {/* Banner */}
                    <Banner
                        btn={true}
                        btnLink="/shop"
                        title="SIEMENS"
                        subtitle="CT SCANNER"
                        containerFluid={true}
                        className="tt-offset-small hero-banner"
                        thumb="/assets/images/skins/medical/promo/promo-img-01.jpg"
                    />

                    <div className="container-indent0">
                        <div className="container-fluid-custom">
                            <Row className="tt-layout-promo-box">
                                <Col md={6}>
                                    <Promo
                                        link="/shop"
                                        title="DENTAL SUPPLIES"
                                        thumb="/assets/images/skins/medical/promo/promo-img-02.jpg"
                                    />
                                </Col>

                                <Col md={6}>
                                    <Promo
                                        link="/shop"
                                        title="ULTRASOUND MACHINES"
                                        thumb="/assets/images/skins/medical/promo/promo-img-03.jpg"
                                    />
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <Products
                        limit={8}
                        showMoreBtn={true}
                        columnWidth={3}
                        products={filteredProducts}
                        productClass="text-left"
                    />

                    <About/>

                    <LatestBlog
                        blogs={blogs}
                    />
                </ContentWrapper>

                <Footer
                    logo={logo}
                    dark={false}
                    newsletter={true}
                />
            </div>
        </Fragment>
    )
}

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

export default HomeSkinMedical;