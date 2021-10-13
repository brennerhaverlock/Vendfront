import Head from "next/head";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import {MostPopular} from "@components/products";
import promoData from "@data/about/skin-flower.json";
import {AboutThree as About} from "@components/about";
import aboutData from "@data/about/skin-flower2.json";
import {ProductsContext} from "@global/ProductsContext";
import {FooterSeven as Footer} from "@components/footer";
import {AboutThree as Promotion} from "@components/about";
import {HeaderEleven as Header} from "@components/header";
import {SkinFlowerNavData as navContent} from "@data/navbar";
import {ContentWrapperOne as Wrapper} from "@components/wrapper";
import {CategoriesSkinFlower as Categories} from "@components/categories";
import {PromoBannerFlower as PromoOffers} from "@components/promo-banners";

const HomeSkinFlower = () => {
    const {products} = useContext(ProductsContext);
    const productsFlower = getProductsBySkin(products, 'flower');

    const logo = "/assets/images/skins/flowers/logo.png"

    return (
        <Fragment>
            <Head>
                <title>Flowers Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-flower">
                <Header
                    logo={logo}
                    navData={navContent}
                    containerFluid={false}
                />

                <Wrapper>
                    <Promotion
                        data={promoData}
                        layout="tt-layout-01 align-items-center"
                    />
                    <Categories/>
                    <PromoOffers/>
                    <MostPopular
                        limit={8}
                        layout="grid"
                        containerFluid={false}
                        products={productsFlower}
                    />
                    <About
                        data={aboutData}
                        className="layout-wrapper-01"
                        containerInnerClass="container-inner"
                        layout="tt-layout-02 align-items-center"
                    />
                </Wrapper>

                <Footer
                    className="nomargin"
                />
            </div>
        </Fragment>
    );
};

export default HomeSkinFlower;