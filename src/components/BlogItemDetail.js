import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

const BlogItemDetail = (props) => {
    const link = `/edit/${props.blog.id}`
    return (
        <div>
            <h1>{props.blog.title}</h1>
            <span>{moment(props.blog.createdAt).format('MMMM Do, YYYY')}</span>
            <p>{props.blog.body}</p>
            <Link to={link}>
                <button>Edit Expense</button>
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