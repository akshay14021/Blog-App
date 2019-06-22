import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';


const LoginPage = (props) => {
    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Blog App</h1>
                <p className="box-layout__subtitle">Write blogs and share them</p>
                <button className="button" onClick={props.dispatch(startLogin)}>Login With Google</button>
            </div>
        </div>
    );
};

export default connect()(LoginPage);