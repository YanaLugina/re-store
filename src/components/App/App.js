import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from "../Pages";

import style from './App.module.scss';

const App = () => {
    return (
        <div className={style.App}>
            <Switch>
                <Route
                    path='/'
                    component={HomePage}
                    exact />

                <Route
                    path='/cart'
                    component={CartPage} />
            </Switch>
        </div>
    )
};

export default App;