import Head from "next/head";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import {HeaderOne as Header} from "@components/header";
import {SliderOne as Slider} from "@components/slider";
import {FooterOne as Footer} from "@components/footer";
import sliderData from "@data/slider/home-fourteen.json";
import {BrandsThree as Brands} from "@components/brands";
import {ProductsContext} from "@global/ProductsContext";
import {HomePagesNavData as navContent} from "@data/navbar";
import {TendingProducts as Tending} from "@components/products";
import {CategoriesNine as Categories} from "@components/categories";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const HomeFourteen = () => {
    const {products} = useContext(ProductsContext);
    const productsFashion = getProductsBySkin(products, "fashion");

    return (
        <Fragment>
            <Head>
                <title>Home 14 - Wokiee   </title>
            </Head>

            <Header
                dark={true}
                navbar={true}
                navData={navContent}
                navbarAlignment="left"
                logo="/assets/images/no-placeholder/logo-white.png"
            />

            <ContentWrapper>
                <Slider
                    dots={true}
                    arrows={true}
                    data={sliderData}
                    className="nomargin"
                />
                <Categories/>
                <Tending
                    products={productsFashion}
                />
                <Brands/>
            </ContentWrapper>

            <Footer newsletter={false }/>
        </Fragment>
    )
}

export default HomeFourteen;