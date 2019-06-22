import React from 'react';
import BlogListFilters from './BlogListFilters';
import BlogList from './BlogList';

const BlogHomepage = (props) => {
    return (
        <div>
            <BlogListFilters />
            <BlogList />
        </div>
    );
};

export default BlogHomepage;