import Head from "next/head";
import {Fragment} from "react";
import {getBlogPosts} from "@utils/blog";
import Breadcrumb from "@components/ui/breadcrumb";
import {BlogMasonry} from "@components/blog-page";
import {HeaderOne as Header} from "@components/header";
import {FooterOne as Footer} from "@components/footer";
import {HomePagesNavData as navContent} from "@data/navbar";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const PageBlogFullWidth = ({blogs}) => {
    const logo = "/assets/images/no-placeholder/logo.png"

    return (
        <Fragment>
            <Head>
                <title>Blog Full Width - Wokiee   </title>
                <meta name="description" content="React Next JS Multipurpose eCommerce Template"/>
            </Head>

            <Header
                logo={logo}
                navbar={true}
                navData={navContent}
                navbarAlignment="left"
            />

            <ContentWrapper>
                <Breadcrumb/>
                <BlogMasonry
                    title="THE BLOG"
                    blogs={blogs}
                    fluid={true}
                />
            </ContentWrapper>

            <Footer
                logo={logo}
                newsletter={true}
            />
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
    ], -1);// -1 means query all post

    return {
        props: {
            blogs: blogs
        }
    }
}

export default PageBlogFullWidth;