import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';


const LoginPage = (props) => {
    return (
        <div>
            <h1>Blog App</h1>
            <p>Write blogs and share them</p>
            <button onClick={props.dispatch(startLogin)}>Login With Google</button>
        </div>
    );
};

export default connect()(LoginPage);