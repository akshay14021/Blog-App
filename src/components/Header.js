import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';

const Header = (props) => {
    return (
        <header>
            <Link to="/homepage"><h1>Blogs</h1></Link>
            <button onClick={props.dispatch(startLogout)} >Logout</button>
        </header>
    );
};

export default connect()(Header);