import Head from "next/head";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import {HeaderTen as Header} from "@components/header";
import {FooterSix as Footer} from "@components/footer";
import {ProductsContext} from "@global/ProductsContext";
import {SkinCakeNavData as navContent} from "@data/navbar";
import {CakeShopProducts as Products} from "@components/products";
import {ContentWrapperOne as Wrapper} from "@components/wrapper";

const HomeSkinCake = () => {
    const {products} = useContext(ProductsContext);
    const productsCakeShop = getProductsBySkin(products, 'cake-shop');

    return (
        <Fragment>
            <Head>
                <title>Cake Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-cake-shop">
                <Header
                    navData={navContent}
                    logoAlignment="center"
                    navbarAlignment="center"
                    logo="/assets/images/skins/cake-shop/logo.png"
                />
                <Wrapper>
                    <Products
                        limit={12}
                        showMoreBtn={true}
                        products={productsCakeShop}
                    />
                </Wrapper>

                <Footer/>
            </div>
        </Fragment>
    );
};

export default HomeSkinCake;