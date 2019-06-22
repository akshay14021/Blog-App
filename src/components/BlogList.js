import React from 'react';
import { connect } from 'react-redux';
import visibleBlogs from '../selectors/blogs';
import BlogListItem from './BlogListItem';

const BlogList = (props) => {
    return (
        <div className="content-container">
            <div className="blog-list-body">
                {props.blogs.length === 0 ?
                    <div>
                        <span className="blog-list-item blog-item--message">No Blogs written</span>
                    </div> :

                    props.blogs.map((blog) => {
                        return <BlogListItem
                            key={blog.id}
                            title={blog.title}
                            body={blog.body}
                            createdAt={blog.createdAt}
                            id={blog.id}
                        />
                    })
                }
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        blogs: visibleBlogs(state.blogs, state.filters)
    }
}

export default connect(mapStateToProps)(BlogList);