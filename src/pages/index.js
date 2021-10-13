import Head from "next/head";
import {getBlogPosts} from "@utils/blog";
import LatestBlog from "@components/blog";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import sliderData from "@data/slider/home-one.json";
import {HeaderOne as Header} from "@components/header";
import {SliderOne as Slider} from "@components/slider";
import {FooterOne as Footer} from "@components/footer";
import {ProductsContext} from "@global/ProductsContext";
import {HomePagesNavData as navContent} from "@data/navbar";
import {ServicesOne as Services} from "@components/services";
import {CategoriesOne as Categories} from "@components/categories";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";
import {PromoBannerOne as PromoBanners} from "@components/promo-banners";
import {BestSelling, TendingProducts as Tending} from "@components/products";

const Home = ({blogs}) => {
    const {products} = useContext(ProductsContext);
    const productsFashion = getProductsBySkin(products, "fashion");
    const logo = "/assets/images/no-placeholder/logo.png";

    return (
        <Fragment>
            <Head>
                <title>Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <Header
                logo={logo}
                navbar={true}
                dark={false}
                navData={navContent}
                navbarAlignment="left"
            />

            <ContentWrapper>
                <Slider
                    dots={true}
                    arrows={true}
                    data={sliderData}
                    className="nomargin"
                />
                <Categories/>
                <Tending
                    products={productsFashion}
                />
                <PromoBanners/>
                <BestSelling
                    products={productsFashion}
                />
                <LatestBlog
                    blogs={blogs}
                />
                <Services/>
            </ContentWrapper>

            <Footer
                logo={logo}
                dark={false}
                newsletter={true}
            />
        </Fragment>
    )
}

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

export default Home;