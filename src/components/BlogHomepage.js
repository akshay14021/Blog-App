import React from 'react';
import { Link } from 'react-router-dom';
import BlogListFilters from './BlogListFilters';
import BlogList from './BlogList';

const BlogHomepage = (props) => {
    return (
        <div>
            <BlogListFilters />
            <BlogList />
            <Link to="/add"><button>Create Blog</button></Link>
        </div>
    );
};

export default BlogHomepage;