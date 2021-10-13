import Head from "next/head";
import {Fragment, useContext} from "react";
import Breadcrumb from "@components/ui/breadcrumb";
import ShopGrid from "@components/shop/ShopGrid";
import {HeaderOne as Header} from "@components/header";
import {FooterOne as Footer} from "@components/footer";
import {ProductsContext} from "@global/ProductsContext";
import {HomePagesNavData as navContent} from "@data/navbar";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const PageShop = () => {
    const {products} = useContext(ProductsContext);
    const logo = "/assets/images/no-placeholder/logo.png"

    return (
        <Fragment>
            <Head>
                <title>Shop - [Store Name]</title>
                <meta name="description" content="  "/>
            </Head>

            <Header
                logo={logo}
                navbar={true}
                navData={navContent}
                navbarAlignment="left"
            />
            <ContentWrapper>
                <Breadcrumb/>

                <ShopGrid
                    sidebar={false}
                    products={products}
                    containerFluid={false}
                />
            </ContentWrapper>
            <Footer
                logo={logo}
                newsletter={true}
            />
        </Fragment>
    );
};

export default PageShop;