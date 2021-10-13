import Head from "next/head";
import {getBlogPosts} from "@utils/blog";
import LatestBlog from "@components/blog";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import {FooterOne as Footer} from "@components/footer";
import {ProductsContext} from "@global/ProductsContext";
import {HeaderFour as Header} from "@components/header";
import {ServicesTwo as Services} from "@components/services";
import {SkinCoffeeNavData as navContent} from "@data/navbar";
import productSlideData from "@data/slider/productSlider.json";
import {SliderFour as ProductSlider} from "@components/slider";
import {FeaturedProducts as Products} from "@components/products";
import PromoBannerData from "@data/promo-banners/skin-coffee.json";
import {HeroBannerSeven as HeroBanner} from "@components/hero-banners";
import {PromoBannerSix as PromoBanner} from "@components/promo-banners";
import {ContentWrapperOne as Wrapper} from "@components/wrapper";

const HomeSkinCake = ({blogs}) => {
    const {products} = useContext(ProductsContext);
    const productsCakeShop = getProductsBySkin(products, 'coffee');

    const logo="/assets/images/skins/coffee/logo.png";

    return (
        <Fragment>
            <Head>
                <title>Coffee Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-coffee">
                <Header
                    logo={logo}
                    navData={navContent}
                    logoAlignment="left"
                    navbarAlignment="left"
                    showNotificationBar={false}
                />
                <Wrapper>
                    <HeroBanner/>
                    <PromoBanner
                        data={PromoBannerData}
                        containerFluid={false}
                    />
                    <Products
                        limit={8}
                        layout="grid"
                        showMoreBtn={false}
                        containerFluid={false}
                        products={productsCakeShop}
                    />
                    <ProductSlider
                        dots={true}
                        arrows={false}
                        data={productSlideData}
                    />
                    <LatestBlog
                        blogs={blogs}
                        className="wrapper-01 container-inner nomargin"
                    />
                    <Services/>
                </Wrapper>

                <Footer logo={logo}/>
            </div>
        </Fragment>
    );
};

export async function getStaticProps() {
    const blogs = getBlogPosts([
        'title',
        'excerpt',
        'date',
        'author',
        'thumb',
        'slug',
        'categories'
    ], 3);

    return {
        props: {
            blogs: blogs
        }
    }
}

export default HomeSkinCake;