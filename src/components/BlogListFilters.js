import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

const BlogListFilters = (props) => {
    return (
        <div>
            <input type="text" placeholder="Filter Blogs" onChange={(e) => {
                const textValue = e.target.value
                props.dispatch(setTextFilter(textValue))
            }} />
        </div>
    );
};

export default connect()(BlogListFilters);