import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import firebase from './firebase/firebase';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter.js';
import configureStore from './store/configureStore';
import LoadingPage from './components/LoadingPage';
import * as serviceWorker from './serviceWorker';
import { login, logout } from './actions/auth.js';
import { startSetBlogs } from './actions/blogs';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let appRendering = false
const renderApp = () => {
    if (!appRendering) {
        ReactDOM.render(jsx, document.getElementById('root'))
        appRendering = true
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('root'))

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetBlogs()).then(() => {
            renderApp()
            if (history.location.pathname === '/') {
                history.push('/homepage')
            }
        })
    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
