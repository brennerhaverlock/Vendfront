import Link from "next/link";
import Head from "next/head";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import {Col, Container, Row} from "react-bootstrap";
import {BrandTwo as Brand} from "@components/brand";
import {PromoOne as Promo} from "@components/promo";
import sliderData from "@data/slider/skin-toys.json";
import SectionTitle from "@components/ui/section-title";
import {FooterOne as Footer} from "@components/footer";
import {SliderOne as Slider} from "@components/slider";
import {ProductsContext} from "@global/ProductsContext";
import brandData from "@data/brand/skin-kids-toys.json";
import {HeaderThree as Header} from "@components/header";
import {HomePagesNavData as navContent} from "@data/navbar";
import {CategoryFour as Category} from "@components/category"
import categories from "@data/categories/skin-kids-toys.json";
import {ProductsTabTwo as Products} from "@components/products";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const HomeSkinKidsToys = () => {
    const {products} = useContext(ProductsContext);
    const logo = "/assets/images/skins/toys/logo.png";
    const filteredProducts = getProductsBySkin(products, "kids-toys");
    const ages = ['Birth - 24 Months', '2 - 4 Years', '5 -7 Years', '8 -13 Years', '14 Years & Up'];

    return (
        <Fragment>
            <Head>
                <title>Kids Toys Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-kids-toys">
                <Header
                    logo={logo}
                    dark={false}
                    navbar={true}
                    navData={navContent}
                    navbarAlignment="left"
                    showNotificationBar={false}
                />

                <ContentWrapper>
                    <Slider
                        data={sliderData}
                        className="nomargin"
                        contentAlign="left"
                        sliderWrapper="slider-style-2"
                    />

                    {/* Shop By Age */}
                    <div className="container-indent">
                        <Container>
                            <SectionTitle
                                title="Shop by Age"
                                className="text-left"
                            />
                            <div className="tt-btn-img-list">
                                <Row>
                                    {ages.map((age, idx) => (
                                        <Col xs={6} sm={4} className="col-5-inrow-lg" key={idx}>
                                            <Link href="/product/category/toys">
                                                <a className={`tt-btn-info tt-layout-03 tt-btn-info-color0${idx + 1}`}>
                                                    <div className="tt-title">{age}</div>
                                                </a>
                                            </Link>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Container>
                    </div>

                    {/* Shop By Categories */}
                    <div className="container-indent">
                        <Container>
                            <SectionTitle
                                title="Shop by Category"
                                className="text-left"
                            />
                            <Row className="tt-layout-promo02">
                                {categories.map((category, idx) => (
                                    <Col sm={6} md={3} className="col-12-440width" key={idx}>
                                        <Category
                                            category={category.category}
                                            thumb={category.thumb}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>

                    {/* Brands */}
                    <div className="container-indent">
                        <Container>
                            <SectionTitle
                                title="Favorite Brands"
                                className="text-left"
                            />

                            <Row className="tt-layout-promo-box">
                                {brandData.map(brand => (
                                    <Col xs={6} sm={4} md={3} key={brand.id}>
                                        <Brand
                                            logo={brand.logo}
                                            link={brand.link}
                                            thumb={brand.thumb}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>

                    <Products
                        limit={12}
                        showMoreBtn={false}
                        products={filteredProducts}
                        productClass="product-nohover text-left"
                    />

                    {/* Banner */}
                    <div className="container-indent">
                        <Container fluid>
                            <Row className="tt-layout-promo-box">
                                <Col md={6}>
                                    <Promo
                                        btn={false}
                                        title="Preschool"
                                        heading="<span class='tt-base-color'>Get up to 50% Off</span>"
                                        link="/product/category/toys"
                                        thumb="/assets/images/skins/toys/promo/promo-img-09.jpg"
                                    />
                                </Col>

                                <Col md={6}>
                                    <Promo
                                        btn={false}
                                        title="Dolls &amp; Accessories"
                                        heading="<span class='tt-base-color'>Get up to 50% Off</span>"
                                        link="/product/category/toys"
                                        thumb="/assets/images/skins/toys/promo/promo-img-10.jpg"
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </ContentWrapper>

                <Footer
                    logo={logo}
                    dark={false}
                    newsletter={true}
                    className="tt-offset-20"
                />
            </div>
        </Fragment>
    )
}

export default HomeSkinKidsToys;