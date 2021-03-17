import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { routes } from '../routes';
import { MainMenu } from './MainMenu';
import './style.css';

export const Root = () => {
    return (
        <BrowserRouter history={createBrowserHistory()}>
            <Switch>
                <Route path="/" render={MainMenu} exact />
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        render={route.component}
                        exact
                    />
                ))}
            </Switch>
        </BrowserRouter>
    );
};
