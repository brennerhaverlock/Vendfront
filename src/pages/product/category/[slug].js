import Head from "next/head";
import products from "@data/products";
import {Fragment, useContext} from "react";
import Breadcrumb from "@components/ui/breadcrumb";
import ShopGrid from "@components/shop/ShopGrid";
import {toCapitalize} from "@utils/toCapitalize";
import {Footer as Footer} from "@components/footer";
import {Header as Header} from "@components/header";
import {ProductsContext} from "@global/ProductsContext";
import {HomePagesNavData as navContent} from "@data/navbar";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";
import {getProductsByCategory, getProductsUniqueCategories} from "@utils/product";

const PageProductCategory = ({category}) => {
    const {products} = useContext(ProductsContext);
    const categoryProducts = getProductsByCategory(products, category, -1);

    const logo = "/assets/images/no-placeholder/logo.png"

    return (
        <Fragment>
            <Head>
                <title>{toCapitalize(category)} Archives - Wokiee   </title>
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
                    sidebar={true}
                    sidebarPosition="left"
                    containerFluid={false}
                    products={categoryProducts}
                    pageTitle={toCapitalize(category)}
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
            category: params.slug
        }
    }
}

export const getStaticPaths = async () => {
    const categories = getProductsUniqueCategories(products, -1);
    return {
        paths: categories.map(category => {
            return {
                params: {
                    slug: category
                }
            }
        }),
        fallback: false
    }
}

export default PageProductCategory;