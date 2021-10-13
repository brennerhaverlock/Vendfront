import Head from "next/head";
import Link from "next/link";
import {Fragment, useContext} from "react";
import {Products} from "@components/products";
import {getProductsBySkin} from "@utils/product";
import {Col, Container, Row} from "react-bootstrap";
import Parallax, {Layer} from "react-parallax-scroll";
import {FooterOne as Footer} from "@components/footer";
import {HeaderNine as Header} from "@components/header";
import {ProductsContext} from "@global/ProductsContext";
import {HomePagesNavData as navContent} from "@data/navbar";
import promoBanners from "@data/promo-banners/skin-phones.json";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";
import {PromoTwo as PromoBanner, PromoThree as Promo} from "@components/promo";

const HomeSkinPhones = () => {
    const logo = "/assets/images/skins/phones/logo.png";

    const {products} = useContext(ProductsContext);
    const filteredProducts = getProductsBySkin(products, "phones");

    return (
        <Fragment>
            <Head>
                <title>Phones Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-phones">
                <Header
                    logo={logo}
                    dark={false}
                    navbar={true}
                    navData={navContent}
                    showNotificationBar={true}
                />

                <ContentWrapper>
                    {/* Hero Banner */}
                    <div className="container-indent">
                        <Container fluid>
                            <Parallax>
                                <Layer
                                    settings={{speed: 0.2, type: 'backgroundY'}}
                                    className="tt-promo-fullwidth tt-promo-parallax bg-position-bottom"
                                    style={{backgroundImage: 'url(/assets/images/skins/phones/promo/index-promo-img-01.jpg)'}}
                                >
                                    <div className="tt-description tt-point-v-t">
                                        <div className="tt-description-wrapper">
                                            <div className="tt-title-large">Galaxy Note9.</div>
                                            <div className="tt-title-small">
                                                <span className="tt-base-color">Say hello to the future.</span>
                                            </div>
                                            <Link href="/shop">
                                                <a className="btn btn-xl">SHOP NOW!</a>
                                            </Link>
                                        </div>
                                    </div>
                                </Layer>
                            </Parallax>
                        </Container>
                    </div>

                    {/* Promo Banner */}
                    <PromoBanner
                        btn={true}
                        btnLink="/shop"
                        title="Iphone X."
                        containerFluid={true}
                        className="tt-offset-small"
                        subtitle="The new super powerful."
                        thumb="/assets/images/skins/phones/promo/index-promo-img-02.jpg"
                    />

                    <Products
                        layout="slider"
                        sectionTitle="TRENDING"
                        products={filteredProducts}
                        sectionTitleContent="TOP VIEW IN THIS WEEK"
                    />

                    <div className="container-indent">
                        <Container fluid>
                            <Row className="tt-layout-promo-box">
                                {promoBanners.map(banner => (
                                    <Col md={6} key={banner.id}>
                                        <Promo
                                            title={banner.title}
                                            thumb={banner.thumb}
                                            subtitle={banner.subtitle}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>
                </ContentWrapper>

                <Footer
                    logo={logo}
                    dark={false}
                    newsletter={false}
                    className="tt-offset-20"
                />
            </div>
        </Fragment>
    )
}

export default HomeSkinPhones;