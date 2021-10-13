import Head from "next/head";
import {Fragment} from "react";
import {FooterTwo as Footer} from "@components/footer";
import {HeaderFour as Header} from "@components/header";
import {HomePagesNavData as navContent} from "@data/navbar";
import {HeroBannerThree as HeroBanner} from "@components/hero-banners";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const HomeEleven = () => {
    const logo = "/assets/images/no-placeholder/logo.png"

    return (
        <Fragment>
            <Head>
                <title>Home 11 - Wokiee   </title>
            </Head>

            <Header
                logo={logo}
                navData={navContent}
                navbarAlignment="center"
                showNotificationBar={false}
            />
            <ContentWrapper>
                <HeroBanner/>
            </ContentWrapper>
            <Footer
                logo={logo}
                dark={false}
                className="nomargin"
            />
        </Fragment>
    )
}
export default HomeEleven;