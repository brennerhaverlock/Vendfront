import Head from "next/head";
import {Fragment} from "react";
import {HomePagesNavData as navContent} from "@data/navbar";
import {HeaderTwo as Header} from "@components/header";
import {FooterOne as Footer} from "@components/footer";
import {HeroBannerOne as HeroBanner} from "@components/hero-banners";
import {PromoBannerTwo as PromoBanners} from "@components/promo-banners";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const HomeTwo = () => {
    const logo = "/assets/images/no-placeholder/logo.png";

    return (
        <Fragment>
            <Head>
                <title>Home 02 - Wokiee   </title>
            </Head>

            <Header
                navData={navContent}
                logo="/assets/images/no-placeholder/logo.png"
            />
            <ContentWrapper>
                <HeroBanner/>
                <PromoBanners/>
            </ContentWrapper>
            <Footer
                logo={logo}
                newsletter={false}
            />
        </Fragment>
    )
}
export default HomeTwo;