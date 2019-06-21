import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import PrivatRoute from './PrivateRoute';
import BlogHomepage from '../components/BlogHomepage';
import LoginPage from '../components/LoginPage';
import AddBlog from '../components/AddBlog';
import EditBlog from '../components/EditBlog';
import BlogItemDetail from '../components/BlogItemDetail';

export const history = createHistory()

const AppRouter = (props) => {
    return (
        <Router history={history}>
            <div>
                <Switch>
                    <Route path="/" component={LoginPage} exact={true}/>
                    <PrivatRoute>
                        <Route path="/homepage" component={BlogHomepage} />
                        <Route path="/add" component={AddBlog} />
                        <Route path="/read/:id" component={BlogItemDetail} exact={true}/>
                        <Route path="/edit/:id" component={EditBlog} exact={true} />
                    </PrivatRoute>
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;