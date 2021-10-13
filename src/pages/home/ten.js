import Head from "next/head";
import {Fragment} from "react";
import {HomePagesNavData as navContent} from "@data/navbar";
import sliderData from "@data/slider/home-ten.json";
import {SliderOne as Slider} from "@components/slider";
import {HeaderFive as Header} from "@components/header";
import {FooterTwo as Footer} from "@components/footer";
import {CategoriesSeven as Categories} from "@components/categories";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const HomeTen = () => {
    const logo = "/assets/images/no-placeholder/logo.png";

    return (
        <Fragment>
            <Head>
                <title>Home 10 - Wokiee   </title>
            </Head>

            <Header
                logo={logo}
                navbar={true}
                navData={navContent}
                containerFluid={true}
                logoAlignment="left"
                navbarAlignment="center"
            />
            <ContentWrapper>
                <Slider
                    dots={true}
                    arrows={true}
                    data={sliderData}
                    className="nomargin"
                    sliderWrapper="slider-style-5"
                />
                <Categories/>
            </ContentWrapper>
            <Footer
                logo={logo}
                dark={true}
                newsletter={false}
            />
        </Fragment>
    )
}
export default HomeTen;