import Head from "next/head";
import {Fragment} from "react";
import {getBlogPosts} from "@utils/blog";
import LatestBlog from "@components/blog";
import {GalleryDataBaby} from "@data/gallery"
import aboutData from "@data/about/skin-baby.json";
import sliderData from "@data/slider/skin-baby.json";
import {SliderOne as Slider} from "@components/slider";
import {FooterThree as Footer} from "@components/footer";
import {HeaderEight as Header} from "@components/header";
import {GalleryOne as Gallery} from "@components/gallery";
import {AboutThree as AboutArea} from "@components/about";
import {SkinBabyNavData as navContent} from "@data/navbar";
import {PromoBannerBabySkin} from "@components/promo-banners";
import {CategoriesSkinBaby as Categories} from "@components/categories";
import {TestimonialTwo as Testimonials} from "@components/testimonials";
import {ContentWrapperOne as Wrapper} from "@components/wrapper";

const HomeSkinBaby = ({blogs}) => {
    const logo = "/assets/images/skins/baby/logo.png";

    return (
        <Fragment>
            <Head>
                <title>Baby Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-baby">
                <Header
                    logo={logo}
                    navData={navContent}
                />
                <Wrapper>
                    <Slider
                        data={sliderData}
                        contentAlign="left"
                        className="nomargin"
                        sliderWrapper="slider-style-3"
                    />
                    <Categories/>
                    <AboutArea data={aboutData}/>
                    <Testimonials
                        bgImage="/assets/images/skins/baby/img-01.jpg"
                    />
                    <LatestBlog
                        blogs={blogs}
                    />
                    <PromoBannerBabySkin
                        bgImage="/assets/images/skins/baby/promo/promo-img-01.jpg"
                    />
                    <Gallery
                        galleryData={GalleryDataBaby}
                    />
                </Wrapper>

                <Footer
                    logo={logo}
                    colorScheme="default"
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

export default HomeSkinBaby;