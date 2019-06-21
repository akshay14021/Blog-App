import React from 'react';
import { connect } from 'react-redux';
import BlogForm from './BlogForm';
import { startRemoveBlog, startEditBlog } from '../actions/blogs';

const EditBlog = (props) => {
    return (
        <div>
            <h1>Edit Blog</h1>
            <BlogForm 
                onSubmit={(title, body) => {
                    props.dispatch(startEditBlog(props.blog.id, { title, body }))
                    props.history.push('/homepage')
                }}
                blog={props.blog}
            />
            <button onClick={(e) => {
                props.dispatch(startRemoveBlog(props.blog.id))
                props.history.push('/homepage')
            }}>Remove Blog</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        blog: state.blogs.find((blog) => {
            return blog.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditBlog);