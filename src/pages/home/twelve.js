import Head from "next/head";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import sliderData from "@data/slider/home-twelve.json";
import {SliderOne as Slider} from "@components/slider";
import {HeaderSix as Header} from "@components/header";
import {FooterOne as Footer} from "@components/footer";
import {ProductsContext} from "@global/ProductsContext";
import {HomePagesNavData as navContent} from "@data/navbar";
import {ServicesOne as Services} from "@components/services";
import {HomeTwelveTending as Products} from "@components/products";
import {CategoriesEight as Categories} from "@components/categories";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const HomeTwelve = () => {
    const {products} = useContext(ProductsContext);
    const productsFashion = getProductsBySkin(products, 'fashion');
    const logo = "/assets/images/no-placeholder/logo.png";

    return (
        <Fragment>
            <Head>
                <title>Home 12 - Wokiee   </title>
            </Head>

            <Header
                logo={logo}
                navData={navContent}
                containerFluid={false}
                logoAlignment="center"
                navbarAlignment="center"
            />
            <ContentWrapper>
                <Slider
                    dots={true}
                    arrows={true}
                    data={sliderData}
                    className="nomargin"
                    sliderWrapper="slider-style-3"
                />
                <Categories
                    className="nomargin"
                />
                <Products
                    products={productsFashion}
                />
                <Services/>
            </ContentWrapper>
            <Footer
                logo={logo}
                dark={false}
                newsletter={false}
            />
        </Fragment>
    )
}
export default HomeTwelve;