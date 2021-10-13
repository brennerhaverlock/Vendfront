import Head from "next/head";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import sliderData from "@data/slider/home-seven.json";
import {SliderOne as Slider} from "@components/slider";
import {ProductsContext} from "@global/ProductsContext";
import {HeaderFour as Header} from "@components/header";
import {FooterThree as Footer} from "@components/footer";
import {HomePagesNavData as navContent} from "@data/navbar";
import {CategoriesFive as Categories} from "@components/categories";
import {TendingProducts, TypeWiseVertical} from "@components/products";
import {PromoBannerOne as PromoBanner} from "@components/promo-banners";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const HomeSeven = () => {
    const {products} = useContext(ProductsContext);
    const productFashion = getProductsBySkin(products, 'fashion');
    const logo = "/assets/images/no-placeholder/logo.png";

    return (
        <Fragment>
            <Head>
                <title>Home 07 - Wokiee   </title>
            </Head>

            <Header
                logo={logo}
                navData={navContent}
                logoAlignment="left"
                navbarAlignment="left"
            />
            <ContentWrapper>
                <Slider
                    data={sliderData}
                    className="nomargin"
                    sliderWrapper="slider-style-4"
                />
                <Categories/>
                <TendingProducts
                    products={productFashion}
                />
                <PromoBanner/>
                <TypeWiseVertical
                    products={productFashion}
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
export default HomeSeven;