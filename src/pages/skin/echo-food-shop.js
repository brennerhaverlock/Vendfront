import Head from "next/head";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import sliderData from "@data/slider/skin-echo-food.json";
import {HeaderOne as Header} from "@components/header";
import {FooterThree as Footer} from "@components/footer";
import {ProductsContext} from "@global/ProductsContext";
import {SliderOne as Slider} from "@components/slider";
import {SkinCareNavData as navContent} from "@data/navbar";
import {ContentWrapperOne as Wrapper} from "@components/wrapper";
import {MostPopular as Products} from "@components/products";
import {Col, Container, Row} from "react-bootstrap";
import Link from "next/link";
import SectionTitle from "@components/ui/section-title";
import foodMenus from "@data/food-menus.json";
import {ServicesTwo as Services} from "@components/services"

const HomeSkinEchoFood = () => {
    const {products} = useContext(ProductsContext);
    const filteredProducts = getProductsBySkin(products, 'foods');
    const logo = "/assets/images/skins/echo-food/logo.png";
    const services = ['Eco', 'Is Logical', 'Yummy', 'Cheaply'];

    return (
        <Fragment>
            <Head>
                <title>Echo Food :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-echo-food">
                <Header
                    logo={logo}
                    navbar={true}
                    navData={navContent}
                    navbarAlignment="center"
                />

                <Wrapper>
                    <Slider
                        data={sliderData}
                        contentAlign="center"
                        className="nomargin"
                        sliderWrapper="slider-style-5"
                    />
                    {/* Services Area */}
                    <div className="container-indent">
                        <Container>
                            <Row className="tt-services-listing">
                                {services.map((service, idx) => (
                                    <Col xs={6} sm={3} key={idx}>
                                        <Link href="/shop">
                                            <a className="tt-services-block tt-services-block-vertical">
                                                <div className="tt-col-icon">
                                                    <img
                                                        alt={service}
                                                        src={`/assets/images/skins/echo-food/services/0${idx + 1}.svg`}
                                                    />
                                                </div>
                                                <div className="tt-col-description">
                                                    <h4 className="tt-title">{service}</h4>
                                                </div>
                                            </a>
                                        </Link>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>

                    {/* Food Menu Area */}
                    <div className="container-indent">
                        <Container>
                            <SectionTitle
                                title="We are Glad to Surprise You"
                                content="Do not wait for tomorrow - start a new life today!"
                            />

                            <Row>
                                {foodMenus.map(menu => (
                                    <Col sm={6} md={4} key={menu.id}>
                                        <div className="tt-promo02">
                                            <div className="image-box">
                                                <img src={menu.thumb} alt={menu.title}/>
                                            </div>
                                            <div className="tt-description">
                                                <Link href="/shop">
                                                    <a className="tt-title">
                                                        <div className="tt-title-large">{menu.title}</div>
                                                    </a>
                                                </Link>
                                                <p>{menu.content}</p>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>

                    <Products
                        limit={8}
                        containerFluid={false}
                        products={filteredProducts}
                        productClass="product-nohover"
                    />

                    <Services/>
                </Wrapper>

                <Footer
                    logo={logo}
                    newsletter={false}
                    className="only-copyright"
                />
            </div>
        </Fragment>
    );
};

export default HomeSkinEchoFood;