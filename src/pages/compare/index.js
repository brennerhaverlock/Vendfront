import Head from "next/head";
import Breadcrumb from "@components/ui/breadcrumb";
import React, {Fragment, useContext} from "react";
import {CompareContext} from "@global/CompareContext";
import {Header as Header} from "@components/header";
import {Footer as Footer} from "@components/footer";
import {HomePagesNavData as navContent} from "@data/navbar";
import EmptyCompare from "@components/compare/EmptyCompare";
import CompareWrapper from "@components/compare/CompareWrapper";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const ComparePage = () => {
    const {compareList} = useContext(CompareContext);
    const logo = "/assets/images/no-placeholder/logo.png"

    return (
        <Fragment>
            <Head>
                <title>Compare - Wokiee   </title>
            </Head>

            <Header
                logo={logo}
                navbar={true}
                navData={navContent}
                navbarAlignment="left"
            />

            <ContentWrapper>
                <Breadcrumb/>

                <div className="page-compare-wrapper container-indent">
                    {compareList.length > 0 && <CompareWrapper/>}
                </div>

                {compareList.length <= 0 && (
                    <div className="empty-compare-wrapper content-indent">
                        <EmptyCompare/>
                    </div>
                )}
            </ContentWrapper>

            <Footer
                logo={logo}
            />
        </Fragment>
    );
};

export default ComparePage;