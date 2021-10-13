import Head from "next/head";
import {Fragment} from "react";
import {HeaderOne as Header} from "@components/header";
import {FooterTwo as Footer} from "@components/footer";
import {HomePagesNavData as navContent} from "@data/navbar";
import {HeroBannerTwo as HeroBanner} from "@components/hero-banners";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const HomeThree = () => {
    const logo = "/assets/images/no-placeholder/logo.png";

    return (
        <Fragment>
            <Head>
                <title>Home 03 - Wokiee   </title>
            </Head>

            <Header
                logo={logo}
                navbar={true}
                navData={navContent}
                navbarAlignment="right"
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
export default HomeThree;