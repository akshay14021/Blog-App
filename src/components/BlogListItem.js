import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const BlogListItem = (props) => {
    const link = `/read/${props.id}`
    return (
        <Link className="blog-list-item" to={link}>
            <h1>{props.title}</h1>
            <span>{moment(props.createdAt).format('MMMM Do, YYYY')}</span>
        </Link>
    );
};

export default BlogListItem;