import Head from "next/head";
import {Fragment} from "react";
import {Container} from "react-bootstrap";
import portfolioData from "@data/portfolio";
import Portfolio from "@components/portfolio";
import Masonry from "react-masonry-component";
import Breadcrumb from "@components/ui/breadcrumb";
import {LightgalleryProvider} from 'react-lightgallery'
import {HeaderOne as Header} from "@components/header";
import {FooterOne as Footer} from "@components/footer";
import {HomePagesNavData as navContent} from "@data/navbar";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const PagePortfolio = ({fluid}) => {
    const logo = "/assets/images/no-placeholder/logo.png"

    return (
        <Fragment>
            <Head>
                <title>Portfolios - Wokiee   </title>
                <meta name="description" content="  "/>
            </Head>

            <Header
                logo={logo}
                navbar={true}
                navData={navContent}
                navbarAlignment="left"
            />
            <ContentWrapper>
                <Breadcrumb/>

                <div className="content-indent">
                    <Container fluid={fluid}>
                        <h1 className="tt-title-subpages noborder">PORTFOLIOS</h1>

                        <div className="tt-portfolio-masonry">
                            <LightgalleryProvider>
                                <Masonry
                                    className="tt-portfolio-content layout-default tt-grid-col-3 tt-add-item tt-show">
                                    {portfolioData.map(portfolio => (
                                        <Portfolio
                                            group="group1"
                                            key={portfolio.id}
                                            thumb={portfolio.thumb}
                                            title={portfolio.title}
                                            excerpt={portfolio.excerpt}
                                        />
                                    ))}
                                </Masonry>
                            </LightgalleryProvider>
                        </div>
                    </Container>
                </div>
            </ContentWrapper>
            <Footer
                logo={logo}
                newsletter={true}
            />
        </Fragment>
    );
};

export default PagePortfolio;