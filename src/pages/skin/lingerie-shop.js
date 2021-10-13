import Link from "next/link";
import Head from "next/head";
import parse from "react-html-parser";
import {getBlogPosts} from "@utils/blog";
import LatestBlog from "@components/blog";
import {Fragment, useContext} from "react";
import {Products} from "@components/products";
import {Col, Container, Row} from "react-bootstrap";
import {PromoTwo as Banner} from "@components/promo";
import {FooterOne as Footer} from "@components/footer";
import {HeaderFour as Header} from "@components/header";
import {ProductsContext} from "@global/ProductsContext";
import {HomePagesNavData as navContent} from "@data/navbar";
import {getProducts, getProductsBySkin} from "@utils/product";
import promoBanners from "@data/promo-banners/skin-lingerie.json"
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const HomeSkinLingerie = ({blogs}) => {
    const {products} = useContext(ProductsContext);
    const filteredProducts = getProductsBySkin(products, "lingerie");
    const tendingProducts = getProducts(filteredProducts, 'tending', -1);
    const logo = "/assets/images/skins/lingerie/logo.png";

    return (
        <Fragment>
            <Head>
                <title>Lingerie Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-lingerie">
                <Header
                    logo={logo}
                    navbar={true}
                    dark={false}
                    navData={navContent}
                    navbarAlignment="center"
                    showNotificationBar={false}
                    className=""
                />

                <ContentWrapper>
                    {/* Banner */}
                    <Banner
                        btn={true}
                        btnLink="/shop"
                        className="nomargin"
                        containerFluid={true}
                        title="ALL BRAS<br>3 FOR 2"
                        content="New Dream Angles Bra Collections"
                        subtitle="<span class='tt-base-color'>Limited Time!</span>"
                        thumb="/assets/images/skins/lingerie/promo/index-promo-img-01.jpg"
                    />

                    {/* Promo Banner */}
                    <div className="content-indent">
                        <Container>
                            <Row className="tt-layout-promo-box">
                                {promoBanners.map(promo => (
                                    <Col md={6} key={promo.id}>
                                        <div className="tt-promo02">
                                            <Link href="/shop">
                                                <img src={promo.thumb} alt={promo.title}/>
                                            </Link>
                                            <div className="tt-description text-center">
                                                <Link href="/shop">
                                                    <a className="tt-title">
                                                        <div className="tt-title-small">{parse(promo.subtitle)}</div>
                                                        <div className="tt-title-large">{parse(promo.title)}</div>
                                                    </a>
                                                </Link>
                                                <p>{parse(promo.content)}</p>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>

                    <Products
                        layout="slider"
                        sectionTitle="TRENDING"
                        products={tendingProducts}
                        sectionTitleContent="TOP VIEW IN THIS WEEK"
                    />

                    <LatestBlog
                        blogs={blogs}
                    />

                </ContentWrapper>

                <Footer
                    logo={logo}
                    dark={false}
                    newsletter={false}
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

export default HomeSkinLingerie;