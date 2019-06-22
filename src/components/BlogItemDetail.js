import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const BlogItemDetail = (props) => {
    const link = `/edit/${props.blog.id}`
    return (
        <div className="content-container">
            <h1>{props.blog.title}</h1>
            <p>{props.blog.body}</p>
            <Link to={link}>
                <button className="button button--createlink">Edit Blog</button>
            </Link>
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

export default connect(mapStateToProps)(BlogItemDetail);