import Head from "next/head";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import {TypeWiseVertical} from "@components/products";
import {FooterOne as Footer} from "@components/footer";
import {BrandsOne as Brands} from "@components/brands";
import {ProductsContext} from "@global/ProductsContext";
import {HeaderThree as Header} from "@components/header";
import {HomePagesNavData as navContent} from "@data/navbar";
import {ServicesOne as Services} from "@components/services";
import {CategoriesTwo as Categories} from "@components/categories";
import {CategoryTypeWiseOne as Products} from "@components/products";
import {PromoBannerThree as PromoBanner} from "@components/promo-banners";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const HomeFour = () => {
    const {products} = useContext(ProductsContext);
    const productFashion = getProductsBySkin(products, 'fashion');

    const logo = "/assets/images/no-placeholder/logo.png";

    return (
        <Fragment>
            <Head>
                <title>Home 04 - Wokiee   </title>
            </Head>

            <Header
                logo={logo}
                navData={navContent}
            />
            <ContentWrapper>
                <Services
                    className="tt-offset-35"
                />
                <Categories/>
                <Products
                    category="women"
                    products={productFashion}
                />
                <Products
                    category="men"
                    products={productFashion}
                />
                <PromoBanner/>
                <TypeWiseVertical
                    products={productFashion}
                />
                <Brands/>
            </ContentWrapper>
            <Footer logo={logo}/>
        </Fragment>
    )
}
export default HomeFour;