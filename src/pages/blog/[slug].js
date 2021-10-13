import Head from "next/head";
import Link from "next/link";
import {Fragment} from "react";
import dateFormat from "dateformat";
import parse from "react-html-parser";
import Breadcrumb from "@components/ui/breadcrumb";
import SocialShare from "@components/social-share";
import {Container, Row, Col} from "react-bootstrap";
import {markdownToHtml} from "@utils/markdownToHtml";
import {FooterOne as Footer} from "@components/footer";
import {HeaderOne as Header} from "@components/header";
import {getPostBySlug, getBlogPosts} from "@utils/blog";
import {HomePagesNavData as navContent} from "@data/navbar";
import {ContentWrapperOne as ContentWrapper} from "@components/wrapper";

const Post = ({post}) => {
    const logo = "/assets/images/no-placeholder/logo.png"

    return (
        <Fragment>
            <Head>
                <title>{post?.title}</title>
                <meta name="description" content={post?.excerpt}/>
            </Head>

            <Header
                logo={logo}
                navbar={true}
                navData={navContent}
                navbarAlignment="left"
            />

            <ContentWrapper>
                <Breadcrumb/>

                <div className="container-indent">
                    <Container className="container-fluid-custom-mobile-padding">
                        <Row className="justify-content-center">
                            <Col md={10} lg={8} className="col-md-auto">
                                <div className="tt-post-single">
                                    <div className="tt-tag">
                                        {post?.categories.map((category, i) => (
                                            <Link href={`/blog/${post?.slug}`} key={i}><a>{category}</a></Link>
                                        ))}
                                    </div>
                                    <h1 className="tt-title">{post?.title}</h1>
                                    <div className="tt-author">
                                        by <Link
                                        href={`/blog/${post?.slug}`}><a>{post?.author}</a></Link> on {dateFormat(post?.date, 'mmmm dd, yyyy')}
                                    </div>
                                    <div className="tt-post-content">
                                        {parse(post?.content)}
                                    </div>
                                    <div className="post-meta">
                                        <span className="item">
                                            <span>Tag: </span>
                                            {post?.tags.map((tag, i) => (
                                                <span key={tag}>
                                                    <a href={`/blog/${post?.slug}`}>{tag.toUpperCase()}{post?.tags.length !== i + 1 && ', '}</a>
                                                </span>
                                            ))}
                                        </span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <SocialShare url={`/blog/${post?.slug}`} content={post?.title}/>
            </ContentWrapper>

            <Footer logo={logo}/>
        </Fragment>
    );
};

export const getStaticProps = async ({params}) => {
    const post = getPostBySlug(params.slug, [
        'title',
        'date',
        'slug',
        'author',
        'categories',
        'tags',
        'content'
    ]);

    const content = await markdownToHtml(post.content || '');

    return {
        props: {
            post: {
                ...post,
                content
            }
        }
    }
}

export const getStaticPaths = async () => {
    const posts = getBlogPosts(['slug']);

    return {
        paths: posts.map(post => {
            return {
                params: {
                    slug: post.slug
                }
            }
        }),
        fallback: false
    }
}

export default Post;