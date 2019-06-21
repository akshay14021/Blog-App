import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const BlogListItem = (props) => {
    const link = `/read/${props.id}`
    return (
        <div>
            <Link to={link}>
                <h1>{props.title}</h1>
                Created: <span>{moment(props.createdAt).format('MMMM Do, YYYY')}</span>
            </Link>
        </div>
    );
};

export default BlogListItem;