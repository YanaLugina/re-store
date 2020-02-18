import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from "../Pages";
import ShopHeader from '../ShopHeader';

import style from './App.module.scss';
import ShoppingCart from "../ShoppingCart";

const App = () => {
    return (
        <div className="container" role="main">
            <ShopHeader numItems={5} total={210}/>
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