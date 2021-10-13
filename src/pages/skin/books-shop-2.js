import Head from "next/head";
import {Fragment, useContext} from "react";
import {getProducts, getProductsBySkin} from "@utils/product";
import sliderData from "@data/slider/skin-books.json";
import {HeaderNine as Header} from "@components/header";
import {FooterThree as Footer} from "@components/footer";
import {ProductsContext} from "@global/ProductsContext";
import {SkinTeaNavData as navContent} from "@data/navbar";
import {ContentWrapperOne as Wrapper} from "@components/wrapper";
import {BestSelling, TendingProducts, NewReleases, TypeWiseVertical} from "@components/products";
import SectionTitle from "@components/ui/section-title";
import {Col, Container, Row} from "react-bootstrap";
import {ProductOne as Product} from "@components/product";
import Slider from "react-slick";
import {BrandOne as Brand} from "@components/brand";
import authors from "@data/brand/book2.json"

const HomeSkinBooksTwo = () => {
    const {products} = useContext(ProductsContext);
    const productsBook = getProductsBySkin(products, 'books');
    const bestSellerBooks = getProducts(productsBook, 'best-seller', -1);
    const logo = "/assets/images/skins/books/logo-book2.png";

    const sliderOptions = {
        slidesToShow: 5,
        arrows: true
    }

    return (
        <Fragment>
            <Head>
                <title>Books Shop 2 :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-books-2">
                <Header
                    logo={logo}
                    navbar={true}
                    navData={navContent}
                    containerFluid={true}
                />

                <Wrapper>
                    <div className="container-indent">
                        <div className="container container-fluid-custom-mobile-padding">
                            <SectionTitle
                                className="text-left"
                                title="More from<br>the Wokiee Editors"
                            />

                            <Row className="tt-layout-product-item">
                                {bestSellerBooks.slice(0, 2).map(product => (
                                    <Col xs={6} key={product.id}>
                                        <Product
                                            product={product}
                                            showVariant={false}
                                            className="text-left product-nohover"
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>

                    <div className="container-indent">
                        <Container fluid className="container-fluid-custom-mobile-padding">
                            <SectionTitle
                                title="Best sellers in Books"
                            />

                            <Slider
                                {...sliderOptions}
                                className="tt-carousel-products row arrow-location-tab arrow-location-tab01 tt-alignment-img tt-layout-product-item"
                            >
                                {bestSellerBooks.map(product => (
                                    <Col key={product.id}>
                                        <Product
                                            product={product}
                                            showVariant={false}
                                            className="text-left product-nohover"
                                        />
                                    </Col>

                                ))}
                            </Slider>
                        </Container>
                    </div>

                    <div className="container-indent">
                        <div className="container container-fluid-custom-mobile-padding">
                            <SectionTitle
                                className="text-left"
                                title="Books hot <br/> new releases"
                            />

                            <Row className="tt-layout-product-item">
                                {productsBook.slice(0, 3).map(product => (
                                    <Col xs={6} lg={4} key={product.id}>
                                        <Product
                                            product={product}
                                            showVariant={false}
                                            className="text-left product-nohover"
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>

                    <div className="container-indent custom-top-padding">
                        <Container>
                            <SectionTitle
                                className="text-left"
                                title="Popular author<br>and series"
                            />

                            <Row className="tt-layout-promo-box mt-lg-4">
                                {authors.map(author => (
                                    <Col xs={6} md={3} className="col-12-440width" key={author.id}>
                                        <Brand
                                            logo={author.logo}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>
                </Wrapper>

                <Footer
                    logo={logo}
                    newsletter={true}
                />
            </div>
        </Fragment>
    );
};

export default HomeSkinBooksTwo;