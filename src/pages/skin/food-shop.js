import Head from "next/head";
import {Fragment, useContext} from "react";
import {DeliveryMap} from "@components/map";
import {getProductsBySkin} from "@utils/product";
import {HeaderFive as Header} from "@components/header";
import {ProductsContext} from "@global/ProductsContext";
import {FooterEight as Footer} from "@components/footer";
import {SkinFoodNavData as navContent} from "@data/navbar";
import {PromoBannerFoods as Banners} from "@components/promo-banners";
import {CategoryTypeWiseThree as Products} from "@components/products";
import {HeroBannerEight as HeroBanner} from "@components/hero-banners";
import {TestimonialOne as Testimonials} from "@components/testimonials";
import {ContentWrapperOne as Wrapper} from "@components/wrapper";

const HomeSkinFood = () => {
    const {products} = useContext(ProductsContext);
    const productsFood = getProductsBySkin(products, 'foods');
    const logo = "/assets/images/skins/foods/logo.svg";

    return (
        <Fragment>
            <Head>
                <title>Food Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-food">
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
                        className="nomargin"
                    />
                    <Products
                        category="burgers"
                        products={productsFood}
                        containerFluid={true}
                    />
                    <Products
                        category="salads"
                        products={productsFood}
                        containerFluid={true}
                    />
                    <Products
                        category="snacks"
                        products={productsFood}
                        containerFluid={true}
                    />
                    <Products
                        category="soups"
                        products={productsFood}
                        containerFluid={true}
                    />
                    <Products
                        category="sauces"
                        products={productsFood}
                        containerFluid={true}
                    />
                    <Products
                        category="beverages"
                        products={productsFood}
                        containerFluid={true}
                    />
                    <Banners/>
                    <DeliveryMap
                        className="nomargin"
                    />
                    <Testimonials/>
                </Wrapper>

                <Footer
                    logo={logo}
                    className="nomargin"
                />
            </div>
        </Fragment>
    );
};

export default HomeSkinFood;