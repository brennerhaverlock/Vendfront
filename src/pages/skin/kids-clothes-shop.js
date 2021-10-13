import Link from "next/link";
import Head from "next/head";
import {Fragment, useContext} from "react";
import {Products} from "@components/products";
import {PromoOne as Promo} from "@components/promo";
import {Col, Container, Row} from "react-bootstrap";
import {SliderOne as Slider} from "@components/slider";
import {HeaderFour as Header} from "@components/header";
import {ProductsContext} from "@global/ProductsContext";
import {FooterThree as Footer} from "@components/footer";
import {HomePagesNavData as navContent} from "@data/navbar";
import sliderData from "@data/slider/skin-kids-clothes.json";
import {ServicesTwo as Services} from "@components/services";
import {getProducts, getProductsBySkin} from "@utils/product";
import banners from "@data/promo-banners/skin-kids-clothes.json";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const HomeSkinKidsClothes = () => {
    const {products} = useContext(ProductsContext);
    const logo = "/assets/images/skins/kids/logo.png";
    const filteredProducts = getProductsBySkin(products, "kids-clothes");
    const bestSellerProducts = getProducts(filteredProducts, "best-seller", -1);

    const categories = ['Girl (3-12 years)', 'Boy (3-12 years)', 'Baby Girl (3 months-2 years)', 'Baby Boy (3 months-2 years)', 'New Born (1-18 months)']

    return (
        <Fragment>
            <Head>
                <title>Kids Clothes Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-kids-clothes">
                <Header
                    logo={logo}
                    dark={true}
                    navbar={true}
                    navData={navContent}
                    navbarAlignment="center"
                    showNotificationBar={false}
                />

                <ContentWrapper>
                    <Slider
                        data={sliderData}
                        className="nomargin"
                        contentAlign="left"
                        sliderWrapper="slider-style-2"
                    />

                    {/* Sale Banner */}
                    <div className="tt-custom-wrapper">
                        <Container>
                            <Row>
                                <Col
                                    className="text-center"
                                    lg={{span: 8, offset: 2}}
                                    md={{span: 10, offset: 1}}
                                >
                                    <div className="tt-layout-box03">
                                        <h2 className="tt-title">UP TO 50% OFF<br/>SELECT KIDS OUTERWEAR</h2>
                                        <p>Offer valid on select styles through 02/25/2019 or while supplies last.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    {/* Categories */}
                    <div className="container-indent">
                        <Container>
                            <div className="tt-btn-img-list">
                                <Row>
                                    {categories.map((category, idx) => (
                                        <Col xs={6} sm={4} className="col-5-inrow-lg" key={idx}>
                                            <Link href="/product/category/clothes">
                                                <a className="tt-btn-info tt-layout-03">
                                                    <div className="tt-title">{category}</div>
                                                </a>
                                            </Link>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Container>
                    </div>

                    <Products
                        layout="slider"
                        sectionTitle="Best Sellers"
                        products={bestSellerProducts}
                    />

                    {/* Banner */}
                    <div className="container-indent">
                        <Container>
                            <Row className="tt-layout-promo-box">
                                {banners.map(banner => (
                                    <Col md={banner.id === 1 || banner.id === 4 ? 12 : 6} key={banner.id}>
                                        <Promo
                                            heading={banner.title}
                                            title={banner.subtitle}
                                            thumb={banner.thumb}
                                            btn={true}
                                            btnClass={banner.btnClass}
                                            btnText={banner.btnText}
                                            link={banner.btnLink}
                                            bgClass="d-none"
                                            className="text-left"
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>

                    <Services/>
                </ContentWrapper>

                <Footer
                    logo={logo}
                    dark={false}
                    newsletter={false}
                    className="only-copyright"
                />
            </div>
        </Fragment>
    )
}

export default HomeSkinKidsClothes;