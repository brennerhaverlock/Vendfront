import Head from "next/head";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import sliderData from "@data/slider/skin-books.json";
import {HeaderOne as Header} from "@components/header";
import {FooterTwo as Footer} from "@components/footer";
import {ProductsContext} from "@global/ProductsContext";
import {SliderThree as Slider} from "@components/slider";
import {HomePagesNavData as navContent} from "@data/navbar";
import {ContentWrapperOne as Wrapper} from "@components/wrapper";
import {BestSelling, TendingProducts, NewReleases, TypeWiseVertical} from "@components/products";

const HomeSkinBooks = () => {
    const {products} = useContext(ProductsContext);
    const productsBook = getProductsBySkin(products, 'books');

    const logo="/assets/images/skins/books/logo.png";

    return (
        <Fragment>
            <Head>
                <title>Books Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-books">
                <Header
                    logo={logo}
                    navbar={true}
                    navData={navContent}
                />

                <Wrapper>
                    <Slider
                        data={sliderData}
                        contentAlign="left"
                        className="nomargin"
                        sliderWrapper="slider-skin-books"
                    />
                    <BestSelling
                        layout="slider"
                        products={productsBook}
                    />
                    <TendingProducts
                        layout="slider"
                        products={productsBook}
                    />
                    <NewReleases
                        layout="slider"
                        products={productsBook}
                    />
                    <TypeWiseVertical
                        products={productsBook}
                    />
                </Wrapper>

                <Footer
                    logo={logo}
                    newsletter={true}
                />
            </div>
        </Fragment>
    );
};

export default HomeSkinBooks;