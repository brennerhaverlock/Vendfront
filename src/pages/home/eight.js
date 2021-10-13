import Head from "next/head";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import {AboutOne as About} from "@components/about";
import sliderData from "@data/slider/home-eight.json";
import {SliderOne as Slider} from "@components/slider";
import {HeaderFive as Header} from "@components/header";
import {ProductsContext} from "@global/ProductsContext";
import {FooterTwo as Footer} from "@components/footer";
import {HomePagesNavData as navContent} from "@data/navbar";
import {HomeSixProductsTab as Products} from "@components/products";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const HomeEight = () => {
    const {products} = useContext(ProductsContext);
    const productsFashion = getProductsBySkin(products, 'fashion');
    const logo = "/assets/images/no-placeholder/logo-white.png";

    return (
        <Fragment>
            <Head>
                <title>Home 08 - Wokiee   </title>
            </Head>

            <Header
                logo={logo}
                navbar={true}
                navData={navContent}
                containerFluid={true}
                logoAlignment="left"
                navbarAlignment="center"

            />
            <ContentWrapper>
                <Slider
                    data={sliderData}
                    className="nomargin"
                    sliderWrapper="slider-style-5"
                />
                <About/>
                <Products
                    products={productsFashion}
                />
            </ContentWrapper>
            <Footer
                logo={logo}
                dark={true}
                newsletter={false}
            />
        </Fragment>
    )
}
export default HomeEight;