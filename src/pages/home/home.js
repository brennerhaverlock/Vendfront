import Head from "next/head";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import {AboutTwo as About} from "@components/about";
import {HeaderSix as Header} from "@components/header";
import {ProductsContext} from "@global/ProductsContext";
import {BrandsThree as Brands} from "@components/brands";
import {FooterThree as Footer} from "@components/footer";
import {HomePagesNavData as navContent} from "@data/navbar";
import {CategoriesSix as Categories} from "@components/categories";
import {HomeSixProductsTab as Products} from "@components/products";
import {TestimonialOne as Testimonials} from "@components/testimonials";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const Home = () => {
    const {products} = useContext(ProductsContext);
    const productsFashion = getProductsBySkin(products, 'fashion');
    const logo = "/assets/images/no-placeholder/logo.png";

    return (
        <Fragment>
            <Head>
                <title>Home - [Store Name]</title>
            </Head>

            <Header
                logo={logo}
                navData={navContent}
                containerFluid={false}
                logoAlignment="center"
                navbarAlignment="center"
            />

            <ContentWrapper>
                <Categories
                    className="nomargin"
                />
                <About/>
                <Products
                    products={productsFashion}
                />
                <Testimonials/>
                <Brands/>
            </ContentWrapper>

            <Footer
                logo={logo}
                dark={false}
                newsletter={false}
            />
        </Fragment>
    )
}
export default Home;