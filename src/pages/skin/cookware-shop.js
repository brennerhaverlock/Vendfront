import Head from "next/head";
import makesData from "@data/makes.json";
import {getBlogPosts} from "@utils/blog";
import LatestBlog from "@components/blog";
import {Fragment, useContext} from "react";
import FeaturedMakesMakes from "@components/makes";
import {FeaturedProducts} from "@components/products";
import {ProductsContext} from "@global/ProductsContext";
import {FooterOne as Footer} from "@components/footer";
import {SliderFive as Slider} from "@components/slider";
import sliderData from "@data/slider/skin-cookware.json";
import {HeaderTwelve as Header} from "@components/header";
import {SkinCookwareNavData as navContent} from "@data/navbar";
import {ServicesThree as Services} from "@components/services";
import promoOffersData from "@data/promo-banners/skin-cookware.json";
import {ContentWrapperOne as Wrapper} from "@components/wrapper";
import {CategoriesSkinCookware as Categories} from "@components/categories";
import {PromoBannerCookware as PromoOffers} from "@components/promo-banners";
import {getProductsBySkin, getProductsUniqueCategories} from "@utils/product";

const HomeSkinCookware = ({blogs}) => {
    const {products} = useContext(ProductsContext);
    const productsCookware = getProductsBySkin(products, 'cookware');
    const categories = getProductsUniqueCategories(productsCookware, 8);
    const logo = "/assets/images/skins/cookware/logo.png"

    return (
        <Fragment>
            <Head>
                <title>Cookware Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-cookware">
                <Header
                    logo={logo}
                    navData={navContent}
                    containerFluid={false}
                />
                <Services/>
                <Wrapper>
                    <Slider
                        dots={true}
                        arrows={true}
                        data={sliderData}
                        className="nomargin"
                    />
                    <Categories
                        categories={categories}
                    />
                    <PromoOffers
                        data={promoOffersData}
                    />
                    <FeaturedProducts
                        products={productsCookware}
                        containerFluid={false}
                        limit={8}
                    />
                    <FeaturedMakesMakes
                        data={makesData}
                    />

                    <LatestBlog
                        blogs={blogs}
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

export default HomeSkinCookware;