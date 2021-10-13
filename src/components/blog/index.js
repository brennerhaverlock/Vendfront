import PropTypes from "prop-types";
import {Container, Row, Col} from "react-bootstrap";
import SectionTitle from "@components/ui/section-title";
import {PostGrid} from "@components/post";

const LatestBlog = ({blogs, className, sectionTitle}) => {
    return (
        <div className={`container-indent ${className}`}>
            <Container>
                <SectionTitle
                    title={sectionTitle}
                    content="THE FRESHEST AND MOST EXCITING NEWS"
                />

                <div className="tt-blog-thumb-list">
                    <Row>
                        {blogs.map(blog => (
                            <Col md={6} lg={4} key={blog.title}>
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
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
};

LatestBlog.defaultProps = {
    sectionTitle: "LATEST FROM BLOG"
}

LatestBlog.prototype = {
    blogs: PropTypes.array.isRequired
}

export default LatestBlog;