import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, Router, Switch } from 'react-router';
import { routes } from '../routes';
import './style.css';

export const Root = () => {
    return (
        <Router history={createBrowserHistory()}>
            <Switch>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        render={route.component}
                        exact
                    />
                ))}
            </Switch>
        </Router>
    );
};
