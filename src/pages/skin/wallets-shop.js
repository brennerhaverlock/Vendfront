import Head from "next/head";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import {Col, Container, Row} from "react-bootstrap";
import {HeaderOne as Header} from "@components/header";
import {ProductsContext} from "@global/ProductsContext";
import {FooterThree as Footer} from "@components/footer";
import {SkinTeaNavData as navContent} from "@data/navbar";
import {ProductFour as Product} from "@components/product";
import {ContentWrapperOne as Wrapper} from "@components/wrapper";

const HomeSkinWallets = () => {
    const {products} = useContext(ProductsContext);
    const walletProducts = getProductsBySkin(products, 'wallets');
    const logo = "/assets/images/skins/wallets/logo.png";

    return (
        <Fragment>
            <Head>
                <title>Wallets Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-wallets">
                <Header
                    logo={logo}
                    navbar={true}
                    navData={navContent}
                    navbarAlignment="right"
                />

                <Wrapper>
                    {/* Welcome Area */}
                    <div className="container-inner">
                        <Container>
                            <Row>
                                <Col md={12}>
                                    <div className="tt-layout-box03 text-left">
                                        <h3 className="tt-title">Welcome to Wokiee</h3>
                                        <h2 className="tt-title-description">
                                            Tribute to the quality<br/> of everyday leather items.
                                        </h2>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    {/* Product Area */}
                    <div className="container-indent">
                        <Container>
                            <Row className="tt-layout-product-item">
                                {walletProducts.map((product, index) => (
                                    <Col
                                        key={product.id}
                                        md={index === 0 || index === 7 || index === 14 ? 12 : 6}
                                        lg={index === 0 || index === 7 || index === 14 ? 12 : 4}
                                    >
                                        <Product
                                            product={product}
                                            showPrice={true}
                                            className="text-left"
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>
                </Wrapper>

                <Footer
                    logo={logo}
                    dark={false}
                />
            </div>
        </Fragment>
    );
};

export default HomeSkinWallets;