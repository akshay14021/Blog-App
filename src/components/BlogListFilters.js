import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTextFilter } from '../actions/filters';

const BlogListFilters = (props) => {
    return (
        <div className="action-content">
            <div className="content-container">
                <input className="action-content__input" type="text" placeholder="Filter Blogs" onChange={(e) => {
                    const textValue = e.target.value
                    props.dispatch(setTextFilter(textValue))
                }} />
                <Link to="/add">
                    <button className="button button--createlink">Create Blog</button>
                </Link>
            </div>
        </div>
    );
};

export default connect()(BlogListFilters);