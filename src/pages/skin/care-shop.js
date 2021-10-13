import Head from "next/head";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import {AboutFour as About} from "@components/about";
import {ProductsContext} from "@global/ProductsContext";
import {FooterFive as Footer} from "@components/footer";
import {HeaderNine as Header} from "@components/header";
import {SkinCareNavData as navContent} from "@data/navbar";
import PromoBannerData from "@data/promo-banners/skin-care.json";
import heroBannerData from "@data/hero-banners/home-skin-care.json";
import {HeroBannerSix as HeroBanner} from "@components/hero-banners";
import {TestimonialOne as Testimonial} from "@components/testimonials";
import {MostPopular as MostPopularProducts} from "@components/products";
import {ContentWrapperOne as Wrapper} from "@components/wrapper";
import {PromoBannerCareSkin, PromoBannerSix as PromoBanner} from "@components/promo-banners";

const HomeSkinCare = () => {
    const {products} = useContext(ProductsContext);
    const productsCare = getProductsBySkin(products, 'care');

    return (
        <Fragment>
            <Head>
                <title>Care Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-care">
                <Header
                    navbar={true}
                    navData={navContent}
                    containerFluid={true}
                    navbarAlignment="center"
                    logo="/assets/images/skins/care/logo.png"
                />

                <Wrapper>
                    <HeroBanner
                        contentAlign="left"
                        className="nomargin"
                        data={heroBannerData}
                    />
                    <About/>
                    <PromoBanner
                        data={PromoBannerData}
                    />
                    <MostPopularProducts
                        layout="slider"
                        containerFluid={true}
                        products={productsCare}
                    />
                    <PromoBannerCareSkin
                        bgImage="/assets/images/skins/care/promo-img-03.jpg"
                    />
                    <Testimonial
                        className="nomargin pt-wrapper-bg01 container-inner"
                    />
                </Wrapper>

                <Footer
                    newsletter={true}
                    className="nomargin"
                />
            </div>
        </Fragment>
    );
};

export default HomeSkinCare;