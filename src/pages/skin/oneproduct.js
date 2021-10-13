import Head from "next/head";
import Link from "next/link";
import {Fragment} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Parallax, {Layer} from "react-parallax-scroll";
import {HeaderOne as Header} from "@components/header";
import {SliderOne as Slider} from "@components/slider";
import {FooterTwo as Footer} from "@components/footer";
import {SkinTeaNavData as navContent} from "@data/navbar";
import sliderData from "@data/slider/skin-oneproduct.json";
import {NewsletterThree as Newsletter} from "@components/newsletter";
import {ContentWrapperOne as Wrapper} from "@components/wrapper";

const HomeSkinHandmade = () => {
    const logo = "/assets/images/skins/oneproduct/logo.png";

    return (
        <Fragment>
            <Head>
                <title>One Product :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-oneproduct">
                <Header
                    logo={logo}
                    navbar={true}
                    navData={navContent}
                    containerFluid={true}
                    notificationBar={false}
                    navbarAlignment="right"
                />

                <Wrapper>
                    <Slider
                        data={sliderData}
                        className="nomargin oneproduct-slider"
                        sliderWrapper="slider-style-6"
                    />

                    <div className="container-indent">
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg={8}>
                                    <div className="tt-layout-box07">
                                        <h4 className="tt-title">Welcome to Wokiee</h4>
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

                    <div className="container-indent">
                        <Container>
                            <Row className="tt-layout-box01">
                                <Col md={6}>
                                    <div className="col-img">
                                        <img
                                            alt="wokiee"
                                            className="w-100"
                                            src="/assets/images/skins/oneproduct/img-03.jpg"
                                        />
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className="col-description">
                                        <h6 className="tt-title">See it all at a glance</h6>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                            doloremque.</p>
                                        <Link href="/shop">
                                            <a className="btn btn-xl btn-dark">BUY NOW!</a>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="container-indent">
                        <Container>
                            <Row className="tt-layout-box01 flex-row-reverse">
                                <Col md={6}>
                                    <div className="col-img">
                                        <img
                                            alt="wokiee"
                                            className="w-100"
                                            src="/assets/images/skins/oneproduct/img-04.jpg"
                                        />
                                    </div>
                                </Col>

                                <Col md={6}>
                                    <div className="col-description">
                                        <h6 className="tt-title">One button, many uses</h6>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                            doloremque.</p>
                                        <Link href="/shop">
                                            <a className="btn btn-xl btn-dark">BUY NOW!</a>
                                        </Link>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="container-indent">
                        <div style={{backgroundColor: "#F2F2F4"}}>
                            <Container>
                                <div className="tt-layout-box06 tt-layout-box06-inner">
                                    <Row>
                                        <Col md={5}>
                                            WOKIEE React Template is more than usual theme. It is a powerful design
                                            tool. WOKIEE is outstanding Premium Shopify theme.
                                        </Col>
                                        <Col md={{span: 5, offset: 2}} xl={{offset: 1}}>
                                            <ul className="tt-list-dot-custom">
                                                <li>multiple header options</li>
                                                <li>mobile optimized design</li>
                                                <li>powerful — admin panel</li>
                                                <li>8 layout options for shop pages</li>
                                            </ul>
                                        </Col>
                                        <div className="divider d-block d-md-none"/>
                                    </Row>
                                    <div className="divider d-block d-md-none"/>
                                    <div
                                        className="extra-img-bg"
                                        style={{backgroundImage: 'url(/assets/images/skins/oneproduct/img-02.png)'}}
                                    />
                                </div>
                            </Container>
                        </div>
                    </div>

                    <div className="container-indent">
                        <Container>
                            <div className="tt-layout-box07 text-center">
                                <h4 className="tt-title">Control panel</h4>
                                <p className="tt-text-large">6 displays</p>
                            </div>
                            <div className="tt-layout-box07 text-center">
                                <h4 className="tt-title">Extra-long battery life</h4>
                                <p className="tt-text-large">45 km</p>
                            </div>
                            <div className="tt-layout-box07 text-center">
                                <h4 className="tt-title">Walking speed</h4>
                                <p className="tt-text-large">6X</p>
                            </div>
                            <div className="tt-layout-box07 text-center">
                                <h4 className="tt-title">Quick folding</h4>
                                <p className="tt-text-large">Takes just 3s</p>
                            </div>
                        </Container>
                    </div>

                    <div className="container-indent">
                        <div className="layout-box02-wrapper">
                            <Container>
                                <Row>
                                    <Col md={{span: 10, offset: 1}} lg={{span: 8, offset: 2}}>
                                        <div className="tt-layout-box05">
                                            <h4 className="tt-title">Works as simple<br/>as it looks</h4>
                                            <p>Great variety of numerous layouts and styles allows to create different
                                                structures and satisfies any specific requirements. Everything you need
                                                is in Shopify CMS.</p>
                                            <p>
                                                <img
                                                    alt="wokiee"
                                                    className="w-100"
                                                    src="/assets/images/skins/oneproduct/img-01.png"
                                                />
                                            </p>
                                            <p className="tt-text-large">01. Minimally designed</p>
                                            <p className="tt-text-small">Sed ut perspiciatis unde omnis iste natus error
                                                sit<br/> voluptatem accusantium.</p>
                                            <p className="tt-text-large">02. Made for comfort</p>
                                            <p className="tt-text-small">Sed ut perspiciatis unde omnis iste natus error
                                                sit<br/> voluptatem accusantium.</p>
                                            <p className="tt-text-large">03. Forld up</p>
                                            <p className="tt-text-small">Sed ut perspiciatis unde omnis iste natus error
                                                sit<br/> voluptatem accusantium.</p>
                                            <h4 className="tt-title">Take the journey further</h4>
                                            <Link href="/shop"><a className="btn btn-xl mt-lg-3">BUY NOW!</a></Link>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>

                    <div className="container-indent">
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg={8}>
                                    <div className="tt-layout-box07">
                                        <p>You can avoid expensive web development and minimize your design costs using
                                            Premium Shopify theme WOKIEE</p>
                                        <p>
                                            <img src="/assets/images/skins/oneproduct/img-05.jpg" alt="wokiee"
                                                 className="w-100"/>
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <div className="container-indent">
                        <Parallax>
                            <Layer
                                className="container-indent tt-bg-fullwidth tt-bg-sizecover"
                                style={{backgroundImage: 'url(/assets/images/skins/oneproduct/img-06.jpg)'}}
                            >
                                <div className="container-inner-large">
                                    <Container>
                                        <Row className="tt-layout-box04">
                                            <Col md={5} className="col-title">
                                                <h4 className="tt-title tt-white-color">
                                                    The only way to<br/> strive freely
                                                </h4>
                                            </Col>

                                            <Col md={{span: 5, offset: 1}} className="col-description">
                                                <p className="tt-white-color">It will be perfect solution for your
                                                    current or future webshop. It has
                                                    all required tools and modules to create super fast responsive
                                                    website with amazing UX.</p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Layer>
                        </Parallax>
                    </div>

                    <div className="container-indent">
                        <Container>
                            <Row>
                                <Col md={{span: 10, offset: 1}} lg={{span: 8, offset: 2}} className="text-center">
                                    <div className="tt-layout-box03">
                                        <h2 className="tt-title">Hit the road with style</h2>
                                        <p>Unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                                        <Link href="/shop"><a className="btn btn-xl">BUY NOW!</a></Link>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    <Newsletter
                        className="container-inner tt-wrapper-01"
                    />
                </Wrapper>

                <Footer
                    dark={true}
                    logo={logo}
                    newsletter={false}
                    className="nomargin"
                />
            </div>
        </Fragment>
    );
};

export default HomeSkinHandmade;