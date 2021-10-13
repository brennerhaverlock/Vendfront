import Head from "next/head";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import {HeaderFive as Header} from "@components/header";
import {ProductsContext} from "@global/ProductsContext";
import {FooterThree as Footer} from "@components/footer";
import sliderData from "@data/slider/skin-furniture.json";
import {SliderOne as HeroBanner} from "@components/slider";
import {HomePagesNavData as navContent} from "@data/navbar";
import {CategoryTypeWiseOne as Products} from "@components/products";
import {ContentWrapperOne as Wrapper} from "@components/wrapper";
import {CategoriesSkinFurniture as Categories} from "@components/categories";
import {PromoBannerFurniture as PromotionBanner} from "@components/promo-banners";

const HomeSkinFurniture = () => {
    const {products} = useContext(ProductsContext);
    const productsFurniture = getProductsBySkin(products, 'furniture');
    const logo = "/assets/images/skins/furniture/logo.png";
    const logoDark = "/assets/images/skins/furniture/logo-dark.png";

    return (
        <Fragment>
            <Head>
                <title>Furniture Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-furniture">
                <Header
                    logo={logo}
                    navbar={true}
                    navData={navContent}
                    containerFluid={true}
                    notificationBar={false}
                    navbarAlignment="center"
                />

                <Wrapper>
                    <HeroBanner
                        data={sliderData}
                        className="nomargin"
                        sliderWrapper="slider-style-6"
                    />
                    <Categories
                        className="mt-3"
                    />
                    <Products
                        category="furniture"
                        products={productsFurniture}
                        productClass="product-nohover"
                        className="furniture-products"
                    />
                    <PromotionBanner/>
                </Wrapper>

                <Footer
                    logo={logoDark}
                />
            </div>
        </Fragment>
    );
};

export default HomeSkinFurniture;