import Head from "next/head";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import {FooterTwo as Footer} from "@components/footer";
import {HeaderFour as Header} from "@components/header";
import {ProductsContext} from "@global/ProductsContext";
import {HomePagesNavData as navContent} from "@data/navbar";
import {PromoTwo as CategoryPromo} from "@components/promo";
import {CategoryTypeWiseOne as Products} from "@components/products";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const HomeEighteen = () => {
    const {products} = useContext(ProductsContext);
    const productsFashion = getProductsBySkin(products, 'fashion');
    const logo = "/assets/images/no-placeholder/logo.png"

    return (
        <Fragment>
            <Head>
                <title>Home 18 - Wokiee   </title>
            </Head>

            <Header
                logo={logo}
                dark={false}
                navData={navContent}
                navbarAlignment="center"
                showNotificationBar={false}
            />

            <ContentWrapper>
                <CategoryPromo
                    btn={true}
                    containerFluid={true}
                    className="nomargin"
                    btnLink="/product/category/women"
                    subtitle="<span class='tt-base-color'>Women’s</span>"
                    title="<span class='tt-white-color'>Sales<br>70% Off</span>"
                    thumb="/assets/images/promo/index18-promo-img-01.jpg"
                />
                <Products
                    category="women"
                    containerFluid={true}
                    products={productsFashion}
                />

                <CategoryPromo
                    btn={true}
                    containerFluid={true}
                    btnLink="/product/category/men"
                    subtitle="<span class='tt-base-color'>Men’s</span>"
                    title="New<br>Arrival"
                    thumb="/assets/images/promo/index18-promo-img-02.jpg"
                />
                <Products
                    category="men"
                    containerFluid={true}
                    products={productsFashion}
                />
            </ContentWrapper>

            <Footer
                logo={logo}
                newsletter={true}
            />
        </Fragment>
    )
}

export default HomeEighteen;