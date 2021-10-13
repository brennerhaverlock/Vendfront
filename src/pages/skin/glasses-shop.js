import Head from "next/head";
import {Col, Row} from "react-bootstrap";
import {Fragment, useContext} from "react";
import {Products} from "@components/products";
import {getProductsBySkin} from "@utils/product";
import {AboutTwo as About} from "@components/about";
import {PromoThree as Promo} from "@components/promo";
import {SliderOne as Slider} from "@components/slider";
import {ProductsContext} from "@global/ProductsContext";
import {HeaderFour as Header} from "@components/header";
import sliderData from "@data/slider/skin-glasses.json";
import {FooterThree as Footer} from "@components/footer";
import {HomePagesNavData as navContent} from "@data/navbar";
import {ServicesOne as Services} from "@components/services";
import banners from "@data/promo-banners/skin-glasses.json";
import {TestimonialOne as Testimonials} from "@components/testimonials";
import {ContentWrapperOne as Wrapper} from "@components/wrapper";

const HomeSkinGlassesShop = () => {
    const {products} = useContext(ProductsContext);
    const filteredProducts = getProductsBySkin(products, 'glasses');
    const logo = "/assets/images/skins/glasses/logo.png"

    return (
        <Fragment>
            <Head>
                <title>Glasses Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-glasses">
                <Header
                    logo={logo}
                    dark={false}
                    navbar={true}
                    navData={navContent}
                    containerFluid={false}
                    navbarAlignment="left"
                />

                <Wrapper>
                    <Slider
                        dots={false}
                        arrows={false}
                        data={sliderData}
                        className="nomargin"
                        sliderWrapper="slider-style-8"
                    />

                    <div className="nomargin container-indent">
                        <div className="container-fluid-custom">
                            <Row>
                                {banners.map(banner => (
                                    <Col md={6} key={banner.id}>
                                        <Promo
                                            title={banner.title}
                                            thumb={banner.thumb}
                                            buttons={banner.buttons}
                                            subtitle={banner.subtitle}
                                            className="tt-one-child hover-type-4 tt-promo-layout02"
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>

                    <Products
                        layout="grid"
                        products={filteredProducts}
                        sectionTitle="TRENDING"
                        sectionTitleContent="TOP VIEW IN THIS WEEK"
                    />

                    <Testimonials
                        className="tt-wrapper-bg01 container-inner"
                    />

                    <About/>

                    <Services/>
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