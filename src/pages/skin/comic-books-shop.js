import Head from "next/head";
import {Fragment, useContext} from "react";
import Characters from "@components/characters";
import {getProductsBySkin} from "@utils/product";
import charactersData from "@data/characters.json";
import {AboutFive as About} from "@components/about";
import {ProductsContext} from "@global/ProductsContext";
import {FooterFive as Footer} from "@components/footer";
import {HeaderEleven as Header} from "@components/header";
import {SkinComicBooksNavData as navContent} from "@data/navbar";
import {ContentWrapperOne as Wrapper} from "@components/wrapper";
import {FeaturedProductsTwo, BestSellingTwo, NewReleasesTwo} from "@components/products";

const HomeSkinComicBooks = () => {
    const {products} = useContext(ProductsContext);
    const productsComicBooks = getProductsBySkin(products, 'comic-books');

    return (
        <Fragment>
            <Head>
                <title>Comic Books Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-comic-books">
                <Header
                    navData={navContent}
                    containerFluid={true}
                    navbarAlignment="center"
                    logo="/assets/images/skins/comic-books/logo.png"
                />

                <Wrapper>
                    <FeaturedProductsTwo
                        limit={3}
                        products={productsComicBooks}
                    />
                    <BestSellingTwo
                        limit={7}
                        containerFluid={true}
                        products={productsComicBooks}
                    />
                    <NewReleasesTwo
                        containerFluid={true}
                        products={productsComicBooks}
                    />

                    <Characters
                        data={charactersData}
                    />

                    <About/>
                </Wrapper>

                <Footer
                    newsletter={true}
                    className="nomargin"
                />
            </div>
        </Fragment>
    );
};

export default HomeSkinComicBooks;