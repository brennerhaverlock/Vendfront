import Head from "next/head";
import {Fragment, useContext} from "react";
import Breadcrumb from "@components/ui/breadcrumb";
import {HeaderOne as Header} from "@components/header";
import {FooterOne as Footer} from "@components/footer";
import {WishlistContext} from "@global/WishlistContext";
import {HomePagesNavData as navContent} from "@data/navbar";
import EmptyWishlist from "@components/wishlist/EmptyWishlist";
import WishlistProducts from "@components/wishlist/WishlistProducts";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";


const WishlistPage = () => {
    const {wishlist} = useContext(WishlistContext);
    const logo = "/assets/images/no-placeholder/logo.png"

    return (
        <Fragment>
            <Head>
                <title>Wishlist - Wokiee   </title>
            </Head>

            <Header
                logo={logo}
                navbar={true}
                navData={navContent}
                navbarAlignment="left"
            />
            <ContentWrapper>
                <Breadcrumb/>

                <div className="wishlist-page-content content-indent">
                    {wishlist.length > 0 && <WishlistProducts/>}
                </div>

                {wishlist.length === 0 && (
                    <div className="empty-wishlist-wrapper">
                        <EmptyWishlist/>
                    </div>
                )}
            </ContentWrapper>
            <Footer logo={logo}/>
        </Fragment>
    );
};

export default WishlistPage;