import Head from "next/head";
import Link from "next/link";
import {Fragment, useContext} from "react";
import {Products} from "@components/products";
import {Col, Container, Row} from "react-bootstrap";
import {PromoOne as Promo} from "@components/promo";
import Parallax, {Layer} from 'react-parallax-scroll';
import {HeaderOne as Header} from "@components/header";
import {SliderOne as Slider} from "@components/slider";
import {FooterOne as Footer} from "@components/footer";
import {ProductsContext} from "@global/ProductsContext";
import {BrandsThree as Brands} from "@components/brands";
import sliderData from "@data/slider/skin-showboards.json";
import {HomePagesNavData as navContent} from "@data/navbar";
import {CategoryOne as Category} from "@components/category";
import {getProducts, getProductsBySkin} from "@utils/product";
import banners from "@data/promo-banners/skin-snowboards.json";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const HomeSkinSnowboards = () => {
    const {products} = useContext(ProductsContext);
    const logo = "/assets/images/skins/snowboards/logo.png";
    const filteredProducts = getProductsBySkin(products, "snowboards");
    const tendingProducts = getProducts(filteredProducts, 'tending', -1);
    const categories = ['BOARDS', 'SALE', 'MEN', 'ACCESSORIES', 'MEN\'S SNOWBOARD CLOTHING', 'WOMEN\'S SNOWBOARD CLOTHING'];

    return (
        <Fragment>
            <Head>
                <title>Home Snowboards :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-snowboards">
                <Header
                    logo={logo}
                    dark={false}
                    navbar={true}
                    navData={navContent}
                    navbarAlignment="left"
                />

                <ContentWrapper>
                    <Slider
                        dots={true}
                        arrows={true}
                        data={sliderData}
                        className="nomargin"
                    />

                    <div className="container-indent nomargin">
                        <Container fluid>
                            <Row>
                                {categories.map((category, index) => (
                                    <Col key={index} sm={6} md={index === 4 || index === 5 ? 6 : 3}>
                                        <Category
                                            category={category}
                                            textPosition="tt-point-v-b"
                                            thumb={`/assets/images/skins/snowboards/promo/index-promo-img-0${index + 1}.gif`}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>

                    <Products
                        layout="slider"
                        slidesToShow={6}
                        containerFluid={true}
                        sectionTitle="TENDING"
                        products={tendingProducts}
                        sectionTitleContent="TOP SALE IN THIS WEEK"
                    />

                    <div className="container-indent1">
                        <Container fluid className="p-0">
                            <Parallax>
                                <Layer
                                    className="tt-promo-fullwidth tt-promo-parallax"
                                    style={{backgroundImage: 'url(/assets/images/skins/snowboards/promo/index-promo-img-08.jpg)'}}
                                >
                                    <div className="tt-description">
                                        <div className="tt-description-wrapper">
                                            <div className="tt-title-small">
                                                <span className="tt-light-green-color">MEN’S</span>
                                            </div>
                                            <div className="tt-title-large">
                                                <span className="tt-white-color">SALES<br/>70% Off</span>
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

                    <Products
                        layout="slider"
                        slidesToShow={6}
                        containerFluid={true}
                        products={filteredProducts}
                        sectionTitle="OUR COLLECTIONS"
                        sectionTitleContent="WINTER 2021"
                    />

                    <div className="container-indent">
                        <Container fluid>
                            <Row className="tt-layout-promo-box">
                                {banners.map(banner => (
                                    <Col md={6} key={banner.id}>
                                        <Promo
                                            link={banner.link}
                                            thumb={banner.thumb}
                                            title={banner.title}
                                            heading={banner.heading}
                                            className="tt-one-child"
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>

                    <Brands/>
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

export default HomeSkinSnowboards;