import Head from "next/head";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import {FooterOne as Footer} from "@components/footer";
import {ProductsContext} from "@global/ProductsContext";
import {HeaderFour as Header} from "@components/header";
import {BrandsThree as Brands} from "@components/brands";
import {HomePagesNavData as navContent} from "@data/navbar";
import {ServicesOne as Services} from "@components/services";
import {TendingProducts as Products} from "@components/products";
import {HeroBannerFour as HeroBanner} from "@components/hero-banners";
import {TestimonialOne as Testimonials} from "@components/testimonials";
import {PromoBannerFive as PromoBanners} from "@components/promo-banners";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const HomeNineteen = () => {
    const {products} = useContext(ProductsContext);
    const productsFashion = getProductsBySkin(products, "fashion");
    const logo = "/assets/images/no-placeholder/logo.png";

    return (
        <Fragment>
            <Head>
                <title>Home 19 - Wokiee   </title>
            </Head>

            <Header
                logo={logo}
                dark={false}
                navData={navContent}
                logoAlignment="left"
                navbarAlignment="left"
                containerFluid={false}
                showNotificationBar={true}
            />

            <ContentWrapper>
                <HeroBanner/>
                <PromoBanners
                    className="nomargin"
                />
                <Products
                    products={productsFashion}
                />
                <Brands/>
                <Testimonials
                    className="container-inner container-bg container-bg-01"
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

export default HomeNineteen;