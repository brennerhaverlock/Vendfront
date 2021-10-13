import Head from "next/head";
import {Fragment} from "react";
import {SliderOne as Slider} from "@components/slider";
import {FooterFour as Footer} from "@components/footer";
import {HeaderFive as Header} from "@components/header";
import sliderData from "@data/slider/home-seventeen.json";
import {HomePagesNavData as navContent} from "@data/navbar";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const HomeSeventeen = () => {
    return (
        <Fragment>
            <Head>
                <title>Home 17 - Wokiee   </title>
            </Head>

            <Header
                navbar={true}
                logoAlignment="left"
                navData={navContent}
                containerFluid={true}
                navbarAlignment="center"
                logo="/assets/images/no-placeholder/logo.png"
            />
            <ContentWrapper>
                <Slider
                    dots={true}
                    arrows={true}
                    data={sliderData}
                    className="nomargin"
                    sliderWrapper="slider-style-5"
                />
            </ContentWrapper>
            <Footer
                dark={true}
                newsletter={false}
                className="nomargin"
            />
        </Fragment>
    )
}
export default HomeSeventeen;