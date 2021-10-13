import Head from "next/head";
import {Fragment} from "react";
import {FooterTwo as Footer} from "@components/footer";
import {HeaderFour as Header} from "@components/header";
import {HomePagesNavData as navContent} from "@data/navbar";
import LookbookProducts from "@components/products/LookbookProducts";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const HomeThirteen = () => {
    const logo="/assets/images/no-placeholder/logo.png";

    return (
        <Fragment>
            <Head>
                <title>Home 13 - Wokiee   </title>
            </Head>

            <Header
                logo={logo}
                navData={navContent}
                logoAlignment="left"
                navbarAlignment="left"
            />
            <ContentWrapper>
                <LookbookProducts className="nomargin"/>
            </ContentWrapper>
            <Footer
                logo={logo}
                dark={false}
                newsletter={false}
                className="nomargin"
            />
        </Fragment>
    )
}
export default HomeThirteen;