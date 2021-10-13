import Head from "next/head";
import {Fragment} from "react";
import {Container} from "react-bootstrap";
import {GoogleMap} from "@components/map";
import Breadcrumb from "@components/ui/breadcrumb";
import {FooterOne as Footer} from "@components/footer";
import {HeaderOne as Header} from "@components/header";
import {HomePagesNavData as navContent} from "@data/navbar";
import {ContactMethod, ContactForm} from "@components/contact";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const PageContact = () => {
    const logo = "/assets/images/no-placeholder/logo.png"

    return (
        <Fragment>
            <Head>
                <title>Contact ::      </title>
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
                    <Container>
                        <GoogleMap
                            latitude={37.338832}
                            longitude={-87.5069334}
                        />

                        <ContactMethod
                            className="mt-5"
                        />

                        <ContactForm
                            className="mt-5"
                        />
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

export default PageContact;