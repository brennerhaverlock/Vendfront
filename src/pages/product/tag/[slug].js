import Head from "next/head";
import products from "@data/products";
import {Fragment, useContext} from "react";
import Breadcrumb from "@components/ui/breadcrumb";
import ShopGrid from "@components/shop/ShopGrid";
import {toCapitalize} from "@utils/toCapitalize";
import {FooterOne as Footer} from "@components/footer";
import {HeaderOne as Header} from "@components/header";
import {ProductsContext} from "@global/ProductsContext";
import {HomePagesNavData as navContent} from "@data/navbar";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";
import {getProductsByTag, getProductsUniqueTags} from "@utils/product";

const PageProductTag = ({tag}) => {
    const {products} = useContext(ProductsContext);
    const filteredProducts = getProductsByTag(products, tag, -1);

    const logo = "/assets/images/no-placeholder/logo.png"

    return (
        <Fragment>
            <Head>
                <title>{toCapitalize(tag)} Archives - Wokiee   </title>
                <meta name="description" content="React Next JS Multipurpose eCommerce Template"/>
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
                    sidebar={true}
                    sidebarPosition="left"
                    containerFluid={false}
                    products={filteredProducts}
                    pageTitle={toCapitalize(tag)}
                />
            </ContentWrapper>

            <Footer
                logo={logo}
                newsletter={true}
            />
        </Fragment>
    );
};

export const getStaticProps = async ({params}) => {
    return {
        props: {
            tag: params.slug
        }
    }
}

export const getStaticPaths = async () => {
    const tags = getProductsUniqueTags(products, -1);
    return {
        paths: tags.map(tag => {
            return {
                params: {
                    slug: tag
                }
            }
        }),
        fallback: false
    }
}

export default PageProductTag;