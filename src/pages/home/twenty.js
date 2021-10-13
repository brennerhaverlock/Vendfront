import Head from "next/head";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import {FooterOne as Footer} from "@components/footer";
import {ProductsContext} from "@global/ProductsContext";
import {HeaderSeven as Header} from "@components/header";
import {HomePagesNavData as navContent} from "@data/navbar";
import {ServicesOne as Services} from "@components/services";
import {CategoriesTen as Categories} from "@components/categories";
import {CategoryTypeWiseTwo as Products} from "@components/products";
import {HeroBannerFive as HeroBanner} from "@components/hero-banners";
import {PromoBannerTwo as PromoBanner} from "@components/promo-banners";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const HomeTwenty = () => {
    const {products} = useContext(ProductsContext);
    const productFashion = getProductsBySkin(products, 'fashion');
    const logo = "/assets/images/no-placeholder/logo.png";

    return (
        <Fragment>
            <Head>
                <title>Home 20 - Wokiee   </title>
            </Head>

            <Header
                logo={logo}
                navData={navContent}
                containerFluid={false}
            />

            <ContentWrapper>
                <HeroBanner
                    className="tt-offset-20"
                />
                <Categories/>
                <Products
                    category="women"
                    products={productFashion}
                    heading="WINTER 2020/21 WOMEN"
                    headingThumb="/assets/images/promo/index20-promo-img-04.jpg"
                />
                <Products
                    category="men"
                    products={productFashion}
                    heading="WINTER 2020/21 MEN"
                    headingThumb="/assets/images/promo/index20-promo-img-03.jpg"
                />
                <PromoBanner/>
                <Services/>
            </ContentWrapper>

            <Footer
                logo={logo}
                newsletter={false}
            />
        </Fragment>
    )
}

export default HomeTwenty;