import Head from "next/head";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import {AboutSix as About} from "@components/about";
import {HeaderOne as Header} from "@components/header";
import {SliderOne as Slider} from "@components/slider";
import {ProductsContext} from "@global/ProductsContext";
import {FooterThree as Footer} from "@components/footer";
import sliderData from "@data/slider/skin-handmade.json";
import {HomePagesNavData as navContent} from "@data/navbar";
import {ProductsMasonry as Products} from "@components/products";
import {ContentWrapperOne as Wrapper} from "@components/wrapper";

const HomeSkinHandmade = () => {
    const {products} = useContext(ProductsContext);
    const handmadeProducts = getProductsBySkin(products, 'handmade');
    const logo = "/assets/images/skins/handmade/logo.png";
    const logoDark = "/assets/images/skins/handmade/logo-light.png";

    return (
        <Fragment>
            <Head>
                <title>Handmade Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-handmade">
                <Header
                    logo={logo}
                    navbar={false}
                    navData={navContent}
                    containerFluid={false}
                    notificationBar={false}
                    navbarAlignment="center"
                />

                <Wrapper>
                    <Slider
                        data={sliderData}
                        className="nomargin"
                        sliderWrapper="slider-style-6"
                    />

                    <Products
                        containerFluid={true}
                        products={handmadeProducts}
                    />

                    <About
                        reverse={true}
                        thumb="/assets/images/skins/handmade/img-01.jpg"
                        content="A great about us block helps builds trust between you and your customers. The more content you provide about you and 	your business, the more confident people will be when purchasing from your store."
                    />

                    <About
                        reverse={false}
                        thumb="/assets/images/skins/handmade/img-02.jpg"
                        content="A great about us block helps builds trust between you and your customers. The more content you provide about you and 	your business, the more confident people will be when purchasing from your store."
                    />
                </Wrapper>

                <Footer
                    dark={true}
                    logo={logoDark}
                />
            </div>
        </Fragment>
    );
};

export default HomeSkinHandmade;