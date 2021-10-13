import Masonry from "react-masonry-component";
import {Container} from "react-bootstrap";
import {PostGrid} from "@components/post";
import BlogLoadMore from "@components/blog-page/elements/LoadMore";
import {useState} from "react";

const BlogMasonry = ({title, blogs, fluid}) => {
    const [blogShowPerPage, setBlogShowPerPage] = useState(6);

    const onLoadMoreHandler = () => {
        setBlogShowPerPage(prevState => prevState < blogs.length ? prevState + 3 : prevState);
    }

    return (
        <div className="container-indent">
            <Container fluid={fluid}>
                {title && <h1 className="tt-title-subpages noborder">{title}</h1>}

                <div className="tt-blog-masonry">
                    <Masonry className="tt-grid-col-3 tt-layout-01-post tt-add-item">
                        {blogs.slice(0, blogShowPerPage).map(blog => (
                            <div className="element-item" key={blog.slug}>
                                <PostGrid
                                    slug={blog.slug}
                                    title={blog.title}
                                    thumb={blog.thumb}
                                    excerpt={blog.excerpt}
                                    author={blog.author}
                                    date={blog.date}
                                    categories={blog.categories}
                                    comment={blog.comment}
                                />
                            </div>
                        ))}
                    </Masonry>
                </div>

                <BlogLoadMore
                    onLoadMoreHandler={onLoadMoreHandler}
                    disabled={blogShowPerPage >= blogs.length ? true : false}
                />
            </Container>
        </div>
    );
};

export default BlogMasonry;