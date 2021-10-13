import Head from "next/head";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import sliderData from "@data/slider/home-one.json";
import {FooterOne as Footer} from "@components/footer";
import {SliderOne as Slider} from "@components/slider";
import {HeaderFour as Header} from "@components/header";
import {ProductsContext} from "@global/ProductsContext";
import {HomePagesNavData as navContent} from "@data/navbar";
import {ServicesOne as Services} from "@components/services";
import {CategoriesThree as Categories} from "@components/categories";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";
import {PromoBannerFour as PromoBanner, PromoBannerOne} from "@components/promo-banners";
import {TendingProducts, HomeFiveSpecial as SpecialProducts, TypeWiseVertical} from "@components/products";

const HomeFive = () => {
    const {products} = useContext(ProductsContext);
    const productsFashion = getProductsBySkin(products, 'fashion');
    const logo = "/assets/images/no-placeholder/logo.png";

    return (
        <Fragment>
            <Head>
                <title>Home 05 - Wokiee   </title>
            </Head>

            <Header
                logo={logo}
                navData={navContent}
                navbarAlignment="center"
            />
            <ContentWrapper>
                <Slider
                    dots={true}
                    arrows={true}
                    data={sliderData}
                    className="nomargin"
                />
                <Categories/>
                <TendingProducts
                    layout="slider"
                    products={productsFashion}
                />
                <PromoBanner/>
                <SpecialProducts/>
                <PromoBannerOne/>
                <TypeWiseVertical
                    products={productsFashion}
                />
                <Services/>
            </ContentWrapper>
            <Footer
                logo={logo}
                newsletter={false}
            />
        </Fragment>
    )
}
export default HomeFive;