import React from 'react';
import { connect } from 'react-redux';
import BlogForm from './BlogForm';
import { startAddBlog } from '../actions/blogs';

const AddBlog = (props) => {
    return (
        <div>
            <div className="action-content">
                <div className="content-container">
                    <h1>Create Blog</h1>
                </div>
            </div>
            <div className="content-container">
                <BlogForm
                    onSubmit={(title, body, createdAt) => {
                        props.dispatch(startAddBlog(title, body, createdAt))
                        props.history.push('/homepage')
                    }}
                />
            </div>
        </div>
    );
};

export default connect()(AddBlog);