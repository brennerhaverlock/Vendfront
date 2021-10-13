import Head from "next/head";
import {Fragment, useContext} from "react";
import {Products} from "@components/products";
import Masonry from "react-masonry-component";
import {CategoryOne} from "@components/category";
import {Col, Container, Row} from "react-bootstrap";
import {PromoThree as Promo} from "@components/promo";
import {FooterOne as Footer} from "@components/footer";
import {ProductsContext} from "@global/ProductsContext";
import {HeaderFour as Header} from "@components/header";
import {HomePagesNavData as navContent} from "@data/navbar";
import {getProducts, getProductsBySkin} from "@utils/product";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const HomeSkinJewelry = () => {
    const {products} = useContext(ProductsContext);
    const filteredProducts = getProductsBySkin(products, "jewelry");
    const tendingProducts = getProducts(filteredProducts, "tending", -1);
    const specialsProducts = getProducts(filteredProducts, "specials", -1);
    const logo = "/assets/images/skins/jewelry/logo.png";
    const categories = ['NEW ARRIVALS', 'EARRINGS', 'PENDANTS']

    return (
        <Fragment>
            <Head>
                <title>Jewelry Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-jewelry">
                <Header
                    logo={logo}
                    dark={true}
                    navbar={true}
                    navData={navContent}
                    navbarAlignment="center"
                />

                <ContentWrapper>

                    <div className="nomargin container-indent">
                        <div className="container-fluid-custom">
                            <Masonry className="row tt-layout-promo-box">
                                {categories.map((category, idx) => (
                                    <Col md={6} key={idx}>
                                        <CategoryOne
                                            category={category}
                                            className="tt-one-child hover-type-4"
                                            thumb={`/assets/images/skins/jewelry/promo/promo-img-0${idx + 1}.jpg`}
                                        />
                                    </Col>
                                ))}
                            </Masonry>
                        </div>
                    </div>

                    <Products
                        layout="slider"
                        products={tendingProducts}
                        sectionTitle="TRENDING"
                        sectionTitleContent="TOP VIEW IN THIS WEEK"
                        productClass="product-nohover text-left"
                    />

                    <div className="container-indent">
                        <Container fluid>
                            <Row className="tt-layout-promo-box">
                                <Col sm={6}>
                                    <Promo
                                        link="/shop"
                                        title="PLATINUM RINGS"
                                        subtitle="NEW COLLECTION"
                                        className="tt-one-child hover-type-4"
                                        thumb="/assets/images/skins/jewelry/promo/promo-img-04.jpg"
                                    />
                                </Col>

                                <Col sm={6}>
                                    <Promo
                                        link="/shop"
                                        title="DIAMOND RINGS"
                                        subtitle="NEW COLLECTION"
                                        className="tt-one-child hover-type-4"
                                        thumb="/assets/images/skins/jewelry/promo/promo-img-05.jpg"
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <Products
                        layout="slider"
                        slidesToShow={3}
                        products={specialsProducts}
                        sectionTitle="SPECIALS"
                        sectionTitleContent="IN THIS WEEK"
                        productClass="product-nohover text-left"
                    />

                    <div className="container-indent">
                        <Container fluid>
                            <Row className="tt-layout-promo-box">
                                <Col sm={6} lg={4}>
                                    <Promo
                                        link="/shop"
                                        subtitle="SPECIAL OFFER"
                                        title="GET UP TO 20% OFF"
                                        className="tt-one-child hover-type-4"
                                        thumb="/assets/images/skins/jewelry/promo/promo-img-06.jpg"
                                    />
                                </Col>

                                <Col sm={6} lg={4}>
                                    <Promo
                                        link="/shop"
                                        subtitle="<span class='tt-color-white'>EARRINGS</span>"
                                        title="<span class='tt-color-white'>GET UP TO 10% OFF</span>"
                                        className="tt-one-child hover-type-4"
                                        thumb="/assets/images/skins/jewelry/promo/promo-img-07.jpg"
                                    />
                                </Col>

                                <Col sm={6} lg={4}>
                                    <Promo
                                        link="/shop"
                                        subtitle="BRACELETS"
                                        title="GET UP TO 10% OFF"
                                        className="tt-one-child hover-type-4"
                                        thumb="/assets/images/skins/jewelry/promo/promo-img-08.jpg"
                                    />
                                </Col>
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

export default HomeSkinJewelry;