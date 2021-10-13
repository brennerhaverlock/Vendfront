import Head from "next/head";
import {Col, Container, Row} from "react-bootstrap";
import {Fragment, useContext} from "react";
import {Products} from "@components/products";
import {getProductsBySkin} from "@utils/product";
import {AboutTwo as About} from "@components/about";
import {PromoOne as Promo} from "@components/promo";
import {SliderOne as Slider} from "@components/slider";
import sliderData from "@data/slider/skin-gothic.json";
import {ProductsContext} from "@global/ProductsContext";
import {HeaderFour as Header} from "@components/header";
import {FooterThree as Footer} from "@components/footer";
import {HomePagesNavData as navContent} from "@data/navbar";
import {ServicesOne as Services} from "@components/services";
import banners from "@data/promo-banners/skin-glasses.json";
import {TestimonialOne as Testimonials} from "@components/testimonials";
import {ContentWrapperOne as Wrapper} from "@components/wrapper";
import {NotificationBarFour as NotificationBar} from "@components/notification-bar";
import SectionTitle from "@components/ui/section-title";
import {ProductOne as Product} from "@components/product";

const HomeSkinGlassesShop = () => {
    const {products} = useContext(ProductsContext);
    const filteredProducts = getProductsBySkin(products, 'gothic');
    const logo = "/assets/images/skins/gothic/logo.png"

    return (
        <Fragment>
            <Head>
                <title>Gothic Clothing Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-gothic">
                <NotificationBar/>
                <Header
                    logo={logo}
                    dark={true}
                    navbar={true}
                    navData={navContent}
                    containerFluid={false}
                    navbarAlignment="center"
                    showNotificationBar={false}
                />

                <Wrapper>
                    <Slider
                        dots={false}
                        arrows={false}
                        data={sliderData}
                        className="nomargin"
                        sliderWrapper="slider-style-8"
                    />

                    <div className="container-indent">
                        <Container fluid>
                            <Row className="tt-layout-promo-box">
                                <Col md={6}>
                                    <Promo
                                        heading="Women’s"
                                        bgClass="d-none"
                                        link="/product/category/women"
                                        className="tt-one-child hover-type-4"
                                        thumb="/assets/images/skins/gothic/promo/promo-img-01.jpg"
                                    />
                                </Col>

                                <Col md={6}>
                                    <Promo
                                        heading="Men’s"
                                        bgClass="d-none"
                                        link="/product/category/men"
                                        className="tt-one-child hover-type-4"
                                        thumb="/assets/images/skins/gothic/promo/promo-img-02.jpg"
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="container-indent">
                        <Container>
                            <SectionTitle
                                title="New Items"
                            />

                            <Row className="tt-layout-product-item">
                                {filteredProducts.map(product => (
                                    <Col sm={6} lg={4} key={product.id}>
                                        <Product
                                            product={product}
                                            showVariant={false}
                                            className="text-left"
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>
                </Wrapper>

                <Footer
                    logo={logo}
                    dark={true}
                    newsletter={false}
                    className="only-copyright"
                />
            </div>
        </Fragment>
    );
};

export default HomeSkinGlassesShop;