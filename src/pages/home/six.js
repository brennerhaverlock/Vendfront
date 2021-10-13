import Head from "next/head";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import sliderData from "@data/slider/home-six.json";
import {BrandsTwo as Brands} from "@components/brands";
import {FooterOne as Footer} from "@components/footer";
import {HeaderTwo as Header} from "@components/header";
import {SliderOne as Slider} from "@components/slider";
import {ProductsContext} from "@global/ProductsContext";
import {HomePagesNavData as navContent} from "@data/navbar";
import {ServicesOne as Services} from "@components/services";
import {HomeSixProductsTab as Products} from "@components/products";
import {CategoriesFour as Categories} from "@components/categories";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const HomeSix = () => {
    const {products} = useContext(ProductsContext);
    const productsFashion = getProductsBySkin(products, 'fashion');
    const logo = "/assets/images/no-placeholder/logo.png";

    return (
        <Fragment>
            <Head>
                <title>Home 06 - Wokiee   </title>
            </Head>

            <Header
                logo={logo}
                navData={navContent}
            />
            <ContentWrapper>
                <Slider
                    dots={true}
                    arrows={true}
                    data={sliderData}
                    className="nomargin"
                    sliderWrapper="slider-style-4"
                />
                <Categories/>
                <Products
                    products={productsFashion}
                />
                <Brands/>
                <Services/>
            </ContentWrapper>
            <Footer
                logo={logo}
                newsletter={true}
            />
        </Fragment>
    )
}
export default HomeSix;