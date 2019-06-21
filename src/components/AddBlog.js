import React from 'react';
import { connect } from 'react-redux';
import BlogForm from './BlogForm';
import { startAddBlog } from '../actions/blogs';

const AddBlog = (props) => {
    return (
        <div>
            <h1>Create Blog</h1>
            <BlogForm 
                onSubmit={(title, body, createdAt) => {
                    props.dispatch(startAddBlog(title, body, createdAt))
                    props.history.push('/homepage')
                }}
            />
        </div>
    );
};

export default connect()(AddBlog);