import Head from "next/head";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import {Col, Container, Row} from "react-bootstrap";
import {HeaderNine as Header} from "@components/header";
import {ProductsContext} from "@global/ProductsContext";
import {NewsletterThree as Newsletter} from "@components/newsletter";
import {FooterSeven as Footer} from "@components/footer";
import {SkinTeaNavData as navContent} from "@data/navbar";
import sliderData from "@data/slider/skin-watches.json";
import {MostPopular} from "@components/products";
import {ContentWrapperOne as Wrapper} from "@components/wrapper";
import {SliderOne} from "@components/slider";
import SectionTitle from "@components/ui/section-title";
import {PromoThree as Promo} from "@components/promo";

const HomeSkinWatch = () => {
    const {products} = useContext(ProductsContext);
    const watchProducts = getProductsBySkin(products, 'watches');
    const logo = "/assets/images/skins/watches/logo.png";

    return (
        <Fragment>
            <Head>
                <title>Watch Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-watches">
                <Header
                    logo={logo}
                    navbar={true}
                    navData={navContent}
                    containerFluid={true}
                    navbarAlignment="center"
                />

                <Wrapper>
                    {/* Slider Area */}
                    <SliderOne
                        data={sliderData}
                        sliderWrapper="slider-style-2"
                        className="nomargin"
                    />

                    {/* Collection Area */}
                    <div className="container-indent">
                        <Container>
                            <SectionTitle
                                title="Our Collections"
                                content="A great about us block helps builds trust between you and your customers. The more content you provide about you and your business, the more confident people will be when purchasing from your store."
                            />
                        </Container>

                        <Container fluid>
                            <Row className="tt-list-sm-shift">
                                <Col md={3}>
                                    <Row>
                                        <Col xs={12} className="col-12-575width">
                                            <Promo
                                                buttons={false}
                                                className="tt-one-child hover-type-4"
                                                thumb="/assets/images/skins/watches/index-promo-img-01.jpg"
                                                subtitle="<span class='tt-white-color'>Women's Watches →</span>"
                                            />
                                        </Col>
                                        <Col xs={12} className="col-12-575width">
                                            <Promo
                                                buttons={false}
                                                subtitle="New Arrival →"
                                                className="tt-one-child hover-type-4"
                                                thumb="/assets/images/skins/watches/index-promo-img-02.jpg"
                                            />
                                        </Col>
                                    </Row>
                                </Col>

                                <Col sm={6} className="col-12-575width">
                                    <Promo
                                        buttons={false}
                                        className="tt-one-child hover-type-4"
                                        subtitle="<span class='tt-white-color'>Men's Watches →</span>"
                                        thumb="/assets/images/skins/watches/index-promo-img-03.jpg"
                                    />
                                </Col>

                                <Col md={3} className="col-12-575width">
                                    <Row>
                                        <Col xs={12} className="col-12-575width">
                                            <Promo
                                                buttons={false}
                                                className="tt-one-child hover-type-4"
                                                thumb="/assets/images/skins/watches/index-promo-img-04.jpg"
                                                subtitle="<span class='tt-white-color'>Clearance Sale →</span>"
                                            />
                                        </Col>
                                        <Col xs={12} className="col-12-575width">
                                            <Promo
                                                buttons={false}
                                                subtitle="Discover Now →"
                                                className="tt-one-child hover-type-4"
                                                thumb="/assets/images/skins/watches/index-promo-img-05.jpg"
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    {/* Product Area */}
                    <MostPopular
                        limit={8}
                        showMoreBtn={false}
                        containerFluid={true}
                        products={watchProducts}
                    />

                    {/* About Area */}
                    <div className="container-indent">
                        <div className="tt-wrapper-layoutbox03">
                            <div className="container-inner">
                                <Container>
                                    <Row>
                                        <Col md={{span: 10, offset: 1}} lg={{span: 8, offset: 2}}>
                                            <div className="tt-layout-box03 text-left">
                                                <h2 className="tt-title">About Store</h2>
                                                <p>WOKIEE React template is more than usual theme. It is a powerful
                                                    design tool. WOKIEE is outstanding Premium Shopify theme. It will be
                                                    perfect solution for your current or future webshop.</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                    </div>

                    <Newsletter
                        className="text-center"
                    />
                </Wrapper>

                <Footer
                    logo={logo}
                    dark={false}
                />
            </div>
        </Fragment>
    );
};

export default HomeSkinWatch;