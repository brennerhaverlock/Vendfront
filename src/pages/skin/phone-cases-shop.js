import Head from "next/head";
import {Fragment, useContext} from "react";
import {Products} from "@components/products";
import {getProductsBySkin} from "@utils/product";
import {Col, Container, Row} from "react-bootstrap";
import {HeaderOne as Header} from "@components/header";
import {SliderOne as Slider} from "@components/slider";
import {FooterOne as Footer} from "@components/footer";
import {ProductsContext} from "@global/ProductsContext";
import {HomePagesNavData as navContent} from "@data/navbar";
import sliderData from "@data/slider/skin-phone-cases.json";
import {ServicesOne as Services} from "@components/services";
import {CategoryOne as Category} from "@components/category";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const HomeSkinPhoneCases = () => {
    const {products} = useContext(ProductsContext);
    const logo = "/assets/images/skins/phone-cases/logo.png";
    const filteredProducts = getProductsBySkin(products, "phone-cases");
    const categories = ['For iPhone XS', 'For iPhone XS Max', 'For iPhone XR', 'For iPhone X'];

    return (
        <Fragment>
            <Head>
                <title>Home Phone Cases :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-phone-cases">
                <Header
                    logo={logo}
                    navbar={true}
                    dark={true}
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
                                    <Col key={index} sm={6} md={3} className="col-12-575width">
                                        <Category
                                            category={category}
                                            thumb={`/assets/images/skins/phone-cases/promo/promo-img-0${index + 1}.jpg`}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>

                    <Products
                        layout="grid"
                        sectionTitle="BEST SELLER"
                        products={filteredProducts}
                        sectionTitleContent="TOP SALE IN THIS WEEK"
                    />

                    <Services/>
                </ContentWrapper>

                <Footer
                    logo={logo}
                    dark={true}
                    newsletter={true}
                    className="only-copyright"
                />
            </div>
        </Fragment>
    )
}

export default HomeSkinPhoneCases;