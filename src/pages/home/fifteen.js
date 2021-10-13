import Head from "next/head";
import {Fragment} from "react";
import {FooterTwo as Footer} from "@components/footer";
import {InstagramProducts} from "@components/products";
import {HeaderFour as Header} from "@components/header";
import {HomePagesNavData as navContent} from "@data/navbar";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const HomeFifteen = () => {
    const logo = "/assets/images/no-placeholder/logo.png";

    return (
        <Fragment>
            <Head>
                <title>Home 15 - Wokiee   </title>
            </Head>

            <Header
                logo={logo}
                dark={false}
                navData={navContent}
                navbarAlignment="center"
                showNotificationBar={false}
            />

            <ContentWrapper>
                <InstagramProducts
                    className="nomargin"
                />
            </ContentWrapper>

            <Footer
                logo={logo}
                newsletter={false}
                className="nomargin"
            />
        </Fragment>
    )
}

export default HomeFifteen;