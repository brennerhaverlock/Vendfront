import Head from "next/head";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import {Col, Container, Row} from "react-bootstrap";
import {PromoThree as Promo} from "@components/promo";
import SectionTitle from "@components/ui/section-title";
import {SliderOne as Slider} from "@components/slider";
import sliderData from "@data/slider/skin-tea.json";
import {ProductsContext} from "@global/ProductsContext";
import {HeaderFive as Header} from "@components/header";
import Parallax, {Layer} from 'react-parallax-scroll';
import {FooterSeven as Footer} from "@components/footer";
import {SkinTeaNavData as navContent} from "@data/navbar";
import {ProductsTab as Products} from "@components/products";
import {ContentWrapperOne as Wrapper} from "@components/wrapper";
import {NewsletterThree as NewsletterForm} from "@components/newsletter";

const HomeSkinTea = () => {
    const {products} = useContext(ProductsContext);
    const teaProducts = getProductsBySkin(products, 'tea');
    const logo = "/assets/images/skins/tea/logo.png";

    const tabData = [
        {key: "new_arrivals", title: "All"},
        {key: "black", title: "Black"},
        {key: "green", title: "Green"},
        {key: "white", title: "White"},
        {key: "tisanes", title: "Tisanes"},
        {key: "blends", title: "Blends"}
    ]

    return (
        <Fragment>
            <Head>
                <title>Tea Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-tea">
                <Header
                    logo={logo}
                    navbar={true}
                    navData={navContent}
                    containerFluid={true}
                    notificationBar={false}
                    navbarAlignment="center"
                    className=" "
                />

                <Wrapper>
                    {/* Slider Area */}
                    <Slider
                        data={sliderData}
                        className="nomargin"
                        sliderWrapper="slider-style-6"
                    />

                    {/* Welcome Area */}
                    <div className="container-indent">
                        <Container>
                            <Row>
                                <Col md={{span: 10, offset: 1}} className="text-center">
                                    <div className="tt-layout-box03">
                                        <h2 className="tt-title">Welcome!</h2>
                                        <p>
                                            A great about us block helps builds trust between you and your customers.
                                            The more content you provide about you and your business, the more confident
                                            people will be when purchasing from your store.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    {/* Collection Area */}
                    <div className="container-indent">
                        <div className="container-fluid-custom">
                            <SectionTitle
                                title="Our<br>Collections"
                            />

                            <Row className="tt-layout-promo-box">
                                <Col sm={6} md={4} className="col-12-440width">
                                    <Promo
                                        title="Teas"
                                        className="tt-one-child hover-type-4"
                                        thumb="/assets/images/skins/tea/promo-img-01.jpg"
                                    />
                                </Col>

                                <Col sm={6} md={4} className="col-12-440width">
                                    <Promo
                                        title="Merch"
                                        className="tt-one-child hover-type-4"
                                        thumb="/assets/images/skins/tea/promo-img-02.jpg"
                                    />
                                </Col>

                                <Col sm={6} md={4} className="col-12-440width">
                                    <Promo
                                        title="Wares"
                                        className="tt-one-child hover-type-4"
                                        thumb="/assets/images/skins/tea/promo-img-03.jpg"
                                    />
                                </Col>
                            </Row>

                        </div>
                    </div>

                    {/* Product Area */}
                    <Products
                        tabData={tabData}
                        showMoreBtn={false}
                        containerFluid={false}
                        products={teaProducts}
                    />

                    {/* About Area */}
                    <div className="container-indent">
                        <Container fluid className="p-0">
                            <Row noGutters>
                                <Col>
                                    <Parallax>
                                        <Layer
                                            settings={{speed: 0.1}}
                                            className="tt-promo-fullwidth tt-promo-parallax"
                                            style={{backgroundImage: 'url(/assets/images/skins/tea/promo-img-04.jpg)'}}
                                        >
                                            <div className="tt-description tt-point-h-l">
                                                <div className="tt-custom-layout">
                                                    <div className="tt-title-small">About Store</div>
                                                    <Row>
                                                        <Col md={6}>
                                                            <div className="custom-indent-right">
                                                                Wokiee Shopify Theme is more than usual theme. It is a
                                                                powerful design tool. Wokiee is outstanding Premium
                                                                Shopify
                                                                theme. It will be perfect solution for your current or
                                                                future webshop.
                                                            </div>
                                                        </Col>
                                                        <div className="divider d-block d-md-none"/>
                                                        <Col md={6}>
                                                            It has all required tools and modules to create super fast
                                                            responsive website with amazing UX. Great variety of
                                                            numerous
                                                            layouts and styles allows to create different structures and
                                                            satisfies any specific requirements.
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        </Layer>
                                    </Parallax>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    {/* Newsletter Area */}
                    <NewsletterForm/>
                </Wrapper>

                <Footer
                    logo={logo}
                    dark={false}
                />
            </div>
        </Fragment>
    );
};

export default HomeSkinTea;