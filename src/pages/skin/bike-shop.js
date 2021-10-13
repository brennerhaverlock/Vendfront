import Link from "next/link";
import Head from "next/head";
import {getBlogPosts} from "@utils/blog";
import LatestBlog from "@components/blog";
import {Fragment, useContext} from "react";
import {getProductsBySkin} from "@utils/product";
import {PromoOne as Promo} from "@components/promo";
import {Col, Container, Row} from "react-bootstrap";
import Parallax, {Layer} from "react-parallax-scroll"
import sliderData from "@data/slider/skin-bikes.json";
import {SliderOne as Slider} from "@components/slider";
import {HeaderOne as Header} from "@components/header";
import {FooterOne as Footer} from "@components/footer";
import {ProductsContext} from "@global/ProductsContext";
import {BrandsThree as Brands} from "@components/brands";
import {SkinTeaNavData as navContent} from "@data/navbar";
import {TendingProducts, BestSelling} from "@components/products";
import {ContentWrapperOne as Wrapper} from "@components/wrapper";

const HomeSkinBike = ({blogs}) => {
    const {products} = useContext(ProductsContext);
    const bikeProducts = getProductsBySkin(products, 'bike');
    const logo = "/assets/images/skins/bikes/logo.png";
    const categories = ['BIKE SHOP DEALS!', 'WEAR', 'BIKES', 'EQUIPMENT'];

    return (
        <Fragment>
            <Head>
                <title>Bikes Shop :: Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <div className="home-skin-bike">
                <Header
                    logo={logo}
                    dark={true}
                    navbar={true}
                    navData={navContent}
                    containerFluid={false}
                    navbarAlignment="left"
                />

                <Wrapper>
                    {/* Slider Area */}
                    <Slider
                        data={sliderData}
                        className="nomargin"
                        sliderWrapper="slider-style-6"
                    />

                    {/* Categories Area */}
                    <div className="container-indent">
                        <Container fluid>
                            <Row>
                                {categories.map((category, idx) => (
                                    <Col sm={6} key={idx}>
                                        <Promo
                                            title={category}
                                            className="tt-one-child"
                                            link="/product/category/bikes"
                                            thumb={`/assets/images/skins/bikes/promo/index-promo-img-0${idx + 1}.jpg`}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </div>

                    {/* Tending Products */}
                    <TendingProducts
                        layout="slider"
                        containerFluid={true}
                        products={bikeProducts}
                    />

                    {/* Banner Area */}
                    <div className="container-indent">
                        <Row noGutters>
                            <Col>
                                <Parallax>
                                    <Layer
                                        settings={{speed: 0.3, type: 'backgroundY'}}
                                        style={{backgroundImage: 'url(/assets/images/skins/bikes/promo/index-promo-img-05.jpg)'}}
                                    >
                                        <div className="tt-promo-fullwidth tt-promo-parallax">
                                            <div className="tt-description">
                                                <div className="tt-description-wrapper">
                                                    <div className="tt-title-small">
                                                        <span className="tt-white-color">INTENSE BIKES ON SALE</span>
                                                    </div>
                                                    <div className="tt-title-large">
                                                        <span className="tt-white-color">SALES<br/>70% OFF</span>
                                                    </div>
                                                    <Link href="/shop">
                                                        <a className="btn btn-xl">SHOP NOW!</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Layer>
                                </Parallax>
                            </Col>
                        </Row>
                    </div>

                    {/* Best Seller Products */}
                    <BestSelling
                        layout="slider"
                        containerFluid={true}
                        products={bikeProducts}
                    />

                    {/* Blog Area */}
                    <LatestBlog blogs={blogs}/>

                    {/* Brands Area */}
                    <Brands/>
                </Wrapper>

                <Footer
                    logo={logo}
                    dark={true}
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

export default HomeSkinBike;